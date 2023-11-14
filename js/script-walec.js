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

function changeStyle(cssFile, cssLinkIndex){
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    oldlink.href = cssFile;
}

// Zamiana bloku z kodem na podstawie przycisków radio
function swap(){
    if(document.getElementById("option-1").checked){
        document.getElementById("test-area").style.display="none";
        document.getElementById("test-1").style.display="block";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-2").checked){
        document.getElementById("test-area").style.display="none";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="block";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-3").checked){
        changeStyle("../css/cylinder1.css",3);
        document.getElementById("test-area").style.display="flex";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="block";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-4").checked){
        changeStyle("../css/cylinder2.css",3);
        document.getElementById("test-area").style.display="flex";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="block";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-5").checked){
        changeStyle("../css/cylinder3.css",3);
        document.getElementById("test-area").style.display="flex";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="block";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-6").checked){
        changeStyle("../css/cylinder4.css",3);
        document.getElementById("test-area").style.display="flex";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="block";
        document.getElementById("test-7").style.display="none";
    }
    else if(document.getElementById("option-7").checked){
        changeStyle("../css/cylinder5.css",3);
        document.getElementById("test-area").style.display="flex";
        document.getElementById("test-1").style.display="none";
        document.getElementById("test-2").style.display="none";
        document.getElementById("test-3").style.display="none";
        document.getElementById("test-4").style.display="none";
        document.getElementById("test-5").style.display="none";
        document.getElementById("test-6").style.display="none";
        document.getElementById("test-7").style.display="block";
    }
}