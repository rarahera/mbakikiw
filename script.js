function showPage(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* PAGE 1 → PAGE 2 */
document.getElementById("next1").addEventListener("click", () => {
  showPage("page2");
  spawnFlowers();
});

/* PAGE 2 → PAGE 3 */
document.getElementById("next2").addEventListener("click", () => {
  showPage("page3");
  showBubbles();
});

/* PAGE 3 → PAGE 4 */
document.getElementById("next3").addEventListener("click", () => {
  showPage("page4");
  startRain();
});

/* 🌸 FLOWER MUNCUL SATU SATU */
function spawnFlowers(){
  const el = document.getElementById("flowers");
  let count = 0;

  const interval = setInterval(() => {
    if(count >= 6){
      clearInterval(interval);
      return;
    }
    el.innerHTML += "🌸 ";
    count++;
  }, 500);
}

/* 💬 BUBBLE MUNCUL BERURUTAN */
function showBubbles(){
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((b, i) => {
    setTimeout(() => {
      b.style.opacity = 1;
      b.style.transform = "translateY(0)";
    }, i * 700);
  });
}

/* 🌸 HUJAN BUNGA ENDING */
function startRain(){
  const rain = document.querySelector(".rain");

  setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower-fall");
    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = (2 + Math.random() * 3) + "s";

    rain.appendChild(flower);

    setTimeout(() => flower.remove(), 4000);
  }, 300);
}
