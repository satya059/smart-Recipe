// Comprehensive recipe database with 24 recipes across multiple cuisines
export const recipes = [
  // Italian
  {
    id: 'classic-margherita-pizza',
    name: 'Classic Margherita Pizza',
    cuisine: 'Italian',
    difficulty: 'medium',
    cookTime: 25,
    prepTime: 20,
    servings: 4,
    dietary: ['vegetarian'],
    description: 'A timeless Italian classic with fresh tomatoes, mozzarella, and basil on a crispy crust.',
    ingredients: [
      { name: 'pizza dough', amount: 1, unit: 'lb' },
      { name: 'tomato sauce', amount: 0.5, unit: 'cup' },
      { name: 'mozzarella cheese', amount: 8, unit: 'oz' },
      { name: 'fresh basil', amount: 0.25, unit: 'cup' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'garlic', amount: 2, unit: 'cloves' },
      { name: 'salt', amount: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Preheat oven to 475°F (245°C) with a pizza stone if available.',
      'Roll out the pizza dough on a floured surface to desired thickness.',
      'Spread tomato sauce evenly, leaving a small border for the crust.',
      'Tear mozzarella into pieces and distribute over the sauce.',
      'Drizzle with olive oil and sprinkle minced garlic.',
      'Bake for 12-15 minutes until crust is golden and cheese bubbles.',
      'Top with fresh basil leaves and serve immediately.'
    ],
    nutrition: {
      calories: 285,
      protein: 12,
      carbs: 35,
      fat: 11,
      fiber: 2,
      sodium: 580
    },
    substitutions: {
      'mozzarella cheese': ['vegan mozzarella', 'burrata'],
      'pizza dough': ['cauliflower crust', 'naan bread']
    },
    imageUrl: '/images/margherita-pizza.jpg'
  },
  {
    id: 'creamy-pasta-carbonara',
    name: 'Creamy Pasta Carbonara',
    cuisine: 'Italian',
    difficulty: 'medium',
    cookTime: 20,
    prepTime: 10,
    servings: 4,
    dietary: [],
    description: 'Rich and creamy Roman pasta with crispy pancetta, eggs, and Parmesan.',
    ingredients: [
      { name: 'spaghetti', amount: 1, unit: 'lb' },
      { name: 'pancetta', amount: 8, unit: 'oz' },
      { name: 'eggs', amount: 4, unit: 'whole' },
      { name: 'parmesan cheese', amount: 1, unit: 'cup' },
      { name: 'black pepper', amount: 1, unit: 'tsp' },
      { name: 'garlic', amount: 3, unit: 'cloves' },
      { name: 'salt', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti al dente.',
      'While pasta cooks, crisp pancetta in a large skillet over medium heat.',
      'Add minced garlic to pancetta and cook for 1 minute.',
      'Whisk eggs with Parmesan and black pepper in a bowl.',
      'Reserve 1 cup pasta water, then drain pasta.',
      'Remove skillet from heat, add pasta to pancetta.',
      'Quickly toss with egg mixture, adding pasta water as needed for creaminess.',
      'Serve immediately with extra Parmesan and pepper.'
    ],
    nutrition: {
      calories: 520,
      protein: 24,
      carbs: 55,
      fat: 22,
      fiber: 2,
      sodium: 890
    },
    substitutions: {
      'pancetta': ['bacon', 'turkey bacon'],
      'parmesan cheese': ['pecorino romano', 'nutritional yeast'],
      'spaghetti': ['gluten-free pasta', 'zucchini noodles']
    },
    imageUrl: '/images/carbonara.jpg'
  },
  {
    id: 'classic-risotto',
    name: 'Mushroom Risotto',
    cuisine: 'Italian',
    difficulty: 'hard',
    cookTime: 35,
    prepTime: 15,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    description: 'Creamy Italian rice dish with earthy mushrooms and Parmesan.',
    ingredients: [
      { name: 'arborio rice', amount: 1.5, unit: 'cups' },
      { name: 'mushrooms', amount: 12, unit: 'oz' },
      { name: 'vegetable broth', amount: 6, unit: 'cups' },
      { name: 'white wine', amount: 0.5, unit: 'cup' },
      { name: 'parmesan cheese', amount: 0.5, unit: 'cup' },
      { name: 'onion', amount: 1, unit: 'medium' },
      { name: 'butter', amount: 4, unit: 'tbsp' },
      { name: 'garlic', amount: 2, unit: 'cloves' },
      { name: 'thyme', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Heat broth in a saucepan and keep warm over low heat.',
      'Sauté sliced mushrooms in butter until golden, set aside.',
      'Cook diced onion in the same pan until translucent.',
      'Add rice and toast for 2 minutes, stirring constantly.',
      'Pour in wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring until absorbed before adding more.',
      'Continue for 18-20 minutes until rice is creamy and al dente.',
      'Stir in mushrooms, Parmesan, and remaining butter.',
      'Season with salt, pepper, and fresh thyme.'
    ],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 52,
      fat: 18,
      fiber: 3,
      sodium: 680
    },
    substitutions: {
      'arborio rice': ['carnaroli rice', 'short-grain rice'],
      'white wine': ['chicken broth', 'lemon juice'],
      'butter': ['olive oil', 'vegan butter']
    },
    imageUrl: '/images/risotto.jpg'
  },

  // Mexican
  {
    id: 'chicken-tacos',
    name: 'Grilled Chicken Tacos',
    cuisine: 'Mexican',
    difficulty: 'easy',
    cookTime: 15,
    prepTime: 15,
    servings: 4,
    dietary: ['gluten-free'],
    description: 'Flavorful grilled chicken in warm tortillas with fresh toppings.',
    ingredients: [
      { name: 'chicken breast', amount: 1, unit: 'lb' },
      { name: 'corn tortillas', amount: 8, unit: 'pieces' },
      { name: 'lime', amount: 2, unit: 'whole' },
      { name: 'cilantro', amount: 0.5, unit: 'cup' },
      { name: 'onion', amount: 1, unit: 'medium' },
      { name: 'avocado', amount: 2, unit: 'whole' },
      { name: 'cumin', amount: 1, unit: 'tsp' },
      { name: 'chili powder', amount: 1, unit: 'tsp' },
      { name: 'garlic', amount: 3, unit: 'cloves' }
    ],
    instructions: [
      'Marinate chicken with cumin, chili powder, garlic, and lime juice for 30 minutes.',
      'Grill chicken over medium-high heat for 6-7 minutes per side.',
      'Let rest for 5 minutes, then slice into strips.',
      'Warm tortillas on the grill or in a dry skillet.',
      'Dice onion and avocado, chop cilantro.',
      'Assemble tacos with chicken, onion, avocado, and cilantro.',
      'Squeeze fresh lime over top and serve.'
    ],
    nutrition: {
      calories: 340,
      protein: 28,
      carbs: 28,
      fat: 14,
      fiber: 6,
      sodium: 420
    },
    substitutions: {
      'chicken breast': ['shrimp', 'tofu', 'beef'],
      'corn tortillas': ['flour tortillas', 'lettuce wraps'],
      'avocado': ['guacamole', 'sour cream']
    },
    imageUrl: '/images/chicken-tacos.jpg'
  },
  {
    id: 'burrito-bowl',
    name: 'Chicken Burrito Bowl',
    cuisine: 'Mexican',
    difficulty: 'easy',
    cookTime: 25,
    prepTime: 15,
    servings: 4,
    dietary: ['gluten-free'],
    description: 'Loaded bowl with rice, beans, chicken, and all your favorite toppings.',
    ingredients: [
      { name: 'chicken breast', amount: 1, unit: 'lb' },
      { name: 'rice', amount: 1.5, unit: 'cups' },
      { name: 'black beans', amount: 15, unit: 'oz' },
      { name: 'corn', amount: 1, unit: 'cup' },
      { name: 'tomato', amount: 2, unit: 'medium' },
      { name: 'lettuce', amount: 2, unit: 'cups' },
      { name: 'cheese', amount: 1, unit: 'cup' },
      { name: 'sour cream', amount: 0.5, unit: 'cup' },
      { name: 'salsa', amount: 1, unit: 'cup' }
    ],
    instructions: [
      'Cook rice according to package directions with a squeeze of lime.',
      'Season chicken with cumin, chili powder, and salt.',
      'Grill or pan-fry chicken until cooked through, then slice.',
      'Warm black beans and corn separately.',
      'Dice tomatoes and shred lettuce.',
      'Build bowls: start with rice, add beans, corn, chicken.',
      'Top with lettuce, tomatoes, cheese, sour cream, and salsa.',
      'Serve with lime wedges.'
    ],
    nutrition: {
      calories: 485,
      protein: 32,
      carbs: 58,
      fat: 14,
      fiber: 10,
      sodium: 720
    },
    substitutions: {
      'chicken breast': ['ground beef', 'carnitas', 'sofritas'],
      'sour cream': ['greek yogurt', 'vegan sour cream'],
      'cheese': ['vegan cheese', 'nutritional yeast']
    },
    imageUrl: '/images/burrito-bowl.jpg'
  },
  {
    id: 'vegetable-enchiladas',
    name: 'Vegetable Enchiladas',
    cuisine: 'Mexican',
    difficulty: 'medium',
    cookTime: 30,
    prepTime: 20,
    servings: 6,
    dietary: ['vegetarian'],
    description: 'Corn tortillas filled with seasoned vegetables and smothered in enchilada sauce.',
    ingredients: [
      { name: 'corn tortillas', amount: 12, unit: 'pieces' },
      { name: 'enchilada sauce', amount: 28, unit: 'oz' },
      { name: 'black beans', amount: 15, unit: 'oz' },
      { name: 'bell pepper', amount: 2, unit: 'medium' },
      { name: 'zucchini', amount: 2, unit: 'medium' },
      { name: 'onion', amount: 1, unit: 'large' },
      { name: 'cheese', amount: 2, unit: 'cups' },
      { name: 'cumin', amount: 1, unit: 'tsp' },
      { name: 'garlic', amount: 3, unit: 'cloves' }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Dice bell peppers, zucchini, and onion.',
      'Sauté vegetables with garlic and cumin until tender.',
      'Stir in drained black beans.',
      'Spread 1/2 cup enchilada sauce in baking dish.',
      'Fill each tortilla with vegetable mixture and 2 tbsp cheese.',
      'Roll and place seam-side down in dish.',
      'Cover with remaining sauce and cheese.',
      'Bake 20-25 minutes until bubbly.'
    ],
    nutrition: {
      calories: 320,
      protein: 14,
      carbs: 42,
      fat: 12,
      fiber: 8,
      sodium: 680
    },
    substitutions: {
      'cheese': ['vegan cheese', 'cashew cream'],
      'corn tortillas': ['flour tortillas'],
      'enchilada sauce': ['salsa verde', 'homemade red sauce']
    },
    imageUrl: '/images/enchiladas.jpg'
  },

  // Asian
  {
    id: 'vegetable-stir-fry',
    name: 'Vegetable Stir Fry',
    cuisine: 'Asian',
    difficulty: 'easy',
    cookTime: 15,
    prepTime: 15,
    servings: 4,
    dietary: ['vegan', 'vegetarian', 'dairy-free'],
    description: 'Quick and colorful vegetables in a savory sauce served over rice.',
    ingredients: [
      { name: 'broccoli', amount: 2, unit: 'cups' },
      { name: 'bell pepper', amount: 2, unit: 'medium' },
      { name: 'carrots', amount: 2, unit: 'medium' },
      { name: 'snap peas', amount: 1, unit: 'cup' },
      { name: 'soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'sesame oil', amount: 2, unit: 'tbsp' },
      { name: 'ginger', amount: 1, unit: 'tbsp' },
      { name: 'garlic', amount: 4, unit: 'cloves' },
      { name: 'rice', amount: 2, unit: 'cups' }
    ],
    instructions: [
      'Cook rice according to package directions.',
      'Cut all vegetables into bite-sized pieces.',
      'Heat sesame oil in a wok or large skillet over high heat.',
      'Add garlic and ginger, stir for 30 seconds.',
      'Add carrots first, cook 2 minutes.',
      'Add broccoli, peppers, and snap peas.',
      'Stir fry for 4-5 minutes until crisp-tender.',
      'Add soy sauce and toss to coat.',
      'Serve over rice with sesame seeds.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 48,
      fat: 8,
      fiber: 6,
      sodium: 720
    },
    substitutions: {
      'soy sauce': ['tamari', 'coconut aminos'],
      'rice': ['quinoa', 'cauliflower rice'],
      'sesame oil': ['vegetable oil', 'peanut oil']
    },
    imageUrl: '/images/stir-fry.jpg'
  },
  {
    id: 'thai-green-curry',
    name: 'Thai Green Curry',
    cuisine: 'Asian',
    difficulty: 'medium',
    cookTime: 25,
    prepTime: 15,
    servings: 4,
    dietary: ['gluten-free', 'dairy-free'],
    description: 'Aromatic Thai curry with vegetables and chicken in creamy coconut sauce.',
    ingredients: [
      { name: 'chicken breast', amount: 1, unit: 'lb' },
      { name: 'coconut milk', amount: 14, unit: 'oz' },
      { name: 'green curry paste', amount: 3, unit: 'tbsp' },
      { name: 'bamboo shoots', amount: 8, unit: 'oz' },
      { name: 'bell pepper', amount: 1, unit: 'large' },
      { name: 'thai basil', amount: 0.5, unit: 'cup' },
      { name: 'fish sauce', amount: 2, unit: 'tbsp' },
      { name: 'brown sugar', amount: 1, unit: 'tbsp' },
      { name: 'jasmine rice', amount: 2, unit: 'cups' }
    ],
    instructions: [
      'Cook jasmine rice according to package directions.',
      'Heat 2 tbsp coconut milk in a large pan over medium-high heat.',
      'Add curry paste and fry for 1 minute until fragrant.',
      'Add sliced chicken and cook until no longer pink.',
      'Pour in remaining coconut milk, bamboo shoots, and peppers.',
      'Simmer for 10 minutes until vegetables are tender.',
      'Season with fish sauce and brown sugar.',
      'Stir in Thai basil just before serving.',
      'Serve over jasmine rice.'
    ],
    nutrition: {
      calories: 480,
      protein: 28,
      carbs: 38,
      fat: 24,
      fiber: 3,
      sodium: 890
    },
    substitutions: {
      'chicken breast': ['tofu', 'shrimp', 'vegetables only'],
      'fish sauce': ['soy sauce', 'coconut aminos'],
      'thai basil': ['regular basil', 'cilantro']
    },
    imageUrl: '/images/green-curry.jpg'
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    cuisine: 'Asian',
    difficulty: 'easy',
    cookTime: 15,
    prepTime: 10,
    servings: 4,
    dietary: ['dairy-free'],
    description: 'Classic takeout-style fried rice with tender chicken and vegetables.',
    ingredients: [
      { name: 'rice', amount: 3, unit: 'cups' },
      { name: 'chicken breast', amount: 0.75, unit: 'lb' },
      { name: 'eggs', amount: 3, unit: 'whole' },
      { name: 'peas', amount: 1, unit: 'cup' },
      { name: 'carrots', amount: 2, unit: 'medium' },
      { name: 'green onions', amount: 4, unit: 'stalks' },
      { name: 'soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'sesame oil', amount: 1, unit: 'tbsp' },
      { name: 'garlic', amount: 3, unit: 'cloves' }
    ],
    instructions: [
      'Use day-old cold rice for best results.',
      'Dice chicken into small pieces and cook in a wok until done, set aside.',
      'Scramble eggs in the same wok, set aside.',
      'Stir-fry diced carrots and peas with garlic for 2 minutes.',
      'Add cold rice, breaking up any clumps.',
      'Drizzle soy sauce and sesame oil over rice.',
      'Add back chicken and eggs, toss everything together.',
      'Stir-fry for 3-4 minutes until rice is slightly crispy.',
      'Garnish with sliced green onions.'
    ],
    nutrition: {
      calories: 420,
      protein: 26,
      carbs: 52,
      fat: 12,
      fiber: 4,
      sodium: 780
    },
    substitutions: {
      'chicken breast': ['shrimp', 'tofu', 'pork'],
      'soy sauce': ['tamari', 'coconut aminos'],
      'rice': ['cauliflower rice', 'quinoa']
    },
    imageUrl: '/images/fried-rice.jpg'
  },
  {
    id: 'ramen-noodle-bowl',
    name: 'Ramen Noodle Bowl',
    cuisine: 'Asian',
    difficulty: 'medium',
    cookTime: 30,
    prepTime: 15,
    servings: 2,
    dietary: ['dairy-free'],
    description: 'Rich, savory ramen with soft-boiled eggs and tender pork.',
    ingredients: [
      { name: 'ramen noodles', amount: 2, unit: 'packs' },
      { name: 'chicken broth', amount: 4, unit: 'cups' },
      { name: 'pork belly', amount: 8, unit: 'oz' },
      { name: 'eggs', amount: 2, unit: 'whole' },
      { name: 'green onions', amount: 3, unit: 'stalks' },
      { name: 'nori', amount: 2, unit: 'sheets' },
      { name: 'soy sauce', amount: 2, unit: 'tbsp' },
      { name: 'miso paste', amount: 2, unit: 'tbsp' },
      { name: 'garlic', amount: 4, unit: 'cloves' }
    ],
    instructions: [
      'Bring a pot of water to boil for eggs. Cook eggs for 6.5 minutes, then ice bath.',
      'Slice pork belly and pan-fry until crispy on both sides.',
      'Heat broth with garlic, soy sauce, and miso paste.',
      'Cook ramen noodles according to package directions.',
      'Divide noodles between two bowls.',
      'Ladle hot broth over noodles.',
      'Top with sliced pork, halved soft-boiled eggs, green onions, and nori.',
      'Add chili oil if desired.'
    ],
    nutrition: {
      calories: 580,
      protein: 32,
      carbs: 48,
      fat: 28,
      fiber: 3,
      sodium: 1200
    },
    substitutions: {
      'pork belly': ['chicken', 'tofu', 'mushrooms'],
      'ramen noodles': ['rice noodles', 'zucchini noodles'],
      'chicken broth': ['vegetable broth', 'bone broth']
    },
    imageUrl: '/images/ramen.jpg'
  },

  // American
  {
    id: 'classic-cheeseburger',
    name: 'Classic Cheeseburger',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 15,
    prepTime: 10,
    servings: 4,
    dietary: [],
    description: 'Juicy beef patties with melted cheese and all the classic toppings.',
    ingredients: [
      { name: 'ground beef', amount: 1.5, unit: 'lb' },
      { name: 'burger buns', amount: 4, unit: 'pieces' },
      { name: 'cheddar cheese', amount: 4, unit: 'slices' },
      { name: 'lettuce', amount: 4, unit: 'leaves' },
      { name: 'tomato', amount: 1, unit: 'large' },
      { name: 'onion', amount: 1, unit: 'medium' },
      { name: 'pickles', amount: 8, unit: 'slices' },
      { name: 'ketchup', amount: 4, unit: 'tbsp' },
      { name: 'mustard', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Divide beef into 4 equal portions and shape into patties.',
      'Season generously with salt and pepper.',
      'Heat grill or skillet to medium-high.',
      'Cook patties 4-5 minutes per side for medium.',
      'Add cheese slice in last minute to melt.',
      'Toast buns on the grill.',
      'Layer lettuce, tomato, and onion on bottom bun.',
      'Add patty with cheese, pickles, ketchup, and mustard.',
      'Top with bun and serve.'
    ],
    nutrition: {
      calories: 650,
      protein: 38,
      carbs: 35,
      fat: 40,
      fiber: 2,
      sodium: 920
    },
    substitutions: {
      'ground beef': ['turkey', 'impossible burger', 'black bean patty'],
      'burger buns': ['lettuce wrap', 'gluten-free bun'],
      'cheddar cheese': ['swiss', 'pepper jack', 'vegan cheese']
    },
    imageUrl: '/images/cheeseburger.jpg'
  },
  {
    id: 'mac-and-cheese',
    name: 'Creamy Mac and Cheese',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 25,
    prepTime: 10,
    servings: 6,
    dietary: ['vegetarian'],
    description: 'Ultra-creamy baked macaroni with a crispy breadcrumb topping.',
    ingredients: [
      { name: 'elbow macaroni', amount: 1, unit: 'lb' },
      { name: 'cheddar cheese', amount: 3, unit: 'cups' },
      { name: 'milk', amount: 2.5, unit: 'cups' },
      { name: 'butter', amount: 4, unit: 'tbsp' },
      { name: 'flour', amount: 3, unit: 'tbsp' },
      { name: 'breadcrumbs', amount: 0.5, unit: 'cup' },
      { name: 'mustard powder', amount: 0.5, unit: 'tsp' },
      { name: 'paprika', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cook macaroni until just al dente, drain.',
      'Melt butter in a large pot, whisk in flour.',
      'Gradually add milk, whisking constantly.',
      'Cook until thickened, about 5 minutes.',
      'Remove from heat, stir in 2.5 cups cheese and mustard.',
      'Fold in cooked macaroni.',
      'Transfer to baking dish, top with remaining cheese and breadcrumbs.',
      'Bake 20 minutes until golden and bubbly.'
    ],
    nutrition: {
      calories: 520,
      protein: 22,
      carbs: 48,
      fat: 26,
      fiber: 2,
      sodium: 680
    },
    substitutions: {
      'elbow macaroni': ['shells', 'gluten-free pasta'],
      'cheddar cheese': ['gruyere', 'vegan cheese'],
      'milk': ['oat milk', 'almond milk']
    },
    imageUrl: '/images/mac-cheese.jpg'
  },
  {
    id: 'bbq-pulled-pork',
    name: 'BBQ Pulled Pork',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 480,
    prepTime: 15,
    servings: 8,
    dietary: ['gluten-free', 'dairy-free'],
    description: 'Slow-cooked pork shoulder with tangy homemade BBQ sauce.',
    ingredients: [
      { name: 'pork shoulder', amount: 4, unit: 'lb' },
      { name: 'bbq sauce', amount: 2, unit: 'cups' },
      { name: 'apple cider vinegar', amount: 0.25, unit: 'cup' },
      { name: 'brown sugar', amount: 2, unit: 'tbsp' },
      { name: 'paprika', amount: 2, unit: 'tsp' },
      { name: 'garlic powder', amount: 1, unit: 'tsp' },
      { name: 'onion powder', amount: 1, unit: 'tsp' },
      { name: 'hamburger buns', amount: 8, unit: 'pieces' }
    ],
    instructions: [
      'Combine paprika, garlic powder, onion powder, and brown sugar for rub.',
      'Coat pork shoulder with the spice rub.',
      'Place in slow cooker with apple cider vinegar.',
      'Cook on low for 8 hours or high for 4 hours.',
      'Remove pork and shred with two forks.',
      'Discard excess liquid, return pork to cooker.',
      'Add BBQ sauce and stir to combine.',
      'Cook additional 30 minutes on low.',
      'Serve on toasted buns with coleslaw.'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbs: 32,
      fat: 18,
      fiber: 1,
      sodium: 780
    },
    substitutions: {
      'pork shoulder': ['chicken thighs', 'jackfruit'],
      'hamburger buns': ['brioche buns', 'gluten-free buns'],
      'bbq sauce': ['carolina mustard sauce', 'alabama white sauce']
    },
    imageUrl: '/images/pulled-pork.jpg'
  },

  // Mediterranean
  {
    id: 'greek-salad',
    name: 'Classic Greek Salad',
    cuisine: 'Mediterranean',
    difficulty: 'easy',
    cookTime: 0,
    prepTime: 15,
    servings: 4,
    dietary: ['vegetarian', 'gluten-free'],
    description: 'Fresh and crisp salad with feta, olives, and tangy dressing.',
    ingredients: [
      { name: 'cucumber', amount: 2, unit: 'large' },
      { name: 'tomato', amount: 4, unit: 'medium' },
      { name: 'red onion', amount: 1, unit: 'small' },
      { name: 'feta cheese', amount: 8, unit: 'oz' },
      { name: 'kalamata olives', amount: 1, unit: 'cup' },
      { name: 'olive oil', amount: 4, unit: 'tbsp' },
      { name: 'red wine vinegar', amount: 2, unit: 'tbsp' },
      { name: 'oregano', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Cut cucumbers into half-moons and tomatoes into wedges.',
      'Slice red onion into thin rings.',
      'Combine vegetables in a large bowl.',
      'Add olives and crumbled feta cheese.',
      'Whisk together olive oil, vinegar, and oregano.',
      'Drizzle dressing over salad and toss gently.',
      'Season with salt and pepper to taste.',
      'Serve immediately or refrigerate up to 2 hours.'
    ],
    nutrition: {
      calories: 280,
      protein: 9,
      carbs: 12,
      fat: 24,
      fiber: 3,
      sodium: 680
    },
    substitutions: {
      'feta cheese': ['vegan feta', 'goat cheese'],
      'kalamata olives': ['black olives', 'green olives'],
      'red wine vinegar': ['lemon juice', 'balsamic vinegar']
    },
    imageUrl: '/images/greek-salad.jpg'
  },
  {
    id: 'falafel-wrap',
    name: 'Falafel Wrap',
    cuisine: 'Mediterranean',
    difficulty: 'medium',
    cookTime: 20,
    prepTime: 30,
    servings: 4,
    dietary: ['vegan', 'vegetarian', 'dairy-free'],
    description: 'Crispy homemade falafel with fresh vegetables and tahini sauce.',
    ingredients: [
      { name: 'chickpeas', amount: 15, unit: 'oz' },
      { name: 'pita bread', amount: 4, unit: 'pieces' },
      { name: 'tahini', amount: 0.5, unit: 'cup' },
      { name: 'cucumber', amount: 1, unit: 'medium' },
      { name: 'tomato', amount: 2, unit: 'medium' },
      { name: 'lettuce', amount: 2, unit: 'cups' },
      { name: 'garlic', amount: 4, unit: 'cloves' },
      { name: 'cumin', amount: 1, unit: 'tsp' },
      { name: 'parsley', amount: 0.5, unit: 'cup' }
    ],
    instructions: [
      'Drain and rinse chickpeas, pat dry.',
      'Pulse chickpeas in food processor with garlic, parsley, cumin.',
      'Form mixture into small patties.',
      'Refrigerate for 30 minutes.',
      'Pan-fry falafel in oil until golden on both sides.',
      'Make tahini sauce: mix tahini with lemon juice and water.',
      'Dice cucumber and tomatoes.',
      'Warm pita bread and fill with falafel, vegetables, and tahini sauce.'
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 48,
      fat: 16,
      fiber: 10,
      sodium: 520
    },
    substitutions: {
      'pita bread': ['lavash', 'lettuce wraps', 'gluten-free flatbread'],
      'chickpeas': ['fava beans', 'white beans'],
      'tahini': ['hummus', 'greek yogurt']
    },
    imageUrl: '/images/falafel.jpg'
  },
  {
    id: 'hummus-platter',
    name: 'Creamy Hummus Platter',
    cuisine: 'Mediterranean',
    difficulty: 'easy',
    cookTime: 0,
    prepTime: 15,
    servings: 6,
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    description: 'Silky smooth hummus served with pita and fresh vegetables.',
    ingredients: [
      { name: 'chickpeas', amount: 30, unit: 'oz' },
      { name: 'tahini', amount: 0.5, unit: 'cup' },
      { name: 'lemon', amount: 2, unit: 'whole' },
      { name: 'garlic', amount: 3, unit: 'cloves' },
      { name: 'olive oil', amount: 4, unit: 'tbsp' },
      { name: 'paprika', amount: 1, unit: 'tsp' },
      { name: 'carrots', amount: 4, unit: 'medium' },
      { name: 'cucumber', amount: 1, unit: 'large' },
      { name: 'pita bread', amount: 4, unit: 'pieces' }
    ],
    instructions: [
      'Drain chickpeas, reserving liquid (aquafaba).',
      'Blend tahini and lemon juice for 1 minute until fluffy.',
      'Add garlic, salt, and cumin, blend again.',
      'Add chickpeas and blend until smooth.',
      'Stream in ice water until desired consistency.',
      'Transfer to bowl, drizzle with olive oil and paprika.',
      'Cut vegetables into sticks for dipping.',
      'Warm and slice pita bread.',
      'Arrange platter and serve.'
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 38,
      fat: 16,
      fiber: 8,
      sodium: 380
    },
    substitutions: {
      'chickpeas': ['white beans', 'edamame'],
      'tahini': ['sunflower seed butter', 'cashew butter'],
      'pita bread': ['veggie sticks only', 'crackers']
    },
    imageUrl: '/images/hummus.jpg'
  },

  // Indian
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    cuisine: 'Indian',
    difficulty: 'medium',
    cookTime: 35,
    prepTime: 20,
    servings: 4,
    dietary: ['gluten-free'],
    description: 'Tender chicken in a rich, creamy tomato-based curry sauce.',
    ingredients: [
      { name: 'chicken thighs', amount: 1.5, unit: 'lb' },
      { name: 'tomato sauce', amount: 14, unit: 'oz' },
      { name: 'heavy cream', amount: 1, unit: 'cup' },
      { name: 'butter', amount: 4, unit: 'tbsp' },
      { name: 'garam masala', amount: 2, unit: 'tsp' },
      { name: 'turmeric', amount: 1, unit: 'tsp' },
      { name: 'ginger', amount: 2, unit: 'tbsp' },
      { name: 'garlic', amount: 6, unit: 'cloves' },
      { name: 'basmati rice', amount: 2, unit: 'cups' }
    ],
    instructions: [
      'Cut chicken into bite-sized pieces, marinate in yogurt and spices.',
      'Cook basmati rice according to package directions.',
      'Sear marinated chicken in butter until golden, set aside.',
      'Sauté ginger and garlic in the same pan.',
      'Add tomato sauce, garam masala, and turmeric.',
      'Simmer for 10 minutes.',
      'Stir in heavy cream and return chicken to pan.',
      'Cook for 10-15 minutes until chicken is cooked through.',
      'Garnish with cilantro and serve over rice.'
    ],
    nutrition: {
      calories: 580,
      protein: 38,
      carbs: 42,
      fat: 30,
      fiber: 3,
      sodium: 720
    },
    substitutions: {
      'chicken thighs': ['paneer', 'tofu', 'chickpeas'],
      'heavy cream': ['coconut cream', 'cashew cream'],
      'butter': ['ghee', 'oil']
    },
    imageUrl: '/images/butter-chicken.jpg'
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    cuisine: 'Indian',
    difficulty: 'easy',
    cookTime: 30,
    prepTime: 10,
    servings: 4,
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    description: 'Comforting spiced lentils tempered with aromatic spices.',
    ingredients: [
      { name: 'red lentils', amount: 1.5, unit: 'cups' },
      { name: 'onion', amount: 1, unit: 'large' },
      { name: 'tomato', amount: 2, unit: 'medium' },
      { name: 'garlic', amount: 4, unit: 'cloves' },
      { name: 'ginger', amount: 1, unit: 'tbsp' },
      { name: 'cumin seeds', amount: 1, unit: 'tsp' },
      { name: 'turmeric', amount: 0.5, unit: 'tsp' },
      { name: 'ghee', amount: 3, unit: 'tbsp' },
      { name: 'cilantro', amount: 0.25, unit: 'cup' }
    ],
    instructions: [
      'Rinse lentils and cook with turmeric until soft, about 20 minutes.',
      'Mash lentils slightly for creamy texture.',
      'For tadka: heat ghee in a small pan.',
      'Add cumin seeds and let them splutter.',
      'Add chopped onion and cook until golden.',
      'Add garlic, ginger, and diced tomatoes.',
      'Cook until tomatoes break down.',
      'Pour tadka over cooked lentils and stir.',
      'Garnish with fresh cilantro and serve with rice.'
    ],
    nutrition: {
      calories: 280,
      protein: 16,
      carbs: 38,
      fat: 8,
      fiber: 12,
      sodium: 380
    },
    substitutions: {
      'red lentils': ['yellow lentils', 'moong dal'],
      'ghee': ['coconut oil', 'vegetable oil'],
      'cilantro': ['parsley', 'mint']
    },
    imageUrl: '/images/dal.jpg'
  },
  {
    id: 'vegetable-biryani',
    name: 'Vegetable Biryani',
    cuisine: 'Indian',
    difficulty: 'hard',
    cookTime: 45,
    prepTime: 30,
    servings: 6,
    dietary: ['vegetarian', 'gluten-free'],
    description: 'Fragrant layered rice dish with spiced vegetables and saffron.',
    ingredients: [
      { name: 'basmati rice', amount: 2, unit: 'cups' },
      { name: 'mixed vegetables', amount: 3, unit: 'cups' },
      { name: 'yogurt', amount: 1, unit: 'cup' },
      { name: 'onion', amount: 2, unit: 'large' },
      { name: 'saffron', amount: 1, unit: 'pinch' },
      { name: 'garam masala', amount: 2, unit: 'tsp' },
      { name: 'ghee', amount: 4, unit: 'tbsp' },
      { name: 'mint', amount: 0.25, unit: 'cup' },
      { name: 'cashews', amount: 0.25, unit: 'cup' }
    ],
    instructions: [
      'Soak rice for 30 minutes, then parboil until 70% done.',
      'Fry onions in ghee until deep golden (birista).',
      'Cook vegetables with yogurt, garam masala, and spices.',
      'Soak saffron in warm milk.',
      'Layer: vegetable mixture, then rice, then fried onions.',
      'Drizzle saffron milk over top.',
      'Cover tightly and cook on low heat for 25 minutes.',
      'Let rest 5 minutes before fluffing.',
      'Garnish with cashews and fresh mint.'
    ],
    nutrition: {
      calories: 420,
      protein: 10,
      carbs: 62,
      fat: 16,
      fiber: 5,
      sodium: 480
    },
    substitutions: {
      'yogurt': ['coconut yogurt'],
      'ghee': ['oil'],
      'cashews': ['almonds', 'raisins']
    },
    imageUrl: '/images/biryani.jpg'
  },

  // Breakfast
  {
    id: 'fluffy-pancakes',
    name: 'Fluffy Buttermilk Pancakes',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 20,
    prepTime: 10,
    servings: 4,
    dietary: ['vegetarian'],
    description: 'Light and fluffy pancakes perfect for weekend breakfasts.',
    ingredients: [
      { name: 'flour', amount: 2, unit: 'cups' },
      { name: 'buttermilk', amount: 2, unit: 'cups' },
      { name: 'eggs', amount: 2, unit: 'whole' },
      { name: 'butter', amount: 4, unit: 'tbsp' },
      { name: 'sugar', amount: 3, unit: 'tbsp' },
      { name: 'baking powder', amount: 2, unit: 'tsp' },
      { name: 'vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'maple syrup', amount: 0.5, unit: 'cup' }
    ],
    instructions: [
      'Mix flour, sugar, baking powder, and salt in a bowl.',
      'Whisk buttermilk, eggs, melted butter, and vanilla separately.',
      'Combine wet and dry ingredients, mixing until just combined.',
      'Let batter rest 5 minutes.',
      'Heat a griddle or pan over medium heat.',
      'Pour 1/4 cup batter per pancake.',
      'Cook until bubbles form on surface, then flip.',
      'Cook until golden brown on both sides.',
      'Serve with butter and warm maple syrup.'
    ],
    nutrition: {
      calories: 380,
      protein: 10,
      carbs: 58,
      fat: 12,
      fiber: 1,
      sodium: 520
    },
    substitutions: {
      'buttermilk': ['milk + lemon juice', 'oat milk + vinegar'],
      'flour': ['whole wheat flour', 'gluten-free flour blend'],
      'eggs': ['flax eggs', 'banana']
    },
    imageUrl: '/images/pancakes.jpg'
  },
  {
    id: 'veggie-omelette',
    name: 'Garden Vegetable Omelette',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 10,
    prepTime: 10,
    servings: 1,
    dietary: ['vegetarian', 'gluten-free', 'low-carb'],
    description: 'Protein-packed omelette filled with fresh vegetables and cheese.',
    ingredients: [
      { name: 'eggs', amount: 3, unit: 'whole' },
      { name: 'bell pepper', amount: 0.5, unit: 'medium' },
      { name: 'mushrooms', amount: 4, unit: 'medium' },
      { name: 'spinach', amount: 1, unit: 'cup' },
      { name: 'cheese', amount: 0.25, unit: 'cup' },
      { name: 'butter', amount: 1, unit: 'tbsp' },
      { name: 'milk', amount: 2, unit: 'tbsp' },
      { name: 'chives', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Beat eggs with milk, salt, and pepper.',
      'Dice bell pepper and slice mushrooms.',
      'Sauté vegetables in butter until tender, set aside.',
      'Wipe pan clean, add more butter over medium heat.',
      'Pour in egg mixture, let set for 30 seconds.',
      'Gently push edges in, tilting pan to let raw egg flow.',
      'When almost set, add vegetables, spinach, and cheese to one half.',
      'Fold omelette over and slide onto plate.',
      'Garnish with chives and serve.'
    ],
    nutrition: {
      calories: 380,
      protein: 24,
      carbs: 8,
      fat: 28,
      fiber: 2,
      sodium: 520
    },
    substitutions: {
      'eggs': ['egg whites', 'just egg'],
      'cheese': ['vegan cheese', 'nutritional yeast'],
      'butter': ['olive oil', 'cooking spray']
    },
    imageUrl: '/images/omelette.jpg'
  },
  {
    id: 'smoothie-bowl',
    name: 'Acai Smoothie Bowl',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 0,
    prepTime: 10,
    servings: 1,
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    description: 'Thick and creamy acai bowl topped with granola, fruit, and seeds.',
    ingredients: [
      { name: 'acai packet', amount: 1, unit: 'frozen' },
      { name: 'banana', amount: 1.5, unit: 'whole' },
      { name: 'mixed berries', amount: 0.5, unit: 'cup' },
      { name: 'almond milk', amount: 0.5, unit: 'cup' },
      { name: 'granola', amount: 0.25, unit: 'cup' },
      { name: 'chia seeds', amount: 1, unit: 'tbsp' },
      { name: 'honey', amount: 1, unit: 'tbsp' },
      { name: 'coconut flakes', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Break frozen acai packet into pieces.',
      'Blend acai with 1 banana, berries, and almond milk.',
      'Blend until thick and smooth (should be thicker than a smoothie).',
      'Pour into a bowl.',
      'Slice remaining half banana.',
      'Top with granola, sliced banana, chia seeds, and coconut.',
      'Drizzle with honey or nut butter.',
      'Serve immediately before it melts.'
    ],
    nutrition: {
      calories: 380,
      protein: 6,
      carbs: 68,
      fat: 12,
      fiber: 10,
      sodium: 45
    },
    substitutions: {
      'acai packet': ['pitaya (dragon fruit)', 'frozen blueberries'],
      'almond milk': ['coconut milk', 'oat milk'],
      'honey': ['maple syrup', 'agave']
    },
    imageUrl: '/images/smoothie-bowl.jpg'
  },

  // Desserts
  {
    id: 'chocolate-brownies',
    name: 'Fudgy Chocolate Brownies',
    cuisine: 'American',
    difficulty: 'easy',
    cookTime: 30,
    prepTime: 15,
    servings: 12,
    dietary: ['vegetarian'],
    description: 'Rich, fudgy brownies with a crackly top and gooey center.',
    ingredients: [
      { name: 'butter', amount: 0.75, unit: 'cup' },
      { name: 'sugar', amount: 1.5, unit: 'cups' },
      { name: 'cocoa powder', amount: 0.75, unit: 'cup' },
      { name: 'eggs', amount: 3, unit: 'whole' },
      { name: 'flour', amount: 1, unit: 'cup' },
      { name: 'vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'chocolate chips', amount: 1, unit: 'cup' },
      { name: 'salt', amount: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line 9x13 pan with parchment.',
      'Melt butter and mix with sugar and cocoa powder.',
      'Add eggs one at a time, beating well after each.',
      'Stir in vanilla.',
      'Fold in flour and salt until just combined.',
      'Fold in chocolate chips.',
      'Spread batter in prepared pan.',
      'Bake 25-30 minutes until toothpick comes out with moist crumbs.',
      'Cool completely before cutting.'
    ],
    nutrition: {
      calories: 280,
      protein: 4,
      carbs: 38,
      fat: 14,
      fiber: 2,
      sodium: 180
    },
    substitutions: {
      'butter': ['coconut oil', 'vegan butter'],
      'eggs': ['flax eggs', 'applesauce'],
      'flour': ['almond flour', 'gluten-free flour']
    },
    imageUrl: '/images/brownies.jpg'
  },
  {
    id: 'new-york-cheesecake',
    name: 'New York Cheesecake',
    cuisine: 'American',
    difficulty: 'hard',
    cookTime: 75,
    prepTime: 30,
    servings: 12,
    dietary: ['vegetarian'],
    description: 'Dense, creamy cheesecake with a buttery graham cracker crust.',
    ingredients: [
      { name: 'cream cheese', amount: 32, unit: 'oz' },
      { name: 'sugar', amount: 1, unit: 'cup' },
      { name: 'eggs', amount: 4, unit: 'whole' },
      { name: 'sour cream', amount: 1, unit: 'cup' },
      { name: 'graham crackers', amount: 2, unit: 'cups' },
      { name: 'butter', amount: 6, unit: 'tbsp' },
      { name: 'vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'lemon juice', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Preheat oven to 325°F (165°C).',
      'Mix graham cracker crumbs with melted butter.',
      'Press into bottom of 9-inch springform pan.',
      'Bake crust 10 minutes, cool.',
      'Beat cream cheese until smooth.',
      'Add sugar, then eggs one at a time.',
      'Mix in sour cream, vanilla, and lemon juice.',
      'Pour over crust and bake 55-60 minutes.',
      'Turn off oven, crack door, let cool 1 hour inside.',
      'Refrigerate at least 4 hours before serving.'
    ],
    nutrition: {
      calories: 420,
      protein: 7,
      carbs: 32,
      fat: 30,
      fiber: 0,
      sodium: 380
    },
    substitutions: {
      'cream cheese': ['vegan cream cheese'],
      'sour cream': ['greek yogurt', 'coconut cream'],
      'graham crackers': ['digestive biscuits', 'oreo cookies']
    },
    imageUrl: '/images/cheesecake.jpg'
  }
];

// Helper function to get all unique ingredients
export const getAllIngredients = () => {
  const ingredientSet = new Set();
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      ingredientSet.add(ing.name.toLowerCase());
    });
  });
  return Array.from(ingredientSet).sort();
};

// Helper function to get all cuisines
export const getCuisines = () => {
  return [...new Set(recipes.map(r => r.cuisine))];
};

// Helper function to get all dietary options
export const getDietaryOptions = () => {
  const options = new Set();
  recipes.forEach(recipe => {
    recipe.dietary.forEach(d => options.add(d));
  });
  return Array.from(options);
};

export default recipes;
