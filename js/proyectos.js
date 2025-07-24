document.addEventListener('DOMContentLoaded', function () {
    const projectData = [
        { num: 1, year: 1986, name: "Alternativas de producción para pequeños cultivadores de tabaco", client: "KMB Austria.", location: "Los Palmitos, Sucre", category: "Desarrollo Productivo y Económico" },
        { num: 2, year: 1990, name: "Capacitacion a 600 Familias Campesinas en 7 Municipio del Dpto de Sucre, en Producción de Hortalizas", client: "Fundación Restrepo Barco.", location: "Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 3, year: 1993, name: "Asesoría y Fondo de Crédito para la Producción y Procesamiento de Yuca", client: "Katholische Zentralstelle. Alemania", location: "Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 4, year: 1993, name: "Asesoría legal, Control y Seguimiento de Formas Asociativas (FAS) en Proyectos Agropecuarios", client: "Desarrollo Rural Integrado DRI", location: "Sucre, Colombia", category: "Fortalecimiento Institucional" },
        { num: 5, year: 1994, name: "Estudios de Electrificacion del Corregimiento de Jegua", client: "Municipio de San Benito", location: "San Benito, Sucre", category: "Infraestructura y Construcción" },
        { num: 6, year: 1994, name: "Fomento de la Vinculación de las Mujeres a la Producción Porcícola", client: "IICA", location: "Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 7, year: 1994, name: "Estudios de Estratificación Socioeconómica (San Benito)", client: "Municipio de San Benito", location: "San Benito, Sucre", category: "Fortalecimiento Institucional" },
        { num: 8, year: 1994, name: "Estudios de Estratificación Socioeconómica (San Marcos)", client: "Municipio de San Marcos", location: "San Marcos, Sucre", category: "Fortalecimiento Institucional" },
        { num: 9, year: 1995, name: "Estudios de Estratificación Socioeconómica (Majagual)", client: "Municipio de Majagual", location: "Majagual, Sucre", category: "Fortalecimiento Institucional" },
        { num: 10, year: 1995, name: "Capacitación en Formación Empresarial a 175 Microempresarios", client: "Coorp. para el Des. de la MiPyME", location: "Dpto. Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 11, year: 1996, name: "Estudios sobre una Granja Integral Agroecológica Autosuficiente", client: "FONADE", location: "Dpto. Sucre, Colombia", category: "Medio Ambiente" },
        { num: 12, year: 1996, name: "Impulso al Desarrollo Artesanal en el Departamento de Sucre", client: "Artesanías de Colombia", location: "Dpto. Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 13, year: 2000, name: "Capacitación y Asesorías para Artesanos del Municipio de Sampués", client: "Artesanías de Colombia", location: "Sampués, Sucre", category: "Desarrollo Social y Comunitario" },
        { num: 14, year: 2001, name: "Generación de Empleo para Población Desplazada", client: "FUPAD", location: "Dpto. Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 15, year: 2001, name: "Atención a Población Desplazada en Sincelejo (Generación de empleo e ingreso)", client: "FUPAD", location: "Sincelejo, Sucre", category: "Desarrollo Social y Comunitario" },
        { num: 16, year: 2001, name: "Establecimiento de Cultivos Agroecológicos en 5 Municipios de Sucre", client: "CARSUCRE", location: "Dpto. Sucre, Colombia", category: "Medio Ambiente" },
        { num: 17, year: 2002, name: "Mejoramiento de Capacidades Organizativas de Asociaciones de Desplazados", client: "GTZ, Alemania", location: "Sincelejo, Sucre", category: "Fortalecimiento Institucional" },
        { num: 18, year: 2002, name: "Plan de Desarrollo Institucional", client: "Novid, Holanda", location: "Sucre, Colombia", category: "Fortalecimiento Institucional" },
        { num: 19, year: 2002, name: "Formación en Educación Ambiental a Niños y Jóvenes en Sincelejo", client: "Fondo para la Acción Ambiental", location: "Sincelejo, Sucre", category: "Medio Ambiente" },
        { num: 20, year: 2003, name: "Creación y Fortalecimiento de Microempresas Apícolas", client: "IICA", location: "Dpto. Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 21, year: 2004, name: "Construcción de 5 Aulas de Clases en San Antonio", client: "Embajada de Japón", location: "San Antonio, Sucre", category: "Infraestructura y Construcción" },
        { num: 22, year: 2004, name: "Acciones Integrales para Atención a Población Desplazada", client: "Unión Europea", location: "Dpto. Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 23, year: 2005, name: "Construcción de 4 Aulas de Clases en I.E. Policarpa", client: "Embajada de Japón", location: "Sincelejo, Sucre", category: "Infraestructura y Construcción" },
        { num: 24, year: 2006, name: "Promoción de Alianzas Productivas entre Apicultores", client: "Ministerio de Agricultura", location: "Dpto. Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 25, year: 2006, name: "Apoyo Integral a Población Desplazada", client: "Unión Europea", location: "Dpto. Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 26, year: 2007, name: "Estabilización Socioeconómica de 500 Hogares Desplazados", client: "OIM", location: "Sincelejo, Sucre", category: "Desarrollo Social y Comunitario" },
        { num: 27, year: 2008, name: "Establecimiento de Cultivos Agroecológicos", client: "Corporación Ecofondo", location: "Dpto. Sucre, Colombia", category: "Medio Ambiente" },
        { num: 28, year: 2008, name: "Construcción de Alcantarillado Sanitario en Dulce Nombre de Jesús", client: "Municipio de Corozal", location: "Corozal, Sucre", category: "Infraestructura y Construcción" },
        { num: 29, year: 2008, name: "Estabilización Socioeconómica de 700 Hogares Desplazados", client: "OIM", location: "Sincelejo, Sucre", category: "Desarrollo Social y Comunitario" },
        { num: 30, year: 2008, name: "Construcción de 100 Viviendas de Interés Social", client: "UNIÓN EUROPEA", location: "Ovejas, Sucre", category: "Infraestructura y Construcción" },
        { num: 31, year: 2009, name: "Fortalecimiento Organizacional a 14 Familias de Productores Rurales", client: "ECOPETROL", location: "Morroa, Sucre", category: "Desarrollo Productivo y Económico" },
        { num: 32, year: 2010, name: "Fortalecimiento Organizacional a 220 Apicultores", client: "ACCION SOCIAL", location: "Dpto. Sucre, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 33, year: 2010, name: "Alianzas Productivas con 33 Apicultores del Municipio de Ovejas", client: "FIDUCOLDEX", location: "Ovejas, Sucre", category: "Desarrollo Productivo y Económico" },
        { num: 34, year: 2012, name: "Elaboración Plan de Desarrollo del Municipio de Ovejas", client: "Municipio de Ovejas", location: "Ovejas, Sucre", category: "Fortalecimiento Institucional" },
        { num: 35, year: 2012, name: "Alianzas Productivas con 39 Apicultores de Carmen de Bolívar", client: "FIDUCOLDEX", location: "Carmen de Bolívar", category: "Desarrollo Productivo y Económico" },
        { num: 36, year: 2012, name: "Fortalecimiento Técnico a la Secretaría de Planeación de Ovejas", client: "Municipio de Ovejas", location: "Ovejas, Sucre", category: "Fortalecimiento Institucional" },
        { num: 37, year: 2012, name: "Apoyo a Construcción de Plan de Vida Indígena (Cabildo Pueblecito)", client: "ECOPETROL", location: "San Antonio, Sucre", category: "Cultura" },
        { num: 38, year: 2012, name: "Diseño y Ejecución de un Programa de Capacitación", client: "ECOPETROL", location: "Sucre, Córdoba", category: "Fortalecimiento Institucional" },
        { num: 39, year: 2012, name: "Desarrollo Socioeconómico Tejido Verde", client: "ECOPETROL", location: "Sucre, Córdoba", category: "Desarrollo Productivo y Económico" },
        { num: 40, year: 2012, name: "Construcción y Recuperación de Parque Ecológico Pelinku", client: "ECOPETROL", location: "Ovejas, Sucre", category: "Medio Ambiente" },
        { num: 41, year: 2012, name: "Implementación de Compromisos Sociales", client: "ECOPETROL", location: "Córdoba, Sucre", category: "Desarrollo Social y Comunitario" },
        { num: 42, year: 2012, name: "Programa de Comunicación para el Desarrollo", client: "ECOPETROL", location: "Cesar, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 43, year: 2012, name: "Fortalecimiento Organizacional a Cultura Afrodescendiente", client: "ECOPETROL", location: "Coveñas, Sucre", category: "Cultura" },
        { num: 44, year: 2012, name: "Construcción y Rehabilitación de Vía Terciaria", client: "ECOPETROL", location: "Aserradero, Sucre", category: "Infraestructura y Construcción" },
        { num: 45, year: 2012, name: "Primera Etapa de Megacolegio Flamenco", client: "ECOPETROL", location: "María La Baja, Bolívar", category: "Infraestructura y Construcción" },
        { num: 46, year: 2012, name: "Estudios y Diseños Red Eléctrica Palenquillo", client: "ECOPETROL", location: "Tolú, Sucre", category: "Infraestructura y Construcción" },
        { num: 47, year: 2012, name: "Apoyo a Rescate de Medicina Tradicional Indígena Zenú", client: "ECOPETROL", location: "Córdoba, Colombia", category: "Cultura" },
        { num: 48, year: 2012, name: "Construcción de Sistema de Acueducto Guazo", client: "ECOPETROL", location: "Magangué, Bolívar", category: "Infraestructura y Construcción" },
        { num: 49, year: 2012, name: "Apoyo a Construcción Plan Vida Indígena (Cabildo Porvenir)", client: "ECOPETROL", location: "San Antero, Córdoba", category: "Cultura" },
        { num: 50, year: 2012, name: "Construcción de Casa de Reuniones (Cabildo Indígena Porvenir)", client: "ECOPETROL", location: "San Antero, Córdoba", category: "Infraestructura y Construcción" },
        { num: 51, year: 2012, name: "Construcción de Casa de Reuniones (Cabildo Indígena Pueblecito)", client: "ECOPETROL", location: "San Antonio, Sucre", category: "Infraestructura y Construcción" },
        { num: 52, year: 2013, name: "Ppalabreando sueños", client: "MINISTERIO DE CULTURA", location: "Sucre, Colombia", category: "Cultura" },
        { num: 53, year: 2013, name: "Formación artística para niños y adolescentes en población vulnerable", client: "MINISTERIO DE CULTURA", location: "Sucre, Colombia", category: "Cultura" },
        { num: 54, year: 2013, name: "Ejecución de Proyectos de Gestión Social en el Golfo de Morrosquillo", client: "ECOPETROL S.A.", location: "Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 55, year: 2013, name: "Proyecto de desarrollo socio económico Tejido Verde Caribe - Fase I", client: "ECOPETROL S.A.", location: "Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 56, year: 2013, name: "Programa de socialización y capacitación para grupos de interés del oleoducto Caño Limón-Coveñas", client: "ECOPETROL S.A.", location: "Sucre, Colombia", category: "Desarrollo Social y Comunitario" },
        { num: 57, year: 2013, name: "Apoyo a la construcción del plan de vida de la comunidad étnica Zenú", client: "ECOPETROL S.A.", location: "Cordoba, Colombia", category: "Cultura" },
        { num: 58, year: 2015, name: "Fortalecimiento de asociaciones de pescadores artesanales (Fase II)", client: "ECOPETROL S.A.", location: "Cordoba, Colombia", category: "Desarrollo Productivo y Económico" },
        { num: 59, year: 2015, name: "Consultoría para Museología y Museografía del Museo Arqueológico de Sucre", client: "GOBERNACION DE SUCRE.", location: "Sucre, Colombia", category: "Cultura" },
        { num: 60, year: 2016, name: "Formulación del Plan de Desarrollo Municipal de San Antonio de Palmitos", client: "Municipio de San Antonio de Palmitos.", location: "Sucre, Colombia", category: "Fortalecimiento Institucional" },
        { num: 61, year: 2016, name: "Recuperación y Transmisión de los Juegos Ancestrales de la Etnia Zenú", client: "Ministerio de Cultura", location: "Sucre, Colombia.", category: "Cultura" },
        { num: 62, year: 2016, name: "Espacio Inclusivo de Arte Contemporáneo", client: "Ministerio de Cultura", location: "Sucre, Colombia", category: "Cultura" },
        { num: 63, year: 2016, name: "Capacitación en Fortalecimiento Organizacional a formas asociativas de Sincelejo", client: "Alcaldia de Sincelejo.", location: "Sincelejo, Sucre", category: "Fortalecimiento Institucional" },
        { num: 64, year: 2017, name: "Fortalecimiento productivo de 420 pequeños productores de Hortalizas en La Guajira", client: "Organizacion de Estados Iberoamericanos OEI.", location: "Dpto de la Guajira.", category: "Desarrollo Productivo y Económico" },
        { num: 65, year: 2017, name: "Fortalecimiento de capacidades productivas de 580 familias en La Guajira", client: "Organizacion de Estados Iberoamericanos OEI.", location: "Dpto de la Guajira.", category: "Desarrollo Productivo y Económico" },
        { num: 66, year: 2018, name: "Alianza para la producción y comercialización de carne de Tilapia Roja", client: "Alianza Fiduciaria.", location: "San Onofre, Sucre", category: "Desarrollo Productivo y Económico" }
    ];

    const tableBody = document.getElementById('proyectosBody');
    const categoryFilter = document.getElementById('categoryFilter');
    const yearFilter = document.getElementById('yearFilter');
    let currentSort = { column: 0, ascending: true };

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(p => {
            const row = `<tr>
                <td>${p.num}</td>
                <td>${p.year}</td>
                <td>${p.name}</td>
                <td>${p.client}</td>
                <td>${p.location}</td>
                <td>${p.category}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    function populateFilters() {
        const categories = [...new Set(projectData.map(p => p.category))].sort();
        const years = [...new Set(projectData.map(p => p.year))].sort((a, b) => b - a);

        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.innerText = cat;
            categoryFilter.appendChild(option);
        });

        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.innerText = year;
            yearFilter.appendChild(option);
        });
    }

    window.applyFilters = function () {
        const searchFilter = document.getElementById('searchInput').value.toUpperCase();
        const categoryValue = categoryFilter.value;
        const yearValue = yearFilter.value;

        let filteredData = projectData.filter(p => {
            const yearMatch = (yearValue === "") || (p.year.toString() === yearValue);
            const categoryMatch = (categoryValue === "") || (p.category === categoryValue);
            const searchMatch = (searchFilter === "") || Object.values(p).some(val =>
                val.toString().toUpperCase().includes(searchFilter)
            );
            return yearMatch && categoryMatch && searchMatch;
        });

        renderTable(filteredData);
    }

    window.clearAllFilters = function () {
        document.getElementById('searchInput').value = '';
        categoryFilter.selectedIndex = 0;
        yearFilter.selectedIndex = 0;
        applyFilters();
    }

    window.sortTable = function(columnIndex) {
        const isAscending = currentSort.column === columnIndex ? !currentSort.ascending : true;
        currentSort = { column: columnIndex, ascending: isAscending };

        const keys = ['num', 'year', 'name', 'client', 'location', 'category'];
        const key = keys[columnIndex];
        const isNumeric = key === 'num' || key === 'year';

        const sortedData = [...projectData].sort((a, b) => {
            const valA = isNumeric ? a[key] : a[key].toString().toLowerCase();
            const valB = isNumeric ? b[key] : b[key].toString().toLowerCase();
            
            if (valA < valB) return isAscending ? -1 : 1;
            if (valA > valB) return isAscending ? 1 : -1;
            return 0;
        });

        document.querySelectorAll('.sort-icon').forEach(icon => icon.innerText = '');
        document.getElementById(`sortIcon-${columnIndex}`).innerText = isAscending ? ' ▲' : ' ▼';
        
        renderTable(sortedData);
    }

    // Initial setup
    renderTable(projectData);
    populateFilters();
});