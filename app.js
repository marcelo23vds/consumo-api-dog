'use strict'

async function buscarImagens() {

    const input = document.getElementById('input').value
    const url = `https://dog.ceo/api/breed/${input}/images`

    const response = await fetch(url)
    const imagens = await response.json()

    const container = document.getElementById('container')
    container.innerHTML = ''

    imagens.message.forEach(urlImagem => {
        const imagem = document.createElement('img')
        imagem.src = urlImagem
        container.appendChild(imagem)
    });
}

const botaoBuscar = document.getElementById('botao-buscar')
botaoBuscar.addEventListener('click', buscarImagens)
