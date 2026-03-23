document.addEventListener("DOMContentLoaded", function() {
  const jardim = document.getElementById('jardim');

  const tronco = document.createElement('div');
  tronco.classList.add('tronco');
  jardim.appendChild(tronco);
  setTimeout(() => tronco.style.transform = 'translateX(-50%) scaleY(1)', 500);

  const numeroPetalas = 200;
  for (let i = 0; i < numeroPetalas; i++) {
    const petala = document.createElement('div');
    petala.classList.add('petala');
    
    const angulo = Math.random() * Math.PI * 2;
    const raio = Math.random() * 90;
    
    const x = Math.cos(angulo) * raio + 150; 
    const y = Math.sin(angulo) * raio + 100; 

    petala.style.left = x + 'px';
    petala.style.top = y + 'px';

    jardim.appendChild(petala);

    setTimeout(() => {
      petala.style.transform = 'scale(1)';
    }, 1500 + (i * 8));
  }

  const dataInicioNamoro = new Date('2021-02-14T00:00:00'); 

  function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById('relogio').innerHTML = 
      dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s";
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();
});
