const modebutton = document.querySelector('.switch');
const main = document.querySelector('main');
const cta2 = document.getElementById("cta2");
modebutton.addEventListener("click", () => {
    if
    (modebutton.textContent.includes("🕶️")){
        main.style.background = "#000";
        main.style.color = "#fff";
        cta2.style.color = "#000";
        modebutton.textContent = "🔆";
    }else{
        main.style.background= "#f6eeee";
        main.style.color = "#000";
        modebutton.textContent = "🕶️";
    }
})