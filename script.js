//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const sound = btn.innerText;

    if (sound === 'stop') {
      stopSounds();
    } else {
      playSound(sound);
    }
  });
});

function playSound(soundId) {
  stopSounds();
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
