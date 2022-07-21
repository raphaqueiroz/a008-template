// EXERCICIO 01
const minhaIdade = parseInt(prompt('Qual sua idade?'))
const idadeAmiga = parseInt(prompt('Qual a idade da sua amiga ou amigo?'))
let comparacao

comparacao = minhaIdade > idadeAmiga
console.log("Sua idaade é maior que a do seu amigo?", comparacao)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'


!b && d
(b && a) && !d
a || d
c && !d