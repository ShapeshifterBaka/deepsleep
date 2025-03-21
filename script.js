document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("rainAudio");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");

    startBtn.addEventListener("click", function() {
        audio.play();
    });

    stopBtn.addEventListener("click", function() {
        audio.pause();
    });
});
