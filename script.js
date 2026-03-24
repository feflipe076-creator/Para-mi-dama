document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById('botao-abrir');
    const conteudo = document.getElementById('conteudo-secreto');
    const chuvaContainer = document.getElementById('chuva');
    const musica = document.getElementById('musica');

    const dataInicio = new Date('2026-02-20T00:00:00');

    function criarFlor() {
        const flor = document.createElement('div');
        flor.classList.add('flor-caindo');
        flor.innerHTML = "🌻";
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.animationDuration = Math.random() * 3 + 2 + "s";
        flor.style.fontSize = Math.random() * 20 + 15 + "px";
        chuvaContainer.appendChild(flor);
        setTimeout(() => flor.remove(), 5000);
    }
    setInterval(criarFlor, 300);

    botao.addEventListener('click', function() {
        conteudo.classList.remove('escondido');
        botao.style.display = 'none';
        musica.play().catch(e => console.log("Erro no áudio:", e));
    });

    function atualizarRelogio() {
        const agora = new Date();
        const diff = agora - dataInicio;
        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const segs = Math.floor((diff / 1000) % 60);
        
        document.getElementById('relogio').innerHTML = 
            dias + "d " + horas + "h " + mins + "m " + segs + "s";
    }
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();
});
