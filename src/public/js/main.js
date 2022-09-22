const map = L.map('map-template').setView([51.505, -0.09], 10);

const socket = io();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('Marcabeli');
    map.addLayer(marker);
    console.log(e.latlng)
    socket.emit('userCoordinates', e.latlng)
});

socket.on('newUserConnected', coord =>{
    console.log('new user connected')
    const marker = L.marker([coord.lat+1, coord.lng+1]);
    marker.bindPopup('New User');
    map.addLayer(marker);
})