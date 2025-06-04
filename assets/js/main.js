/* ==========================================================================
   Infografía IA - Main Application Module
   ========================================================================== */

/**
 * Initialize all charts with error handling
 */
function initializeCharts() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js failed to load');
        document.querySelectorAll('.chart-loading').forEach(el => {
            el.textContent = 'Error: No se pudo cargar la librería de gráficos';
            el.style.color = '#FF6B6B';
        });
        return;
    }

    // Check if config is loaded
    if (typeof COLORS === 'undefined' || typeof CHART_CONFIG === 'undefined') {
        console.error('Configuration not loaded');
        document.querySelectorAll('.chart-loading').forEach(el => {
            el.textContent = 'Error: Configuración no cargada';
            el.style.color = '#FF6B6B';
        });
        return;
    }

    // Set global Chart.js defaults
    Chart.defaults.font.family = 'Inter, sans-serif';
    Chart.defaults.color = COLORS.lightGray;

    // Create charts with error handling
    try {
        createRolesChart();
        createDataTasksChart();
        createAdoptionChart();
    } catch (error) {
        console.error('Error initializing charts:', error);
        document.querySelectorAll('.chart-loading').forEach(el => {
            el.textContent = 'Error al crear los gráficos';
            el.style.color = '#FF6B6B';
        });
    }
}

/**
 * Handle window resize for better chart responsiveness
 */
function setupResponsiveHandlers() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (typeof Chart !== 'undefined' && Chart.instances) {
                Chart.helpers.each(Chart.instances, (instance) => {
                    instance.resize();
                });
            }
        }, 100);
    });
}

/**
 * Initialize the application
 */
function initApp() {
    // Wait for Chart.js to be loaded
    waitForChartJS(initializeCharts);
    
    // Setup responsive handlers
    setupResponsiveHandlers();
    
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
