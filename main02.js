//====== TAREFA 06 ========//

let showRes06 = document.getElementById('res-06')
let num = document.getElementById('inputField06')
let countdown = document.getElementById('countdown')

 
countdown.addEventListener('click', () => {
  count = num.value
  showRes06.innerHTML = ''

  while(count > 0){
    count--;
    console.log('-', count)
    showRes06.innerHTML += `- ${count} <br /> `
     

  }
  showRes06.innerHTML += 'KABUM'

})
