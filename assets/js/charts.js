/* ==========================================================================
   Infografía IA - Chart Creation Module
   ========================================================================== */

/**
 * Create roles automation chart
 */
const createRolesChart = () => {
    try {
        const canvas = getCanvasElement('rolesChart');
        const ctx = getCanvasContext(canvas);

        const rawLabels = [
            'Autorizadores de Crédito, Verificadores y Empleados',
            'Analistas de Gestión',
            'Telemarketers',
            'Asistentes Estadísticos',
            'Cajeros'
        ];

        const chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: rawLabels.map(l => wrapLabel(l, 20)),
                datasets: [{
                    label: '% de Tiempo de Trabajo Automatizable',
                    data: [81, 70, 68, 61, 60],
                    backgroundColor: [COLORS.red, COLORS.yellow, COLORS.green, COLORS.blue, '#EF476F'],
                    borderColor: 'transparent',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                ...CHART_CONFIG,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: {
                            color: COLORS.lightGray,
                            font: { size: 12 },
                            callback: function (value) {
                                return value + '%';
                            }
                        }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: COLORS.lightGray, font: { size: 12 } }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: tooltipTitleCallback,
                            label: function (context) {
                                return context.dataset.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }        });

        hideLoading('rolesChartLoading');
        return chartInstance;
    } catch (error) {
        console.error('Error creating roles chart:', error);
        hideLoading('rolesChartLoading');
        showError('rolesChart', 'Error al cargar el gráfico');
        throw error;
    }
};

/**
 * Create data tasks automation chart
 */
const createDataTasksChart = () => {
    try {
        const canvas = getCanvasElement('dataTasksChart');
        const ctx = getCanvasContext(canvas);

        const chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Procesamiento de Datos', 'Recopilación de Datos'],
                datasets: [{
                    label: 'Potencial de Automatización por IA Generativa',
                    data: [90, 80],
                    backgroundColor: [COLORS.blue, COLORS.green],
                    borderColor: COLORS.darkBlue,
                    borderWidth: 4,
                    hoverOffset: 4
                }]
            },
            options: {
                ...CHART_CONFIG,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: COLORS.lightGray,
                            font: { size: 14 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.label}: ${context.raw}%`
                        }
                    }
                }
            }
        });

        hideLoading('dataTasksChartLoading');
        return chartInstance;
    } catch (error) {
        console.error('Error creating data tasks chart:', error);
        hideLoading('dataTasksChartLoading');
        showError('dataTasksChart', 'Error al cargar el gráfico');
        throw error;
    }
};

/**
 * Create AI adoption trend chart
 */
const createAdoptionChart = () => {
    try {
        const canvas = getCanvasElement('adoptionChart');
        const ctx = getCanvasContext(canvas);

        const chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2023', '2024/2025 (Estimado)'],
                datasets: [{
                    label: '% de Empresas que Usan IA',
                    data: [73, 78],
                    fill: true,
                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                    borderColor: COLORS.red,
                    tension: 0.4,
                    pointBackgroundColor: COLORS.red,
                    pointRadius: 5
                }]
            },
            options: {
                ...CHART_CONFIG,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 90,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: {
                            color: COLORS.lightGray,
                            font: { size: 12 },
                            callback: function (value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: COLORS.lightGray, font: { size: 12 } }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });

        hideLoading('adoptionChartLoading');
        return chartInstance;
    } catch (error) {
        console.error('Error creating adoption chart:', error);
        hideLoading('adoptionChartLoading');
        showError('adoptionChart', 'Error al cargar el gráfico');
        throw error;
    }
};
