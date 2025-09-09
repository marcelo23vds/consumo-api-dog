'use strict'

function buscarImagens(listaImagens){

    const galeria = document.getElementById('galeria')
    let imagem = document.createElement('img')

    imagem.src = listaImagens.message
    console.log(imagem.src)
    galeria.appendChild(imagem)
}

async function carregarImagens(raca){

    //const raca = document.getElementById('raca').value
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)
    const listaImagens = await response.json()

    const teste = listaImagens.message
    console.log(teste)

    teste.forEach(buscarImagens)
}

carregarImagens('doberman')

// const botaoBuscar = document.getElementById('buscar-raca')
// botaoBuscar.addEventListener('click', buscarImagens) 
