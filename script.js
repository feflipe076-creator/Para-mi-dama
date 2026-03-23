document.addEventListener("DOMContentLoaded", function() {
  const jardim = document.getElementById('jardim');

  // 1. Criar e animar o Tronco
  const tronco = document.createElement('div');
  tronco.classList.add('tronco');
  jardim.appendChild(tronco);

  setTimeout(() => {
    tronco.classList.add('animar');
  }, 100); // Pequeno delay para garantir que o elemento foi criado

  // 2. Criar e animar as Pétalas
  const numeroPetalas = 150; // Quantidade de pétalas

  for (let i = 0; i < numeroPetalas; i++) {
    createPetala(i);
  }

  function createPetala(index) {
    const petala = document.createElement('div');
    petala.classList.add('petala');

    // Posicionamento Aleatório para formar a copa
    const randomX = Math.random() * 200 - 100; // Variação em X (-100 a 100px)
    const randomY = Math.random() * 200 + 150; // Variação em Y (Acima do tronco)

    // Define as variáveis CSS específicas para cada pétala
    petala.style.setProperty('--x', `${randomX}px`);
    petala.style.setProperty('--y', `-${randomY}px`);

    // Atualiza o CSS para usar as variáveis no transform
    petala.style.transform = `translate(calc(-50% + var(--x)), var(--y)) scale(0)`;

    jardim.appendChild(petala);

    // Animação com delay incremental para efeito cascata
    setTimeout(() => {
      petala.style.transform = `translate(calc(-50% + var(--x)), var(--y)) scale(1)`;
    }, 1000 + (index * 15)); // Começa após o tronco e cresce uma a uma
  }
});
