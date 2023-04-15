function contact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("content");

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const introStraight = document.createElement("h1");
  introStraight.textContent = "Contact";
  introStraight.classList.add("intro__straight");

  intro.appendChild(introStraight);
  introContainer.appendChild(intro);

  contactDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(contactDiv);
}

export { contact };
