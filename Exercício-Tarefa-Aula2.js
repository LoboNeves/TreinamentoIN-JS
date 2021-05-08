function media(objetos){
    medias =[]
    for(i in objetos){
        ficha = objetos[i]
        medianota = (ficha["nota1"] + ficha["nota2"])/2
        medias.push(medianota)
    }
    
        console.log("O aluno" + " " + objetos[0]["nome"] + " " + "teve a média mais alta da turma" + " " + objetos[0]["turma"] + ",com" + " " + medias[0])
    
        console.log("O aluno" + " " + objetos[1]["nome"] + " " + "teve a média mais alta da turma" + " " + objetos[1]["turma"] + ",com" + " " + medias[1])
    
        console.log("O aluno" + " " + objetos[2]["nome"] + " " + "teve a média mais alta da turma" + " " + objetos[2]["turma"] + ",com" + " " + medias[2])
}

objetos = [
    {
        "nome": "Pedro",
        "turma": "A",
        "nota1": 10,
        "nota2": 7
    },
    {
        "nome": "Maria",
        "turma": "B",
        "nota1": 7,
        "nota2": 4
    },
    {
        "nome": "Jonathan",
        "turma": "C",
        "nota1": 9,
        "nota2": 9
    }
]
console.log(media(objetos))
