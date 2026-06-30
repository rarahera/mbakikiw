document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");

  function showPage(id){
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  document.getElementById("btnMulai").addEventListener("click", () => {
    showPage("page2");
  });

  document.getElementById("btnTumbuh").addEventListener("click", () => {
    showPage("page3");

    let text = document.getElementById("loadingText");
    let dots = 0;

    let interval = setInterval(() => {
      dots = (dots + 1) % 4;
      text.innerText = "tumbuh pelan-pelan" + ".".repeat(dots);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      showPage("page4");
    }, 3500);
  });

});
