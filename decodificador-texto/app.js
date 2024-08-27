function inicial() {
    const imagem = document.getElementById('.tela_criptografia_img');
    const textoPrincipal = document.getElementById('.tela_criptografia_titulo');
    const textoSecundaria = document.getElementById('.tela_criptografia_texto');
    imagem.style.display = 'block'; 
    textoPrincipal.style.display = 'block'; 
    textoSecundaria.style.display = 'block';
    const h1 = document.getElementById('.tela_criptografia_criptografado');
    const botao = document.getElementById('.tela_criptografia_copiar')
    if(h1) h1.style.display = 'none';
    if(botao) botao.style.display = 'none'
}

function criptografarTexto(){
    let texto = document.querySelector('input').value;
    const imagem = document.getElementById('.tela_criptografia_img');
    const textoPrincipal = document.getElementById('.tela_criptografia_titulo');
    const textoSecundario = document.getElementById('.tela_criptografia_texto');
    const h1 = document.getElementById('.tela_criptografia_criptografado');
    if (texto.trim() === '') {
        inicial();
    }
    else {
        const substituicoes = [
            { busca: /a/g, substituto: 'ai' },
            { busca: /e/g, substituto: 'enter' },
            { busca: /i/g, substituto: 'imes' },
            { busca: /o/g, substituto: 'ober' },
            { busca: /u/g, substituto: 'ufat' }
        ];
    

        function substituirTexto(){
            let resultado = '';
                for (let i = 0; i < texto.length; i++) {
                    let substituido = false;
                    for (const { busca, substituto } of substituicoes) {
                        if (busca.test(texto[i])) {
                            resultado += substituto;
                            substituido = true;
                            break; 
                        }
                    }
                    if (!substituido) {
                        resultado += texto[i]; 
                    }
                }
            return resultado;
        }

        texto = substituirTexto(texto, substituicoes);

        const retangulo = document.querySelector('.tela_criptografia');

        if (imagem) imagem.style.display = 'none'; 
        if (textoPrincipal) textoPrincipal.style.display = 'none'; 
        if (textoSecundario) textoSecundario.style.display = 'none'; 
        
        
        if (h1) {
            h1.textContent = texto;
            h1.style.display = 'block'; 
        }

        const botao = document.getElementById('.tela_criptografia_copiar')

        if (botao) {
            botao.textContent = 'Copiar';
            botao.style.display = 'block'; 
        }
    }
}

function descriptografarTexto(){
    let texto = document.querySelector('input').value;
    if (texto.trim() === '') {
        inicial();
    }
    else {
        const substituicoesInversas = [
            { substituto: 'ai', busca: 'a' },
            { substituto: 'enter', busca: 'e' },
            { substituto: 'imes', busca: 'i' },
            { substituto: 'ober', busca: 'o' },
            { substituto: 'ufat', busca: 'u' }
        ];

        function reverterTexto(texto, substituicoes) {
            let resultado = texto;
            for (const { substituto, busca } of substituicoes) {
                const regex = new RegExp(substituto, 'g');
                resultado = resultado.replace(regex, busca);
            }
            return resultado;
        }

        texto = reverterTexto(texto, substituicoesInversas);

        const retangulo = document.querySelector('.tela_criptografia');
        
        const imagem = document.getElementById('.tela_criptografia_img');
        const textoPrincipal = document.getElementById('.tela_criptografia_titulo');
        const textoSecundario = document.getElementById('t.ela_criptografia_texto');
        
        if (imagem) imagem.style.display = 'none'; 
        if (textoPrincipal) mensagemPrincipal.style.display = 'none'; 
        if (textoSecundario) mensagemSecundaria.style.display = 'none'; 
        
        const h1 = document.getElementById('.tela_criptografia_criptografado');
        if (h1) {
            h1.textContent = texto;
            h1.style.display = 'block'; 
        }
        const botao = document.getElementById('.tela_criptografia_copiar')
        if (botao) {
            botao.textContent = 'Copiar';
            botao.style.display = 'block'; 
        }
    }
}