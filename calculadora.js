
function somar() {
    // 1. Pegar valores dos inputs
    const numero1 = parseFloat(document.getElementById("numero1").value) || 0;
    const numero2 = parseFloat(document.getElementById("numero2").value) || 0;

    // 2. Calcular a soma
    const resultado = numero1 + numero2;

    // 3. Exibir o resultado na página
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

document.querySelector("button").addEventListener("click", (event) => {
    document.querySelectorAll("p").forEach((paragraph) => {
      paragraph.classList.toggle("pilcrow");
    });
  
    [event.target.innerText, event.target.dataset.toggleText] = [
      event.target.dataset.toggleText,
      event.target.innerText,
    ];
  });