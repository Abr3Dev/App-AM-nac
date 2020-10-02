 export const helpCpf = (cpf) =>{
    let size = cpf.length
    
    if(size === 3){
        cpf = cpf + '.'
    }
    if(size === 7){
        cpf = cpf + '.'
    }
    if(size === 11){
        cpf = cpf + '-'
    }

    return cpf;
}
