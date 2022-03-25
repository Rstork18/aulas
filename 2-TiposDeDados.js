// Tipo de dados

- STRING : "CADEIA DE CARACTERES"

        Existem algumas formas de escrever "STRINGS"

            ENTRE " ", ' ' OU` `

EXEMPLO:
let exemplo1 = "esse é o primero exemplo"
let exemplo2 = 'esse é o segundo exemplo'
let exemplo3 = `esse é o terceiro exemplo` // template literals ou template strings

PROIBIDO:

1 - "hoje eu aprendi a usar as strings no js " correto = "hoje eu aprendi 'a usar as strings no js'"

PERMITIDO:

1 - "NÃO TINHA OQ 'ESCREVER, TO SEM IDEIA' KKKKK "
2 - 'NÃO TINHA OQ "ESCREVER, TO SEM IDEIA" KKKK'
3 - `NÃO TINHA OQ ESCREVER, TO SEM IDEIA KKKK`

                TEMPLATE STRINGS:

let exemplo = "colocar informações de uma variavel em uma string"
let myTemplateStrings = `usando as crazes eu posso fazer isso ${}.`

    - NUMBERS : "JS NUMERICO/NUMEROS"

const numberOne = 234 / 2
const numberTwo = "234/2"

console.log(numberOne)
console.log(numberTwo)


    - OBJECT : "OBJETOS"

        CADA OBEJTO POSSUI UMA "PROPRIEDADE" E UM "VALOR"

EXEMPLO:
marca: Samsung
cor: preta
tamanho: 45"

nome: rafael
idade: 20
altura: 1.71m

            como "escrever um objeto" ? 

                const person = {
    name: "Rafael",
    age: 20,
    sex: "male",
    heigth: 1.7
}
            como  acessar os OBJETOS ?

    console.log(person.name);
console.log(person.age;
console.log(person.sex);
console.log(person.heigth);



- BOOLEAN : "VALORES BOOLEANOS/ TRUE1 OR FALSE0"

let myNumberOne = 10
let myNumberTwo = 20

console.log(myNumberOne == myNumberTwo)


    - ARRAY : "VETOR OU LISTA"

const people = [{
    name: "Rafael",
    age: 20,
    sex: "male",
    heigth: 1.7
},
{
    name: "lua",
    age: 20,
    sex: "male",
    heigth: 1.7
},
{
    name: "ed",
    age: 20,
    sex: "male",
    heigth: 1.7
},
{
    name: "isa",
    age: 20,
    sex: "male",
    heigth: 1.7
},
]

console.log(people[2])




