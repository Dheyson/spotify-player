function createMarkup(data) {
  return (`
  <img class="album-image" id="album-img" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
  <a href="./artist-details.html">
    <p class="album-artist">${data.artists[0].name}</p>
  </a>
    <p class="album-counter">${data.tracks.total} Músicas</p>
    <p class="album-counter">${data.popularity} Músicas</p>
    <p class="album-followers" data-album-id=${data.id}>${data.popularity} Seguidores</p>
    <p class="album-followers" data-album-id=${data.id}>${data.explicit} Seguidores</p>
  `);
}

export default function renderAlbumInfoDetails(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;

  return data;
}
