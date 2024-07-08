let homenum = 0
let guestnum = 0

homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")

homeScore.textContent = homenum
guestScore.textContent = guestnum

function HaddOne() {
    homenum+=1
    homeScore.textContent = homenum
}

function HaddTwo() {
    homenum+=2
    homeScore.textContent = homenum
}

function HaddThree() {
    homenum+=3
    homeScore.textContent = homenum
}

function GaddOne() {
    guestnum+=1
    guestScore.textContent = guestnum
}

function GaddTwo() {
    guestnum+=2
    guestScore.textContent = guestnum
}

function GaddThree() {
    guestnum+=3
    guestScore.textContent = guestnum
}

function newGame() {
    homenum=0
    guestnum=0
    homeScore.textContent = homenum
    guestScore.textContent = guestnum
}