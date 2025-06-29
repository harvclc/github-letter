document.getElementById("openBtn").addEventListener("click", () => {
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector(".main-content").classList.remove("hidden");
});

document.getElementById("openBtn").addEventListener("click", () => {
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector(".main-content").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }).catch((error) => {
    console.log('Music autoplay blocked:', error);
  });
});
