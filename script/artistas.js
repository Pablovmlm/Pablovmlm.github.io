document.querySelectorAll('.categories p').forEach(category => {
    category.addEventListener('click', function() {
        const categoryText = this.textContent.trim().toLowerCase();
        updateArtists(categoryText);
    });
});

function updateArtists(category) {
    const artistsContainer = document.querySelector('.artists');
    artistsContainer.innerHTML = ''; // Limpiar el contenido actual

    let artistsData = [];

    // Datos de ejemplo para cada categoría
    if (category === 'madrid') {
        artistsData = [
            { img: 'img/artistas/artista1.png', name: 'Artista Madrid 1', description: 'Especialista en realismo' },
            { img: 'img/artistas/artista2.png', name: 'Artista Madrid 2', description: 'Especialista en acuarela' }
        ];
    } else if (category === 'barcelona') {
        artistsData = [
            { img: 'img/artistas/artista3.png', name: 'Artista Barcelona 1', description: 'Especialista en geométrico' },
            { img: 'img/artistas/artista4.png', name: 'Artista Barcelona 2', description: 'Especialista en retratos' }
        ];
    } else if (category === 'ciudad real') {
        artistsData = [
            { img: 'img/artistas/artista5.png', name: 'Artista Ciudad Real 1', description: 'Especialista en tribal' },
            { img: 'img/artistas/artista6.png', name: 'Artista Ciudad Real 2', description: 'Especialista en minimalista' }
        ];
    } else if (category === 'zaragoza') {
        artistsData = [
            { img: 'img/artistas/artista7.png', name: 'Artista Zaragoza 1', description: 'Especialista en surrealismo' },
            { img: 'img/artistas/artista8.png', name: 'Artista Zaragoza 2', description: 'Especialista en abstracto' }
        ];
    }

    // Crear nuevas tarjetas de artistas
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist__card');

        const img = document.createElement('img');
        img.src = artist.img;
        img.alt = artist.name;

        const h2 = document.createElement('h2');
        h2.textContent = artist.name;

        const p = document.createElement('p');
        p.textContent = artist.description;

        artistCard.appendChild(img);
        artistCard.appendChild(h2);
        artistCard.appendChild(p);

        artistsContainer.appendChild(artistCard);
    });
}