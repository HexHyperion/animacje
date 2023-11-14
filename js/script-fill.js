// Otwieranie menu bocznego
let isOpen = false;
function toggleSlideMenu(){
    if(isOpen == false){
        document.getElementById('menu').style.width = '290px';
        isOpen = true;
    }
    else{
        document.getElementById('menu').style.width = '0';
        isOpen = false;
    }
}

// Pozostawienie przycisku podświetlonego po kliknięciu
document.getElementById("glow-on-hover").addEventListener("mousedown", function(){document.getElementById("glow-on-hover").classList.toggle('clicked')})
document.getElementById("glow-on-hover-2").addEventListener("mousedown", function(){document.getElementById("glow-on-hover-2").classList.toggle('clicked')})

// Opóźnienie przejścia do strony
function delayShort(URL){
    setTimeout(function(){window.location = URL}, 250);
}
function delay(URL){
    setTimeout(function(){window.location = URL}, 750);
}


function run_anim() {
    document.getElementById("run-delay").setAttribute("disabled", "")
    let run_anim_box = document.getElementById("box");
    run_anim_box.style.animationName = "none";
    run_anim_box.offsetWidth;
    run_anim_box.style.animationIterationCount = "1";
    run_anim_box.style.animationName = `dopelnienie`;
   

    // run_anim_box.classList.remove("anim-class");
    // run_anim_box.classList.add("anim-class");
    // document.getElementById("pasek-delay").classList.remove("pasek-zmienny");
    // document.getElementById("pasek-delay").classList.add("pasek-zmienny");
    
    // console.log(document.getElementById("pasek-delay"))
    setTimeout(() => {
        document.getElementById("run-delay").removeAttribute("disabled")
        // document.getElementById("run-delay").style.color = "#aaa";
        
    }, 5000);
}

// Zamiana bloku z kodem na podstawie przycisków radio
function swap(){
    if(document.getElementById("option-1").checked){
        document.getElementById("fill-swap").innerText="none";
        document.getElementById("box").style.animationFillMode="none";
    }
    else if(document.getElementById("option-2").checked){
        document.getElementById("fill-swap").innerText="forwards";
        document.getElementById("box").style.animationFillMode="forwards";
    }
    else if(document.getElementById("option-3").checked){
        document.getElementById("fill-swap").innerText="backwards";
        document.getElementById("box").style.animationFillMode="backwards";
    }
    else if(document.getElementById("option-4").checked){
        document.getElementById("fill-swap").innerText="both";
        document.getElementById("box").style.animationFillMode="both";
    }
}