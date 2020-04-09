const navItems = document.querySelectorAll(".navigation li a");

const loadHere = document.querySelector(".dynamic-content");
let url = "partials/partial-1.html";

function handleClick(e) {

  e.preventDefault();
  
  let clickedLink = e.target;
  
  url = clickedLink.href;
  
  handleAjaxRequest();
}

for (let navItem of navItems) {
  navItem.addEventListener("click", handleClick);
}


function handleAjaxRequest() {
  fetch(url)
    .then(function (response) {
      if (response.statusText === "OK") {
        return response.text();
      }
      throw new Error(response.statusText);
    })
    .then(function (data) {
      loadHere.innerHTML = data;
    })
    .catch(function (error) {
      loadHere.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
    });
};


handleAjaxRequest();
