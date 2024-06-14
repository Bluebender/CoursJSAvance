let issLatitude
let issLongitude
let p = document.getElementById('position')
let map
let marker

function getIssPosition() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then(response => response.json())
        .then(data => {
            issLatitude = data.iss_position.latitude
            issLongitude = data.iss_position.longitude
            p.textContent = `Latitude = ${issLatitude} | Longitude = ${issLongitude}`

            marker.setLatLng([issLatitude, issLongitude])
            map.flyTo([issLatitude,issLongitude])


        })
        .catch(error => console.log(error));
}

function init(){
    map = L.map('map').setView([0, 0], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var issIcon = L.icon({
        iconUrl: './iss.png',
        iconSize:     [64, 64], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    marker = L.marker([51.5, -0.09], {icon: issIcon}).addTo(map);


    setInterval(
        getIssPosition,
        2000
    )
}
init()

