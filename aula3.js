const lista = [
    {
        name: 'João',
        age: 19

    },
    {
        name: 'Maria',
        age: 29
    },
    {
        name: 'Pedro',
        age: 35
    },
    {
        name: 'Ana',
        age: 28
    },
    {
        name: 'Carlos',
        age: 32
    },
    {
        name: 'Luiza',
        age: 27
    },
    {
        name: 'Rafael',
        age: 29
    },
    {
        name: 'Fernanda',
        age: 31
    },
    {
        name: 'Gustavo',
        age: 26
    }

]

const listaFiltrada = lista.filter((pessoa) => pessoa.age > 28);



console.log(listaFiltrada);
console.log(lista);