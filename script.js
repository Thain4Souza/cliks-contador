// Variável que guarda o número de cliques
let contador = 0;

// Função que é chamada quando o botão é clicado
function incrementar() {
  contador++; // Soma +1
  document.getElementById("contador").textContent = contador; // Atualiza o número na tela
}

