
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
            break;
    }

    setTimeout(() => {
        plu.src = "assets/Panel 2/pluLand.png";
    }, 600);
}

//Panel 3: Vine Fade

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
    }
} 