// Callback to run when data is ready
function reqListener() {
    // Parse the JSON text to an object so we can get just one property
    var data = JSON.parse(this.responseText);
    // Append that value to the DOM.
    document.querySelector("Article").innerHTML = data.body;
}

// Create a new ajax requst
var oReq = new XMLHttpRequest();
// Fire callback on load event
oReq.addEventListener("load", reqListener);
// Create the connection to our API
oReq.open("GET", "https://zenquotes.io/api/random");
// Fire the request
oReq.send();