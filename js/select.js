body = document.querySelector("body")
// body.children.add("<div id='select-box'></div>")
box = document.getElementById("select-box")

document.onkeyup = function(e) {
    if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        if(box.style.display == "none")
            box.style.display = "flex"
        else 
            box.style.display = "none"

    }
  };