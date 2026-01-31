// Custom hook for filter state management
import { useState, useCallback, useMemo } from 'react';
import { getCuisines, getDietaryOptions } from '../data/recipes';

export const useFilters = (initialFilters = {}) => {
    const [filters, setFilters] = useState({
        dietary: [],
        cuisine: 'all',
        difficulty: 'all',
        maxCookTime: null,
        sortBy: 'match', // 'match', 'time', 'difficulty', 'rating'
        ...initialFilters
    });

    // Available filter options
    const cuisineOptions = useMemo(() => ['all', ...getCuisines()], []);
    const dietaryOptions = useMemo(() => getDietaryOptions(), []);
    const difficultyOptions = ['all', 'easy', 'medium', 'hard'];
    const cookTimeOptions = [
        { label: 'Any time', value: null },
        { label: 'Under 15 min', value: 15 },
        { label: 'Under 30 min', value: 30 },
        { label: 'Under 1 hour', value: 60 },
        { label: '1+ hour', value: 480 }
    ];

    // Update single filter
    const updateFilter = useCallback((key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    }, []);

    // Toggle dietary filter
    const toggleDietary = useCallback((diet) => {
        setFilters(prev => {
            const current = prev.dietary;
            const updated = current.includes(diet)
                ? current.filter(d => d !== diet)
                : [...current, diet];
            return { ...prev, dietary: updated };
        });
    }, []);

    // Reset all filters
    const resetFilters = useCallback(() => {
        setFilters({
            dietary: [],
            cuisine: 'all',
            difficulty: 'all',
            maxCookTime: null,
            sortBy: 'match'
        });
    }, []);

    // Check if any filters are active
    const hasActiveFilters = useMemo(() => {
        return (
            filters.dietary.length > 0 ||
            filters.cuisine !== 'all' ||
            filters.difficulty !== 'all' ||
            filters.maxCookTime !== null
        );
    }, [filters]);

    // Count of active filters
    const activeFilterCount = useMemo(() => {
        let count = 0;
        if (filters.dietary.length > 0) count += filters.dietary.length;
        if (filters.cuisine !== 'all') count++;
        if (filters.difficulty !== 'all') count++;
        if (filters.maxCookTime !== null) count++;
        return count;
    }, [filters]);

    return {
        filters,
        setFilters,
        updateFilter,
        toggleDietary,
        resetFilters,
        hasActiveFilters,
        activeFilterCount,
        // Options
        cuisineOptions,
        dietaryOptions,
        difficultyOptions,
        cookTimeOptions
    };
};

export default useFilters;
