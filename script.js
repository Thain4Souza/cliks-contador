let contador = 0;

function incrementar() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

function resetar() {
  contador = 0;
  document.getElementById("contador").textContent = contador;
}

