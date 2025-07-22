document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('evaluatorForm');
    const totalScoreElement = document.getElementById('totalScore');
    const progressBar = document.getElementById('progressBar');
    const levelText = document.getElementById('levelText');
    const resetButton = document.getElementById('resetButton');
    const chartCanvas = document.getElementById('resultsChart');

    const categories = {
        agua: { label: 'Agua', points: 0, maxPoints: 25 },
        energia: { label: 'Energía', points: 0, maxPoints: 30 },
        materiales: { label: 'Materiales', points: 0, maxPoints: 25 },
        social: { label: 'Impacto Social', points: 0, maxPoints: 30 }
    };

    let resultsChart;

    function initializeChart() {
        const ctx = chartCanvas.getContext('2d');
        resultsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.values(categories).map(cat => cat.label),
                datasets: [{
                    label: 'Puntaje por Categoría',
                    data: Object.values(categories).map(cat => cat.points),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 30,
                         ticks: {
                            color: '#fff' 
                        }
                    },
                     x: {
                        ticks: {
                            color: '#fff'
                        }
                    }
                },
                 plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                }
            }
        });
    }
    
    function updateEvaluation() {
        let totalScore = 0;
        
        // Reset points
        for (const key in categories) {
            categories[key].points = 0;
        }

        const selects = form.querySelectorAll('select');
        selects.forEach(select => {
            const points = parseInt(select.value) * parseInt(select.dataset.points);
            const category = select.dataset.category;
            if (categories[category]) {
                categories[category].points += points;
            }
        });

        for (const key in categories) {
            totalScore += categories[key].points;
        }

        // Update UI
        totalScoreElement.textContent = `${totalScore} / 100`;
        progressBar.style.width = `${totalScore}%`;
        progressBar.setAttribute('aria-valuenow', totalScore);
        updateLevel(totalScore);

        // Update Chart
        resultsChart.data.datasets[0].data = Object.values(categories).map(cat => cat.points);
        resultsChart.update();
    }

    function updateLevel(score) {
        if (score >= 90) {
            levelText.textContent = 'Excelente';
        } else if (score >= 75) {
            levelText.textContent = 'Muy Bueno';
        } else if (score >= 50) {
            levelText.textContent = 'Bueno';
        } else if (score >= 25) {
            levelText.textContent = 'Regular';
        } else {
            levelText.textContent = 'Sin Calificación';
        }
    }

    function resetEvaluation() {
        form.reset();
        updateEvaluation();
    }

    // Event Listeners
    form.addEventListener('change', updateEvaluation);
    resetButton.addEventListener('click', resetEvaluation);

    // Initial Load
    initializeChart();
    updateEvaluation();
});