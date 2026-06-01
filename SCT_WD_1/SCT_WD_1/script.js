// Smooth navbar effect

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    }
    else{
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }
});