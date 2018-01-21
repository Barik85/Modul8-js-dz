const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const buttonPress = (event) => {
    switch (event.code) {
        case "Space":
            key = "space";
            break;
        case "BracketLeft":
            key = "[";
            break;
        case "BracketRight":
            key = "]";
            break;
        case "Semicolon":
            key = ";";
            break;
        case "Quote":
            key = "'";
            break;
        case "Comma":
            key = ",";
            break;
        case "Period":
            key = ".";
            break;
        case "Slash":
            key = "/";
            break;
        default:
            key = event.code.slice(-1).toString().toLowerCase();
    }
    console.log(key);
    console.log(event);
    buttons.forEach(function (item, i, arr) {
        if (item.innerHTML == key) {
            flashing(item);
            playSound(sound(item));
        }
    });


}

window.addEventListener('keydown', buttonPress);


let flashing = function (element) {
    element.classList.add('keyboard__btn--active');
    setTimeout(() => { element.classList.remove('keyboard__btn--active') }, 500);
}

let sound = (button) => {
    note = button.getAttribute('data-note');
    console.log(note);
    return note;
}
const SOUNDTOOGLE = document.querySelector('label[for="slideThree"]');
let mute = function() {
    const audioList = document.querySelectorAll('audio');
    audioList.forEach(function(item, i, arr){
        if (!item.muted){
        item.muted = true;
        } else {
            item.muted = false;
        }
    })
}
SOUNDTOOGLE.addEventListener('click', mute);