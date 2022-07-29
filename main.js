 
//====== TAREFA 05 ========//
let showRes05 = document.getElementById('res-05')
let codeDDD = document.getElementById('inputField05')
let showCity = document.getElementById('showCity')
showCity.addEventListener("click", () => {
 
  let ddd = codeDDD.value
  switch (ddd) {
    case 'br':
        showRes05.innerHTML = `Este DDD pertece à cidade de Brasilia`
      break;
    
    case 'sal':
        showRes05.innerHTML = `Este DDD pertece à cidade de Salvador`
      break;  
      
    case 'sp':
        showRes05.innerHTML = `Este DDD pertece à cidade de São Paulo`
      break;

    case 'rj':
        showRes05.innerHTML = `Este DDD pertece à cidade de Rio de janeiro`
      break;

    case 'jf':
        showRes05.innerHTML = `Este DDD pertece à cidade de Juiz de Fora`
      break;

    case 'cam':
        showRes05.innerHTML = `Este DDD pertece à cidade de Campinas`
      break;

    default:
        showRes05.innerHTML = `DDD não cadastrado`

      break;
  }
  

  
})
