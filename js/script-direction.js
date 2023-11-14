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


// Zamiana bloku z kodem na podstawie przycisków radio
function swap(){
    if(document.getElementById("option-1").checked){
        document.getElementById("dir-swap").innerText="normal";
        document.getElementById("box").style.animationDirection="normal";
    }
    else if(document.getElementById("option-2").checked){
        document.getElementById("dir-swap").innerText="reverse";
        document.getElementById("box").style.animationDirection="reverse";
    }
    else if(document.getElementById("option-3").checked){
        document.getElementById("dir-swap").innerText="alternate";
        document.getElementById("box").style.animationDirection="alternate";
    }
    else if(document.getElementById("option-4").checked){
        document.getElementById("dir-swap").innerText="alternate-reverse";
        document.getElementById("box").style.animationDirection="alternate-reverse";
    }
}