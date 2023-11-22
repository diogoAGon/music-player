
let musicas = [
    {titulo:'Lonely', Artista:'Akon', src:'musicas/Akon - Lonely (Official Music Video)_6EEW-9NDM5k.mp3', img:'images/thumb-msc/lonely-pic.jpg'},
    {titulo:'Congratulations', Artista:'Post Malone', src:'musicas/better now.mp3', img:'images/thumb-msc/betternow-pic.jpg'},
    {titulo:'Better Now', Artista:'Post Malone', src:'musicas/Post Malone - White Iverson_SLsTskih7_I.mp3', img:'images/thumb-msc/Congratulations-PIC.jpg'}
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
let anterior = document.querySelector('#previous')
let proximo = document.querySelector('#next')
let indexMusica = 0;

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
// utilizando funcao anonima
anterior.addEventListener('click', () => {
    indexMusica--;
 renderizarMusica(indexMusica);
});
proximo.addEventListener('click', () => {
    indexMusica++;
 renderizarMusica(indexMusica);
});
musica.addEventListener('timeupdate', atualizarBarra)
playM.addEventListener('click', tocarMusica);
pauseM.addEventListener('click', pausarMusica);

function renderizarMusica(index){
musica.setAttribute('src', musicas[index].src)
musica.addEventListener('loadeddata', () => {
 nomeMusica.textContent = musicas[index].titulo
 nomeArtista.textContent = musicas[index].Artista
 imagem.src = musicas[index].img;
 duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
});
}

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




