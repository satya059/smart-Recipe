// Image recognition service using Google Cloud Vision API or fallback
import { ingredientLabels, allIngredients } from '../data/ingredients';

// Configuration - You can replace with your own API key
const VISION_API_KEY = import.meta.env.VITE_GOOGLE_VISION_API_KEY || '';
const VISION_API_URL = 'https://vision.googleapis.com/v1/images:annotate';

/**
 * Analyze image using Google Cloud Vision API
 * @param {File|string} image - Image file or base64 string
 * @returns {Promise<Object>} Analysis results with detected ingredients
 */
export const analyzeImage = async (image) => {
    // If no API key, use demo mode
    if (!VISION_API_KEY) {
        return analyzeImageDemo(image);
    }

    try {
        // Convert to base64 if file
        let base64Image;
        if (image instanceof File) {
            base64Image = await fileToBase64(image);
        } else {
            base64Image = image;
        }

        // Remove data URL prefix if present
        base64Image = base64Image.replace(/^data:image\/\w+;base64,/, '');

        const response = await fetch(`${VISION_API_URL}?key=${VISION_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requests: [{
                    image: { content: base64Image },
                    features: [
                        { type: 'LABEL_DETECTION', maxResults: 20 },
                        { type: 'OBJECT_LOCALIZATION', maxResults: 10 }
                    ]
                }]
            })
        });

        if (!response.ok) {
            throw new Error('Vision API request failed');
        }

        const data = await response.json();
        return processVisionResults(data);

    } catch (error) {
        console.error('Image analysis error:', error);
        // Fall back to demo mode on error
        return analyzeImageDemo(image);
    }
};

/**
 * Process Vision API results and extract ingredients
 */
const processVisionResults = (data) => {
    const detectedIngredients = new Set();
    const allLabels = [];

    // Process label annotations
    if (data.responses?.[0]?.labelAnnotations) {
        data.responses[0].labelAnnotations.forEach(label => {
            allLabels.push({
                name: label.description,
                confidence: label.score
            });

            // Match label to known ingredients
            const matchedIngredient = matchLabelToIngredient(label.description);
            if (matchedIngredient) {
                detectedIngredients.add(matchedIngredient);
            }
        });
    }

    // Process object localizations
    if (data.responses?.[0]?.localizedObjectAnnotations) {
        data.responses[0].localizedObjectAnnotations.forEach(obj => {
            const matchedIngredient = matchLabelToIngredient(obj.name);
            if (matchedIngredient) {
                detectedIngredients.add(matchedIngredient);
            }
        });
    }

    return {
        success: true,
        ingredients: Array.from(detectedIngredients),
        rawLabels: allLabels,
        source: 'vision-api'
    };
};

/**
 * Match a label to a known ingredient
 */
const matchLabelToIngredient = (label) => {
    const normalizedLabel = label.toLowerCase();

    // Check direct mapping first
    if (ingredientLabels[normalizedLabel]) {
        return ingredientLabels[normalizedLabel];
    }

    // Check if label contains any known ingredient
    for (const [key, value] of Object.entries(ingredientLabels)) {
        if (normalizedLabel.includes(key) || key.includes(normalizedLabel)) {
            return value;
        }
    }

    // Check against all ingredients list
    const match = allIngredients.find(ing =>
        normalizedLabel.includes(ing.toLowerCase()) ||
        ing.toLowerCase().includes(normalizedLabel)
    );

    return match || null;
};

/**
 * Demo mode - simulates image recognition
 * Returns random ingredients for demonstration
 */
const analyzeImageDemo = async (image) => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Common ingredient sets for demo
    const demoSets = [
        ['tomato', 'onion', 'garlic', 'bell pepper', 'olive oil'],
        ['chicken breast', 'rice', 'broccoli', 'soy sauce', 'garlic'],
        ['eggs', 'cheese', 'spinach', 'mushrooms', 'butter'],
        ['pasta', 'tomato sauce', 'garlic', 'parmesan cheese', 'fresh basil'],
        ['avocado', 'lime', 'cilantro', 'tomato', 'onion'],
        ['banana', 'mixed berries', 'milk', 'honey', 'granola'],
        ['ground beef', 'lettuce', 'tomato', 'cheese', 'burger buns']
    ];

    // Select a random set
    const randomSet = demoSets[Math.floor(Math.random() * demoSets.length)];

    return {
        success: true,
        ingredients: randomSet,
        rawLabels: randomSet.map(name => ({ name, confidence: 0.85 + Math.random() * 0.1 })),
        source: 'demo',
        message: 'Demo mode: Using simulated ingredient detection. Add VITE_GOOGLE_VISION_API_KEY to enable real image analysis.'
    };
};

/**
 * Convert file to base64 string
 */
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

/**
 * Validate if image is a food image (basic check)
 */
export const validateFoodImage = async (image) => {
    // This would ideally check if the image contains food
    // For now, just validate file type and size
    if (image instanceof File) {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!validTypes.includes(image.type)) {
            return { valid: false, error: 'Please upload a JPEG, PNG, or WebP image.' };
        }

        if (image.size > maxSize) {
            return { valid: false, error: 'Image size must be less than 10MB.' };
        }
    }

    return { valid: true };
};

/**
 * Create image preview URL
 */
export const createImagePreview = (file) => {
    return URL.createObjectURL(file);
};

/**
 * Revoke image preview URL to free memory
 */
export const revokeImagePreview = (url) => {
    URL.revokeObjectURL(url);
};

export default {
    analyzeImage,
    validateFoodImage,
    createImagePreview,
    revokeImagePreview
};
