let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let opt6 = document.getElementById("option-6");


function changeCode(label){
    if(label.id == "opt-6") {
        let x = document.getElementById("x").value;

        document.getElementById("steps-range").style.opacity = "1";
        document.getElementById("jumps").style.opacity = "1";
        document.getElementById("tim-swap").innerText = `steps(${x})`;
        
    }
    else {
        document.getElementById("steps-range").style.opacity = "0";
        document.getElementById("jumps").style.opacity = "0";

    }

    reloadBoxes()

    box1.style.animationTimingFunction = "linear";
    updateCode(label)
    console.log();
}

function changeCode(label){
    if(label.id == "opt-6") {
        let x = document.getElementById("x").value;

        document.getElementById("steps-range").style.opacity = "1";
        document.getElementById("jumps").style.opacity = "1";
        document.getElementById("tim-swap").innerText = `steps(${x})`;
        
    }
    else {
        document.getElementById("steps-range").style.opacity = "0";
        document.getElementById("jumps").style.opacity = "0";

    }

    reloadBoxes()

    box1.style.animationTimingFunction = "linear";
    updateCode(label)
    console.log();
}

function changeText(label) {
    document.getElementById("tim-swap").innerText = label.children[0].innerText 
}

function swapText(){
    let x = document.getElementById("x").value;
    if(opt6.checked){
        document.getElementById("steps").innerText=`${x}`;
        document.getElementById("tim-swap").innerText = `steps(${x})`;
    }
    // else if(document.getElementById("option-2").checked){
    //     document.getElementById("duration-swap").innerText=`${x}s`;
    // }
}

function reloadBoxes(){
    box1.style.animation = 'none';
    box1.offsetWidth; /* trigger reflow */
    box1.style.animation = `szybkosc 3.5s infinite linear  forwards`;

    box2.style.animation = 'none';
    box2.offsetWidth; /* trigger reflow */
    box2.style.animation = `szybkosc 3.5s infinite linear  forwards`;
}

function updateCode(label) {
    box2.style.animationTimingFunction = label.children[0].innerText; 
    
}