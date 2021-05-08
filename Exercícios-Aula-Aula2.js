// Primeira questão
function desduplicar(array){
    var arraynovo = []

    for(i in array){
        if (!(arraynovo.indexOf(array[i]) == -1)){}
        else{
            arraynovo.push(array[i])
        }
    }
    console.log(arraynovo)
}
var duplicados = [1, 2, 2, 3, 7, 4, 3, 2, 1]
console.log(desduplicar(duplicados))


//Segunda questão
function comparison(array,array2) {
    let cont = 0

    for(i in array){
        if (array[i] in array2 && array2[i] in array)
            cont += 1
    }
    if (cont == array.length)
        console.log(true)
    else(console.log(false))
}

var teste = [1, 1, 2, 3]
var teste2 = [2, 3, 1, 1]
console.log(comparison(teste,teste2))


//Terceira questão
function somar(array,array2){
    var array3 = [[],[]]

    for(i in array){
        linha = array[i];
        for(j in linha){
            array3[i].push(array[i][j] + array2[i][j]);
        }
    }
    console.log(array3)    
}
var teste = [[1,2],[3,4]]
var teste2 = [[2,6],[3,9]]
console.log(somar(teste,teste2))
