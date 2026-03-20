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
        let verif =  ecran.textContent.replace(/%/g, "/").replace(/X/g, "*");
        console.log(verif);
        ecran.textContent = eval(verif);
    } catch(e) {
        ecran.textContent = "There is an error in your formula"; // ✅ gère les expressions invalides
    }
}
