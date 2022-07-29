//====== TAREFA 01 ========//
let nameUser = document.getElementById('res-01')
let inputField = document.getElementById('inputField')

function onInput() {
  const nameLength = inputField.value.length
  nameUser.innerHTML = `Resultado: Nome:${inputField.value} Comprimento: ${nameLength}`
}

//====== TAREFA 02 ========//
let resString = document.getElementById('res-02')
let str = document.getElementById('inputField02')

document.getElementById('reverseString').addEventListener('click', () => {
  let str1 = str.value

  let stringReverse = ''
  for (let i = str1.length - 1; i >= 0; i--) {
    stringReverse += str1[i]
  }

  console.log('-----', str.value)
  resString.innerHTML = `Resultado: ${stringReverse}`
})

//====== TAREFA 03 ========//
let showRes03 = document.getElementById('res-03')
let strHalf = document.getElementById('inputField03')
function showHalfString() {
  let takeStr = strHalf.value
  let showHalf = takeStr.length / 2

  let renderHalf = ''
  for (let i = 0; i <= Math.floor(showHalf); i++) {
    renderHalf += takeStr[i]
  }

  showRes03.innerHTML = `Resultado: ${renderHalf}`
}

//====== TAREFA 04 ========//

function sumBirth() {
  let showRes04 = document.getElementById('res-04')
  let birth = document.getElementById('inputField04')
  let birthStr = birth.value
  console.log(birthStr)

  let birthStr2 = ''
  let sumDate = 0

  for (let i = 0; i < birthStr.length; i++) {
    sumDate += parseInt(birthStr[i])
    console.log(sumDate)
    birthStr2 += birthStr[i] + (birthStr[i] == birthStr.length ? '' : '+')
  }

  showRes04.innerHTML = `Resultado:  a soma de de ${birthStr2} é igual a:  ${sumDate}`




 
  
  
  
}
