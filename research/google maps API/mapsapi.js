var origin1 = new google.maps.LatLng(40.706417,-74.009082);
var origin2 = new google.maps.LatLng(40.759011, -73.984472);
var destinationA = new google.maps.LatLng(40.752726, -73.977229);
var destinationB = new google.maps.LatLng(40.574926, -73.985941);


function TripLength(){
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
    if (status == google.maps.DistanceMatrixStatus.OK) {
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
      } else {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';

      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var duration = element.duration.text;
          var durationValue = element.duration.value;
          var from = origins[i];
          var to = destinations[j];

          outputDiv.innerHTML += origins[i] + ' to ' + destinations[j] +
              ': ' + results[j].distance.text + ' in ' +
              results[j].duration.text + ' (' + Math.floor(durationValue/60) + ' minutes)' + '<br>';
        }
      }
    }
  }
  });
}

document.addEventListener('DOMContentLoaded', function(){
  var map = new google.maps.Map(document.getElementById("invisible-map"));
  TripLength();
})


// Further questions:
// Need to render an invisible map for API call to work, that's why invisible-map exists
// Will need to update origins to be current user location
// Will need to update destination to be from user calendar
