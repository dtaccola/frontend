// Uma promisse retorna o resultado de uma função, sucesso ou erro
function testes(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const erro = false;

            if(erro){
                reject('Erro');
            }else{
                resolve('A promise foi resolvida');
            }
        }, 2000);
        
    });
}

// testes().then(function(resolve){
//     alert(resolve);
// }).catch((reject)=>{
//     alert(reject);
// });

// função assíncrona, será executada somente após o resultado de uma promise
async function testes2(){
    await testes().then(function(resolve){
        alert(resolve);
    });
}

testes2();
