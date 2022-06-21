let mario = document.querySelector(".super-mario")
let pipe = document.querySelector(".pipe-game")

const jump = () => {
    mario.classList.add("jump-mario")

    setTimeout(() => {
        mario.classList.remove("jump-mario")
    }, 500)
}

document.addEventListener("keydown", jump)
