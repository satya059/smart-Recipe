// Main App component
import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import ImageUpload from './components/ImageUpload/ImageUpload';
import IngredientInput from './components/IngredientInput/IngredientInput';
import Filters from './components/Filters/Filters';
import RecipeCard from './components/RecipeCard/RecipeCard';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import { useRecipes } from './hooks/useRecipes';
import { useFavorites } from './hooks/useFavorites';
import { useFilters } from './hooks/useFilters';
import { initializeTheme, getRatings } from './services/storage';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [ratings] = useState(() => getRatings());

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
  }, []);

  // Custom hooks
  const {
    selectedIngredients,
    matchedRecipes,
    stats,
    addIngredient,
    removeIngredient,
    clearIngredients,
  } = useRecipes();

  const {
    favoriteRecipes,
    toggleFavorite,
    isFavorite,
    count: favoritesCount
  } = useFavorites();

  const {
    filters,
    updateFilter,
    toggleDietary,
    resetFilters,
    hasActiveFilters,
    cuisineOptions,
    dietaryOptions,
    difficultyOptions,
    cookTimeOptions
  } = useFilters();

  // Handle ingredients detected from image
  const handleIngredientsDetected = useCallback((ingredients) => {
    ingredients.forEach(ing => addIngredient(ing));
  }, [addIngredient]);

  // Filter and sort recipes
  const getFilteredRecipes = useCallback(() => {
    let recipes = currentView === 'favorites' ? favoriteRecipes : matchedRecipes;

    // Apply filters
    if (filters.dietary.length > 0) {
      recipes = recipes.filter(r =>
        filters.dietary.every(d => r.dietary.includes(d))
      );
    }

    if (filters.cuisine !== 'all') {
      recipes = recipes.filter(r => r.cuisine === filters.cuisine);
    }

    if (filters.difficulty !== 'all') {
      recipes = recipes.filter(r => r.difficulty === filters.difficulty);
    }

    if (filters.maxCookTime) {
      recipes = recipes.filter(r => r.cookTime <= filters.maxCookTime);
    }

    // Sort
    if (filters.sortBy === 'time') {
      recipes = [...recipes].sort((a, b) => a.cookTime - b.cookTime);
    } else if (filters.sortBy === 'calories-low') {
      recipes = [...recipes].sort((a, b) => a.nutrition.calories - b.nutrition.calories);
    } else if (filters.sortBy === 'calories-high') {
      recipes = [...recipes].sort((a, b) => b.nutrition.calories - a.nutrition.calories);
    }

    return recipes;
  }, [currentView, favoriteRecipes, matchedRecipes, filters]);

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="app">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        favoritesCount={favoritesCount}
      />

      <main className="main-content">
        {currentView === 'home' && (
          <>
            {/* Hero section */}
            <section className="hero-section">
              {/* Floating 3D food images */}
              <div className="hero-floating-images">
                <div className="floating-food"></div>
                <div className="floating-food"></div>
                <div className="floating-food"></div>
                <div className="floating-food"></div>
                <div className="floating-food"></div>
                <div className="floating-food"></div>
              </div>

              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="hero-gradient">Smart Recipe</span> Generator
                </h1>
                <p className="hero-subtitle">
                  Upload a photo of your ingredients or select them manually to discover delicious recipes you can make right now.
                </p>

                {/* Hero image showcase */}
                <div className="hero-image-showcase">
                  <img
                    src="/hero-food.png"
                    alt="Delicious food collection"
                    className="hero-main-image"
                  />
                </div>
              </div>
            </section>

            {/* Input section */}
            <section className="input-section">
              <div className="input-container">
                <div className="input-tabs">
                  <div className="input-tab active">
                    <span className="tab-icon">📷</span>
                    <span>Scan Ingredients</span>
                  </div>
                </div>

                <div className="input-content">
                  <ImageUpload
                    onIngredientsDetected={handleIngredientsDetected}
                    onError={(err) => console.error(err)}
                  />
                </div>

                <div className="divider">
                  <span>or select manually</span>
                </div>

                <IngredientInput
                  selectedIngredients={selectedIngredients}
                  onAddIngredient={addIngredient}
                  onRemoveIngredient={removeIngredient}
                  onClearAll={clearIngredients}
                />
              </div>
            </section>

            {/* Stats bar */}
            {selectedIngredients.length > 0 && (
              <div className="stats-bar">
                <div className="stats-content">
                  <span className="stat-item">
                    <strong>{stats.canMake}</strong> recipes you can make
                  </span>
                  <span className="stat-item">
                    <strong>{stats.canMakeWithSubs}</strong> with substitutions
                  </span>
                  <span className="stat-item">
                    <strong>{stats.avgMatchScore}%</strong> avg match
                  </span>
                </div>
              </div>
            )}
          </>
        )}

        {/* Recipe results section */}
        <section className="recipes-section">
          <div className="recipes-header">
            <h2 className="recipes-title">
              {currentView === 'favorites' ? (
                <>❤️ Your Favorites</>
              ) : selectedIngredients.length > 0 ? (
                <>🍳 Matching Recipes</>
              ) : (
                <>🔥 Popular Recipes</>
              )}
            </h2>
            <button
              className={`filter-toggle ${hasActiveFilters ? 'has-filters' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
              </svg>
              Filters
              {hasActiveFilters && <span className="filter-count">•</span>}
            </button>
          </div>

          {/* Filters panel */}
          {showFilters && (
            <div className="filters-panel">
              <Filters
                filters={filters}
                onUpdateFilter={updateFilter}
                onToggleDietary={toggleDietary}
                onResetFilters={resetFilters}
                hasActiveFilters={hasActiveFilters}
                cuisineOptions={cuisineOptions}
                dietaryOptions={dietaryOptions}
                difficultyOptions={difficultyOptions}
                cookTimeOptions={cookTimeOptions}
              />
            </div>
          )}

          {/* Recipe grid */}
          {filteredRecipes.length > 0 ? (
            <div className="recipes-grid">
              {filteredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={isFavorite(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                  onViewRecipe={setSelectedRecipe}
                  userRating={ratings[recipe.id] || 0}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                {currentView === 'favorites' ? '💔' : '🥄'}
              </div>
              <h3>
                {currentView === 'favorites'
                  ? 'No favorites yet'
                  : 'No matching recipes found'}
              </h3>
              <p>
                {currentView === 'favorites'
                  ? 'Start adding recipes to your favorites!'
                  : 'Try adding more ingredients or adjusting your filters.'}
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Recipe detail modal */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavorite={isFavorite(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>🍳 RecipeAI - Smart Recipe Generator</p>
          <p className="footer-note">Made with ❤️ for food lovers</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
