function menu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("content");

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const introStraight = document.createElement("h1");
  introStraight.textContent = "Menu";
  introStraight.classList.add("intro__straight");

  intro.appendChild(introStraight);
  introContainer.appendChild(intro);

  menuDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(menuDiv);
}

export { menu };
