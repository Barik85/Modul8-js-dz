const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const SPACE = document.querySelector('.keyboard__btn--space');

const buttonPress = (event) => {
    if (event.code == "Space") {
        flashing(SPACE);
        playSound(sound(SPACE));
    } 
    
    else {
        let key = event.code.slice(-1).toString().toLowerCase();
        console.log(key);
        console.log(event);
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
    note = button.getAttribute('data-note')
    console.log(note);
    return note;
}