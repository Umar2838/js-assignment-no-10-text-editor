function focusFunction() {
  
    document.getElementById("Input").style.outlineColor="#55a0dd"
    document.getElementById("inputfont").style.outlineColor="#55a0dd"
    }

    var input = document.getElementById("Input")

    function fontInput(e) {

        var value = e.value;
        input.style.fontSize = value + "px"

    }

    
function fontBold(){

 input.style.fontWeight = "bold"

}

function fontItalic(){
    input.style.fontStyle = "italic"
}

function fontUnderline(){
    input.style.textDecoration = "underline"
}

function leftAlign(){
    input.style.textAlign= "left"
}

function centerAlign(){
    input.style.textAlign= "center"
}

function rightAlign(){
    input.style.textAlign= "right"
}

function capitalize(){
    input.style.textTransform = "uppercase"
}

function color(e){

    var value = e.value
    input.style.color = value
}