// fetching from api
fetch("http://api.open-notify.org/iss-now.json")
.then(function(promiseResponse) {
    return promiseResponse.json();
})
.then(function(data) {
    fillUpResults(data.iss_position.latitude, data.iss_position.longitude);
})
// to catch error
.catch(function(error) {
    console.log(error);
});

function fillUpResults(latitude, longitude) {
    document.getElementById("isslocation").innerHTML = "Latitude: " + latitude + ", Longitude: " +longitude;
}
