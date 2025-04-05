
function somar() {
    // 1. Pegar valores dos inputs
    const numero1 = parseFloat(document.getElementById("numero1").value) || 0;
    const numero2 = parseFloat(document.getElementById("numero2").value) || 0;

    // 2. Calcular a soma
    const resultado = numero1 + numero2;

    // 3. Exibir o resultado na página
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}