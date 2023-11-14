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
    let run_anim_box = document.getElementById("test-delay");
    let x = document.getElementById("delay-value").value;
    document.getElementById("run-delay").setAttribute("disabled", "")
    // document.getElementById("run-delay").classList.remove("glow-on-hover");
    // if(run_anim_box.classList.contains("move")) {
    //     run_anim_box.classList.remove("move");
    //     // setTimeout(() => {
    //         run_anim_box.style.setProperty("--endLocation", "0px");
    //         run_anim_box.style.setProperty("--startLocation", "450px");
    //     // }, x*1000);
        
    //     document.getElementById("start-loc").innerText="450px";
    //     document.getElementById("start-loc-2").innerText="450px";
    //     document.getElementById("end-loc").innerText="0px";
    //     document.getElementById("end-loc-2").innerText="0px";
    // }
    // else {
    //     run_anim_box.classList.add("move");
    //     // setTimeout(() => {
    //         run_anim_box.style.setProperty("--endLocation", "450px");
    //         run_anim_box.style.setProperty("--startLocation", "0px");
    //     // }, x*1000);
        
    //     document.getElementById("end-loc").innerText="450px";
    //     document.getElementById("end-loc-2").innerText="450px";
    //     document.getElementById("start-loc").innerText="0px";
    //     document.getElementById("start-loc-2").innerText="0px";
    // }
    run_anim_box.style.animation = 'none';
    run_anim_box.offsetWidth; /* trigger reflow */
    run_anim_box.style.animation = `delay1 1 ease-in-out backwards 3s ${x}s`;
    // run_anim_box.classList.remove("anim-class");
    // run_anim_box.classList.add("anim-class");
    
    document.getElementById("pasek-delay").style.animationIterationCount = "1";
    document.getElementById("pasek-delay").style.setProperty("--czas", `${x}`);
    document.getElementById("pasek-delay").style.animation = 'none';
    document.getElementById("pasek-delay").offsetWidth; /* trigger reflow */
    document.getElementById("pasek-delay").style.animation = "pasek calc(var(--czas) * 1s) linear forwards";
    // document.getElementById("test-delay").style.transitionDelay = `${x}s`;
    // run_anim_box.classList.remove("anim-class");
    // run_anim_box.classList.add("anim-class");
    // document.getElementById("pasek-delay").classList.remove("pasek-zmienny");
    // document.getElementById("pasek-delay").classList.add("pasek-zmienny");
    
    // console.log(document.getElementById("pasek-delay"))
    setTimeout(() => {
        document.getElementById("run-delay").removeAttribute("disabled")
        // document.getElementById("run-delay").style.color = "#aaa";
        // run_anim_box.style.animationIterationCount = 0;
        
    }, x*1000+2000);

}


function swapText(){
    let x = document.getElementById("delay-value").value;
    document.getElementById("delay-swap").innerText=`${x}s`;
}