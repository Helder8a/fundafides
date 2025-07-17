document.addEventListener('DOMContentLoaded', function () {
    // --- DATOS AMPLIADOS DE CERTIFICACIONES ---
    const certificationData = {
        leed: {
            maxScore: 110,
            levels: [
                { score: 80, name: 'Platino (Platinum)' },
                { score: 60, name: 'Oro (Gold)' },
                { score: 50, name: 'Plata (Silver)' },
                { score: 40, name: 'Certificado (Certified)' }
            ],
            glossary: {
                'ASHRAE': 'American Society of Heating, Refrigerating and Air-Conditioning Engineers. Establece estándares para el rendimiento energético de edificios.',
                'EPD': 'Declaración Ambiental de Producto (Environmental Product Declaration). Documento que informa sobre el impacto ambiental de un producto a lo largo de su ciclo de vida.',
                'ACV': 'Análisis de Ciclo de Vida (Life Cycle Assessment). Herramienta para evaluar los impactos ambientales asociados a todas las etapas de la vida de un producto o edificio.',
                'VOC': 'Compuestos Orgánicos Volátiles (Volatile Organic Compounds). Químicos que se liberan como gases de ciertos productos y pueden ser perjudiciales para la salud.'
            },
            categories: {
                'Ubicación y Transporte': {
                    points: 0, max: 16, weight: { 'templado': 1, 'calido-humedo': 1.1, 'calido-seco': 1.1, 'frio': 0.9 },
                    credits: [
                        { name: 'Acceso a transporte de calidad', options: [5], cost: '$$', roi: true, info: 'Estar a poca distancia de paradas de autobús, tren o metro para reducir el uso de vehículos privados.', docs: ['Mapa de ubicación del proyecto', 'Horarios y rutas del transporte público'] },
                        { name: 'Desarrollo denso y comunidad conectada', options: [5], cost: '$$$', roi: true, info: 'Construir en un área previamente desarrollada con alta densidad poblacional y servicios cercanos.', docs: ['Plano de zonificación', 'Cálculo de densidad residencial/no residencial'] },
                        { name: 'Prevención de la contaminación en la construcción', options: [1], cost: '$', roi: false, info: 'Controlar la erosión del suelo, sedimentación y polvo durante la construcción. Un requisito previo fundamental.', docs: ['Plan de Control de Erosión y Sedimentación (ESC)'] }
                    ]
                },
                'Sitios Sostenibles': {
                    points: 0, max: 10, weight: { 'templado': 1, 'calido-humedo': 1.2, 'calido-seco': 1.3, 'frio': 0.8 },
                    credits: [
                        { name: 'Diseño para la reducción de islas de calor', options: [2], cost: '$$', roi: true, info: 'Usar materiales con alta reflectancia solar (techos, pavimentos) y/o cubiertas vegetales para mitigar el efecto de isla de calor.', docs: ['Especificaciones de materiales de cubierta y pavimento', 'Cálculos del Índice de Reflectancia Solar (SRI)'] },
                        { name: 'Gestión del agua de lluvia', options: [3], cost: '$$', roi: false, info: 'Manejar la escorrentía en el sitio a través de infraestructura verde para reducir la contaminación del agua.', docs: ['Plan de gestión de aguas pluviales', 'Cálculos hidrológicos'] }
                    ]
                },
                'Eficiencia del Agua': {
                    points: 0, max: 11, weight: { 'templado': 1, 'calido-humedo': 1.2, 'calido-seco': 1.5, 'frio': 0.7 },
                    credits: [
                        { name: 'Reducción del uso de agua en interiores', options: [6], cost: '$', roi: true, info: 'Instalar inodoros, grifos y duchas de bajo consumo que superen los estándares de eficiencia hídrica.', docs: ['Fichas técnicas de aparatos sanitarios', 'Cálculos de ahorro de agua'] },
                        { name: 'Reducción del uso de agua en exteriores', options: [2], cost: '$', roi: true, info: 'Eliminar o reducir la necesidad de riego mediante paisajismo nativo (xeriscaping) y sistemas eficientes.', docs: ['Plan de paisajismo', 'Cálculos de riego (si aplica)'] }
                    ]
                },
                'Energía y Atmósfera': {
                    points: 0, max: 33, weight: { 'templado': 1, 'calido-humedo': 1.2, 'calido-seco': 1.1, 'frio': 1.4 },
                    credits: [
                        { name: 'Optimización del rendimiento energético', options: [18], cost: '$$$', roi: true, info: 'Demostrar un porcentaje de mejora en el rendimiento energético respecto a un caso base (ASHRAE 90.1).', docs: ['Modelo energético completo del edificio', 'Informe comparativo con el caso base'] },
                        { name: 'Energía renovable en el sitio', options: [5], cost: '$$$', roi: true, info: 'Generar energía renovable (paneles solares, etc.) para compensar el consumo del edificio.', docs: ['Fichas técnicas del sistema renovable', 'Cálculos de producción energética anual'] }
                    ]
                },
                'Materiales y Recursos': {
                    points: 0, max: 13, weight: { 'templado': 1, 'calido-humedo': 1, 'calido-seco': 1, 'frio': 1 },
                    credits: [
                        { name: 'Divulgación y optimización de productos - EPDs', options: [2], cost: '$', roi: false, info: 'Usar productos de construcción que tengan Declaraciones Ambientales de Producto (EPD).', docs: ['Copias de los EPDs', 'Listado de productos utilizados'] },
                        { name: 'Gestión de residuos de construcción', options: [2], cost: '$', roi: false, info: 'Desviar un porcentaje significativo de los residuos de la construcción de los vertederos.', docs: ['Plan de gestión de residuos', 'Recibos y registros del centro de reciclaje'] },
                        { name: 'Reducción del impacto del ACV del edificio', options: [5], cost: '$$', roi: false, info: 'Realizar un Análisis de Ciclo de Vida (ACV) para reducir el impacto ambiental global del edificio.', docs: ['Informe completo del ACV'] }
                    ]
                },
                'Calidad Ambiental Interior': {
                    points: 0, max: 16, weight: { 'templado': 1, 'calido-humedo': 1.1, 'calido-seco': 1, 'frio': 1.2 },
                    credits: [
                        { name: 'Materiales de bajas emisiones (VOC)', options: [3], cost: '$', roi: true, info: 'Utilizar pinturas, adhesivos, selladores y suelos con bajo contenido de Compuestos Orgánicos Volátiles (VOC).', docs: ['Fichas técnicas de todos los materiales interiores', 'Declaraciones de contenido de VOC'] },
                        { name: 'Vistas de calidad', options: [1], cost: '$$', roi: true, info: 'Proporcionar a los ocupantes una conexión visual directa con el exterior.', docs: ['Planos de planta que muestren las líneas de visión', 'Cálculos del área con vistas'] }
                    ]
                }
            }
        },
        breeam: { // Se puede expandir BREEAM con la misma estructura detallada
            maxScore: 100,
            levels: [
                { score: 85, name: 'Excepcional (Outstanding)' },
                { score: 70, name: 'Excelente (Excellent)' },
                { score: 55, name: 'Muy Bueno (Very Good)' },
                { score: 45, name: 'Bueno (Good)' },
                { score: 30, name: 'Aprobado (Pass)' }
            ],
            glossary: {},
            categories: {}
        }
    };

    const form = document.getElementById('evaluationForm');
    const selector = document.getElementById('certificacionSelector');
    const climateSelector = document.getElementById('climateZoneSelector');
    const totalScoreEl = document.getElementById('totalScore');
    const maxScoreEl = document.getElementById('maxScore');
    const progressBar = document.getElementById('progressBar');
    const levelTextEl = document.getElementById('levelText');
    const resetButton = document.getElementById('resetButton');
    const chartCanvas = document.getElementById('resultsChart');
    let resultsChart;

    function createForm(cert) {
        form.innerHTML = '';
        const data = certificationData[cert];
        if (!data.categories || Object.keys(data.categories).length === 0) {
            form.innerHTML = `<div class="alert alert-info">La certificación ${cert.toUpperCase()} aún no tiene créditos detallados. Seleccione otra opción.</div>`;
            return;
        }

        Object.entries(data.categories).forEach(([catName, category], index) => {
            const collapseId = `collapse-${catName.replace(/\W/g, '')}`;
            const card = document.createElement('div');
            card.className = 'card';
            card.id = `category-${catName.replace(/\W/g, '')}`;
            
            const header = document.createElement('div');
            header.className = 'card-header';
            header.innerHTML = `<h5 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#${collapseId}">
                    ${catName}
                </button>
            </h5>`;
            
            const collapse = document.createElement('div');
            collapse.id = collapseId;
            collapse.className = index === 0 ? 'collapse show' : 'collapse';
            collapse.setAttribute('data-parent', '#evaluationForm');
            
            const body = document.createElement('div');
            body.className = 'card-body';
            
            category.credits.forEach(credit => {
                const item = document.createElement('div');
                item.className = 'credit-item';
                
                let labelText = credit.name;
                if(data.glossary) {
                    Object.keys(data.glossary).forEach(term => {
                        const regex = new RegExp(`\\b(${term})\\b`, 'gi');
                        labelText = labelText.replace(regex, `<span class="technical-term" title="${data.glossary[term]}">$1</span>`);
                    });
                }
                
                item.innerHTML = `
                    <div class="credit-item-main">
                        <i class="fa fa-info-circle info-icon" data-toggle="modal" data-target="#infoModal" data-title="${credit.name}" data-info="${credit.info}" data-docs='${JSON.stringify(credit.docs)}'></i>
                        <label>${labelText}</label>
                    </div>
                    <div class="indicators">
                        <span class="cost-indicator" title="Costo estimado de implementación">${credit.cost}</span>
                        ${credit.roi ? '<span class="roi-indicator" title="Potencial de Retorno de Inversión">ROI</span>' : ''}
                    </div>
                    <select class="form-control form-control-sm" data-category="${catName}" data-credit="${credit.name}">
                        <option value="0">0 Puntos</option>
                        ${[...Array(credit.options[0]).keys()].map(p => p + 1).map(p => `<option value="${p}">${p} Punto${p > 1 ? 's' : ''}</option>`).join('')}
                    </select>
                `;
                body.appendChild(item);
            });
            
            collapse.appendChild(body);
            card.append(header, collapse);
            form.appendChild(card);
        });
    }

    function calculateScore() {
        const cert = selector.value;
        const climateZone = climateSelector.value;
        const data = certificationData[cert];
        if (!data.categories || Object.keys(data.categories).length === 0) {
            updateUI(0, data);
            document.getElementById('recommendationsList').innerHTML = '<li>Seleccione una certificación con datos para ver recomendaciones.</li>';
            return;
        };
        let totalScore = 0;

        Object.keys(data.categories).forEach(cat => data.categories[cat].points = 0);

        form.querySelectorAll('select').forEach(select => {
            const categoryName = select.dataset.category;
            const categoryData = data.categories[categoryName];
            const weighting = categoryData.weight[climateZone] || 1;
            categoryData.points += parseInt(select.value, 10) * weighting;
        });
        
        Object.values(data.categories).forEach(cat => {
            cat.points = parseFloat(cat.points.toFixed(1));
            totalScore += cat.points;
        });

        totalScore = parseFloat(totalScore.toFixed(1));
        updateUI(totalScore, data);
        generateRecommendations(data);
    }
    
    function updateUI(score, data) {
        totalScoreEl.textContent = score;
        maxScoreEl.textContent = data.maxScore;
        const percentage = (score / data.maxScore) * 100;
        progressBar.style.width = `${Math.min(percentage, 100)}%`;
        progressBar.setAttribute('aria-valuenow', score);

        let level = 'Sin Calificación';
        for (const levelData of data.levels) {
            if (score >= levelData.score) {
                level = levelData.name;
                break;
            }
        }
        levelTextEl.textContent = level;
        updateChart(data);
    }

    function updateChart(data) {
        const chartData = {
            labels: Object.keys(data.categories || {}),
            datasets: [{
                label: 'Puntaje Ponderado',
                data: Object.values(data.categories || {}).map(c => c.points),
                backgroundColor: 'rgba(253, 190, 51, 0.4)',
                borderColor: 'rgba(253, 190, 51, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(253, 190, 51, 1)'
            }]
        };

        if (resultsChart) {
            resultsChart.data = chartData;
            resultsChart.update();
        } else {
            resultsChart = new Chart(chartCanvas.getContext('2d'), {
                type: 'radar',
                data: chartData,
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: { r: { beginAtZero: true, angleLines: { color: 'rgba(255, 255, 255, 0.3)' }, grid: { color: 'rgba(255, 255, 255, 0.3)' }, pointLabels: { color: '#fff', font: { size: 10 } }, ticks: { display: false } } },
                    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.formattedValue}` } } }
                }
            });
        }
    }

    function generateRecommendations(data) {
        const list = document.getElementById('recommendationsList');
        list.innerHTML = '';
        const recommendations = [];

        Object.values(data.categories).forEach(cat => {
            cat.credits.forEach(credit => {
                const select = form.querySelector(`[data-credit="${credit.name}"]`);
                if (select && parseInt(select.value, 10) === 0 && credit.cost === '$' && credit.roi) {
                    recommendations.push(`Implementar "${credit.name}" ofrece un alto retorno de inversión a bajo costo.`);
                }
            });
        });

        let maxPotential = 0;
        let potentialCategory = '';
        Object.entries(data.categories).forEach(([name, cat]) => {
            const potential = cat.max - cat.points;
            if (potential > maxPotential) {
                maxPotential = potential;
                potentialCategory = name;
            }
        });
        if (potentialCategory) {
            recommendations.push(`Enfóquese en "${potentialCategory}" para ganar hasta ${maxPotential.toFixed(1)} puntos más.`);
        }
        
        if (recommendations.length > 0) {
            recommendations.slice(0, 3).forEach(rec => {
                const li = document.createElement('li');
                li.innerHTML = rec;
                list.appendChild(li);
            });
        } else if (Object.keys(data.categories).length > 0) {
            list.innerHTML = '<li>¡Excelente puntaje! Considere créditos de mayor costo para alcanzar el siguiente nivel.</li>';
        } else {
             list.innerHTML = '<li>Seleccione una certificación para ver recomendaciones.</li>';
        }
    }
    
    function getReportData() {
        const cert = selector.value;
        const data = certificationData[cert];
        const creditsObtained = [];
        const docsRequired = new Set();

        form.querySelectorAll('select').forEach(select => {
            const points = parseInt(select.value);
            if (points > 0) {
                const categoryName = select.dataset.category;
                const creditName = select.dataset.credit;
                const creditData = data.categories[categoryName].credits.find(c => c.name === creditName);
                
                creditsObtained.push({ category: categoryName, name: creditName, points: points });
                if (creditData.docs) {
                    creditData.docs.forEach(doc => docsRequired.add(doc));
                }
            }
        });

        return {
            certification: selector.options[selector.selectedIndex].text,
            climateZone: climateSelector.options[climateSelector.selectedIndex].text,
            totalScore: totalScoreEl.textContent,
            maxScore: maxScoreEl.textContent,
            level: levelTextEl.textContent,
            chartImage: resultsChart.toBase64Image(),
            credits: creditsObtained,
            documents: Array.from(docsRequired),
            recommendations: Array.from(document.querySelectorAll('#recommendationsList li')).map(li => li.textContent)
        };
    }

    document.getElementById('exportPdfButton').addEventListener('click', () => {
        const reportData = getReportData();
        const { certification, climateZone, totalScore, maxScore, level, chartImage, credits, documents, recommendations } = reportData;

        let reportContent = `
            <div id="report-content">
                <style>
                    body { font-family: 'Helvetica', sans-serif; color: #333; font-size: 10pt; }
                    h1 { color: #20212B; font-size: 20pt; text-align: center; border-bottom: 2px solid #FDBE33; padding-bottom: 10px; margin-bottom: 20px;}
                    h2 { color: #4a4c70; font-size: 14pt; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 25px;}
                    .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 5px solid #FDBE33; margin-bottom: 20px;}
                    .summary-item { text-align: center; }
                    .summary-item h3 { font-size: 11pt; color: #6c757d; margin: 0; font-weight: normal; }
                    .summary-item p { font-size: 16pt; font-weight: bold; color: #20212B; margin: 0; }
                    .report-section { page-break-inside: avoid; }
                    .chart-container { text-align: center; margin-top: 20px; }
                    .chart-container img { max-width: 450px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #4a4c70; color: #fff; font-weight: bold; }
                    ul { padding-left: 20px; }
                    li { margin-bottom: 5px; }
                    .footer { text-align: center; font-size: 8pt; color: #777; position: fixed; bottom: 0; width: 100%; }
                </style>
                <h1>Informe de Evaluación de Sostenibilidad</h1>
                <div class="summary-grid report-section">
                    <div class="summary-item"><h3>Certificación</h3><p>${certification}</p></div>
                    <div class="summary-item"><h3>Zona Climática</h3><p>${climateZone}</p></div>
                    <div class="summary-item"><h3>Puntaje Estimado</h3><p>${totalScore} / ${maxScore}</p></div>
                    <div class="summary-item"><h3>Nivel Alcanzado</h3><p>${level}</p></div>
                </div>
                <div class="report-section">
                    <h2>Desglose de Puntuación</h2>
                    <div class="chart-container"><img src="${chartImage}" alt="Gráfico de Resultados"></div>
                </div>
                <div class="report-section" style="page-break-before: always;">
                    <h2>Créditos Seleccionados</h2>
                    <table>
                        <thead><tr><th>Categoría</th><th>Crédito</th><th>Puntos</th></tr></thead>
                        <tbody>${credits.map(c => `<tr><td>${c.category}</td><td>${c.name}</td><td>${c.points}</td></tr>`).join('')}</tbody>
                    </table>
                </div>
                <div class="report-section">
                    <h2>Checklist de Documentación Clave</h2>
                    <ul>${documents.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>
                <div class="report-section">
                    <h2>Recomendaciones Estratégicas</h2>
                    <ul>${recommendations.map(r => `<li>${r}</li>`).join('')}</ul>
                </div>
            </div>
        `;

        const opt = {
            margin: 0.5,
            filename: `Reporte_Sostenibilidad_FIDES.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(reportContent).set(opt).save();
    });

    function init() {
        const cert = selector.value;
        createForm(cert);
        calculateScore();
    }
    
    // --- EVENT LISTENERS ---
    selector.addEventListener('change', init);
    climateSelector.addEventListener('change', calculateScore);
    form.addEventListener('change', calculateScore);
    resetButton.addEventListener('click', () => {
        climateSelector.value = 'templado';
        form.reset();
        calculateScore();
    });
    
    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const title = button.data('title');
        const info = button.data('info');
        const docs = button.data('docs');

        const modal = $(this);
        modal.find('.modal-title').text(title);
        let infoHtml = info.replace(/(\b(LEED|BREEAM|ASHRAE|EPD|ACV|VOC)\b)/g, '<strong>$1</strong>');
        modal.find('.modal-body').html(infoHtml);

        const docsContainer = modal.find('.modal-footer');
        if (docs && docs.length > 0) {
            docsContainer.show();
            docsContainer.html('<h6>Documentación Clave Requerida:</h6><ul>' + docs.map(d => `<li><i class="fa fa-check-circle"></i>${d}</li>`).join('') + '</ul>');
        } else {
            docsContainer.html('<h6>No hay documentos específicos listados para este crédito.</h6>').show();
        }
    });

    chartCanvas.onclick = function(evt) {
        const activePoints = resultsChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (activePoints.length) {
            const label = resultsChart.data.labels[activePoints[0].index];
            const elementId = `category-${label.replace(/\W/g, '')}`;
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                $(element).find('.collapse').collapse('show');
            }
        }
    };

    init();
});