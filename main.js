import "./src/styles.css";
import "./src/component/search-list.js";
import "./src/component/gallery-card.js";

const userSearch = document.querySelector("#searchInput");
const searchResult = document.querySelector("search-result");

userSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let menu = userSearch.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        return (searchResult.results = responseJSON.meals);
      })
      .catch((error) => {
        return console.log(error);
      });
  }
});

window.onscroll = () => {
  scrollNavbar();
};

const scrollNavbar = () => {
  const navBar = document.querySelector("nav");

  if (document.documentElement.scrollTop > 70) {
    navBar.classList.add("main-color");
  } else {
    navBar.classList.remove("main-color");
  }
};
