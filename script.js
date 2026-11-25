// Em telas sensíveis ao toque, o cartão pode ser virado com um toque.
document.querySelectorAll(".cartao").forEach((cartao) => {
  cartao.addEventListener("click", (evento) => {
    // Não interfere em seleção de texto nem em outros controles.
    cartao.classList.toggle("virado");
  });
});
