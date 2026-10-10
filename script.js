document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 80;
    const y = (window.innerHeight / 2 - e.pageY) / 80;

    document.querySelector(".p1bg").style.transform = `translateX(${x * 0.3}px) translateY(${y * 0.3}px)`;
    document.querySelector(".p1fg").style.transform = `translateX(${x * 0.8}px) translateY(${y * 0.8}px)`;
});