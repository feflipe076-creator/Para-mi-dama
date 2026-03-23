document.addEventListener("DOMContentLoaded", function() {
  const jardim = document.getElementById('jardim');

  // Criar Tronco
  const tronco = document.createElement('div');
  tronco.classList.add('tronco');
  jardim.appendChild(tronco);
  setTimeout(() => tronco.style.transform = 'translateX(-50%) scaleY(1)', 500);

  // Criar Pétalas em formato de círculo
  const numeroPetalas = 150;
  for (let i = 0; i < numeroPetalas; i++) {
    const petala = document.createElement('div');
    petala.classList.add('petala');
    
    // Lógica para formato circular (Copa da árvore)
    const angulo = Math.random() * Math.PI * 2;
    const raio = Math.random() * 80; // Define o tamanho da copa
    const x = Math.cos(angulo) * raio + 150; // Centraliza no jardim
    const y = Math.sin(angulo) * raio + 100; // Sobe as pétalas

    petala.style.left = x + 'px';
    petala.style.top = y + 'px';

    jardim.appendChild(petala);

    setTimeout(() => {
      petala.style.transform = 'scale(1)';
    }, 1500 + (i * 10));
  }

  // Função do Contador (Ajuste a data abaixo)
  function atualizarContador() {
    const inicio = new Date('2021-02-14T00:00:00'); // COLOQUE A DATA DE VOCÊS AQUI
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const segs = Math.floor((diff / 1000) % 60);

    document.getElementById('relogio').innerHTML = 
      `${dias} dias, ${horas}h ${mins}m ${segs}s`;
  }
  setInterval(atualizarContador, 1000);
});