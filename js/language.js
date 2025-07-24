document.addEventListener('DOMContentLoaded', () => {
    // Detecta el idioma del navegador o usa el guardado, con español como fallback.
    const userLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'es';
    setLanguage(userLang);

    // Actualiza los botones de idioma para mostrar cuál está activo.
    updateLangButtons(userLang); 
});

function setLanguage(lang) {
    // Si no tenemos la traducción, usamos español por defecto.
    if (!translations[lang]) {
        lang = 'es';
    }

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang; // Actualiza el atributo lang del HTML

    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Usamos innerHTML para permitir etiquetas como <strong> si las añadieras en el futuro.
            element.innerHTML = translations[lang][key];
        }
    });
    updateLangButtons(lang);
}

function updateLangButtons(activeLang) {
    document.querySelectorAll('.lang-btn-nav').forEach(btn => {
        if (btn.getAttribute('onclick').includes(`'${activeLang}'`)) {
            btn.style.fontWeight = 'bold';
            btn.style.color = '#FDBE33'; // Color de acento para el idioma activo
        } else {
            btn.style.fontWeight = 'normal';
            btn.style.color = '#ffffff';
        }
    });
}