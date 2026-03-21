const myNumber = document.querySelectorAll(".number");
const btn = document.querySelectorAll(".operator");
const btnClear = document.getElementById("clear");
let ecran = document.getElementById("ecran");
const btnResult = document.getElementById("finalResult");
const multi = document.querySelector(".data-key");


btn.forEach(btn => {
    btn.addEventListener("click", function(){
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

btnResult.addEventListener("click", function(){
    finalResult();
})

function finalResult(){
    console.log("Expression: " + ecran.textContent);
   try {
        let verif =  ecran.textContent.replace(/%/g, "/").replace(/×/g, "*");
        console.log(verif);
        let result = eval(verif);
        ecran.textContent = Number.isInteger(result) ? result : parseFloat(result.toFixed(2));
    } catch(e) {
        ecran.textContent = "An error occur"; // ✅ gère les expressions invalides
    }
}
