const myNumber = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnClear = document.getElementById("clear");
let ecran = document.getElementById("ecran");
const btnResult = document.getElementById("finalResult");
const multi = document.querySelector(".data-key");
const btnTan = document.getElementById("tan");
const btnClearCE = document.getElementById("clearCE");
const screen = document.getElementById("screen");



btnOperator.forEach(btn => {
    btn.addEventListener("click", function(){
        let lastCharacter = ecran.textContent.slice(-1);
         if(["+", "-", "×", "%"].includes(lastCharacter)){
            return;
        }
        ecran.textContent += btn.textContent;
    })
});

myNumber.forEach(btn => {
    btn.addEventListener("click", function(){
        ecran.textContent += btn.textContent;
        
        
    })
});

btnClear.addEventListener("click", function(){
    ecran.textContent = "";
});
btnClearCE.addEventListener("click", function(){
    ecran.textContent = ecran.textContent.slice(0, -1);
});


btnResult.addEventListener("click", function(){
    finalResult();
});

btnTan.addEventListener("click", function(){
    try {
        let value = parseFloat(ecran.textContent);
        let radians = value * (Math.PI / 180);
        let lastCharacter = ecran.textContent.slice(-1);
         if(["+", "-", "×", "%"].includes(lastCharacter)){
            screen.classList.toggle("active");
            return;
        }
        ecran.textContent = parseFloat(Math.tan(radians).toFixed(2));
    } catch(e) {
        ecran.textContent = "An error occur";
    }
})

function finalResult(){
    console.log("Expression: " + ecran.textContent);
   try {
        let verif =  ecran.textContent.replace(/%/g, "/").replace(/×/g, "*");
        console.log(verif.length);
        let result = eval(verif);
        ecran.textContent = Number.isInteger(result) ? result : parseFloat(result.toFixed(2));

    } catch(e) {
        ecran.textContent = "An error occur"; // ✅ gère les expressions invalides
    }
}
