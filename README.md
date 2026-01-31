# 🍳 RecipeAI - Smart Recipe Generator

A modern web application that suggests recipes based on available ingredients. Upload a photo to detect ingredients automatically or select them manually, then discover delicious recipes you can make right now!

![RecipeAI](https://img.shields.io/badge/RecipeAI-Smart%20Recipe%20Generator-ff6b35?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHRleHQgeT0iMTgiIGZvbnQtc2l6ZT0iMTgiPvCfzLM8L3RleHQ+PC9zdmc+)

## ✨ Features

### Core Features
- **📸 Image-Based Ingredient Recognition** - Upload a photo of your ingredients and let AI detect them automatically
- **🔍 Smart Recipe Matching Algorithm** - Find recipes based on ingredients you have, with match percentages
- **🥗 Dietary Restrictions Handling** - Filter by vegetarian, vegan, gluten-free, dairy-free, and more
- **🔄 Substitution Suggestions** - Get alternative ingredients when you're missing something

### Recipe Features
- **📊 Nutritional Information** - Calories, protein, carbs, fat, and fiber for every recipe
- **⏱️ Filter by Cooking Time** - Quick meals under 15 min or elaborate dishes
- **📈 Difficulty Levels** - Easy, medium, and hard recipes
- **📏 Serving Size Adjustment** - Automatically recalculate ingredient quantities

### User Features
- **❤️ Favorites System** - Save and organize your favorite recipes
- **⭐ Rating System** - Rate recipes to improve recommendations
- **🌙 Dark/Light Theme** - Beautiful UI in both modes
- **📱 Mobile Responsive** - Perfect experience on any device

## 🍽️ Recipe Database

The app includes **24+ curated recipes** across multiple cuisines:
- 🇮🇹 Italian (Pizza, Carbonara, Risotto)
- 🇲🇽 Mexican (Tacos, Burrito Bowl, Enchiladas)
- 🥢 Asian (Stir Fry, Green Curry, Ramen, Fried Rice)
- 🇺🇸 American (Burgers, Mac & Cheese, BBQ Pulled Pork)
- 🥗 Mediterranean (Greek Salad, Falafel, Hummus)
- 🇮🇳 Indian (Butter Chicken, Dal Tadka, Biryani)
- ☀️ Breakfast (Pancakes, Omelette, Smoothie Bowl)
- 🍫 Desserts (Brownies, Cheesecake)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/recipe-ai.git

# Navigate to project directory
cd recipe-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom properties, animations, glassmorphism
- **LocalStorage** - Persist user preferences, favorites, ratings

## 🖼️ Image Recognition

The app supports ingredient detection from images. To enable real image analysis:

1. Get a Google Cloud Vision API key (free tier: 1000 requests/month)
2. Create a `.env` file in the project root:
   ```
   VITE_GOOGLE_VISION_API_KEY=your_api_key_here
   ```

**Without an API key**, the app works in demo mode, simulating ingredient detection for testing.

## 📱 Screenshots

The application features:
- Beautiful gradient hero section
- Drag-and-drop image upload
- Searchable ingredient browser by category
- Recipe cards with match percentages
- Detailed recipe modal with tabbed interface
- Responsive design for mobile devices

## 🎯 Recipe Matching Algorithm

The matching algorithm scores recipes based on:
1. **Ingredient match percentage** - How many ingredients you have
2. **Bonus for high matches** - Extra points for 60%+ matches
3. **Substitution awareness** - Considers available substitutes
4. **Missing ingredient penalty** - Reduces score for many missing items

Recipes are sorted by match score, showing the best options first.

## 📂 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation and branding
│   ├── ImageUpload/     # Drag-drop image upload
│   ├── IngredientInput/ # Search and category browser
│   ├── Filters/         # Recipe filtering options
│   ├── RecipeCard/      # Recipe preview cards
│   ├── RecipeDetail/    # Full recipe modal
│   └── Rating/          # Star rating component
├── data/
│   ├── recipes.js       # Recipe database
│   └── ingredients.js   # Ingredient categories
├── hooks/
│   ├── useRecipes.js    # Recipe matching logic
│   ├── useFavorites.js  # Favorites management
│   └── useFilters.js    # Filter state
├── services/
│   ├── imageRecognition.js # Vision API integration
│   ├── recipeMatching.js   # Matching algorithm
│   └── storage.js          # LocalStorage wrapper
├── App.jsx
├── App.css
└── index.css            # Design system
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site → Import from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📝 Approach Summary (200 words)

This Smart Recipe Generator was built with a focus on **user experience** and **practical functionality**. 

**Ingredient Detection**: The app uses Google Cloud Vision API for image-based ingredient recognition, with a demo fallback mode for testing without API keys. Detected labels are mapped to a curated ingredient database for accurate matching.

**Recipe Matching**: A custom scoring algorithm calculates match percentages based on available ingredients, with bonus points for high matches and consideration of available substitutions. This helps users make the most of what they have.

**Data Architecture**: The recipe database includes 24 diverse recipes with complete nutritional information, step-by-step instructions, and substitution suggestions. All data is structured for easy filtering by dietary restrictions, cuisine, difficulty, and cooking time.

**User Preferences**: LocalStorage persists favorites, ratings, and theme preferences, creating a personalized experience without requiring authentication.

**Design**: The UI features modern aesthetics with glassmorphism effects, smooth animations, and a responsive layout. The dark theme is default with light mode option, and all interactions provide immediate visual feedback.

**Technology Choices**: React + Vite provides fast development and optimal production builds, while vanilla CSS with custom properties ensures maintainability and flexibility.

## 📄 License

MIT License - feel free to use this project for learning and personal use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for food lovers
