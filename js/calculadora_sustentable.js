document.addEventListener('DOMContentLoaded', function () {
    const certificationData = {
        leed: {
            // ... (Datos de LEED se mantienen igual que en la respuesta anterior)
        },
        breeam: {
            // ... (Datos de BREEAM se mantienen igual que en la respuesta anterior)
        },
        dgnb: {
            name: "DGNB System Version 2018",
            maxScore: 100,
            scoreUnit: '%',
            levels: [
                { score: 80, name: 'Platino' },
                { score: 65, name: 'Oro' },
                { score: 50, name: 'Plata' },
                { score: 35, name: 'Bronce' }
            ],
            glossary: {
                'LCA': 'Análisis de Ciclo de Vida (Life Cycle Assessment).',
                'LCC': 'Análisis de Costo de Ciclo de Vida (Life Cycle Costing).'
            },
            categories: {
                'Calidad Medioambiental': {
                    points: 0, max: 10, weight: 22.5,
                    credits: [
                        { name: 'Análisis de Ciclo de Vida (LCA) - Emisiones GEI', points: 10, cost: '$$', roi: true, info: 'Cálculo de las emisiones de gases de efecto invernadero durante todo el ciclo de vida del edificio.', docs: ['Informe de LCA'] },
                        { name: 'Uso sostenible de recursos hídricos', points: 10, cost: '$$', roi: true, info: 'Medidas para reducir el consumo de agua potable y gestionar las aguas pluviales.', docs: ['Cálculos de consumo de agua', 'Plan de gestión de aguas pluviales'] }
                    ]
                },
                'Calidad Económica': {
                    points: 0, max: 10, weight: 22.5,
                    credits: [
                        { name: 'Costo del Ciclo de Vida (LCC)', points: 10, cost: '$$', roi: true, info: 'Análisis de los costos de construcción, operación, mantenimiento y deconstrucción del edificio.', docs: ['Informe de LCC'] },
                        { name: 'Flexibilidad y adaptabilidad', points: 10, cost: '$$', roi: true, info: 'Diseño que permite futuros cambios de uso o adaptaciones tecnológicas sin grandes intervenciones.', docs: ['Memoria de diseño de flexibilidad'] }
                    ]
                },
                'Calidad Sociocultural y Funcional': {
                    points: 0, max: 10, weight: 22.5,
                    credits: [
                        { name: 'Confort térmico', points: 10, cost: '$$$', roi: true, info: 'Asegurar un alto nivel de confort térmico para los ocupantes durante todo el año.', docs: ['Simulación térmica dinámica'] },
                        { name: 'Calidad del aire interior', points: 10, cost: '$', roi: true, info: 'Uso de materiales de bajas emisiones y sistemas de ventilación adecuados.', docs: ['Fichas técnicas de materiales', 'Plan de ventilación'] }
                    ]
                },
                'Calidad Técnica': {
                    points: 0, max: 10, weight: 22.5,
                    credits: [
                        { name: 'Protección contra incendios y humo', points: 10, cost: '$$', roi: false, info: 'Implementación de un concepto integral de protección contra incendios.', docs: ['Plan de protección contra incendios'] },
                        { name: 'Facilidad de limpieza y mantenimiento', points: 10, cost: '$', roi: true, info: 'Diseño de superficies y componentes que sean fáciles de limpiar y mantener.', docs: ['Plan de mantenimiento del edificio'] }
                    ]
                },
                'Calidad del Proceso': {
                    points: 0, max: 10, weight: 10,
                    credits: [
                        { name: 'Calidad de la planificación del proyecto', points: 10, cost: '$', roi: true, info: 'Definición clara de objetivos de sostenibilidad desde el inicio del proyecto.', docs: ['Acta de constitución del proyecto con objetivos de sostenibilidad'] },
                        { name: 'Construcción ordenada y documentación', points: 10, cost: '$', roi: false, info: 'Asegurar una ejecución de obra de alta calidad con documentación completa.', docs: ['Plan de aseguramiento de calidad en obra'] }
                    ]
                }
            }
        },
        well: {
            name: "WELL v2",
            maxScore: 100,
            scoreUnit: 'Puntos',
            levels: [
                { score: 80, name: 'Platino' },
                { score: 60, name: 'Oro' },
                { score: 50, name: 'Plata' },
                { score: 40, name: 'Bronce' }
            ],
            glossary: {},
            categories: {
                'Aire': {
                    points: 0, max: 12,
                    credits: [
                        { name: 'Calidad del aire fundamental', points: 4, cost: '$$', roi: true, info: 'Cumplir con umbrales de contaminantes y requisitos de filtración de aire.', docs: ['Informe de pruebas de calidad del aire (post-ocupación)'] },
                        { name: 'Monitoreo de la calidad del aire', points: 3, cost: '$$', roi: true, info: 'Instalar monitores para medir y mostrar la calidad del aire interior en tiempo real.', docs: ['Especificaciones de los sensores de calidad de aire'] }
                    ]
                },
                'Agua': {
                    points: 0, max: 8,
                    credits: [
                        { name: 'Calidad fundamental del agua', points: 3, cost: '$', roi: true, info: 'Asegurar que el agua potable cumple con umbrales estrictos para contaminantes.', docs: ['Análisis de laboratorio del agua'] },
                        { name: 'Promoción del consumo de agua', points: 2, cost: '$', roi: false, info: 'Proveer dispensadores de agua potable accesibles y atractivos.', docs: ['Planos de ubicación de dispensadores'] }
                    ]
                },
                'Luz': {
                    points: 0, max: 10,
                    credits: [
                        { name: 'Exposición a la luz natural', points: 4, cost: '$$$', roi: true, info: 'Diseñar para maximizar la luz natural y minimizar el deslumbramiento.', docs: ['Simulación de luz diurna'] },
                        { name: 'Diseño de iluminación circadiana', points: 3, cost: '$$$', roi: true, info: 'Utilizar un sistema de iluminación que apoye el ritmo circadiano natural del cuerpo.', docs: ['Cálculos de Iluminación Circadiana (EML)'] }
                    ]
                },
                'Mente': {
                    points: 0, max: 12,
                    credits: [
                        { name: 'Acceso a la naturaleza', points: 3, cost: '$$', roi: true, info: 'Integrar elementos naturales, plantas y vistas a la naturaleza en el diseño.', docs: ['Plan de diseño biofílico'] },
                        { name: 'Salud mental y bienestar', points: 2, cost: '$', roi: false, info: 'Proveer recursos y políticas que apoyen la salud mental de los ocupantes.', docs: ['Política de apoyo a la salud mental'] }
                    ]
                },
            }
        },
        greenstar: {
            name: "Green Star Buildings v1",
            maxScore: 100,
            scoreUnit: 'Puntos',
            levels: [
                { score: 60, name: '6 Estrellas - Liderazgo Mundial' },
                { score: 45, name: '5 Estrellas - Excelencia Australiana' },
                { score: 30, name: '4 Estrellas - Mejor Práctica' }
            ],
            glossary: {},
            categories: {
                'Gobernanza': {
                    points: 0, max: 15,
                    credits: [
                        { name: 'Gobernanza Corporativa', points: 5, cost: '$', roi: true, info: 'Demostrar un compromiso corporativo con la sostenibilidad a través de políticas y reportes.', docs: ['Reporte de Sostenibilidad Corporativa'] },
                    ]
                },
                'Lugares Positivos': {
                    points: 0, max: 20,
                    credits: [
                        { name: 'Conexión con la naturaleza', points: 4, cost: '$$', roi: true, info: 'Mejorar la ecología del sitio y conectar a los ocupantes con la naturaleza.', docs: ['Plan de mejora ecológica'] },
                        { name: 'Comunidades saludables y activas', points: 3, cost: '$$', roi: false, info: 'Fomentar un estilo de vida activo a través del diseño del edificio y su conexión con la comunidad.', docs: ['Memoria de diseño para la vida activa'] }
                    ]
                },
                 'Carbono Positivo': {
                    points: 0, max: 25,
                    credits: [
                        { name: 'Edificio 100% eléctrico', points: 8, cost: '$$$', roi: true, info: 'Eliminar el uso de combustibles fósiles en el edificio.', docs: ['Esquema de sistemas del edificio'] },
                        { name: 'Energía renovable', points: 10, cost: '$$$', roi: true, info: 'Generar o adquirir energía renovable para cubrir la demanda del edificio.', docs: ['Cálculos de generación/compra de energía renovable'] }
                    ]
                },
            }
        },
        casbee: {
            name: "CASBEE for New Construction",
            maxScore: 5, // La puntuación es un ranking de eficiencia (BEE) de 1 a 5
            scoreUnit: ' (BEE)',
            levels: [
                { score: 3.0, name: 'S (Superior)' },
                { score: 1.5, name: 'A (Muy Bueno)' },
                { score: 1.0, name: 'B+ (Bueno)' },
                { score: 0.5, name: 'B- (Ligeramente Inferior)' },
                { score: 0, name: 'C (Inferior)' }
            ],
            context: {
                id: 'urbanContextSelector',
                label: 'Tipo de Entorno Urbano:',
                options: [
                    { value: 'denso', text: 'Urbano Denso' },
                    { value: 'suburbano', text: 'Suburbano' },
                    { value: 'rural', text: 'Rural' }
                ]
            },
            glossary: {
                'BEE': 'Índice de Eficiencia Ambiental del Edificio (Building Environmental Efficiency). Relación entre la calidad ambiental del edificio y sus cargas ambientales.'
            },
            categories: {
                 'Calidad Ambiental Interior': {
                    points: 0, max: 100, // Los puntos internos son sobre 100, luego se normalizan
                    credits: [
                        { name: 'Calidad del aire y contaminantes químicos', points: 25, cost: '$$', roi: true, info: 'Controlar las fuentes de contaminantes y asegurar una ventilación adecuada.', docs: ['Mediciones de calidad de aire'] },
                    ]
                },
                'Calidad del Servicio': {
                    points: 0, max: 100,
                    credits: [
                        { name: 'Funcionalidad y usabilidad', points: 25, cost: '$$', roi: true, info: 'Diseño flexible que se adapta a las necesidades de los usuarios.', docs: ['Planos de diseño flexible'] },
                    ]
                },
                'Calidad Ambiental Exterior': {
                    points: 0, max: 100,
                    credits: [
                        { name: 'Conservación y creación del biotopo', points: 25, cost: '$$', roi: false, info: 'Proteger y mejorar la biodiversidad local.', docs: ['Plan de manejo de la biodiversidad'] },
                    ]
                }
            }
        }
    };

    // ... (El resto del código JS no necesita cambios, solo se han añadido los datos de las nuevas certificaciones)

    const form = document.getElementById('evaluationForm');
    const selector = document.getElementById('certificacionSelector');
    const contextContainer = document.getElementById('context-selector-container');
    const totalScoreEl = document.getElementById('totalScore');
    const maxScoreEl = document.getElementById('maxScore');
    const scoreUnitEl = document.getElementById('scoreUnit');
    const progressBar = document.getElementById('progressBar');
    const levelTextEl = document.getElementById('levelText');
    const resetButton = document.getElementById('resetButton');
    const chartCanvas = document.getElementById('resultsChart');
    let resultsChart;

    function createForm(cert) {
        form.innerHTML = '';
        const data = certificationData[cert];
        maxScoreEl.textContent = data.maxScore;
        scoreUnitEl.textContent = data.scoreUnit || 'Puntos';
        
        // Crear selector de contexto si es necesario
        contextContainer.innerHTML = '';
        if (data.context) {
            let optionsHtml = data.context.options.map(opt => `<option value="${opt.value}">${opt.text}</option>`).join('');
            contextContainer.innerHTML = `
                <label for="${data.context.id}"><strong>${data.context.label}</strong></label>
                <select id="${data.context.id}" class="form-control" aria-label="${data.context.label}">
                    ${optionsHtml}
                </select>
            `;
            document.getElementById(data.context.id).addEventListener('change', calculateScore);
        }

        if (!data.categories || Object.keys(data.categories).length === 0) {
            form.innerHTML = `<div class="alert alert-info">La certificación ${cert.toUpperCase()} aún no tiene créditos detallados.</div>`;
            calculateScore();
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
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${collapseId}">
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
                
                let pointButtons = '<button type="button" class="btn btn-sm active" data-value="0">0</button>';
                for (let i = 1; i <= credit.points; i++) {
                    pointButtons += `<button type="button" class="btn btn-sm" data-value="${i}">${i}</button>`;
                }

                item.innerHTML = `
                    <div class="credit-info-wrapper">
                        <div class="credit-item-main">
                            <i class="fa fa-info-circle info-icon" data-toggle="modal" data-target="#infoModal" data-title="${credit.name}" data-info="${credit.info}" data-docs='${JSON.stringify(credit.docs)}'></i>
                            <label>${labelText}</label>
                        </div>
                        <div class="indicators">
                            <span class="cost-indicator" title="Costo estimado de implementación">${credit.cost}</span>
                            ${credit.roi ? '<span class="roi-indicator" title="Potencial de Retorno de Inversión">ROI</span>' : ''}
                        </div>
                    </div>
                    <div class="point-selector" data-category="${catName}" data-credit="${credit.name}" data-max-points="${credit.points}">
                        ${pointButtons}
                    </div>
                `;
                body.appendChild(item);
            });
            
            collapse.appendChild(body);
            card.append(header, collapse);
            form.appendChild(card);
        });

        form.querySelectorAll('.point-selector .btn').forEach(button => {
            button.addEventListener('click', function() {
                const parent = this.parentElement;
                parent.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                calculateScore();
            });
        });
    }

    function calculateScore() {
        const cert = selector.value;
        const data = certificationData[cert];
        
        if (!data.categories || Object.keys(data.categories).length === 0) {
            updateUI(0, data);
            return;
        }

        let totalScore = 0;
        Object.keys(data.categories).forEach(cat => data.categories[cat].points = 0);

        form.querySelectorAll('.point-selector').forEach(selector => {
            const categoryName = selector.dataset.category;
            const selectedButton = selector.querySelector('.btn.active');
            const points = selectedButton ? parseInt(selectedButton.dataset.value, 10) : 0;
            data.categories[categoryName].points += points;
        });
        
        if (cert === 'breeam' || cert === 'dgnb') {
            Object.values(data.categories).forEach(cat => {
                const categoryScore = (cat.points / cat.max) * cat.weight;
                totalScore += categoryScore;
            });
        } else if (cert === 'casbee') {
            let Q = 0; // Calidad
            let L = 0; // Carga
            // Simulación simplificada de BEE. Se suma Q y se asume una L fija por simplicidad.
            Object.values(data.categories).forEach(cat => {
                Q += (cat.points / cat.max) * 25; // Normalizar a 25 puntos por categoría Q
            });
            // L (Carga) se simplificaría aquí. Asumimos una carga promedio para el cálculo de BEE.
            // BEE = (Q / 25) / (L / 25) * 3. En esta simulación, L es una constante.
            totalScore = Q / 35; // Fórmula simplificada para demostración
        } else { // LEED, WELL, Green Star
            Object.values(data.categories).forEach(cat => {
                totalScore += cat.points;
            });
        }

        totalScore = parseFloat(totalScore.toFixed(1));
        updateUI(totalScore, data);
        generateRecommendations(data);
        updateCostBenefitAnalysis(data);
    }
    
    function updateUI(score, data) {
        totalScoreEl.textContent = score;
        const percentage = (score / data.maxScore) * 100;
        progressBar.style.width = `${Math.min(percentage, 100)}%`;
        progressBar.setAttribute('aria-valuenow', score);

        let level = 'Sin Calificación';
        // Usar un bucle for tradicional para asegurar que se asigne el nivel más alto alcanzado
        for (let i = 0; i < data.levels.length; i++) {
            if (score >= data.levels[i].score) {
                level = data.levels[i].name;
                break; // Detenerse en el primer nivel (el más alto) que se cumpla
            }
        }
        levelTextEl.textContent = level;
        updateChart(data);
    }
    
    // ... (El resto del código como updateChart, recommendations, export, etc. no necesita cambios)
    function updateChart(data) {
        let chartDisplayData = [];
        let label = 'Puntos';
        if (selector.value === 'breeam' || selector.value === 'dgnb') {
             chartDisplayData = Object.values(data.categories || {}).map(c => ((c.points / c.max) * 100).toFixed(1));
             label = '% Obtenido';
        } else {
             chartDisplayData = Object.values(data.categories || {}).map(c => c.points);
        }

        const chartData = {
            labels: Object.keys(data.categories || {}),
            datasets: [{
                label: label,
                data: chartDisplayData,
                backgroundColor: 'rgba(253, 190, 51, 0.4)',
                borderColor: 'rgba(253, 190, 51, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(253, 190, 51, 1)'
            }]
        };

        if (resultsChart) {
            resultsChart.data = chartData;
            resultsChart.options.scales.r.max = (selector.value === 'breeam' || selector.value === 'dgnb') ? 100 : undefined;
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

        if (data.categories) {
            Object.values(data.categories).forEach(cat => {
                cat.credits.forEach(credit => {
                    const selector = form.querySelector(`[data-credit="${credit.name}"]`);
                    const selectedButton = selector ? selector.querySelector('.btn.active') : null;
                    const points = selectedButton ? parseInt(selectedButton.dataset.value, 10) : 0;
                    
                    if (points === 0 && credit.cost === '$' && credit.roi) {
                        recommendations.push(`Implementar "<strong>${credit.name}</strong>" ofrece un alto retorno de inversión a bajo costo.`);
                    }
                });
            });
        }
        
        if (recommendations.length > 0) {
            recommendations.slice(0, 3).forEach(rec => {
                const li = document.createElement('li');
                li.innerHTML = rec;
                list.appendChild(li);
            });
        } else {
            list.innerHTML = '<li>¡Excelente puntaje! Considere créditos de mayor costo para alcanzar el siguiente nivel.</li>';
        }
    }
    
    function updateCostBenefitAnalysis(data) {
        const costBenefitEl = document.getElementById('costBenefitText');
        let lowCostRoiCount = 0;
        
        if (data.categories) {
            Object.values(data.categories).forEach(cat => {
                cat.credits.forEach(credit => {
                    const selector = form.querySelector(`[data-credit="${credit.name}"]`);
                    const selectedButton = selector ? selector.querySelector('.btn.active') : null;
                    const points = selectedButton ? parseInt(selectedButton.dataset.value, 10) : 0;
                    
                    if (points > 0 && credit.cost === '$' && credit.roi) {
                        lowCostRoiCount++;
                    }
                });
            });
        }

        if (lowCostRoiCount > 0) {
            costBenefitEl.innerHTML = `Ha seleccionado <strong>${lowCostRoiCount}</strong> créditos de bajo costo con alto retorno de inversión. ¡Una excelente estrategia!`;
        } else {
            costBenefitEl.innerHTML = `Considere priorizar créditos marcados con <span class="roi-indicator">ROI</span> y costo <span class="cost-indicator">$</span>.`;
        }
    }

    function getReportData() {
        const cert = selector.value;
        const data = certificationData[cert];
        const creditsObtained = [];
        const docsRequired = new Set();

        if (data.categories) {
            form.querySelectorAll('.point-selector').forEach(selector => {
                const selectedButton = selector.querySelector('.btn.active');
                const points = selectedButton ? parseInt(selectedButton.dataset.value, 10) : 0;
                
                if (points > 0) {
                    const categoryName = selector.dataset.category;
                    const creditName = selector.dataset.credit;
                    const creditData = data.categories[categoryName].credits.find(c => c.name === creditName);
                    
                    creditsObtained.push({ category: categoryName, name: creditName, points: points });
                    if (creditData.docs) {
                        creditData.docs.forEach(doc => docsRequired.add(doc));
                    }
                }
            });
        }

        return {
            certification: selector.options[selector.selectedIndex].text,
            context: document.getElementById(data.context?.id)?.options[document.getElementById(data.context?.id)?.selectedIndex]?.text || 'No aplica',
            totalScore: totalScoreEl.textContent,
            maxScore: maxScoreEl.textContent,
            level: levelTextEl.textContent,
            chartImage: resultsChart.toBase64Image(),
            credits: creditsObtained,
            documents: Array.from(docsRequired),
            recommendations: Array.from(document.querySelectorAll('#recommendationsList li')).map(li => li.innerText)
        };
    }

    document.getElementById('exportPdfButton').addEventListener('click', () => {
        const reportData = getReportData();
        const { certification, context, totalScore, maxScore, level, chartImage, credits, documents, recommendations } = reportData;
        
        let contextHtml = context !== 'No aplica' ? `<div class="summary-item"><h3>Contexto</h3><p>${context}</p></div>` : '';

        let reportContent = `
            <div id="report-content">
                <style>
                    /* ... (estilos del PDF sin cambios) ... */
                </style>
                <h1>Informe de Evaluación de Sostenibilidad</h1>
                <div class="summary-grid report-section">
                    <div class="summary-item"><h3>Certificación</h3><p>${certification}</p></div>
                    ${contextHtml}
                    <div class="summary-item"><h3>Puntaje Estimado</h3><p>${totalScore} / ${maxScore}</p></div>
                    <div class="summary-item"><h3>Nivel Alcanzado</h3><p>${level}</p></div>
                </div>
                </div>
        `;
        html2pdf().from(reportContent).set({
            margin: 0.5,
            filename: `Reporte_Sostenibilidad_${certification.split(' ')[0]}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).save();
    });

    function init() {
        const cert = selector.value;
        createForm(cert);
        calculateScore();
    }
    
    selector.addEventListener('change', init);
    
    resetButton.addEventListener('click', () => {
        init();
    });
    
    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const title = button.data('title');
        const info = button.data('info');
        const docs = button.data('docs');

        const modal = $(this);
        modal.find('.modal-title').text(title);
        let infoHtml = info;
        if(certificationData[selector.value].glossary){
            Object.keys(certificationData[selector.value].glossary).forEach(term => {
                const regex = new RegExp(`\\b(${term})\\b`, 'gi');
                infoHtml = infoHtml.replace(regex, '<strong>$1</strong>');
            });
        }
        modal.find('.modal-body').html(infoHtml);

        const docsContainer = modal.find('.modal-footer');
        if (docs && docs.length > 0) {
            docsContainer.show();
            docsContainer.html('<h6>Documentación Clave Requerida:</h6><ul>' + docs.map(d => `<li><i class="fa fa-check-circle"></i>${d}</li>`).join('') + '</ul>');
        } else {
            docsContainer.html('').hide();
        }
    });

    chartCanvas.onclick = function(evt) {
        const activePoints = resultsChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (activePoints.length) {
            const label = resultsChart.data.labels[activePoints[0].index];
            const elementId = `category-${label.replace(/\W/g, '')}`;
            const element = document.getElementById(elementId);
            if (element) {
                $('html, body').animate({
                    scrollTop: $(element).offset().top - 80 
                }, 500);
                $(element).find('.collapse').collapse('show');
            }
        }
    };

    init();
});

document.addEventListener('DOMContentLoaded', function () {
    const certificationData = {
        // MATRIZ DE EQUIVALENCIA A TRAVÉS DE 'mappingId'
        // Cada crédito ahora tiene un ID único que representa la acción de sostenibilidad.
        leed: {
            name: "LEED v4.1 BD+C",
            maxScore: 110,
            scoreUnit: 'Puntos',
            levels: [
                //... niveles sin cambios
            ],
            categories: {
                'Ubicación y Transporte': {
                    credits: [
                        { name: 'Acceso a transporte de calidad', points: 5, cost: '$$', roi: true, info: '...', docs: [], mappingId: 'transport_access' },
                        // ... otros créditos con su mappingId
                    ]
                },
                'Eficiencia del Agua': {
                    credits: [
                        { name: 'Reducción del uso de agua en interiores', points: 6, cost: '$', roi: true, info: '...', docs: [], mappingId: 'water_indoor_reduction' },
                        // ...
                    ]
                },
                 'Energía y Atmósfera': {
                    credits: [
                        { name: 'Optimización del rendimiento energético', points: 18, cost: '$$$', roi: true, info: '...', docs: [], mappingId: 'energy_performance' },
                        { name: 'Energía renovable en el sitio', points: 5, cost: '$$$', roi: true, info: '...', docs: [], mappingId: 'renewable_energy' },
                    ]
                },
                 'Materiales y Recursos': {
                    credits: [
                         { name: 'Reducción del impacto del ACV del edificio', points: 5, cost: '$$', roi: false, info: '...', docs: [], mappingId: 'lca_impact_reduction' }
                    ]
                }
            }
        },
        breeam: {
            name: "BREEAM Int. New Construction 2016",
            maxScore: 100,
            scoreUnit: '%',
             levels: [
                //... niveles sin cambios
            ],
            categories: {
                'Energía': {
                    weight: 19,
                    credits: [
                        { name: 'Reducción de emisiones de carbono', points: 15, cost: '$$$', roi: true, info: '...', docs: [], mappingId: 'energy_performance' },
                    ]
                },
                'Agua': {
                    weight: 6,
                    credits: [
                        { name: 'Reducción del consumo de agua', points: 5, cost: '$', roi: true, info: '...', docs: [], mappingId: 'water_indoor_reduction' },
                    ]
                },
                'Transporte': {
                    weight: 8,
                    credits: [
                        { name: 'Accesibilidad al transporte público', points: 3, cost: '$$$', roi: true, info: '...', docs: [], mappingId: 'transport_access' },
                    ]
                },
                 'Materiales': {
                    weight: 12.5,
                    credits: [
                        { name: 'Impactos del ciclo de vida (ACV)', points: 6, cost: '$$', roi: false, info: '...', docs: [], mappingId: 'lca_impact_reduction' }
                    ]
                }
            }
        },
        // ... Datos para DGNB, WELL, GREENSTAR, CASBEE con sus `mappingId` correspondientes
    };

    // ... (Variables iniciales sin cambios)

    const compareButton = document.getElementById('compareButton');
    const comparisonResultsContainer = document.getElementById('comparisonResults');

    function createForm(cert) {
        // ... (Función createForm sin cambios)
    }

    function calculateScore() {
        // ... (Función calculateScore sin cambios, pero ahora se llama desde el botón de comparación también)
    }
    
    // --- NUEVA FUNCIONALIDAD DE COMPARACIÓN ---
    function calculateComparativeScores() {
        const currentCertKey = selector.value;
        const currentData = certificationData[currentCertKey];
        
        // 1. Obtener los mappingIds de los créditos seleccionados en la certificación actual
        const selectedMappingIds = new Set();
        form.querySelectorAll('.point-selector').forEach(selector => {
            const selectedButton = selector.querySelector('.btn.active');
            const points = selectedButton ? parseInt(selectedButton.dataset.value, 10) : 0;
            if (points > 0) {
                const categoryName = selector.dataset.category;
                const creditName = selector.dataset.credit;
                const credit = currentData.categories[categoryName].credits.find(c => c.name === creditName);
                if (credit && credit.mappingId) {
                    selectedMappingIds.add(credit.mappingId);
                }
            }
        });

        // 2. Calcular el puntaje para las otras certificaciones
        const comparativeResults = {};
        Object.keys(certificationData).forEach(certKey => {
            if (certKey === currentCertKey) return; // No comparar consigo mismo

            const data = certificationData[certKey];
            let totalScore = 0;
            const categoryPoints = {};

            Object.keys(data.categories).forEach(catName => {
                categoryPoints[catName] = { points: 0, max: data.categories[catName].max, weight: data.categories[catName].weight };
                data.categories[catName].credits.forEach(credit => {
                    if (selectedMappingIds.has(credit.mappingId)) {
                        // Asignar el puntaje máximo del crédito equivalente
                        categoryPoints[catName].points += credit.points;
                    }
                });
            });

            // Aplicar la lógica de puntuación específica de cada certificación
            if (certKey === 'breeam' || certKey === 'dgnb') {
                Object.values(categoryPoints).forEach(cat => {
                    totalScore += (cat.points / cat.max) * cat.weight;
                });
            } else if (certKey === 'casbee') {
                 let Q = 0;
                 Object.values(categoryPoints).forEach(cat => { Q += (cat.points / cat.max) * 25; });
                 totalScore = Q / 35;
            }
            else { // LEED, WELL, Green Star
                Object.values(categoryPoints).forEach(cat => { totalScore += cat.points; });
            }
            
            totalScore = parseFloat(totalScore.toFixed(1));
            
            let level = 'Sin Calificación';
            for (let i = 0; i < data.levels.length; i++) {
                if (totalScore >= data.levels[i].score) {
                    level = data.levels[i].name;
                    break;
                }
            }
            
            comparativeResults[certKey] = {
                score: totalScore,
                level: level,
                name: data.name
            };
        });

        displayComparativeResults(comparativeResults);
    }

    function displayComparativeResults(results) {
        comparisonResultsContainer.innerHTML = '';
        Object.values(results).forEach(result => {
            const item = document.createElement('div');
            item.className = 'comparison-item';
            item.innerHTML = `
                <span class="cert-name">${result.name.split('(')[0].trim()}</span>
                <div>
                    <span class="cert-score">${result.score}</span>
                    <span class="cert-level">${result.level}</span>
                </div>
            `;
            comparisonResultsContainer.appendChild(item);
        });
    }


    // ... (Resto de funciones: updateUI, updateChart, etc. se mantienen igual)

    // --- EVENT LISTENERS ---
    selector.addEventListener('change', () => {
        init();
        comparisonResultsContainer.innerHTML = ''; // Limpiar resultados al cambiar
    });

    resetButton.addEventListener('click', () => {
        init();
        comparisonResultsContainer.innerHTML = ''; // Limpiar resultados al reiniciar
    });
    
    compareButton.addEventListener('click', calculateComparativeScores);

    // ... (Resto de los event listeners se mantienen igual)
    
    function init() {
        const cert = selector.value;
        createForm(cert);
        calculateScore();
    }
    
    init();
});