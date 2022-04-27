function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(-34.01634343886861, 22.77316737791086),
    zoom: 15,
    disableDefaultUI: true,
    styles:[{
      stylers:[{
        saturation : -100
      }]
    }]
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
};
