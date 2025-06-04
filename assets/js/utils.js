/* ==========================================================================
   Infografía IA - Utility Functions Module
   ========================================================================== */

/**
 * Hide loading element by ID
 * @param {string} loadingId - The ID of the loading element
 */
const hideLoading = (loadingId) => {
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
};

/**
 * Show error message on canvas
 * @param {string} canvasId - The ID of the canvas element
 * @param {string} message - Error message to display
 */
const showError = (canvasId, message) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF6B6B';
    ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
};

/**
 * Wrap long labels for better chart display
 * @param {string} label - The label to wrap
 * @param {number} maxWidth - Maximum width for each line
 * @returns {string|string[]} - Wrapped label
 */
const wrapLabel = (label, maxWidth = 16) => {
    if (label.length <= maxWidth) {
        return label;
    }
    const words = label.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach(word => {
        if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
            lines.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += word + ' ';
    });
    lines.push(currentLine.trim());
    return lines;
};

/**
 * Tooltip title callback for charts
 * @param {Array} tooltipItems - Tooltip items array
 * @returns {string} - Formatted title
 */
const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label)) {
        return label.join(' ');
    }
    return label;
};

/**
 * Wait for Chart.js library to be loaded
 * @param {Function} callback - Function to call when Chart.js is ready
 */
const waitForChartJS = (callback) => {
    if (typeof Chart !== 'undefined') {
        callback();
    } else {
        setTimeout(() => waitForChartJS(callback), 100);
    }
};

/**
 * Check if required DOM element exists
 * @param {string} elementId - The ID of the element to check
 * @returns {HTMLElement|null} - The element or null if not found
 */
const getCanvasElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`Canvas element "${elementId}" not found`);
    }
    return element;
};

/**
 * Get 2D context from canvas element
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @returns {CanvasRenderingContext2D} - The 2D context
 */
const getCanvasContext = (canvas) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not get 2D context from canvas');
    }
    return ctx;
};
