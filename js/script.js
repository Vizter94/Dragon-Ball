console.log("Witaj!");
let picture = document.querySelector(".picture");
let name = document.querySelector(".name");
let body = document.querySelector(".body");
let button = document.querySelector(".button");
let characters = document.querySelector(".characters");
let buttonText = document.querySelector(".buttonText");

button.addEventListener("click", () => {
  characters.classList.toggle("charactersTheme");
  body.classList.toggle("theme");
  if (body.classList.contains("theme")) {
    buttonText.innerText = "jasny"
  } else {
    buttonText.innerText = "ciemny"
  }
});

name.addEventListener("mouseenter", () => {
  picture.style.display = "block";
});
name.addEventListener("mouseleave", () => {
  picture.style.display = "none";
});

