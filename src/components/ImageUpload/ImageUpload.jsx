// Image upload component with drag & drop and ingredient recognition
import { useState, useRef, useCallback } from 'react';
import { analyzeImage, validateFoodImage, createImagePreview, revokeImagePreview } from '../../services/imageRecognition';
import './ImageUpload.css';

const ImageUpload = ({ onIngredientsDetected, onError }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [preview, setPreview] = useState(null);
    const [detectedIngredients, setDetectedIngredients] = useState([]);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFile = useCallback(async (file) => {
        setError(null);
        setDetectedIngredients([]);

        // Validate file
        const validation = await validateFoodImage(file);
        if (!validation.valid) {
            setError(validation.error);
            onError?.(validation.error);
            return;
        }

        // Create preview
        const previewUrl = createImagePreview(file);
        setPreview(previewUrl);

        // Analyze image
        setIsAnalyzing(true);
        try {
            const result = await analyzeImage(file);

            if (result.success && result.ingredients.length > 0) {
                setDetectedIngredients(result.ingredients);
                onIngredientsDetected?.(result.ingredients, result.source);
            } else {
                setError('No ingredients detected. Try a clearer image or add ingredients manually.');
            }
        } catch (err) {
            setError('Failed to analyze image. Please try again.');
            onError?.(err.message);
        } finally {
            setIsAnalyzing(false);
        }
    }, [onIngredientsDetected, onError]);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    }, [handleFile]);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleFileSelect = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    }, [handleFile]);

    const handleClick = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const handleClear = useCallback(() => {
        if (preview) {
            revokeImagePreview(preview);
        }
        setPreview(null);
        setDetectedIngredients([]);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [preview]);

    const handleAddAll = useCallback(() => {
        if (detectedIngredients.length > 0) {
            onIngredientsDetected?.(detectedIngredients, 'confirmed');
        }
    }, [detectedIngredients, onIngredientsDetected]);

    return (
        <div className="image-upload">
            <div
                className={`upload-zone ${isDragging ? 'dragging' : ''} ${preview ? 'has-preview' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={!preview ? handleClick : undefined}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="file-input"
                />

                {!preview ? (
                    <div className="upload-placeholder">
                        <div className="upload-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21,15 16,10 5,21" />
                            </svg>
                        </div>
                        <p className="upload-text">
                            <span className="upload-highlight">Upload a photo</span> of your ingredients
                        </p>
                        <p className="upload-hint">or drag and drop</p>
                        <p className="upload-formats">JPG, PNG, WebP up to 10MB</p>
                    </div>
                ) : (
                    <div className="preview-container">
                        <img src={preview} alt="Uploaded ingredients" className="preview-image" />

                        {isAnalyzing && (
                            <div className="analyzing-overlay">
                                <div className="analyzing-spinner"></div>
                                <p>Analyzing ingredients...</p>
                            </div>
                        )}

                        <button className="clear-button" onClick={handleClear} aria-label="Clear image">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {error && (
                <div className="upload-error">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            {detectedIngredients.length > 0 && (
                <div className="detected-ingredients">
                    <div className="detected-header">
                        <h4>Detected Ingredients</h4>
                        <span className="detected-count">{detectedIngredients.length} found</span>
                    </div>
                    <div className="detected-list">
                        {detectedIngredients.map((ingredient, index) => (
                            <span key={index} className="detected-tag">
                                {ingredient}
                            </span>
                        ))}
                    </div>
                    <button className="add-all-button" onClick={handleAddAll}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Add All to Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
