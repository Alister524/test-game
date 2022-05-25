const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout(()=>{
        dino.classList.remove('jump')
    },500)
}

let isOver = setInterval(()=>{
    let dinoJump = parseInt(window.getComputedStyle(dino).getPropertyValue('Top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('Left'))

    if(cactusLeft < 30 && cactusLeft > 0 && dinoJump >= 140){
        alert('GAME OVER!')
    }
} ,0)
