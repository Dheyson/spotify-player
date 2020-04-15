/* eslint-disable no-undef */
import spotify from '../../Spotify';
import renderAlbumInfo from '../AlbumInfo/AlbumInfo';
import renderAlbumTracks from '../AlbumTracks/AlbumTracks';
import renderAlbumInfoDetails from '../AlbumDetails/AlbumDetails';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
const albumDetailsInfo = document.getElementById('container-details');

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks))
    .then(data => renderAlbumInfoDetails(data, albumDetailsInfo));
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const target = e.target;
    makeRequest(target.getAttribute('data-album-id'));
  });
}
