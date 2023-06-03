const nomeDeAlunos = ["Gabriela", "Enzo", "Renato", "Alberto", "Wanda", "Larissa"];

const alunos = nomeDeAlunos.map(item => {
    item = {
        nome: item,
        nota: Math.floor(Math.random() * 11)
    }
    return item
})

const maiorQueSeis = alunos.filter(item => item.nota > 6)

console.log(alunos)
console.log(maiorQueSeis)
