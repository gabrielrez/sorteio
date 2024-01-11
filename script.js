function inputsValidos(min, max) {
  return !isNaN(min) && !isNaN(max) && parseInt(min) < parseInt(max);
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
}

function sortear() {
  const minInput = document.getElementById("inputA");
  const maxInput = document.getElementById("inputB");

  if (inputsValidos(minInput.value, maxInput.value)) {
    const resultado = document.getElementById("resultado");
    const sorteioResultado = numeroAleatorio(minInput.value, maxInput.value);
    resultado.innerText = sorteioResultado;
  } else {
    alert("Por favor, insira valores numéricos válidos, e certifique-se de que o valor mínimo não é maior ou igual ao valor máximo.");
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", sortear);