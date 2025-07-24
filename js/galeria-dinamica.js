document.addEventListener('DOMContentLoaded', function () {

    // --- LISTA DE IMÁGENES ---
    // Para agregar una nueva imagen a la galería:
    // 1. Sube la imagen a la carpeta "img_galeria".
    // 2. Agrega el nombre del archivo (con su extensión .webp) a esta lista, dentro de las comillas.
    const imageFiles = [
        'fides_1.webp', 'fides_2.webp', 'fides_3.webp', 'fides_4.webp',
        'fides_5.webp', 'fides_6.webp', 'fides_7.webp', 'fides_8.webp',
        'fides_9.webp', 'fides_10.webp', 'fides_11.webp', 'fides_12.webp',
        'fides_13.webp', 'fides_14.webp', 'fides_15.webp', 'fides_16.webp',
        'fides_17.webp', 'fides_18.webp', 'fides_19.webp', 'fides_20.webp',
        'fides_21.webp', 'fides_22.webp', 'fides_23.webp', 'fides_24.webp',
        'fides_25.webp', 'fides_26.webp', 'fides_27.webp', 'fides_28.webp',
        'fides_29.webp', 'fides_30.webp', 'fides_31.webp', 'fides_32.webp',
        'fides_33.webp', 'fides_34.webp', 'fides_35.webp', 'fides_36.webp',
        'fides_37.webp'
        // Agrega más nombres de archivo aquí, separados por comas.
    ];

    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer) {
        // Genera el HTML para cada imagen y lo inserta en el contenedor
        imageFiles.forEach(fileName => {
            const itemHTML = `
                <div class="gallery-item">
                    <a href="img_galeria/${fileName}" data-toggle="lightbox" data-gallery="gallery-collage">
                        <img src="img_galeria/${fileName}" class="img-fluid" alt="Imagen de proyecto FIDES">
                        <div class="gallery-overlay">
                            <h3>Transformando Vidas</h3>
                            <i class="fa fa-search-plus"></i>
                        </div>
                    </a>
                </div>
            `;
            galleryContainer.innerHTML += itemHTML;
        });

        // Inicializa el plugin Lightbox después de crear los elementos
        // Se usa delegación de eventos para que funcione con contenido dinámico
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    }
});