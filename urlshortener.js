let urlInput = document.getElementById("url-input");
let resultDisplay = document.getElementById("result");

function getData() {
  let inputValue = urlInput.value;
  fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
    .then((resp) => resp.json())
    .then(function (data) {
      resultDisplay.innerHTML = data.result.short_link;
    });
}
