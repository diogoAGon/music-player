
let musicas = [
    
]


let musica = document.querySelector('audio');
let playM = document.querySelector('#play')
let pauseM = document.querySelector('#pause')
let barra = document.querySelector('progress');
let tempoDecorrido = document.querySelector('.inicio')
let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

musica.addEventListener('timeupdate', atualizarBarra)
playM.addEventListener('click', tocarMusica);
pauseM.addEventListener('click', pausarMusica);

function tocarMusica(){
    musica.play();
    pauseM.style.display = 'block';
    playM.style.display = 'none';
    
}
function pausarMusica(){
    musica.pause();
    pauseM.style.display = 'none';
    playM.style.display = 'block';
    
}
// Dividindo o current time pelo duration, multiplicando por 100 e arredondando o numero para baixo
function atualizarBarra(){
barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))

}


function segundosParaMinutos(segundos){
    // so vai dar 1 inteiro, quando for 60
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60; 
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos +':'+campoSegundos;
}

