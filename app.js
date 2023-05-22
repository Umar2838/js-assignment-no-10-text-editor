function focusFunction() {
  
    document.getElementById("Input").style.outlineColor="#55a0dd"
    document.getElementById("inputfont").style.outlineColor="#55a0dd"
    }

    var input = document.getElementById("Input")
    

    function fontInput(e) {

        var value = e.value;
        input.style.fontSize = value + "px"

    }

    function changeFontFamily() {
        var fontFamily = document.getElementById('fontFamilyDropdown').value;
        input.style.fontFamily = fontFamily;
    }
    
function fontBold(){
    
    var isBold = input.style.fontWeight;
if(isBold === "bold" ){
    
    input.style.fontWeight = "normal"

}
else{
    input.style.fontWeight = "bold"
}

  }


function fontItalic(){
    var isItalic = input.style.fontStyle;
    if(isItalic === "italic"){
    input.style.fontStyle = "normal"
    }else{
        input.style.fontStyle = "italic"
    }
}

function fontUnderline(){

    var isUnderline = input.style.textDecoration;
    if(isUnderline === "underline"){ 

        input.style.textDecoration = "none"
}
else{
    input.style.textDecoration = "underline"
}
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
    var isUppercase = input.style.textTransform;
    if(isUppercase === "uppercase"){
        input.style.textTransform = "none";
    }
    else{
    input.style.textTransform = "uppercase"
}
}

function color(e){

    var value = e.value
    input.style.color = value
}