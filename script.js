const bod = document.querySelector("body");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");

const clap = document.querySelector(".clap");
const hihat = document.querySelector(".hihat");
const kick = document.querySelector(".kick");
const openhat = document.querySelector(".openhat");
const boom = document.querySelector(".boom");
const ride = document.querySelector(".ride");
const snare = document.querySelector(".snare");
const tom = document.querySelector(".tom");
const tink = document.querySelector(".tink");

function audioPlay(x) {
    x.play();
    x.volume = 1;
}
function incSize(x) {
    x.classList.add("sizeincrease");
}

function keyval(event) {
    let val = event.keyCode;
    switch (val) {
        case 97:
            incSize(button1);
            audioPlay(clap);
            break;
        case 115:
            incSize(button2);
            audioPlay(hihat);
            break;
        case 100:
            incSize(button3);
            audioPlay(kick);
            break;
        case 102:
            incSize(button4);
            audioPlay(openhat);
            break;
        case 103:
            incSize(button5);
            audioPlay(boom);
            break;
        case 104:
            incSize(button6);
            audioPlay(ride);
            break;
        case 106:
            incSize(button7);
            audioPlay(snare);
            break;
        case 107:
            incSize(button8);
            audioPlay(tom);
            break;
        case 108:
            incSize(button9);
            audioPlay(tink);
            break;
    }
}

// adding event listner to body
bod.addEventListener("keypress", keyval);
