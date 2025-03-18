let count = 30;


const counterElement = document.getElementById("counter");
const audioElement = document.getElementById("finalCountdownAudio");


function startCountdown() {
  const interval = setInterval(() => {
    count--;
    counterElement.textContent = count;

    if (count <= 0) {
      clearInterval(interval);
      counterElement.textContent = "FINAL END!";
      counterElement.style.backgroundColor = "rgba(76, 175, 80, 0.7)";
      counterElement.style.color = "#fff";
      counterElement.style.boxShadow = "0 10px 20px rgba(76, 175, 80, 0.7)";
      audioElement.pause();
    }
  }, 1000);
}


counterElement.addEventListener("click", () => {
  if (count > 0) {
    audioElement.play();
    counterElement.classList.add("playing");
    startCountdown();
  }
});






