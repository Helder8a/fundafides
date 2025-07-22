const translations = {
  es: {
    // ---- GENERAL ----
    email: "fidessuc@gmail.com",
    footer_copyright: "© Fundación FIDES Sucre, Todos los Derechos Reservados.",
    
    // ---- NAVEGACIÓN ----
    nav_inicio: "INICIO",
    nav_proyectos: "PROYECTOS",
    nav_galeria: "GALERÍA",
    nav_herramientas: "HERRAMIENTAS WEB",
    nav_evaluador: "Evaluador de Sostenibilidad",
    nav_calculadora_carbono: "Calculadora de Carbono",
    nav_blog: "BLOG",
    
    // ---- CALCULADORA DE CARBONO ----
    // Meta
    meta_title: "Calculadora de Huella de Carbono Personal y Educativa | FIDES",
    meta_desc: "Calcula tu huella de carbono personal con nuestra herramienta interactiva. Mide el impacto de tu energía, transporte y dieta, y aprende a neutralizar tu huella. Ideal para estudiantes y uso internacional.",
    
    // Asistente y Botones
    calc_title: "🌍 Calculadora de Huella de Carbono Personal",
    calc_subtitle: "Descubre tu impacto ambiental y aprende a reducirlo.",
    country_label: "País:",
    units_label: "Unidades:",
    units_metric: "Métrico (km, kg)",
    units_imperial: "Imperial (miles, lbs)",
    learn_more: "Aprende más",
    prev_btn: "Anterior",
    next_btn: "Siguiente",
    calculate_btn: "Calcular mi Huella",
    step_1: "País",
    step_2: "Hogar",
    step_3: "Transporte",
    step_4: "Alimentación",
    step_5: "Consumo",

    // Categorías
    cat_home: "Hogar",
    home_electricity: "Consumo eléctrico mensual (kWh)",
    cat_transport: "Transporte",
    transport_distance: "Distancia en coche por semana",
    cat_flights: "Vuelos Anuales",
    flights_short: "Vuelos cortos (menos de 3h, ida y vuelta)",
    flights_medium: "Vuelos medios (3-6h, ida y vuelta)",
    flights_long: "Vuelos largos (más de 6h, ida y vuelta)",
    cat_diet: "Alimentación",
    diet_level: "Nivel de consumo de carne roja",
    diet_low: "Poco",
    diet_medium: "Moderado",
    diet_high: "Mucho",
    cat_goods: "Bienes de Consumo",
    goods_level: "Nivel de compras (ropa, electrónicos, etc.)",
    goods_low: "Bajo",
    goods_medium: "Promedio",
    goods_high: "Alto",
    cat_waste: "Gestión de Residuos",
    waste_level: "¿Qué porcentaje de tus residuos reciclas o compostas?",

    // Resultados
    result_title: "Tu huella de carbono anual estimada es:",
    comparison_title: "Comparativa Anual (toneladas CO₂e)",
    comparison_your: "Tu Huella",
    comparison_avg: "Promedio",
    comparison_avg_world: "Promedio Mundial",
    comparison_goal: "Objetivo 2030",
    
    // Offsetting
    offset_title: "Neutraliza tu Huella",
    offset_subtitle: "Compensar tus emisiones es una forma de hacerte responsable de tu impacto. Puedes hacerlo apoyando proyectos que reducen las emisiones de carbono en otros lugares, como la reforestación o las energías renovables.",
    offset_cost_text: "Para neutralizar tu huella, necesitarías contribuir con aproximadamente:",
    offset_button: "Neutralizar con FIDES",

    // Consejos
    advice_title: "🌱 Tus Pasos Hacia la Sostenibilidad",
    advice_hogar: "Tu mayor impacto proviene del <strong>hogar</strong>. Apuesta por electrodomésticos eficientes (A+++), mejora el aislamiento de tu vivienda y considera fuentes de energía renovable.",
    advice_transporte: "Tu mayor impacto es el <strong>transporte</strong>. Considera usar la bicicleta, caminar, el transporte público o compartir el coche. ¡Cada viaje cuenta!",
    advice_alimentacion: "Tu <strong>alimentación</strong> tiene un gran peso. Reducir el consumo de carne roja e incorporar más alimentos vegetales es la acción más efectiva que puedes tomar.",
    advice_bienes: "El <strong>consumo</strong> de bienes tiene un impacto oculto. Prefiere productos duraderos, de segunda mano y repara antes de reemplazar. ¡Menos es más!",
    advice_residuos: "La gestión de <strong>residuos</strong> es clave. Aumenta tu tasa de reciclaje y compostaje, y rechaza los productos de un solo uso para minimizar lo que va al vertedero.",
    advice_good: "¡Felicidades! Tu huella ya está por debajo del objetivo climático para 2030. Eres un ejemplo a seguir. Sigue así e inspira a otros.",
    advice_ok: "¡Vas por buen camino! Estás por debajo del promedio de tu país. Con pequeños ajustes en tu categoría de mayor impacto, puedes alcanzar el objetivo climático.",
    advice_high: "Tu huella es superior al promedio. ¡No te preocupes! Enfócate en tu categoría de mayor impacto; pequeños cambios ahí tendrán un gran resultado.",

    // Gamificación (Insignias)
    badge_modal_title: "¡Felicidades!",
    badges: {
        planet_hero: { name: "Héroe del Planeta", desc: "Tu huella de carbono es excepcionalmente baja, ¡estás por debajo del objetivo global para 2030! Eres una inspiración.", img: "img/badge_hero.png" },
        eco_warrior: { name: "Guerrero Ecológico", desc: "¡Excelente trabajo! Tu huella de carbono está por debajo del promedio de tu país. Sigue así.", img: "img/badge_warrior.png" },
        climate_aware: { name: "Consciente del Clima", desc: "Has dado el primer paso al medir tu huella. Ahora tienes el poder de reducirla y marcar la diferencia.", img: "img/badge_aware.png" }
    },
    
    // Otros
    export_btn: "Descargar Informe",
    pdf_filename: "mi_huella_de_carbono_FIDES",
    modal_close: "Cerrar",

    // Países
    country_co: "Colombia",
    country_us: "Estados Unidos",
    country_es: "España",
    country_fr: "Francia",
    country_de: "Alemania",
    country_gb: "Reino Unido",
    country_jp: "Japón",
    country_cn: "China",
    country_in: "India",
    country_world: "Promedio Mundial",

    // Contenido de Modales
    modal_content: {
      hogar: { title: "Huella de Carbono del Hogar", body: "<p>El consumo de <strong>electricidad</strong> es una de las principales fuentes de emisiones en el hogar. La energía que usamos proviene de una mezcla de fuentes (gas, carbón, renovables), y cada una tiene un impacto diferente. El 'mix energético' de tu país determina qué tan 'limpia' es tu electricidad.</p><p><em>Fuente: Agencia Internacional de Energía (IEA).</em></p>" },
      transporte: { title: "Impacto del Transporte", body: "<p>Los vehículos que queman <strong>combustibles fósiles</strong> (gasolina, diésel) liberan CO₂ directamente a la atmósfera. Incluso los coches eléctricos tienen una huella asociada a la generación de la electricidad que consumen y a su fabricación.</p><p><em>Fuente: Agencia de Protección Ambiental (EPA).</em></p>" },
      vuelos: { title: "Emisiones de la Aviación", body: "<p>Volar tiene una huella de carbono muy alta debido a la quema de combustible a gran altitud, lo que tiene un efecto de calentamiento más potente. Los vuelos de larga distancia son particularmente intensivos en carbono.</p><p><em>Fuente: Panel Intergubernamental sobre Cambio Climático (IPCC).</em></p>" },
      dieta: { title: "Alimentación y Cambio Climático", body: "<p>La producción de alimentos es responsable de aproximadamente un cuarto de las emisiones globales. La <strong>carne de rumiantes (vacas, ovejas)</strong> tiene el mayor impacto debido a las emisiones de metano y al uso de la tierra. Una dieta basada en plantas tiene una huella significativamente menor.</p><p><em>Fuente: Our World in Data.</em></p>" },
      bienes: { title: "El Costo Oculto del Consumo", body: "<p>La 'moda rápida', los aparatos electrónicos y otros bienes manufacturados requieren enormes cantidades de energía y recursos para su producción y transporte. Comprar menos, elegir productos duraderos y de segunda mano, y reparar en lugar de reemplazar son estrategias efectivas para reducir esta huella.</p><p><em>Fuente: Programa de las Naciones Unidas para el Medio Ambiente (PNUMA).</em></p>" },
      residuos: { title: "El Impacto de lo que Desechamos", body: "<p>Cuando los residuos orgánicos se descomponen en los vertederos sin oxígeno, liberan metano, un gas de efecto invernadero muy potente. Reciclar materiales como el papel, el vidrio y el metal ahorra una cantidad significativa de energía en comparación con la producción a partir de materias primas vírgenes.</p><p><em>Fuente: Agencia de Protección Ambiental (EPA).</em></p>" }
    }
  },
  en: {
    // ---- GENERAL ----
    email: "fidessuc@gmail.com",
    footer_copyright: "© FIDES Sucre Foundation, All Rights Reserved.",
    
    // ---- NAVIGATION ----
    nav_inicio: "HOME",
    nav_proyectos: "PROJECTS",
    nav_galeria: "GALLERY",
    nav_herramientas: "WEB TOOLS",
    nav_evaluador: "Sustainability Evaluator",
    nav_calculadora_carbono: "Carbon Calculator",
    nav_blog: "BLOG",

    // ---- CARBON CALCULATOR ----
    // Meta
    meta_title: "Personal & Educational Carbon Footprint Calculator | FIDES",
    meta_desc: "Calculate your personal carbon footprint with our interactive tool. Measure the impact of your energy, transport, and diet, and learn how to offset your footprint. Ideal for students and international use.",

    // Wizard and Buttons
    calc_title: "🌍 Personal Carbon Footprint Calculator",
    calc_subtitle: "Discover your environmental impact and learn how to reduce it.",
    country_label: "Country:",
    units_label: "Units:",
    units_metric: "Metric (km, kg)",
    units_imperial: "Imperial (miles, lbs)",
    learn_more: "Learn more",
    prev_btn: "Previous",
    next_btn: "Next",
    calculate_btn: "Calculate My Footprint",
    step_1: "Country",
    step_2: "Home",
    step_3: "Transport",
    step_4: "Diet",
    step_5: "Consumption",

    // Categories
    cat_home: "Home",
    home_electricity: "Monthly electricity consumption (kWh)",
    cat_transport: "Transport",
    transport_distance: "Weekly car distance",
    cat_flights: "Annual Flights",
    flights_short: "Short flights (under 3h, round trip)",
    flights_medium: "Medium flights (3-6h, round trip)",
    flights_long: "Long flights (over 6h, round trip)",
    cat_diet: "Diet",
    diet_level: "Red meat consumption level",
    diet_low: "Low",
    diet_medium: "Moderate",
    diet_high: "High",
    cat_goods: "Consumer Goods",
    goods_level: "Shopping level (clothing, electronics, etc.)",
    goods_low: "Low",
    goods_medium: "Average",
    goods_high: "High",
    cat_waste: "Waste Management",
    waste_level: "What percentage of your waste do you recycle or compost?",

    // Results
    result_title: "Your estimated annual carbon footprint is:",
    comparison_title: "Annual Comparison (tons CO₂e)",
    comparison_your: "Your Footprint",
    comparison_avg: "Average",
    comparison_avg_world: "World Average",
    comparison_goal: "2030 Goal",

    // Offsetting
    offset_title: "Offset Your Footprint",
    offset_subtitle: "Offsetting your emissions is a way to take responsibility for your impact. You can do this by supporting projects that reduce carbon emissions elsewhere, such as reforestation or renewable energy.",
    offset_cost_text: "To neutralize your footprint, you would need to contribute approximately:",
    offset_button: "Offset with FIDES",

    // Advice
    advice_title: "🌱 Your Steps Towards Sustainability",
    advice_hogar: "Your biggest impact comes from your <strong>home</strong>. Opt for efficient appliances (A+++), improve your home's insulation, and consider renewable energy sources.",
    advice_transporte: "Your biggest impact is <strong>transportation</strong>. Consider cycling, walking, public transport, or carpooling. Every trip counts!",
    advice_alimentacion: "Your <strong>diet</strong> has a major impact. Reducing red meat consumption and incorporating more plant-based foods is the most effective action you can take.",
    advice_bienes: "The <strong>consumption</strong> of goods has a hidden impact. Prefer durable, second-hand products and repair before replacing. Less is more!",
    advice_residuos: "<strong>Waste</strong> management is key. Increase your recycling and composting rate, and refuse single-use products to minimize what goes to landfill.",
    advice_good: "Congratulations! Your footprint is already below the 2030 climate goal. You are a role model. Keep it up and inspire others.",
    advice_ok: "You're on the right track! You are below your country's average. With small adjustments in your main impact category, you can reach the climate goal.",
    advice_high: "Your footprint is above average. Don't worry! Focusing on your main impact category can lead to significant results.",

    // Gamification (Badges)
    badge_modal_title: "Congratulations!",
    badges: {
        planet_hero: { name: "Planet Hero", desc: "Your carbon footprint is exceptionally low, you are below the global goal for 2030! You are an inspiration.", img: "img/badge_hero.png" },
        eco_warrior: { name: "Eco Warrior", desc: "Excellent work! Your carbon footprint is below your country's average. Keep it up.", img: "img/badge_warrior.png" },
        climate_aware: { name: "Climate Aware", desc: "You have taken the first step by measuring your footprint. You now have the power to reduce it and make a difference.", img: "img/badge_aware.png" }
    },
    
    // Other
    export_btn: "Download Report",
    pdf_filename: "my_carbon_footprint_FIDES",
    modal_close: "Close",

    // Countries
    country_co: "Colombia",
    country_us: "United States",
    country_es: "Spain",
    country_fr: "France",
    country_de: "Germany",
    country_gb: "United Kingdom",
    country_jp: "Japan",
    country_cn: "China",
    country_in: "India",
    country_world: "World Average",

    // Modal Content
    modal_content: {
      hogar: { title: "Home Carbon Footprint", body: "<p><strong>Electricity</strong> consumption is a major source of household emissions. The energy we use comes from a mix of sources (gas, coal, renewables), each with a different impact. Your country's 'energy mix' determines how 'clean' your electricity is.</p><p><em>Source: International Energy Agency (IEA).</em></p>" },
      transporte: { title: "Transportation Impact", body: "<p>Vehicles that burn <strong>fossil fuels</strong> (gasoline, diesel) release CO₂ directly into the atmosphere. Even electric cars have a footprint associated with the generation of the electricity they consume and their manufacturing.</p><p><em>Source: Environmental Protection Agency (EPA).</em></p>" },
      vuelos: { title: "Aviation Emissions", body: "<p>Flying has a very high carbon footprint due to fuel combustion at high altitudes, which has a more potent warming effect. Long-haul flights are particularly carbon-intensive.</p><p><em>Source: Intergovernmental Panel on Climate Change (IPCC).</em></p>" },
      dieta: { title: "Diet and Climate Change", body: "<p>Food production is responsible for about a quarter of global emissions. <strong>Ruminant meat (cows, sheep)</strong> has the highest impact due to methane emissions and land use. A plant-based diet has a significantly smaller footprint.</p><p><em>Source: Our World in Data.</em></p>" },
      bienes: { title: "The Hidden Cost of Consumption", body: "<p>'Fast fashion', electronics, and other manufactured goods require enormous amounts of energy and resources for their production and transport. Buying less, choosing durable and second-hand products, and repairing instead of replacing are effective strategies to reduce this footprint.</p><p><em>Source: United Nations Environment Programme (UNEP).</em></p>" },
      residuos: { title: "The Impact of What We Throw Away", body: "<p>When organic waste decomposes in landfills without oxygen, it releases methane, a very potent greenhouse gas. Recycling materials like paper, glass, and metal saves a significant amount of energy compared to producing them from virgin raw materials.</p><p><em>Source: Environmental Protection Agency (EPA).</em></p>" }
    }
  }
};