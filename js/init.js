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

  var scrollspyElems = document.querySelectorAll(".scrollspy");
  var scrollspyInstances = M.ScrollSpy.init(scrollspyElems, {});

  var domSteppers = document.querySelectorAll(".stepper.demos");
  for (var i = 0, len = domSteppers.length; i < len; i++) {
    var domStepper = domSteppers[i];
    new MStepper(domStepper);
  }
  var formElems = document.querySelectorAll("select");
  var formInstances = M.FormSelect.init(formElems, {});

  var dateElems = document.querySelectorAll(".datepicker");
  var dateInstances = M.Datepicker.init(dateElems, {});

  var timeElems = document.querySelectorAll(".timepicker");
  var timeInstances = M.Timepicker.init(timeElems, {});

  var modalElems = document.querySelectorAll(".modal");
  var modalInstances = M.Modal.init(modalElems, {
    opacity: 0.1,
  });
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

//install prompt

let deferredPrompt = null;
let fireInstall = document.querySelector(".install");

// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   deferredPrompt = event;
//   fireInstall.classList.remove("hidden");
// });

fireInstall.addEventListener("click", (event) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((result) => {
      if (result.outcome === "dismissed") {
        window.Notification.requestPermission().then(() => {
          try {
            new Notification("App installation", {
              body: "By dismissing the prompt you refuse to install the app version of this webstite on your device",
            });
          } catch (error) {
            alert("Notification aborted");
          }
        });
      } else {
        window.Notification.requestPermission().then(() => {
          try {
            new Notification("App installation", {
              body: "The app version of the website was ionstalled on your device successfully",
            });
          } catch (error) {
            alert("Notification aborted");
          }
          fireInstall.classList.add("hidden");
        });
      }
    });
  }
});

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

function checkEmailDB(destroyFeedback) {
  setTimeout(function () {
    destroyFeedback(true);
  }, 1000);
}

//progate event inside link children
document.querySelectorAll(".collection li").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.childNodes.forEach((link) => {
      link.click();
    });
  });
});
