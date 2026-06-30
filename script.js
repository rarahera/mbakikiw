// =============================
// GANTI PAGE
// =============================

function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// =============================
// PAGE 1
// =============================

document.getElementById("next1").addEventListener("click", () => {

    showPage("page2");

    setTimeout(showFlowers, 500);

});

// =============================
// PAGE 2
// =============================

document.getElementById("next2").addEventListener("click", () => {

    showPage("page3");

    setTimeout(showBubble, 300);

});

// =============================
// PAGE 3
// =============================

document.getElementById("next3").addEventListener("click", () => {

    showPage("page4");

    startRain();

});

// =============================
// PAGE 4
// =============================

document.getElementById("next4").addEventListener("click", () => {

    stopRain();

    showPage("page5");

    growBouquet();

});

// =============================
// PAGE 2 FLOWERS
// =============================

function showFlowers(){

    const flower = document.getElementById("flowers");

    flower.innerHTML = "";

    let total = 8;

    let i = 0;

    const interval = setInterval(()=>{

        flower.innerHTML += "🌸 ";

        i++;

        if(i >= total){

            clearInterval(interval);

        }

    },500);

}

// =============================
// PAGE 3 CHAT
// =============================

function showBubble(){

    const bubble = document.querySelectorAll(".bubble");

    bubble.forEach((item,index)=>{

        item.style.opacity=0;
        item.style.transform="translateY(20px)";

        setTimeout(()=>{

            item.style.opacity=1;
            item.style.transform="translateY(0)";

        },index*700);

    });

}

// =============================
// PAGE 4 FLOWER RAIN
// =============================

let rain;

function startRain(){

    const container=document.querySelector(".rain");

    container.innerHTML="";

    rain=setInterval(()=>{

        const flower=document.createElement("div");

        flower.className="flowerRain";

        flower.innerHTML="🌸";

        flower.style.left=Math.random()*100+"%";

        flower.style.animationDuration=(3+Math.random()*2)+"s";

        container.appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },5000);

    },250);

}

function stopRain(){

    clearInterval(rain);

}

// =============================
// PAGE 5
// =============================

function growBouquet(){

    const stems=document.querySelectorAll(".stem");

    const flowers=document.querySelectorAll("#bouquet .flower");

    const text=document.getElementById("endingText");

    text.classList.remove("show");

    stems.forEach(stem=>{

        stem.classList.remove("grow");

    });

    flowers.forEach(f=>{

        f.classList.remove("show");

    });

    // batang tumbuh

    stems.forEach((stem,index)=>{

        setTimeout(()=>{

            stem.classList.add("grow");

        },index*250);

    });

    // bunga mekar

    flowers.forEach((flower,index)=>{

        setTimeout(()=>{

            flower.classList.add("show");

        },1700+(index*350));

    });

    // pita

    setTimeout(()=>{

        let ribbon=document.querySelector(".ribbon");

        if(!ribbon){

            ribbon=document.createElement("div");

            ribbon.className="ribbon";

            ribbon.innerHTML="🎀";

            document.getElementById("bouquet").appendChild(ribbon);

        }

        ribbon.classList.add("show");

    },3400);

    // love-love

    setTimeout(()=>{

        createLove();

    },3800);

    // text terakhir

    setTimeout(()=>{

        text.classList.add("show");

    },4700);

}

// =============================
// LOVE
// =============================

function createLove(){

    const bouquet=document.getElementById("bouquet");

    let total=25;

    for(let i=0;i<total;i++){

        setTimeout(()=>{

            const love=document.createElement("div");

            love.className="love";

            love.innerHTML=Math.random()>0.5?"🤍":"💕";

            love.style.left=(90+Math.random()*80)+"px";

            bouquet.appendChild(love);

            setTimeout(()=>{

                love.remove();

            },4000);

        },i*180);

    }

}
