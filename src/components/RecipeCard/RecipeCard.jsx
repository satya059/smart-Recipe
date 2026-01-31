// Recipe card component for displaying recipe previews
import { useState } from 'react';
import Rating from '../Rating/Rating';
import './RecipeCard.css';

const RecipeCard = ({
    recipe,
    isFavorite,
    onToggleFavorite,
    onViewRecipe,
    userRating = 0
}) => {
    const [imageError, setImageError] = useState(false);
    const { matchInfo } = recipe;

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy': return 'badge-success';
            case 'medium': return 'badge-warning';
            case 'hard': return 'badge-danger';
            default: return '';
        }
    };

    const getMatchPercentageColor = (percentage) => {
        if (percentage >= 80) return 'match-excellent';
        if (percentage >= 60) return 'match-good';
        if (percentage >= 40) return 'match-fair';
        return 'match-low';
    };

    const formatCookTime = (minutes) => {
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };

    // Generate placeholder image based on recipe name
    const getPlaceholderGradient = () => {
        const gradients = [
            'linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%)',
            'linear-gradient(135deg, #2ec4b6 0%, #cbf3f0 100%)',
            'linear-gradient(135deg, #ffbe0b 0%, #fb5607 100%)',
            'linear-gradient(135deg, #7209b7 0%, #f72585 100%)',
            'linear-gradient(135deg, #3a86ff 0%, #8338ec 100%)',
        ];
        const index = recipe.name.length % gradients.length;
        return gradients[index];
    };

    // Get cuisine-based image
    const getCuisineImage = () => {
        const cuisineImages = {
            'Italian': '/images/pizza.png',
            'Mexican': '/images/tacos.png',
            'Asian': '/images/ramen.png',
            'American': '/images/burger.png',
            'Mediterranean': '/images/salad.png',
            'Indian': '/images/butter-chicken.png'
        };
        return cuisineImages[recipe.cuisine] || null;
    };

    const displayImage = recipe.imageUrl || getCuisineImage();

    return (
        <article className="recipe-card" onClick={() => onViewRecipe(recipe)}>
            {/* Image */}
            <div className="card-image-container">
                {!imageError && displayImage ? (
                    <img
                        src={displayImage}
                        alt={recipe.name}
                        className="card-image"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div
                        className="card-image-placeholder"
                        style={{ background: getPlaceholderGradient() }}
                    >
                        <span className="placeholder-emoji">
                            {recipe.cuisine === 'Italian' && '🍝'}
                            {recipe.cuisine === 'Mexican' && '🌮'}
                            {recipe.cuisine === 'Asian' && '🥢'}
                            {recipe.cuisine === 'American' && '🍔'}
                            {recipe.cuisine === 'Mediterranean' && '🥗'}
                            {recipe.cuisine === 'Indian' && '🍛'}
                            {!['Italian', 'Mexican', 'Asian', 'American', 'Mediterranean', 'Indian'].includes(recipe.cuisine) && '🍽️'}
                        </span>
                    </div>
                )}

                {/* Match percentage badge */}
                {matchInfo && matchInfo.matchPercentage > 0 && (
                    <div className={`match-badge ${getMatchPercentageColor(matchInfo.matchPercentage)}`}>
                        {matchInfo.matchPercentage}% match
                    </div>
                )}

                {/* Favorite button */}
                <button
                    className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(recipe.id);
                    }}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <svg viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{recipe.name}</h3>
                    <span className="card-cuisine">{recipe.cuisine}</span>
                </div>

                <p className="card-description">{recipe.description}</p>

                {/* Quick info */}
                <div className="card-meta">
                    <span className="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12,6 12,12 16,14" />
                        </svg>
                        {formatCookTime(recipe.cookTime + (recipe.prepTime || 0))}
                    </span>
                    <span className={`meta-item difficulty ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                    </span>
                    <span className="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7h20L12 2z" />
                            <path d="M2 17h20v5H2z" />
                            <line x1="12" y1="7" x2="12" y2="17" />
                        </svg>
                        {recipe.nutrition.calories} cal
                    </span>
                </div>

                {/* Dietary tags */}
                {recipe.dietary.length > 0 && (
                    <div className="card-tags">
                        {recipe.dietary.slice(0, 3).map(tag => (
                            <span key={tag} className="dietary-tag">{tag}</span>
                        ))}
                    </div>
                )}

                {/* Rating */}
                <div className="card-footer">
                    <Rating
                        rating={userRating}
                        size="small"
                        readonly
                    />
                    <span className="servings">
                        {recipe.servings} servings
                    </span>
                </div>
            </div>
        </article>
    );
};

export default RecipeCard;
