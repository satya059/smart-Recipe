// Rating component for recipe ratings
import { useState } from 'react';
import './Rating.css';

const Rating = ({
    rating = 0,
    onRate,
    size = 'medium',
    readonly = false
}) => {
    const [hoverRating, setHoverRating] = useState(0);

    const sizes = {
        small: 16,
        medium: 24,
        large: 32
    };

    const starSize = sizes[size] || sizes.medium;

    const handleClick = (value) => {
        if (!readonly && onRate) {
            // If clicking the same rating, clear it
            onRate(value === rating ? 0 : value);
        }
    };

    const handleMouseEnter = (value) => {
        if (!readonly) {
            setHoverRating(value);
        }
    };

    const handleMouseLeave = () => {
        if (!readonly) {
            setHoverRating(0);
        }
    };

    const renderStar = (index) => {
        const value = index + 1;
        const filled = hoverRating ? value <= hoverRating : value <= rating;

        return (
            <button
                key={index}
                type="button"
                className={`star-button ${filled ? 'filled' : ''} ${readonly ? 'readonly' : ''}`}
                onClick={() => handleClick(value)}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={handleMouseLeave}
                disabled={readonly}
                aria-label={`Rate ${value} stars`}
                style={{ width: starSize, height: starSize }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill={filled ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            </button>
        );
    };

    return (
        <div className={`rating rating-${size}`}>
            {[...Array(5)].map((_, index) => renderStar(index))}
            {rating > 0 && !readonly && (
                <span className="rating-text">{rating}/5</span>
            )}
        </div>
    );
};

export default Rating;
