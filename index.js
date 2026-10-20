
const yesbutt = document.getElementById("yesbutt")
const nobutt = document.getElementById("nobutt")
const img = document.querySelector(".image")
const container = document.querySelector(".container")
const fullscreen = document.getElementById("fullscreen")
const sound = document.getElementById("sound")
const label = document.querySelector(".text")

// No button dimensions
let fs1 = 30
let h1 = 60
let w1 = 150
let pn = false
let jpcounter = 0
let nm = 0

// yes button dimensions
let fs2 = 30
let h2 = 60
let w2 = 150
let r = false

yesbutt.addEventListener("click", () => {
    img.src = "images/4.png"

    // Replay animation
    img.style.animation = "none"

    setTimeout(() => {
        img.style.animation = "yip 1s ease-in-out"
    }, 10)
    if (r == true){
        yesbutt.remove()
        nobutt.remove()

        label.textContent = "I love you moreeee!~"
    }

    // Shrink No button
    if (fs1 > 15) {
        fs1 -= 3
        h1 -= 6
        w1 -= 15

        nobutt.style.fontSize = `${fs1}px`
        nobutt.style.width = `${w1}px`
        nobutt.style.height = `${h1}px`
    }
    else if (pn == true){
        fs1 -= 3
        h1 -= 6
        w1 -= 15

        nobutt.style.fontSize = `${fs1}px`
        nobutt.style.width = `${w1}px`
        nobutt.style.height = `${h1}px`
        if (fs1 == 6){
            nobutt.remove()
        }
    }
})

nobutt.addEventListener("click", () => {
    img.src = "images/2.png"
    pn = true

    // Reset No button dimensions
    fs1 = 30
    h1 = 60
    w1 = 150
    jpcounter += 1
    nm += 1

    if (nm >= 2){
        img.src ="images/3.png"
    }

    nobutt.style.fontSize = `${fs1}px`
    nobutt.style.width = `${w1}px`
    nobutt.style.height = `${h1}px`

    h2 += 6
    w2 +=15
    fs2 += 3

    yesbutt.style.height = `${h2}px`
    yesbutt.style.width = `${w2}px`
    yesbutt.style.fontSize = `${fs2}px`
    // Randomize position
    const maxX = Math.max(0, container.clientWidth - w1)
    const maxY = Math.max(0, container.clientHeight - h1)

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    nobutt.style.position = "absolute"
    nobutt.style.margin = "0"
    nobutt.style.left = `${randomX}px`
    nobutt.style.top = `${randomY}px`
    if (jpcounter == 5){
        fullscreen.style.display = "block"
        sound.currentTime = 0
        sound.play()
        setTimeout(() => {
        fullscreen.style.display = "none"
    }, 3000)
        r = true
    }
})