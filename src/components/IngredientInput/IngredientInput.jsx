// Ingredient input and selection component
import { useState, useMemo, useCallback } from 'react';
import { ingredientCategories, allIngredients } from '../../data/ingredients';
import './IngredientInput.css';

const IngredientInput = ({
    selectedIngredients,
    onAddIngredient,
    onRemoveIngredient,
    onClearAll
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    // Filter ingredients based on search
    const filteredIngredients = useMemo(() => {
        if (!searchTerm) return [];

        const term = searchTerm.toLowerCase();
        return allIngredients
            .filter(ing =>
                ing.toLowerCase().includes(term) &&
                !selectedIngredients.includes(ing)
            )
            .slice(0, 10);
    }, [searchTerm, selectedIngredients]);

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle adding ingredient from search
    const handleAddFromSearch = (ingredient) => {
        onAddIngredient(ingredient);
        setSearchTerm('');
    };

    // Handle keyboard in search
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredIngredients.length > 0) {
            handleAddFromSearch(filteredIngredients[0]);
        }
    };

    // Toggle category expansion
    const toggleCategory = useCallback((categoryKey) => {
        setActiveCategory(prev => prev === categoryKey ? null : categoryKey);
    }, []);

    return (
        <div className="ingredient-input">
            {/* Search input */}
            <div className="search-container">
                <div className="search-input-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search ingredients..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button
                            className="clear-search"
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Search suggestions dropdown */}
                {filteredIngredients.length > 0 && (
                    <div className="search-dropdown">
                        {filteredIngredients.map((ingredient) => (
                            <button
                                key={ingredient}
                                className="search-item"
                                onClick={() => handleAddFromSearch(ingredient)}
                            >
                                <span className="search-item-name">{ingredient}</span>
                                <span className="search-item-add">+ Add</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected ingredients */}
            {selectedIngredients.length > 0 && (
                <div className="selected-section">
                    <div className="selected-header">
                        <span className="selected-count">
                            {selectedIngredients.length} ingredient{selectedIngredients.length !== 1 ? 's' : ''} selected
                        </span>
                        <button className="clear-all-btn" onClick={onClearAll}>
                            Clear all
                        </button>
                    </div>
                    <div className="selected-tags">
                        {selectedIngredients.map((ingredient) => (
                            <span key={ingredient} className="ingredient-tag selected">
                                {ingredient}
                                <button
                                    className="remove-tag"
                                    onClick={() => onRemoveIngredient(ingredient)}
                                    aria-label={`Remove ${ingredient}`}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Category browser */}
            <div className="categories-section">
                <h4 className="categories-title">Browse by Category</h4>
                <div className="categories-grid">
                    {Object.entries(ingredientCategories).map(([key, category]) => (
                        <div key={key} className="category-item">
                            <button
                                className={`category-header ${activeCategory === key ? 'active' : ''}`}
                                onClick={() => toggleCategory(key)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.label}</span>
                                <svg
                                    className={`category-arrow ${activeCategory === key ? 'open' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </button>

                            {activeCategory === key && (
                                <div className="category-items">
                                    {category.items.map((item) => {
                                        const isSelected = selectedIngredients.includes(item);
                                        return (
                                            <button
                                                key={item}
                                                className={`category-ingredient ${isSelected ? 'selected' : ''}`}
                                                onClick={() => isSelected ? onRemoveIngredient(item) : onAddIngredient(item)}
                                            >
                                                {item}
                                                {isSelected && (
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <polyline points="20,6 9,17 4,12" />
                                                    </svg>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IngredientInput;
