
document.addEventListener("DOMContentLoaded", function () {
  var questionsButton = document.getElementById("questions-btn");
 
  if (questionsButton) {
    questionsButton.addEventListener("click", showQuestionsAlert);
  }
});
 
 

function showQuestionsAlert() {
  alert("If you have questions, contact me at:\nfinnegannull@gmail.com");
}
 
 

function initMap() {
  
  var center = { lat: 41.8781, lng: -87.6298 };
 
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: center
  });
 
  /* Places to show on the map */
  var places = [
    {
      title: "Illinois Institute of Technology",
      position: { lat: 41.8349, lng: -87.6270 },
      info: "Illinois Institute of Technology - where I study cybersecurity."
    },
    {
      title: "Garfield Park Conservatory",
      position: { lat: 41.8862, lng: -87.7172 },
      info: "Garfield Park Conservatory - a huge indoor garden full of plants from many climates."
    },
    {
      title: "Lincoln Park Conservatory",
      position: { lat: 41.9233, lng: -87.6339 },
      info: "Lincoln Park Conservatory - a historic glass greenhouse with palms, ferns, and orchids."
    }
  ];
 
  /* Extra feature 2: one info window that opens when a marker is clicked */
  var infoWindow = new google.maps.InfoWindow();
 
  /* Extra feature 1: a marker for each place */
  function addMarker(place) {
    var marker = new google.maps.Marker({
      position: place.position,
      map: map,
      title: place.title
    });
 
    marker.addListener("click", function () {
      infoWindow.setContent(place.info);
      infoWindow.open(map, marker);
    });
  }
 
  for (var i = 0; i < places.length; i++) {
    addMarker(places[i]);
  }
 
  /* Extra feature 3: clicking the map drops a new marker where you clicked */
  map.addListener("click", function (event) {
    var myMarker = new google.maps.Marker({
      position: event.latLng,
      map: map,
      title: "My marker"
    });
 
    myMarker.addListener("click", function () {
      infoWindow.setContent("You dropped this marker here!");
      infoWindow.open(map, myMarker);
    });
  });
}
 
