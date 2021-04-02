function alterarClassesDosElementos (operacao, classe, ...elementos) {
    for (const elemento of elementos) {
 
         if (elemento.length) {    
             varrerColecaoEncontrada(operacao, classe, elemento)
         }else{
             operacao === 'adicionar' ? elemento.classList.add(classe) : elemento.classList.remove(classe)
         }
    }
 }
 
 
 
 function varrerColecaoEncontrada(operacao, classe, elementos){
     if(operacao === 'adicionar'){
         for (const elemento of elementos) {
             elemento.classList.add(classe)
         }
     }
     else if(operacao === 'remover'){
         for (const elemento of elementos) {
             elemento.classList.remove(classe)
         }
     } 
 }


 export default alterarClassesDosElementos