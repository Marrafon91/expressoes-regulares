// Declara uma string contendo números de 0 a 9 e letras de 'a' a 'f'
const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// Cria uma expressão regular para procurar o número '9'
const regexNove = RegExp('9')

console.log('Metodos da RegExp...')

// Testa se a string contém o número '9' (retorna true ou false)
console.log(regexNove.test(texto)) // true, pois '9' está na string

// Executa a regex na string e retorna um objeto com informações sobre a correspondência
console.log(regexNove.exec(texto)) // Retorna um array com '9' e seu índice

// Cria uma expressão regular para encontrar letras de 'a' a 'f' globalmente na string
const regexLetras = /[a-f]/g

console.log('Metodos da string...')

// Usa o método match para encontrar todas as ocorrências das letras de 'a' a 'f'
console.log(texto.match(regexLetras)) // ['a', 'b', 'c', 'd', 'e', 'f']

// Usa search para encontrar o índice da primeira ocorrência que casa com a regex
console.log(texto.search(regexLetras)) // Índice da primeira letra encontrada ('a')

// Usa replace para substituir todas as letras de 'a' a 'f' por 'Achei'
console.log(texto.replace(regexLetras, 'Achei')) 
// Resultado: '0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei'

// Usa split para dividir a string onde há letras de 'a' a 'f'
console.log(texto.split(regexLetras))
// Resultado: ['0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '']
