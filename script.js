function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Select the button element
// Toggle dark mode
const toggleButton = document.getElementById("toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change the dark mode icon when toggled
  if (body.classList.contains("dark-mode")) {
    toggleButton.innerHTML = "☀️";
  } else {
    toggleButton.innerHTML = "🌙";
  }
});

function sendToWhatsapp() {
  let number = "+77022766797";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  var url =
    "https://wa.me/" +
    number +
    "?text=" +
    "Name : " +
    name +
    "%0a" +
    "Email : " +
    email +
    "%0a" +
    "Message : " +
    message +
    "%0a%0a";

  window.open(url, "_blank").focus();
}
