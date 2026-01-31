// Custom hook for recipe matching and filtering
import { useState, useMemo, useCallback } from 'react';
import { findMatchingRecipes } from '../services/recipeMatching';
import { addRecentSearch } from '../services/storage';

export const useRecipes = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [filters, setFilters] = useState({
        dietary: [],
        cuisine: 'all',
        difficulty: 'all',
        maxCookTime: null,
        minMatchPercentage: 0
    });
    const [searchQuery, setSearchQuery] = useState('');

    // Get matching recipes based on selected ingredients and filters
    const matchedRecipes = useMemo(() => {
        const recipes = findMatchingRecipes(selectedIngredients, filters);

        // Apply search query filter if present
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return recipes.filter(recipe =>
                recipe.name.toLowerCase().includes(query) ||
                recipe.cuisine.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query)
            );
        }

        return recipes;
    }, [selectedIngredients, filters, searchQuery]);

    // Add ingredient to selection
    const addIngredient = useCallback((ingredient) => {
        setSelectedIngredients(prev => {
            if (prev.includes(ingredient)) return prev;
            const updated = [...prev, ingredient];
            return updated;
        });
    }, []);

    // Remove ingredient from selection
    const removeIngredient = useCallback((ingredient) => {
        setSelectedIngredients(prev => prev.filter(i => i !== ingredient));
    }, []);

    // Set multiple ingredients at once
    const setIngredients = useCallback((ingredients) => {
        setSelectedIngredients(ingredients);
    }, []);

    // Clear all selected ingredients
    const clearIngredients = useCallback(() => {
        setSelectedIngredients([]);
    }, []);

    // Update filters
    const updateFilters = useCallback((newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    }, []);

    // Reset filters
    const resetFilters = useCallback(() => {
        setFilters({
            dietary: [],
            cuisine: 'all',
            difficulty: 'all',
            maxCookTime: null,
            minMatchPercentage: 0
        });
    }, []);

    // Toggle dietary filter
    const toggleDietaryFilter = useCallback((diet) => {
        setFilters(prev => {
            const dietary = prev.dietary.includes(diet)
                ? prev.dietary.filter(d => d !== diet)
                : [...prev.dietary, diet];
            return { ...prev, dietary };
        });
    }, []);

    // Save current search to recent searches
    const saveSearch = useCallback(() => {
        if (selectedIngredients.length > 0) {
            addRecentSearch(selectedIngredients);
        }
    }, [selectedIngredients]);

    // Get recipe statistics
    const stats = useMemo(() => {
        const canMake = matchedRecipes.filter(r => r.matchInfo.canMake).length;
        const canMakeWithSubs = matchedRecipes.filter(
            r => r.matchInfo.canMakeWithSubstitutions && !r.matchInfo.canMake
        ).length;

        return {
            total: matchedRecipes.length,
            canMake,
            canMakeWithSubs,
            avgMatchScore: matchedRecipes.length > 0
                ? Math.round(matchedRecipes.reduce((sum, r) => sum + r.matchInfo.matchPercentage, 0) / matchedRecipes.length)
                : 0
        };
    }, [matchedRecipes]);

    return {
        // State
        selectedIngredients,
        filters,
        searchQuery,
        matchedRecipes,
        stats,

        // Ingredient actions
        addIngredient,
        removeIngredient,
        setIngredients,
        clearIngredients,

        // Filter actions
        updateFilters,
        resetFilters,
        toggleDietaryFilter,
        setSearchQuery,

        // Other actions
        saveSearch
    };
};

export default useRecipes;
