// Categorized ingredients for selection UI
export const ingredientCategories = {
    proteins: {
        label: 'Proteins',
        icon: '🥩',
        items: [
            'chicken breast', 'chicken thighs', 'ground beef', 'pork belly', 'pork shoulder',
            'bacon', 'pancetta', 'eggs', 'salmon', 'shrimp', 'tofu', 'tempeh'
        ]
    },
    vegetables: {
        label: 'Vegetables',
        icon: '🥬',
        items: [
            'broccoli', 'carrots', 'bell pepper', 'onion', 'red onion', 'garlic',
            'tomato', 'cucumber', 'zucchini', 'spinach', 'lettuce', 'mushrooms',
            'snap peas', 'peas', 'corn', 'bamboo shoots', 'green onions', 'celery'
        ]
    },
    fruits: {
        label: 'Fruits',
        icon: '🍎',
        items: [
            'lemon', 'lime', 'avocado', 'banana', 'mixed berries', 'apple', 'orange'
        ]
    },
    grains: {
        label: 'Grains & Pasta',
        icon: '🍚',
        items: [
            'rice', 'basmati rice', 'jasmine rice', 'arborio rice', 'spaghetti',
            'elbow macaroni', 'ramen noodles', 'pizza dough', 'flour', 'breadcrumbs'
        ]
    },
    dairy: {
        label: 'Dairy',
        icon: '🧀',
        items: [
            'milk', 'buttermilk', 'heavy cream', 'sour cream', 'yogurt', 'butter',
            'mozzarella cheese', 'parmesan cheese', 'cheddar cheese', 'feta cheese',
            'cream cheese', 'cheese'
        ]
    },
    legumes: {
        label: 'Legumes',
        icon: '🫘',
        items: [
            'black beans', 'chickpeas', 'red lentils', 'pinto beans', 'lentils'
        ]
    },
    pantry: {
        label: 'Pantry Staples',
        icon: '🫙',
        items: [
            'olive oil', 'sesame oil', 'vegetable oil', 'soy sauce', 'tomato sauce',
            'enchilada sauce', 'bbq sauce', 'coconut milk', 'chicken broth',
            'vegetable broth', 'white wine', 'apple cider vinegar', 'red wine vinegar',
            'tahini', 'miso paste', 'fish sauce', 'maple syrup', 'honey',
            'sugar', 'brown sugar', 'cocoa powder', 'chocolate chips', 'vanilla extract'
        ]
    },
    spices: {
        label: 'Spices & Herbs',
        icon: '🌿',
        items: [
            'salt', 'black pepper', 'cumin', 'cumin seeds', 'paprika', 'chili powder',
            'turmeric', 'garam masala', 'oregano', 'thyme', 'fresh basil', 'thai basil',
            'cilantro', 'parsley', 'mint', 'ginger', 'garlic powder', 'onion powder',
            'mustard powder', 'baking powder', 'saffron'
        ]
    },
    bread: {
        label: 'Bread & Wraps',
        icon: '🍞',
        items: [
            'burger buns', 'hamburger buns', 'corn tortillas', 'pita bread',
            'naan bread', 'graham crackers', 'nori'
        ]
    },
    toppings: {
        label: 'Condiments & Toppings',
        icon: '🥫',
        items: [
            'ketchup', 'mustard', 'salsa', 'pickles', 'kalamata olives',
            'green curry paste', 'granola', 'chia seeds', 'coconut flakes',
            'cashews', 'chives'
        ]
    }
};

// Flatten all ingredients for easy searching
export const allIngredients = Object.values(ingredientCategories)
    .flatMap(category => category.items)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort();

// Ingredient synonyms for better matching
export const ingredientSynonyms = {
    'tomato': ['tomatoes', 'cherry tomatoes', 'roma tomatoes'],
    'onion': ['onions', 'yellow onion', 'white onion'],
    'garlic': ['garlic cloves', 'minced garlic'],
    'chicken': ['chicken breast', 'chicken thighs', 'chicken meat'],
    'cheese': ['cheddar cheese', 'mozzarella cheese', 'parmesan cheese'],
    'pepper': ['bell pepper', 'sweet pepper', 'capsicum'],
    'oil': ['olive oil', 'vegetable oil', 'cooking oil'],
    'pasta': ['spaghetti', 'elbow macaroni', 'penne', 'noodles'],
    'rice': ['basmati rice', 'jasmine rice', 'white rice', 'brown rice'],
    'beans': ['black beans', 'pinto beans', 'kidney beans'],
    'herbs': ['basil', 'parsley', 'cilantro', 'thyme', 'oregano'],
    'meat': ['beef', 'pork', 'chicken', 'turkey'],
    'greens': ['lettuce', 'spinach', 'kale', 'arugula']
};

// Common ingredient image labels from vision APIs
export const ingredientLabels = {
    // Vegetables
    'broccoli': 'broccoli',
    'carrot': 'carrots',
    'bell pepper': 'bell pepper',
    'red pepper': 'bell pepper',
    'green pepper': 'bell pepper',
    'yellow pepper': 'bell pepper',
    'onion': 'onion',
    'garlic': 'garlic',
    'tomato': 'tomato',
    'cucumber': 'cucumber',
    'zucchini': 'zucchini',
    'spinach': 'spinach',
    'lettuce': 'lettuce',
    'mushroom': 'mushrooms',
    'corn': 'corn',
    'pea': 'peas',
    'celery': 'celery',

    // Fruits
    'lemon': 'lemon',
    'lime': 'lime',
    'avocado': 'avocado',
    'banana': 'banana',
    'apple': 'apple',
    'orange': 'orange',
    'berry': 'mixed berries',
    'strawberry': 'mixed berries',
    'blueberry': 'mixed berries',

    // Proteins
    'chicken': 'chicken breast',
    'beef': 'ground beef',
    'pork': 'pork belly',
    'egg': 'eggs',
    'salmon': 'salmon',
    'shrimp': 'shrimp',
    'fish': 'fish',
    'tofu': 'tofu',

    // Dairy
    'milk': 'milk',
    'cheese': 'cheese',
    'butter': 'butter',
    'yogurt': 'yogurt',
    'cream': 'heavy cream',

    // Grains
    'rice': 'rice',
    'pasta': 'spaghetti',
    'bread': 'burger buns',
    'noodle': 'ramen noodles',
    'flour': 'flour',

    // Herbs & Spices
    'basil': 'fresh basil',
    'cilantro': 'cilantro',
    'parsley': 'parsley',
    'mint': 'mint',
    'ginger': 'ginger',
    'herb': 'fresh basil'
};

export default ingredientCategories;
