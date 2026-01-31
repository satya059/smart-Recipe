// Custom hook for managing favorite recipes
import { useState, useEffect, useCallback } from 'react';
import {
    getFavorites,
    toggleFavorite as toggleFav,
    isFavorite
} from '../services/storage';
import { recipes } from '../data/recipes';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites on mount
    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    // Toggle favorite status
    const toggleFavorite = useCallback((recipeId) => {
        const result = toggleFav(recipeId);
        setFavorites(result.favorites);
        return result;
    }, []);

    // Check if recipe is favorite
    const checkIsFavorite = useCallback((recipeId) => {
        return favorites.includes(recipeId);
    }, [favorites]);

    // Get all favorite recipes with full data
    const favoriteRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.id)
    );

    return {
        favorites,
        favoriteRecipes,
        toggleFavorite,
        isFavorite: checkIsFavorite,
        count: favorites.length
    };
};

export default useFavorites;
