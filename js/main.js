function welcome() {
  console.log("SVEIKI, SKAITOTE CONSOLE.LOG?");
}
welcome();

function dropdownButtonClick(event) {
  const buttonClicked = event.target;
  //   alert(buttonClicked);
  const hiddenMenu = document.querySelector(".dropdown");
  //   alert(buttonClicked.nextSibling);

  if (hiddenMenu.classList.contains("show")) {
    hiddenMenu.classList.remove("show");
  } else {
    if (buttonClicked.classList.contains("dropdown-button")) {
      hiddenMenu.classList.add("show");
    }
  }
}

document.addEventListener("click", dropdownButtonClick);
