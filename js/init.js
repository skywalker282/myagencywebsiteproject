document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  var sideElems = document.querySelectorAll(".sidenav");
  var sideInstances = M.Sidenav.init(sideElems, {});

  var tabElem = document.querySelectorAll(".tabs");
  var tabInstance = M.Tabs.init(tabElem, {});

  var parallaxElems = document.querySelectorAll(".parallax");
  var parallaxInstances = M.Parallax.init(parallaxElems, {});

  var collapsibleElems = document.querySelectorAll(".collapsible");
  var collapsibleInstances = M.Collapsible.init(collapsibleElems, {});
});

//Set the chat button on every screen
// const project = document.querySelector("#project");
// const service = document.querySelector("#service");
// const competence = document.querySelector("#competence");
// const about = document.querySelector("#about");

// const screens = [project, service, competence, about];
// const chatButton = document.createElement("i");
// chatButton.classList.add(
//   "material-icons",
//   "btn",
//   "waves-effect",
//   "android-float",
//   "blue",
//   "white-text"
// );
// chatButton.innerText = "chat";

// screens.forEach((screen) => {
//   screen.appendChild(chatButton);
// });

// //scrolling
// //Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

//chat open handling

const startChat = document.querySelectorAll(".chat");
const chatZone = document.querySelector(".chat-zone");

chatZone.addEventListener("click", (event) => {
  event.stopPropagation();
  chatZone.classList.add("hidden");
});

startChat.forEach((chat) => {
  chat.addEventListener("click", (event) => {
    event.preventDefault();
    chatZone.classList.remove("hidden");
  });
});

//info cards
const mediaZone = document.querySelector(".article-block");

fetch(
  "https://gnews.io/api/v4/search?q=africa%20AND%20investment&token=061ecf3ca67a9a953ca6e69439135033"
)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
    res.articles = res.articles.slice(0, 9);
    res.articles.forEach((article) => {
      let newArticle = document.createElement("div");
      newArticle.classList.add("col", "s12", "m3", "card-panel");
      newArticle.innerHTML = `<img src=${article.image} alt="info">
      <div class="card-body">
          <h6 class="grey-text text-darken-1 title">${article.title}</h6>
          <a class="blue-text source" href=${article.url}>${
        article.source.name
      }</a>
          <p>${article.description.slice(0, 110) + "..."}</p>
          <a class="right more" href=${article.url}>Read more >></a>
      </div>`;
      mediaZone.appendChild(newArticle);
    });
  });
