function showPage(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* FLOW CONTROL */
document.getElementById("next1").onclick = () => {
  showPage("page2");
  setTimeout(spawnFlowers, 600);
};

document.getElementById("next2").onclick = () => {
  showPage("page3");
  setTimeout(showBubbles, 600);
};

document.getElementById("next3").onclick = () => {
  showPage("page4");
  startRain();
};

/* 🌸 FLOWER MEKAR PERLUNYA SLOW */
function spawnFlowers(){
  const el = document.getElementById("flowers");
  el.innerHTML = "";

  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += "🌸 ";
    i++;
    if(i >= 6) clearInterval(interval);
  }, 600);
}

/* 💬 BUBBLE MUNCUL SATU-SATU */
function showBubbles(){
  const bubbles = document.querySelectorAll(".bubble");

  bubbles.forEach((b, i) => {
    setTimeout(() => {
      b.style.opacity = 1;
      b.style.transform = "translateY(0)";
    }, i * 800);
  });
}

/* 🌸 RAIN ENDING (halus, tidak spam) */
function startRain(){
  const rain = document.querySelector(".rain");

  setInterval(() => {
    const f = document.createElement("div");
    f.classList.add("flower");
    f.innerHTML = "🌸";

    f.style.left = Math.random() * 100 + "%";
    f.style.animationDuration = (3 + Math.random() * 2) + "s";

    rain.appendChild(f);

    setTimeout(() => f.remove(), 5000);
  }, 400);
}

function showBuket(){
  showPage("page5");

  const buket = document.getElementById("buket");
  buket.innerHTML = "";

  let total = 12; // jumlah bunga buket
  let i = 0;

  const interval = setInterval(() => {

    const flower = document.createElement("div");
    flower.classList.add("flower-item");
    flower.innerHTML = "🌸";

    buket.appendChild(flower);

    setTimeout(() => {
      flower.classList.add("show");
    }, 50);

    i++;
    if(i >= total) clearInterval(interval);

  }, 300);
}
function showBuket(){
  showPage("page5");

  const buket = document.getElementById("buket");
  buket.innerHTML = "";

  let total = 12; // jumlah bunga buket
  let i = 0;

  const interval = setInterval(() => {

    const flower = document.createElement("div");
    flower.classList.add("flower-item");
    flower.innerHTML = "🌸";

    buket.appendChild(flower);

    setTimeout(() => {
      flower.classList.add("show");
    }, 50);

    i++;
    if(i >= total) clearInterval(interval);

  }, 300);
}
