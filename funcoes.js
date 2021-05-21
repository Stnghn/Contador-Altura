var altura = []
qtdf = 0
qtdm = 0
var maior = 0
var menor = 99

function enviar() {
    var sexo = document.getElementsByName('sexo')
    var valtura = Number(document.getElementById('altura').value)
    var result = document.getElementById('result')
    var rsexo = document.getElementById('resultsexo')
    var ralt = document.getElementById('resultaltura')
    var rmenor = document.getElementById('resultmenor')
    //var aviso = document.getElementById('aviso')
    var genero = ''

    //altura.length = 5

    if (valtura == '' || valtura < 0 || valtura > 98) {
        result.innerHTML = `insira um valor valido`
    } else {
        altura.push(valtura) //pra nao adicionar valor negativo e zerado antes
        console.log(altura)
        if (sexo[0].checked) {
            genero = 'Feminino'
            qtdf++
            for (p = 0; p < altura.length; p++) { // pra mostrar em loop
                if (qtdf <= 5 && qtdm <= 5 && altura.length <= 5) { //pra controlar que mostre só 5
                    result.innerHTML = `Há ${qtdf} pessoa(s) do sexo ${genero} `
                }
            }
            for (var i = 0; i < altura.length; i++) {
                if (altura[i] > maior) {
                    maior = altura[i];
                    if (altura.length <= 5 && altura[i] < 99) { //pra controlar que mostre só 5
                        ralt.innerHTML = `Maior ${maior} sexo f ${genero}`
                    }
                }
                if (altura[i] > 0) { //pra nao mostra valor zerado
                    if (altura[i] < menor) {
                        menor = altura[i]
                        rmenor.innerHTML = `Menor ${menor} sexo f ${genero}`
                    }
                }
            }
        } else if (sexo[1].checked) {
            genero = 'Masculino'
            qtdm++
            for (p = 0; p < altura.length; p++) {
                if (qtdm <= 5 && qtdf <= 5 && altura.length <= 5) {
                    rsexo.innerHTML = `Há ${qtdm} pessoa(s) do sexo ${genero} `
                }
            }
            for (var i = 0; i < altura.length; i++) {
                if (altura[i] > maior) {
                    maior = altura[i];
                    if (altura.length <= 5 || altura[i] < 99) {
                        ralt.innerHTML = `Maior ${maior} sexo m ${genero}`
                    }
                }
                if (altura[i] > 0) {
                    if (altura[i] < menor) {
                        menor = altura[i]
                        rmenor.innerHTML = `Menor ${menor} sexo m ${genero}`
                    }
                }
            }
        }
    }
}