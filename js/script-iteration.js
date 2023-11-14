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
    let run_anim_box = document.getElementById("box");
    let x = document.getElementById("x").value;
    run_anim_box.style.animationName = "none";
    run_anim_box.offsetWidth;
    if(x != 11){
        run_anim_box.style.animationIterationCount = `${x}`;
        run_anim_box.style.animationTimingFunction = "ease-in-out";
    }
    else{
        run_anim_box.style.animationIterationCount = `infinite`;
        run_anim_box.style.animationTimingFunction = "linear";
    }
    
    run_anim_box.style.animationName = `obroc`;
    console.log(x);
   

    // run_anim_box.classList.remove("anim-class");
    // run_anim_box.classList.add("anim-class");
    // document.getElementById("pasek-delay").classList.remove("pasek-zmienny");
    // document.getElementById("pasek-delay").classList.add("pasek-zmienny");
    
    // console.log(document.getElementById("pasek-delay"))
}

function swapText(){
    let x = document.getElementById("x").value;
    if(x == 11){
        document.getElementById("iter-swap").innerText=`infinite`;
    }
    else{
        document.getElementById("iter-swap").innerText=`${x}`;
    }
    
}