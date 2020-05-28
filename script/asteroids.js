// Var for today
var today = new Date();
// This generates today date to use to fetch from api (YYYY-MM-DD)
var dateofday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// Fetching from url
fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+dateofday+"&end_date="+dateofday+"&api_key=Z3Jw58G6gbSCS1cCaLDdp2RrsvGtfaJ5Sd4ckvO2")
.then(function(promiseResponse) {
    return promiseResponse.json();
})
.then(function(data) {
  	// This functions give result from api
    fillUpResults(data.element_count);
    console.log(data);
    	// This function create array of objects and repate for each element
    var objects = [];
    Object.keys(data.near_earth_objects).forEach(function (item) {
        objects = data.near_earth_objects[item];
    });
    // for each oject in DOM
    objects.forEach(element => {
        var html = '<a href='+element.nasa_jpl_url+' target="_blank"><img src="images/asteroid.jpg" title="Illustration of an asteroid" atr="apiimage" height="226" width="300"></a><br><p>Name: '+element.name+'</p><p>ID: '+element.id+'</p><p>Max diameter: '+element.estimated_diameter.meters.estimated_diameter_max+' meter </p><p>Neo ref id: '+element.neo_reference_id+' </p><a href='+element.nasa_jpl_url+' class="readmorebutton" target="_blank" title="Read more about this asteroid">Read more about this asteroid</a>';
        fillUpObjects(html);
    });
})
.catch(function(error) {
    console.log(error);
});


// For filling result in DOM Content
function fillUpResults(count) {
    document.getElementById("objectstoday").innerHTML = count;
}

function fillUpObjects(html) {
    var node = document.createElement("div");
    node.classList.add("asteroids");
    node.innerHTML = html;
    document.getElementById("asteroids").appendChild(node);
}

// Remove Loading

var asteroidContainer = document.getElementById("loader");
asteroidContainer.remove();
