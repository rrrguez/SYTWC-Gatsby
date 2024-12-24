class NoticiaCard extends HTMLElement {
    static get observedAttributes() {
    return ['titulo', 'descripcion', 'fuente', 'imagen', 'enlace', 'fecha'];
    }

    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.loadTemplate();

    // Se escucha el evento de cambio de valoración y se imprime por consola si se modifica
    this.shadowRoot.addEventListener('valoracion-cambiada', (event) => {
        console.log(`Nueva valoración para "${this.getAttribute('titulo')}": ${event.detail.rating} estrellas`);
    });
    }

    loadTemplate() {
    const template = document.getElementById('card-news').content.cloneNode(true);
    this.shadowRoot.appendChild(template);
    }

    attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'titulo') {
        this.shadowRoot.querySelector('.title').textContent = newValue;
    } else if (name === 'descripcion') {
        this.shadowRoot.querySelector('.description').textContent = newValue;
    } else if (name === 'fuente') {
        this.shadowRoot.querySelector('.source').textContent = `Fuente: ${newValue}`;
    } else if (name === 'imagen') {
        const img = this.shadowRoot.querySelector('.image');
        if (newValue) {
        img.src = newValue;
        img.style.display = 'block';
        } else {
        img.style.display = 'none';
        }
    } else if (name === 'enlace') {
        this.shadowRoot.querySelector('.link').href = newValue;
    } else if (name === 'fecha') {
        var days = this.calculateDaysAgo(newValue);
        if (days === 0) {
        this.shadowRoot.querySelector('.days-ago').textContent = `Publicado hoy`;
        } else if (days === 1) {
        this.shadowRoot.querySelector('.days-ago').textContent = `Publicado hace ` + days + ` día`;
        } else if (days > 1) {
        this.shadowRoot.querySelector('.days-ago').textContent = `Publicado hace ` + days + ` días`;
        }
    }
    }

    calculateDaysAgo(fecha) {
    var publishedDate = new Date(fecha);
    var currentDate = new Date();

    var publishedDate_ms = publishedDate.getTime() - publishedDate.getTimezoneOffset() * (1000 * 60);
    var currentDate_ms = currentDate.getTime() - currentDate.getTimezoneOffset() * (1000 * 60);

    return Math.floor((currentDate_ms - publishedDate_ms) / (1000 * 3600 * 24));
    }
}

customElements.define('noticia-card', NoticiaCard);

function obtenerNoticias() {
    const filtro = document.getElementById('filtro').value;
    const url = `https://newsapi.org/v2/everything?q=pokemon&sortBy=${filtro}&apiKey=837a31ae3332452984f7fe9642c6511d`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const contenedor = document.querySelector('.mi-contenedor');
        contenedor.innerHTML = ''; // Limpiar noticias anteriores

        if (data.status === "ok" && data.articles.length > 0) {
        let validArticleCount = 0;

        // Recorrer las noticias
        for (let i = 0; i < data.articles.length && validArticleCount < 3; i++) {
            const noticia = data.articles[i];

            // Verificar si la noticia es válida
            if (!noticia.description || noticia.description.includes("[Removed]")) {
            continue;
            }

            // Crear una instancia del Web Component 'noticia-card'
            const noticiaCard = document.createElement('noticia-card');
            noticiaCard.setAttribute('titulo', noticia.title);
            noticiaCard.setAttribute('descripcion', noticia.description);
            noticiaCard.setAttribute('fuente', noticia.source.name);
            noticiaCard.setAttribute('enlace', noticia.url);
            noticiaCard.setAttribute('imagen', noticia.urlToImage || '');
            noticiaCard.setAttribute('fecha', noticia.publishedAt); // Establecer la fecha de publicación

            contenedor.appendChild(noticiaCard); // Agregar el componente al contenedor
            validArticleCount++;
        }
        } else {
        alert("No se han encontrado resultados para esta búsqueda.");
        }
    })
    .catch(error => console.error('Error al obtener las noticias:', error));
}
