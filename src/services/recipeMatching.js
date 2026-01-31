// Recipe matching algorithm
import { recipes } from '../data/recipes';

/**
 * Calculate match score between available ingredients and recipe
 * @param {string[]} availableIngredients - List of ingredients user has
 * @param {Object} recipe - Recipe object
 * @returns {Object} Match details including score and missing ingredients
 */
export const calculateMatchScore = (availableIngredients, recipe) => {
    const normalizedAvailable = availableIngredients.map(i => i.toLowerCase().trim());
    const recipeIngredients = recipe.ingredients.map(i => i.name.toLowerCase());

    let matchedCount = 0;
    const matchedIngredients = [];
    const missingIngredients = [];

    recipeIngredients.forEach(ingredient => {
        // Check for exact match or partial match
        const isMatched = normalizedAvailable.some(available =>
            ingredient.includes(available) ||
            available.includes(ingredient) ||
            ingredient === available
        );

        if (isMatched) {
            matchedCount++;
            matchedIngredients.push(ingredient);
        } else {
            missingIngredients.push(ingredient);
        }
    });

    const totalIngredients = recipeIngredients.length;
    const matchPercentage = Math.round((matchedCount / totalIngredients) * 100);

    // Calculate weighted score
    // Base score from match percentage
    let score = matchPercentage;

    // Bonus for higher match percentages (encourages complete matches)
    if (matchPercentage >= 80) score += 15;
    else if (matchPercentage >= 60) score += 10;
    else if (matchPercentage >= 40) score += 5;

    // Penalty for too many missing ingredients
    if (missingIngredients.length > 5) score -= 10;

    // Check for available substitutions
    const substitutableMissing = missingIngredients.filter(missing => {
        if (recipe.substitutions && recipe.substitutions[missing]) {
            return recipe.substitutions[missing].some(sub =>
                normalizedAvailable.some(available =>
                    sub.toLowerCase().includes(available) || available.includes(sub.toLowerCase())
                )
            );
        }
        return false;
    });

    // Bonus for having substitutable ingredients
    if (substitutableMissing.length > 0) {
        score += substitutableMissing.length * 3;
    }

    return {
        score: Math.min(100, Math.max(0, score)),
        matchPercentage,
        matchedCount,
        totalIngredients,
        matchedIngredients,
        missingIngredients,
        substitutableMissing,
        canMake: matchPercentage >= 60,
        canMakeWithSubstitutions: matchPercentage >= 40 && substitutableMissing.length > 0
    };
};

/**
 * Find matching recipes based on available ingredients
 * @param {string[]} ingredients - Available ingredients
 * @param {Object} filters - Filter options
 * @returns {Array} Sorted array of recipes with match info
 */
export const findMatchingRecipes = (ingredients, filters = {}) => {
    if (!ingredients || ingredients.length === 0) {
        return recipes.map(recipe => ({
            ...recipe,
            matchInfo: {
                score: 0,
                matchPercentage: 0,
                matchedCount: 0,
                totalIngredients: recipe.ingredients.length,
                matchedIngredients: [],
                missingIngredients: recipe.ingredients.map(i => i.name),
                substitutableMissing: [],
                canMake: false,
                canMakeWithSubstitutions: false
            }
        }));
    }

    let results = recipes.map(recipe => {
        const matchInfo = calculateMatchScore(ingredients, recipe);
        return {
            ...recipe,
            matchInfo
        };
    });

    // Apply filters
    if (filters.dietary && filters.dietary.length > 0) {
        results = results.filter(recipe =>
            filters.dietary.every(diet => recipe.dietary.includes(diet))
        );
    }

    if (filters.cuisine && filters.cuisine !== 'all') {
        results = results.filter(recipe => recipe.cuisine === filters.cuisine);
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
        results = results.filter(recipe => recipe.difficulty === filters.difficulty);
    }

    if (filters.maxCookTime) {
        results = results.filter(recipe => recipe.cookTime <= filters.maxCookTime);
    }

    if (filters.minMatchPercentage) {
        results = results.filter(recipe =>
            recipe.matchInfo.matchPercentage >= filters.minMatchPercentage
        );
    }

    // Sort by score (descending)
    results.sort((a, b) => b.matchInfo.score - a.matchInfo.score);

    return results;
};

/**
 * Get substitution suggestions for missing ingredients
 * @param {Object} recipe - Recipe object
 * @param {string[]} missingIngredients - List of missing ingredients
 * @returns {Object} Map of missing ingredients to their substitutions
 */
export const getSubstitutionSuggestions = (recipe, missingIngredients) => {
    const suggestions = {};

    missingIngredients.forEach(missing => {
        if (recipe.substitutions && recipe.substitutions[missing]) {
            suggestions[missing] = recipe.substitutions[missing];
        }
    });

    return suggestions;
};

/**
 * Adjust recipe quantities for different serving sizes
 * @param {Object} recipe - Recipe object
 * @param {number} newServings - New serving size
 * @returns {Object} Recipe with adjusted quantities
 */
export const adjustServingSize = (recipe, newServings) => {
    const ratio = newServings / recipe.servings;

    const adjustedIngredients = recipe.ingredients.map(ing => ({
        ...ing,
        amount: Math.round(ing.amount * ratio * 100) / 100 // Round to 2 decimal places
    }));

    const adjustedNutrition = {};
    Object.keys(recipe.nutrition).forEach(key => {
        adjustedNutrition[key] = Math.round(recipe.nutrition[key] * ratio);
    });

    return {
        ...recipe,
        servings: newServings,
        ingredients: adjustedIngredients,
        nutrition: adjustedNutrition
    };
};

/**
 * Search recipes by name or description
 * @param {string} query - Search query
 * @returns {Array} Matching recipes
 */
export const searchRecipes = (query) => {
    if (!query) return recipes;

    const normalizedQuery = query.toLowerCase();

    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(normalizedQuery) ||
        recipe.description.toLowerCase().includes(normalizedQuery) ||
        recipe.cuisine.toLowerCase().includes(normalizedQuery) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(normalizedQuery))
    );
};

export default {
    calculateMatchScore,
    findMatchingRecipes,
    getSubstitutionSuggestions,
    adjustServingSize,
    searchRecipes
};
