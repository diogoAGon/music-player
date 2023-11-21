

let musica = document.querySelector('audio');
let playM = document.querySelector('#play')
let pauseM = document.querySelector('#pause')
let barra = document.querySelector('progress');

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
}