// Primeira questão
function somar(arrays){
    let soma = 0
    for(i in arrays){
        lista = arrays[i]
        for(j in lista){
            soma += lista[j];
        }
    }
    console.log(soma)
}

var arrays = [[1,1],[2, 20]]
console.log(somar(arrays))

// Segunda questão
function multiplicar(num, array){
    let Novoarray = array.map((e) => {
        return e * num
    })
    console.log(Novoarray)
}

var num = 3
var array = [7,9,11,-2]
console.log(multiplicar(num, array))

// Terceira questão
 function separar(string, array){
     let Novoarray = array.filter((e) => {
         let ok = true
         
         for(i in e){
            if(!(string.includes(e[i]))){
                   ok = false
                 }
        }
        if(ok){
            return e
        }
    })

    console.log(Novoarray) 
 }

 var string = "ab"
 var array = ["abc", "ba", "ab", "bb", "kb"]
 console.log(separar(string, array))
 
// Quarta questão
function numcomum(arrays){
    let Novoarray = arrays[0]
        for(i in arrays){
            Novoarray = arrays[0].filter((e) => arrays[i].includes(e))
        }
    console.log(Novoarray)
}
var arrays = [[120, 120, 110, 2],[110, 2, 130]]
console.log(numcomum(arrays))

// Quinta questão
function soma(arrays){
    let soma = 0
    for(i in arrays){
        lista = arrays[i]
        for(j of lista){
            soma += j
        }
    if(soma % 2 == 0)
        console.log(arrays[i])
        soma = 0
    }
}
var arrays = [[2,2,2,1],[3, 2, 1]]
console.log(soma(arrays))
