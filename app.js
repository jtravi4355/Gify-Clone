var searchValue = document.querySelector(".search-bar");
var gridContainer = document.querySelector(".grid-container");
document.addEventListener("DOMContentLoaded", getRanGif);
// searchValue.addEventListener("keyup", getGif);

function getRanGif(e) {
  console.log("Gifs Loaded");

  var http = new XMLHttpRequest();
  const url =
    "http://api.giphy.com/v1/gifs/random?api_key=ZDuj4tNnrZX3zYnwoQD5yofmmmlU2oSW";

  http.open("GET", url);
  console.log("Opened");

  http.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (http.readyState === XMLHttpRequest.DONE) {
      var status = http.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        var res = JSON.parse(http.responseText);

        console.log(status);
        loadGif(res);
        for (let i = 0; i < 10; i++) {
          loadGif(res);
          output;
        }
      } else {
        // Oh no! There has been an error with the request!
        console.log(status);
      }
    }
  };

  http.send();
  e.preventDefault();
}

function loadGif(res) {
  console.log(res);
  console.log("Data Loaded");
  var link = res.data.fixed_width_downsampled_url;
  var title = res.data.title;
  console.log(link);
  gridContainer.innerHTML = `
  <div class="gif-container">
    <img src="${link}" alt="" />
    <p>${title}</p>
  </div>
  `;
}
