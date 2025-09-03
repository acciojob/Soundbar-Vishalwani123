//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.innerText;

        if (soundName === 'stop') {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
        } else {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(`sounds/${soundName}.mp3`);
            currentAudio.play();
        }
    });
});
