// Filter component for recipe filtering
import './Filters.css';

const Filters = ({
    filters,
    onUpdateFilter,
    onToggleDietary,
    onResetFilters,
    hasActiveFilters,
    cuisineOptions,
    dietaryOptions,
    difficultyOptions,
    cookTimeOptions
}) => {
    return (
        <div className="filters">
            <div className="filters-header">
                <h3 className="filters-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
                    </svg>
                    Filters
                </h3>
                {hasActiveFilters && (
                    <button className="reset-filters" onClick={onResetFilters}>
                        Reset all
                    </button>
                )}
            </div>

            {/* Dietary restrictions */}
            <div className="filter-group">
                <label className="filter-label">Dietary</label>
                <div className="filter-options dietary-options">
                    {dietaryOptions.map(diet => (
                        <button
                            key={diet}
                            className={`filter-chip ${filters.dietary.includes(diet) ? 'active' : ''}`}
                            onClick={() => onToggleDietary(diet)}
                        >
                            {diet === 'vegetarian' && '🥬'}
                            {diet === 'vegan' && '🌱'}
                            {diet === 'gluten-free' && '🌾'}
                            {diet === 'dairy-free' && '🥛'}
                            {diet === 'low-carb' && '🥩'}
                            {diet === 'nut-free' && '🥜'}
                            <span>{diet}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Cuisine */}
            <div className="filter-group">
                <label className="filter-label">Cuisine</label>
                <select
                    className="filter-select"
                    value={filters.cuisine}
                    onChange={(e) => onUpdateFilter('cuisine', e.target.value)}
                >
                    {cuisineOptions.map(cuisine => (
                        <option key={cuisine} value={cuisine}>
                            {cuisine === 'all' ? 'All Cuisines' : cuisine}
                        </option>
                    ))}
                </select>
            </div>

            {/* Difficulty */}
            <div className="filter-group">
                <label className="filter-label">Difficulty</label>
                <div className="filter-options">
                    {difficultyOptions.map(level => (
                        <button
                            key={level}
                            className={`filter-chip ${filters.difficulty === level ? 'active' : ''}`}
                            onClick={() => onUpdateFilter('difficulty', level)}
                        >
                            {level === 'all' && 'All'}
                            {level === 'easy' && '😊 Easy'}
                            {level === 'medium' && '🙂 Medium'}
                            {level === 'hard' && '😤 Hard'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cook time */}
            <div className="filter-group">
                <label className="filter-label">Cook Time</label>
                <select
                    className="filter-select"
                    value={filters.maxCookTime || ''}
                    onChange={(e) => onUpdateFilter('maxCookTime', e.target.value ? parseInt(e.target.value) : null)}
                >
                    {cookTimeOptions.map(option => (
                        <option key={option.label} value={option.value || ''}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sort by */}
            <div className="filter-group">
                <label className="filter-label">Sort by</label>
                <select
                    className="filter-select"
                    value={filters.sortBy || 'match'}
                    onChange={(e) => onUpdateFilter('sortBy', e.target.value)}
                >
                    <option value="match">Best Match</option>
                    <option value="time">Quickest</option>
                    <option value="calories-low">Lowest Calories</option>
                    <option value="calories-high">Highest Calories</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
