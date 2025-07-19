document.addEventListener('DOMContentLoaded', () => {
    const setLanguage = async (lang) => {
        // Guarda el idioma seleccionado
        localStorage.setItem('language', lang);
        
        // Carga el archivo de traducción
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) {
            console.error(`Could not load translation file for language: ${lang}`);
            return;
        }
        const translations = await response.json();
        
        // Busca todos los elementos con el atributo 'data-key' y los traduce
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key]) {
                 // Si es un input o textarea, traduce el placeholder
                 if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.placeholder) {
                        element.placeholder = translations[key];
                    }
                 } else {
                    // Para otros elementos, traduce el contenido HTML
                    element.innerHTML = translations[key];
                 }
            }
        });

        // Actualiza el estilo del botón de idioma activo
        document.querySelectorAll('.language-switcher a').forEach(a => a.classList.remove('active'));
        const activeLink = document.getElementById(`lang-${lang}`);
        if(activeLink) {
            activeLink.classList.add('active');
        }
    };

    // Agrega los listeners a los botones de idioma
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    if (langEsBtn && langEnBtn) {
        langEsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('es');
        });

        langEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }

    // Carga el idioma guardado o establece español por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});