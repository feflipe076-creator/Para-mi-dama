document.addEventListener("DOMContentLoaded", function() {
  const jardim = document.getElementById('jardim');

  // --- PARTE 1: GERAR A ÁRVORE ---

  // Criar e animar o Tronco
  const tronco = document.createElement('div');
  tronco.classList.add('tronco');
  jardim.appendChild(tronco);
  setTimeout(() => tronco.style.transform = 'translateX(-50%) scaleY(1)', 500);

  // Criar e animar as Pétalas em formato de círculo (Copa da árvore)
  const numeroPetalas = 180; // Quantidade de girassóis
  for (let i = 0; i < numeroPetalas; i++) {
    const petala = document.createElement('div');
    petala.classList.add('petala');
    
    // Lógica para formato circular (Copa)
    const angulo = Math.random() * Math.PI * 2;
    const raio = Math.random() * 85; // Define o tamanho da copa
    
    // Posicionamento X e Y centralizado no jardim
    const x = Math.cos(angulo) * raio + 150; 
    const y = Math.sin(angulo) * raio + 100; 

    petala.style.left = x + 'px';
    petala.style.top = y + 'px';

    jardim.appendChild(petala);

    // Animação com delay incremental para efeito "crescimento"
    setTimeout(() => {
      petala.style.transform = 'scale(1)';
    }, 1500 + (i * 10)); // Começa após o tronco e cresce uma a uma
  }

  // --- PARTE 2: O CONTADOR DE TEMPO ---

  // AJUSTE A DATA DE INÍCIO DO NAMORO AQUI (Ano-Mês-Dia)
  const dataInicioNamoro = new Date('2021-02-14T00:00:00'); 

  function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamoro;

    // Se o contador for negativo (data no futuro), exibe uma mensagem
    if (diferenca < 0) {
      document.getElementById('relogio').innerHTML = "O futuro nos espera! ❤️";
      return;
    }

    // Cálculos de tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    // Formatação e exibição
    document.getElementById('relogio').innerHTML = 
      `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
  }

  // Atualizar o contador a cada 1 segundo
  setInterval(atualizarContador, 1000);
});