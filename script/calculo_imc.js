const click = document.getElementById("clica")
const resp = document.getElementById("resp")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")

// Calculo de IMC

click.onclick = function(){
    let pesonum = Number(peso.value)
    let alturanum = Number(altura.value)
    

    if (alturanum <= 0 && pesonum <= 0){
        window.alert('[Erro] Talvez o peso ou a altura não tenha sido colocado de maneira correta.')
    } else {
       let IMC = pesonum / (alturanum**2)
       let text = document.getElementById('text')
       text.innerHTML = ''
       text.innerHTML = (`Seu IMC é ${IMC.toFixed(2)}`)
       resp.style.display = 'block'
       text.appendChild()
    }
}