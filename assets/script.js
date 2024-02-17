

var seconds = 0
var minutes = 0
var hours = 0
var time = new Date()

setInterval(() => {
    time = new Date()
    seconds = time.getSeconds() * 6
    minutes = time.getMinutes() * 6
    hours = time.getHours() * 30 + Math.round(minutes / 12) 
    document.querySelector("#seconds").style.transform = "rotate(" + seconds + "deg)"
    document.querySelector("#minutes").style.transform = "rotate(" + minutes + "deg)"
    document.querySelector("#hours").style.transform = "rotate(" + hours + "deg)"
}, 1000)

setInterval(() => {
    time = new Date()

    if (time.getSeconds() < 10) {
        document.querySelector(".seconds").innerHTML = "0" + time.getSeconds()
    }
    else {
        document.querySelector(".seconds").innerHTML = time.getSeconds()
    }

    if (time.getMinutes() < 10) {
        document.querySelector(".minutes").innerHTML = "0" + time.getMinutes()
    }
    else {
        document.querySelector(".minutes").innerHTML = time.getMinutes()
    }

    if (time.getHours() < 10) {
        document.querySelector(".hours").innerHTML = "0" + time.getHours()
    }
    else {
        document.querySelector(".hours").innerHTML = time.getHours()
    }
    
}, 1000);