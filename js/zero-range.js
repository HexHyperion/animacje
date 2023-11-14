// ondblclick="toZero(this)"
function toZero(self){
    self.value = 0;
    self.children[0].value = 0;
    let x = self.getAttribute("for")
    console.log(x)
    self.children[0].dispatchEvent(new Event("input"))
    self.parentElement.dispatchEvent(new Event("change"))
    try {
        document.getElementById(`${x}`).value=0
        document.getElementById(`${x}`).dispatchEvent(new Event("input"))
    } catch (error) {
        console.log(error)
    }
}