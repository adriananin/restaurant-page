function onPageLoad() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("content");

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  const introCursive = document.createElement("h1");
  introCursive.textContent = "Welcome to";
  const introStraight = document.createElement("h1");
  introStraight.textContent = "The Brunch";
  const introDefinition = document.createElement("p");
  introDefinition.textContent = "The best meals in the galaxy";

  intro.classList.add("intro");
  introCursive.classList.add("intro__cursive");
  introStraight.classList.add("intro__straight");

  intro.appendChild(introCursive);
  intro.appendChild(introStraight);
  intro.appendChild(introDefinition);
  introContainer.appendChild(intro);

  homeDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeDiv);
}

export { onPageLoad };
