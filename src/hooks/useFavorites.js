// Custom hook for managing favorite recipes
import { useState, useCallback } from 'react';
import {
    getFavorites,
    toggleFavorite as toggleFav
} from '../services/storage';
import { recipes } from '../data/recipes';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => getFavorites());

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
