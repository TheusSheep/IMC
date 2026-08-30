const click = document.getElementById("clica")
const resp = document.getElementById("resp")
const inicio = document.getElementById("inicio")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")

// Calculo de IMC

function calculoIMC(){
    let pesonum = Number(peso.value)
    let alturanum = Number(altura.value)
    

    if (alturanum <= 0 || pesonum <= 0){
        window.alert('[Erro] Talvez o peso ou a altura não tenha sido colocado de maneira correta.')
        altura.value = ""
        peso.value = ""
    } else {
       let IMC = pesonum / (alturanum**2)
       let text = document.getElementById('text')
       text.innerHTML = ''
       text.innerText = (`Seu IMC é ${IMC.toFixed(2)}`)
       resp.style.display = 'flex'
       inicio.style.display = 'none'
       text.appendChild()
    }

}

// Botão | Enter

click.onclick = calculoIMC

altura.addEventListener("keyup", function (event){
    if(event.key === "Enter"){
        event.preventDefault();
        calculoIMC();
    }
});

peso.addEventListener("keyup", function (event){
    if(event.key === "Enter"){
        event.preventDefault();
        calculoIMC();
    }
});