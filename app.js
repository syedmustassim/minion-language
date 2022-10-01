// creating call back for the button

var btnTranslate = document.querySelector("#btn-translate");

/* btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("Translated"); 
}) */

//alternatively can do the same using my own functions

btnTranslate.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("Translated!");
}