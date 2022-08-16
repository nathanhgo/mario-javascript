const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const textoPontuacao = document.querySelector('.textoPontuacao')
let pontuacao = 0

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loopPontuacao = setInterval(() => {
    pontuacao++;
    textoPontuacao.innerHTML = pontuacao
}, 1500)

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && marioPosition <= 100 && pipePosition > 0) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
        mario.src = "./images/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
        clearInterval(loopPontuacao)
    }

}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
