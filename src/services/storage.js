// LocalStorage service for persisting user data

const STORAGE_KEYS = {
    FAVORITES: 'recipe_favorites',
    RATINGS: 'recipe_ratings',
    PREFERENCES: 'user_preferences',
    RECENT_SEARCHES: 'recent_searches',
    THEME: 'app_theme'
};

/**
 * Get item from localStorage with JSON parsing
 */
const getItem = (key, defaultValue = null) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error reading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

/**
 * Set item in localStorage with JSON stringify
 */
const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error(`Error writing ${key} to localStorage:`, error);
        return false;
    }
};

// Favorites management
export const getFavorites = () => getItem(STORAGE_KEYS.FAVORITES, []);

export const addFavorite = (recipeId) => {
    const favorites = getFavorites();
    if (!favorites.includes(recipeId)) {
        favorites.push(recipeId);
        setItem(STORAGE_KEYS.FAVORITES, favorites);
    }
    return favorites;
};

export const removeFavorite = (recipeId) => {
    const favorites = getFavorites().filter(id => id !== recipeId);
    setItem(STORAGE_KEYS.FAVORITES, favorites);
    return favorites;
};

export const isFavorite = (recipeId) => getFavorites().includes(recipeId);

export const toggleFavorite = (recipeId) => {
    if (isFavorite(recipeId)) {
        return { favorites: removeFavorite(recipeId), added: false };
    } else {
        return { favorites: addFavorite(recipeId), added: true };
    }
};

// Ratings management
export const getRatings = () => getItem(STORAGE_KEYS.RATINGS, {});

export const getRecipeRating = (recipeId) => {
    const ratings = getRatings();
    return ratings[recipeId] || 0;
};

export const setRecipeRating = (recipeId, rating) => {
    const ratings = getRatings();
    ratings[recipeId] = rating;
    setItem(STORAGE_KEYS.RATINGS, ratings);
    return ratings;
};

// User preferences
export const getPreferences = () => getItem(STORAGE_KEYS.PREFERENCES, {
    dietaryRestrictions: [],
    defaultServings: 4,
    preferredCuisines: []
});

export const setPreferences = (preferences) => {
    const current = getPreferences();
    const updated = { ...current, ...preferences };
    setItem(STORAGE_KEYS.PREFERENCES, updated);
    return updated;
};

export const updateDietaryRestrictions = (restrictions) => {
    return setPreferences({ dietaryRestrictions: restrictions });
};

// Recent searches
export const getRecentSearches = () => getItem(STORAGE_KEYS.RECENT_SEARCHES, []);

export const addRecentSearch = (ingredients) => {
    const searches = getRecentSearches();
    // Remove duplicate if exists
    const filtered = searches.filter(
        s => JSON.stringify(s.ingredients) !== JSON.stringify(ingredients)
    );
    // Add new search at beginning
    filtered.unshift({
        ingredients,
        timestamp: Date.now()
    });
    // Keep only last 10 searches
    const limited = filtered.slice(0, 10);
    setItem(STORAGE_KEYS.RECENT_SEARCHES, limited);
    return limited;
};

export const clearRecentSearches = () => {
    setItem(STORAGE_KEYS.RECENT_SEARCHES, []);
    return [];
};

// Theme management
export const getTheme = () => getItem(STORAGE_KEYS.THEME, 'dark');

export const setTheme = (theme) => {
    setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};

export const toggleTheme = () => {
    const current = getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
};

// Initialize theme on load
export const initializeTheme = () => {
    const theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};

// Export all functions
export default {
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    getRatings,
    getRecipeRating,
    setRecipeRating,
    getPreferences,
    setPreferences,
    updateDietaryRestrictions,
    getRecentSearches,
    addRecentSearch,
    clearRecentSearches,
    getTheme,
    setTheme,
    toggleTheme,
    initializeTheme
};
