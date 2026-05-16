const list = [
    {
        name: 'João',
        age: 30

    },
    {
        name: 'Maria',
        age: 25
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
];

let soma = 0;

list.forEach((item) => {
    soma += item.age;
});

console.log(soma);
