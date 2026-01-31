// Recipe detail modal component
import { useState, useEffect } from 'react';
import { adjustServingSize, getSubstitutionSuggestions } from '../../services/recipeMatching';
import { getRecipeRating, setRecipeRating } from '../../services/storage';
import Rating from '../Rating/Rating';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, onClose, isFavorite, onToggleFavorite }) => {
    const [servings, setServings] = useState(recipe.servings);
    const [adjustedRecipe, setAdjustedRecipe] = useState(recipe);
    const [rating, setRating] = useState(0);
    const [activeTab, setActiveTab] = useState('ingredients');

    // Load user rating
    useEffect(() => {
        setRating(getRecipeRating(recipe.id));
    }, [recipe.id]);

    // Adjust servings
    useEffect(() => {
        setAdjustedRecipe(adjustServingSize(recipe, servings));
    }, [recipe, servings]);

    // Handle rating change
    const handleRate = (newRating) => {
        setRating(newRating);
        setRecipeRating(recipe.id, newRating);
    };

    // Handle close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Get substitution suggestions if there's match info
    const substitutions = recipe.matchInfo?.missingIngredients
        ? getSubstitutionSuggestions(recipe, recipe.matchInfo.missingIngredients)
        : {};

    const formatTime = (minutes) => {
        if (minutes < 60) return `${minutes} min`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };

    const getDifficultyEmoji = (difficulty) => {
        switch (difficulty) {
            case 'easy': return '😊';
            case 'medium': return '🙂';
            case 'hard': return '😤';
            default: return '🍽️';
        }
    };

    // Generate placeholder gradient
    const getPlaceholderGradient = () => {
        const gradients = [
            'linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%)',
            'linear-gradient(135deg, #2ec4b6 0%, #cbf3f0 100%)',
            'linear-gradient(135deg, #ffbe0b 0%, #fb5607 100%)',
        ];
        return gradients[recipe.name.length % gradients.length];
    };

    return (
        <div className="recipe-detail-overlay" onClick={onClose}>
            <div className="recipe-detail" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="detail-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Hero image */}
                <div className="detail-hero">
                    <div
                        className="detail-image"
                        style={{ background: getPlaceholderGradient() }}
                    >
                        <span className="detail-emoji">
                            {recipe.cuisine === 'Italian' && '🍝'}
                            {recipe.cuisine === 'Mexican' && '🌮'}
                            {recipe.cuisine === 'Asian' && '🥢'}
                            {recipe.cuisine === 'American' && '🍔'}
                            {recipe.cuisine === 'Mediterranean' && '🥗'}
                            {recipe.cuisine === 'Indian' && '🍛'}
                            {!['Italian', 'Mexican', 'Asian', 'American', 'Mediterranean', 'Indian'].includes(recipe.cuisine) && '🍽️'}
                        </span>
                    </div>

                    {/* Match badge */}
                    {recipe.matchInfo?.matchPercentage > 0 && (
                        <div className="detail-match-badge">
                            {recipe.matchInfo.matchPercentage}% ingredient match
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="detail-content">
                    {/* Header */}
                    <div className="detail-header">
                        <div className="detail-title-row">
                            <h2 className="detail-title">{recipe.name}</h2>
                            <button
                                className={`detail-favorite ${isFavorite ? 'is-favorite' : ''}`}
                                onClick={() => onToggleFavorite(recipe.id)}
                                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            >
                                <svg viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                        </div>

                        <p className="detail-description">{recipe.description}</p>

                        {/* Meta info */}
                        <div className="detail-meta">
                            <span className="detail-meta-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                                {formatTime(recipe.cookTime + (recipe.prepTime || 0))}
                            </span>
                            <span className="detail-meta-item">
                                {getDifficultyEmoji(recipe.difficulty)} {recipe.difficulty}
                            </span>
                            <span className="detail-meta-item cuisine-badge">{recipe.cuisine}</span>
                        </div>

                        {/* Rating */}
                        <div className="detail-rating">
                            <span className="rating-label">Your Rating:</span>
                            <Rating rating={rating} onRate={handleRate} size="medium" />
                        </div>
                    </div>

                    {/* Dietary tags */}
                    {recipe.dietary.length > 0 && (
                        <div className="detail-dietary">
                            {recipe.dietary.map(tag => (
                                <span key={tag} className="dietary-badge">{tag}</span>
                            ))}
                        </div>
                    )}

                    {/* Servings adjuster */}
                    <div className="servings-adjuster">
                        <label>Servings:</label>
                        <div className="servings-controls">
                            <button
                                onClick={() => setServings(Math.max(1, servings - 1))}
                                disabled={servings <= 1}
                            >
                                −
                            </button>
                            <span className="servings-value">{servings}</span>
                            <button onClick={() => setServings(Math.min(12, servings + 1))}>
                                +
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="detail-tabs">
                        <button
                            className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ingredients')}
                        >
                            Ingredients
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('instructions')}
                        >
                            Instructions
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'nutrition' ? 'active' : ''}`}
                            onClick={() => setActiveTab('nutrition')}
                        >
                            Nutrition
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="tab-content">
                        {/* Ingredients tab */}
                        {activeTab === 'ingredients' && (
                            <div className="ingredients-list">
                                {adjustedRecipe.ingredients.map((ing, index) => {
                                    const isMissing = recipe.matchInfo?.missingIngredients?.includes(ing.name);
                                    const hasSubstitution = substitutions[ing.name];

                                    return (
                                        <div
                                            key={index}
                                            className={`ingredient-item ${isMissing ? 'missing' : ''}`}
                                        >
                                            <span className="ingredient-check">
                                                {isMissing ? (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <line x1="9" y1="9" x2="15" y2="15" />
                                                    </svg>
                                                ) : (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="9,12 11,14 15,10" />
                                                    </svg>
                                                )}
                                            </span>
                                            <span className="ingredient-text">
                                                <span className="ingredient-amount">{ing.amount} {ing.unit}</span>
                                                <span className="ingredient-name">{ing.name}</span>
                                            </span>
                                            {hasSubstitution && (
                                                <span className="substitution-hint" title={`Try: ${hasSubstitution.join(', ')}`}>
                                                    💡
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Substitution suggestions */}
                                {Object.keys(substitutions).length > 0 && (
                                    <div className="substitutions-section">
                                        <h4>💡 Substitution Suggestions</h4>
                                        {Object.entries(substitutions).map(([ingredient, subs]) => (
                                            <div key={ingredient} className="substitution-item">
                                                <span className="sub-original">{ingredient}</span>
                                                <span className="sub-arrow">→</span>
                                                <span className="sub-options">{subs.join(' or ')}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Instructions tab */}
                        {activeTab === 'instructions' && (
                            <ol className="instructions-list">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index} className="instruction-step">
                                        <span className="step-number">{index + 1}</span>
                                        <p className="step-text">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {/* Nutrition tab */}
                        {activeTab === 'nutrition' && (
                            <div className="nutrition-grid">
                                <div className="nutrition-item">
                                    <span className="nutrition-value">{adjustedRecipe.nutrition.calories}</span>
                                    <span className="nutrition-label">Calories</span>
                                </div>
                                <div className="nutrition-item">
                                    <span className="nutrition-value">{adjustedRecipe.nutrition.protein}g</span>
                                    <span className="nutrition-label">Protein</span>
                                </div>
                                <div className="nutrition-item">
                                    <span className="nutrition-value">{adjustedRecipe.nutrition.carbs}g</span>
                                    <span className="nutrition-label">Carbs</span>
                                </div>
                                <div className="nutrition-item">
                                    <span className="nutrition-value">{adjustedRecipe.nutrition.fat}g</span>
                                    <span className="nutrition-label">Fat</span>
                                </div>
                                <div className="nutrition-item">
                                    <span className="nutrition-value">{adjustedRecipe.nutrition.fiber}g</span>
                                    <span className="nutrition-label">Fiber</span>
                                </div>
                                {adjustedRecipe.nutrition.sodium && (
                                    <div className="nutrition-item">
                                        <span className="nutrition-value">{adjustedRecipe.nutrition.sodium}mg</span>
                                        <span className="nutrition-label">Sodium</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
