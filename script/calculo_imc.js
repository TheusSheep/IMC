const click = document.getElementById("clica")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")


click.onclick = function(){
    const pesonum = Number(peso.value)
    const alturanum = Number(altura.value)

    if (alturanum <= 0 && pesonum <= 0){
        window.alert('[Erro] Talvez o peso ou a altura não tenha sido colocado de maneira correta.')
    } else {
        let IMC = pesonum / (alturanum**2)
        window.alert(`IMC é: (${IMC.toFixed(2)})`)
    }
}