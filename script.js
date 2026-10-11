//Panel 1: Parallax Effect
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;

    //Applies parrallax effect to bg and fg of panel 1
    const bg1 = document.querySelector(".p1bg");
    const fg1 = document.querySelector(".p1fg");
    if (bg1 && fg1) {
        bg1.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        fg1.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
    }
});

//Global Page Flip Function
const pageSequence = ["p1", "p2", "p3"]; 
let activePageIndex = 0;

function nextPage() {
    document.getElementById(pageSequence[activePageIndex]).classList.remove("visible");
    activePageIndex++;
    document.getElementById(pageSequence[activePageIndex]).classList.add("visible");
}

function restartStory() {
    document.getElementById("p4a").classList.remove("visible");
    document.getElementById("p4b").classList.remove("visible");
    activePageIndex = 0;
    clearedVinesCount = 0;
    document.getElementById("choiceBox").classList.remove("revealed");
    
    document.querySelectorAll(".v-btn").forEach(btn => btn.style.display = "block");
    ["v1", "v2", "v3"].forEach(img => document.querySelector(`.${img}`).style.opacity = "1");
    
    const riverPlu = document.querySelector(".pluLand");
    if (riverPlu) {
        riverPlu.style.left = "48%";
        riverPlu.style.top = "2%";
        riverPlu.style.transform = "translate(-50%, -50%) scale(0.85)";
    }
    document.getElementById("riverNav").classList.remove("show-btn");
    document.getElementById("p1").classList.add("visible");
}

//Panel 2: Hopping Interaction
function hopTo(stoneNumber) {
    const plu = document.querySelector(".pluLand");

    if (!plu) return;  //error check if pluLand element exists

    plu.src = "assets/Panel 2/pluJump.png"; //switch to jump expression

    switch (stoneNumber) {
        case 1:
            plu.style.left = "52%";
            plu.style.top = "8%";
            plu.style.transform = "translate(-50%, -50%) scale(1.10)";
            break;
        case 2:
            plu.style.left = "37%";
            plu.style.top = "15%";
            plu.style.transform = "translate(-50%, -50%) scale(1.40)";
            break;
        case 3:
            plu.style.left = "53%";
            plu.style.top = "28%";
            plu.style.transform = "translate(-50%, -50%) scale(1.80)";
            break;
        case 4:
            plu.style.left = "31%";
            plu.style.top = "36%";
            plu.style.transform = "translate(-50%, -50%) scale(2.20)";
            break;
        case 5:
            plu.style.left = "51%";
            plu.style.top = "57%";
            plu.style.transform = "translate(-50%, -50%) scale(2.80)";

            document.getElementById("riverNav").classList.add("show-btn");
            break;
    }

    setTimeout(() => {
        plu.src = "assets/Panel 2/pluLand.png";
    }, 600);
}

//Panel 3: Vine Fade
let clearedVinesCount = 0;

function clearVine(vineNumber) {
    //targets the vine and button elements based on the vine number
    const targetedVine = document.querySelector(`.v${vineNumber}`);
    const targetedButton = document.querySelector(`.target${vineNumber}`);

    if (targetedVine) {
        // fades vine out smoothly using CSS transition timing
        targetedVine.style.opacity = "0";
    }

    if (targetedButton) {
        //Removes the button layer after so user cannot click it again
        targetedButton.style.display = "none";
        clearedVinesCount++;
    }

    if (clearedVinesCount === 3) {
        //Reveals the choice box after all vines are cleared
          document.getElementById("choiceBox").classList.add("revealed");
    }
}
 
function chooseEnding(branchChoice) {
    document.getElementById("p3").classList.remove("visible");
    
    if (branchChoice === 'left') {
        const p4a = document.getElementById("p4a");
        p4a.querySelector(".ending-img").src = "assets/Panel 4A/4A.png";
        p4a.classList.add("visible");
    } else if (branchChoice === 'right') {
        const p4b = document.getElementById("p4b");
        p4b.querySelector(".ending-img").src = "assets/Panel 4B/4B.png";
        p4b.classList.add("visible");
    }
}

function backToChoices(activeEndingId) {
    //Hides current final image
    document.getElementById(activeEndingId).classList.remove("visible");
    
    activePageIndex = 2; 
    //transitions back to panel 3
    document.getElementById("p3").classList.add("visible");
}