const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
   personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

       personagem.classList.add('selecionado');
   
        const idSelecionado = personagem.attributes.id.value;

        const imagemPersonagem1 = document.getElementById('selecionado-1');
        imagemPersonagem1.src = `./src/img/${idSelecionado}.png`;

        const nomePersonagem1 = document.getElementById('nome-personagem-1');
       
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomePersonagem1.innerHTML = nomeSelecionado;
    }); 
});

