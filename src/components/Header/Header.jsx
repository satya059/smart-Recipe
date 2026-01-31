// Header component with navigation and theme toggle
import { useState } from 'react';
import { getTheme, toggleTheme } from '../../services/storage';
import './Header.css';

const Header = ({ currentView, onViewChange, favoritesCount }) => {
    const [theme, setTheme] = useState(getTheme());

    const handleThemeToggle = () => {
        const newTheme = toggleTheme();
        setTheme(newTheme);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-brand" onClick={() => onViewChange('home')}>
                    <span className="header-logo">🍳</span>
                    <h1 className="header-title">RecipeAI</h1>
                </div>

                <nav className="header-nav">
                    <button
                        className={`nav-button ${currentView === 'home' ? 'active' : ''}`}
                        onClick={() => onViewChange('home')}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                        <span>Home</span>
                    </button>

                    <button
                        className={`nav-button ${currentView === 'favorites' ? 'active' : ''}`}
                        onClick={() => onViewChange('favorites')}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span>Favorites</span>
                        {favoritesCount > 0 && (
                            <span className="nav-badge">{favoritesCount}</span>
                        )}
                    </button>
                </nav>

                <button
                    className="theme-toggle"
                    onClick={handleThemeToggle}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
