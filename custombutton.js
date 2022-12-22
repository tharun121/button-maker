let buttonChangeModeElement = document.getElementById("buttonChangeMode");
let backgroundColorElement = document.getElementById("backgroundColor");
let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");


let bgColorsArray = ["#e75d7c","#80e106","#d4fe6c"	
,"#dbe7ba",
"#bb927b","#7b8694", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

backgroundColorElement.style.backgroundColor = bgColorsArray[0];

function changeBgColor() {
    let numberofBgcolors = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberofBgcolors);


    if (randomColorIndex === numberofBgcolors) {
        randomColorIndex = numberofBgcolors - 1;
    }

    let randomBgcolor = bgColorsArray[randomColorIndex];
    backgroundColorElement.style.backgroundColor = randomBgcolor;
    buttonChangeModeElement.style.color = randomBgcolor;
}

function applyChangesButton() {
    let bgcolorValue = bgColorInputElement.value;
    let fontColorValue = fontColorInputElement.value;
    let fontSizeValue = fontSizeInputElement.value;
    let fontWeightValue = fontWeightInputElement.value;
    let paddingValue = paddingInputElement.value;
    let bordeRadiusValue = borderRadiusInputElement.value;
    


    customButtonElement.style.backgroundColor = bgcolorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = bordeRadiusValue;
    

    
}