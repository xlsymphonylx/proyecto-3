(() => {
  if (!localStorage.getItem("tarjetas")) {
    const tajertas = [
      {
        numero: "0909225648",
        pin: "2022",
        quetzales: "10000",
        dolares: "2000",
      },
      {
        numero: "0909221214",
        pin: "2022",
        quetzales: "10000",
        dolares: "2000",
      },
    ];
    localStorage.setItem("tarjetas", JSON.stringify(tajertas));
  }
})();


const checkCard = () => {
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const insertedCard = mainInput.value;
  const foundCard = cards.find((card) => card.numero === insertedCard);
  if (foundCard) {
    localStorage.setItem("currentCard", foundCard.numero);
    alert("Tarjeta Valida");
    window.location.href = "confirmacionPin.html";
  } else alert("Error, intente de nuevo");
};
