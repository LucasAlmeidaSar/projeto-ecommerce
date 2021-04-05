const classesDosElementos = {
    adicionar(classe, ...elementos){
       for(const elemento of elementos){
           const verificador = elemento.length
           verificador !== undefined ? varrerColecaoEncontrada('adicionar', classe, elemento) : elemento.classList.add(classe)           
       }
    },

    remover(classe, ...elementos){
       for (const elemento of elementos){
           const verificador = elemento.length
           verificador !== undefined ? varrerColecaoEncontrada('remover', classe , elemento) : elemento.classList.remove(classe)
       }
    },
    
    alternar(classe, ...elementos){
       for (const elemento of elementos){
           const verificador = elemento.length
           verificador !== undefined ? varrerColecaoEncontrada('alternar', classe , elemento) : elemento.classList.toggle(classe)
       }
    }
}


 
 function varrerColecaoEncontrada(operacao, classe, elementos){
     if (operacao === 'adicionar'){
         for (const elemento of elementos) {
             elemento.classList.add(classe)
         }
     }
     else if (operacao === 'remover'){
         for (const elemento of elementos) {
             elemento.classList.remove(classe)
         }
     } 
     else if (operacao === 'alternar') {
         for (const elemento of elementos){
            elemento.classList.toggle(classe)
         }
     }
 }

 


 export default classesDosElementos