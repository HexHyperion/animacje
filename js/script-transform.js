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

// Ukrywanie tabeli po naciśnięciu przycisku
function hideTable(){
    if(document.getElementById("tab").style.display=="none"){
        document.getElementById("horizontal").style.display="none";
        document.getElementById("tab").style.display="block";
        document.getElementById("function").innerHTML=`Podgląd kodu: wybierz funkcję`
    }
    else{
        document.getElementById("tab").style.display="none";
        document.getElementById("horizontal").style.display="flex";
        swap();
    }
    
}

// Zamiana bloku z kodem na podstawie przycisków radio
function swap(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let z = document.getElementById("z").value;
    let deg = document.getElementById("deg").value;
    if(document.getElementById("option-1").checked){
        document.getElementById("tab").style.display="none";
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="none";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>translate</span>(<span class='c-text'>${x}px</span>,<span class='c-text'>${y}px</span>);`;
        document.getElementById("test-area").style.perspective="none";
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`translate(${x}px,${y}px)`;
    }
    else if(document.getElementById("option-2").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="flex";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>rotateX</span>(<span class='c-text'>-15deg</span>) <span class='c-val'>rotateY</span>(<span class='c-text'>-15deg</span>) <span class='c-val'>translate3d</span>(<span class='c-text'>${x}px</span>,<span class='c-text'>${y}px</span>,<span class='c-text'>${z*2}px</span>);`;
        document.getElementById("test-area").style.perspective="1000px";
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`rotateX(-15deg) rotateY(-15deg) translate3d(${x}px,${y}px,${z*2}px)`;
    }
    else if(document.getElementById("option-3").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="none";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>scale</span>(<span class='c-text'>${x/80}</span>,<span class='c-text'>${y/80}</span>);`;
        document.getElementById("test-area").style.perspective="none";
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`scale(${x/80},${y/80})`;
    }
    else if(document.getElementById("option-4").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="flex";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("test-area").style.perspective="1000px";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>rotateX</span>(<span class='c-text'>-15deg</span>) <span class='c-val'>rotateY</span>(<span class='c-text'>-20deg</span>) <span class='c-val'>scale3d</span>(<span class='c-text'>${x/80}</span>,<span class='c-text'>${y/80}</span>,<span class='c-text'>${z/50}</span>);`;
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`rotateX(-15deg) rotateY(-20deg) scale3d(${x/80},${y/80},${z/50})`;
    }
    else if(document.getElementById("option-5").checked){
        document.getElementById("x-label").style.display="none";
        document.getElementById("y-label").style.display="none";
        document.getElementById("z-label").style.display="none";
        document.getElementById("deg-label").style.display="flex";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>rotate</span>(<span class='c-text'>${deg}deg</span>);`;
        document.getElementById("test-area").style.perspective="none";
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`rotate(${deg}deg)`;
    }
    else if(document.getElementById("option-6").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="flex";
        document.getElementById("deg-label").style.display="flex";
        document.getElementById("test-area").style.perspective="1000px";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>rotate3d</span>(<span class='c-text'>${x/50}</span>,<span class='c-text'>${y/50}</span>,<span class='c-text'>${z/50}</span>,<span class='c-text'>${deg}deg</span>);`;
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`rotate3d(${x/50},${y/50},${z/50},${deg}deg)`;
    }
    else if(document.getElementById("option-7").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="flex";
        document.getElementById("z-label").style.display="none";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>skew</span>(<span class='c-text'>${x/4}deg</span>,<span class='c-text'>${y/4}deg</span>);`;
        document.getElementById("test-area").style.perspective="none";
        document.getElementById("box").style.transformOrigin="center center";
        document.getElementById("box").style.transform=`skew(${x/4}deg,${y/4}deg)`;
    }
    else if(document.getElementById("option-8").checked){
        document.getElementById("x-label").style.display="flex";
        document.getElementById("y-label").style.display="none";
        document.getElementById("z-label").style.display="none";
        document.getElementById("deg-label").style.display="none";
        document.getElementById("function").innerHTML=`<span class='c-prop'>transform:</span> <span class='c-val'>perspective</span>(<span class='c-text'>${x*5+940}px</span>); <span class='c-prop'>transform-origin:</span> <span class='c-val'>center bottom</span>;`;
        document.getElementById("box").style.transformOrigin="center bottom";
        document.getElementById("box").style.transform=`perspective(${x*5+940}px)`;
    }
}