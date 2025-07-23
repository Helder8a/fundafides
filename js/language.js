document.addEventListener('DOMContentLoaded', () => {
    // Detecta el idioma del navegador o usa el guardado, con español como defecto.
    const userLanguage = localStorage.getItem('language') || navigator.language.split('-')[0] || 'es';
    setLanguage(userLanguage);
});

function setLanguage(lang) {
    // Solo cambia si el idioma es español o inglés.
    const effectiveLang = (lang === 'en') ? 'en' : 'es';

    localStorage.setItem('language', effectiveLang);
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[effectiveLang] && translations[effectiveLang][key]) {
            // Revisa si el atributo a cambiar es un 'placeholder'
            if (element.hasAttribute('data-key-placeholder')) {
                element.placeholder = translations[effectiveLang][key];
            } else {
                element.textContent = translations[effectiveLang][key];
            }
        }
    });

    // Actualiza el idioma en la etiqueta <html> para SEO y accesibilidad
    document.documentElement.lang = effectiveLang;
}