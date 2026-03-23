document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById('botao-abrir');
    const conteudo = document.getElementById('conteudo-secreto');
    const chuvaContainer = document.getElementById('chuva');


    const dataInicio = new Date(2026, 1, 21); 


    function criarFlor() {
        const flor = document.createElement('div');
        flor.classList.add('flor-caindo');
        flor.innerHTML = "🌻";
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.animationDuration = Math.random() * 3 + 2 + "s";
        flor.style.fontSize = Math.random() * 20 + 10 + "px";
        chuvaContainer.appendChild(flor);
        setTimeout(() => flor.remove(), 5000);
    }
    setInterval(criarFlor, 300);

    botao.addEventListener('click', () => {
        conteudo.classList.toggle('escondido');
        botao.style.display = 'none';
    });

    function atualizarRelogio() {
        const agora = new Date();
        const diff = agora - dataInicio;
        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const segs = Math.floor((diff / 1000) % 60);
        document.getElementById('relogio').innerHTML = `${dias}d ${horas}h ${mins}m ${segs}s`;
    }
    setInterval(atualizarRelogio, 1000);
});
