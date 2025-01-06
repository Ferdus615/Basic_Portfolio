const form = document.getElementById("reco-form");
const recoBox = document.getElementById("reco-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  const recoCard = document.createElement("div");
  recoCard.classList.add("reco-card");

  const quoteText = document.createElement("p");
  quoteText.classList.add("quote");

  if (name !== "") {
    quoteText.innerHTML = `" ${comment} " <br> <b>${name}</b>`;
  } else {
    quoteText.textContent = `" ${comment} "`;
  }

  recoCard.appendChild(quoteText);

  recoBox.appendChild(recoCard);

  confirm("Thank you for the recommendation!");

  //   form.reset();
});
