const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const buttonPress = (event) => {
    let key;
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
    // console.log(key);
    // console.log(event);
    // console.log(event.keyCode);
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 219 ||
        event.keyCode == 221 || event.keyCode == 186 || event.keyCode == 222 ||
        event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 191 ||
        event.keyCode == 32 ) {
        buttons.forEach(function (item, i, arr) {
            if (item.innerHTML == key) {
                flashing(item);
                playSound(sound(item));
            }
        });
    }
}

window.addEventListener('keydown', buttonPress);


let flashing = function (element) {
    element.classList.add('keyboard__btn--active');
    setTimeout(() => { element.classList.remove('keyboard__btn--active') }, 500);
}

let sound = (button) => {
    note = button.getAttribute('data-note');
    // console.log(note);
    return note;
}
const SOUNDTOOGLE = document.querySelector('.slideThree');
let mute = function () {
    const audioList = document.querySelectorAll('audio');
    audioList.forEach(function (item, i, arr) {
        if (!item.muted) {
            item.muted = true;
        } else {
            item.muted = false;
        }
    })
    const INPUT = document.querySelector('#slideThree');
    switch (INPUT.checked){
        case true: INPUT.checked = false;
        break;
        case false: INPUT.checked = true;
    }
}
SOUNDTOOGLE.addEventListener('click', mute);