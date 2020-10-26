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

export const formValidator = (obj) =>{

    let arrError = [];
    
    //VALIDAÇÃO DO NOME
    obj.name.split(' ').forEach((nome, index, arr) =>{
        var reg = /^[A-ZÀ-Úa-zà-ú]{1}[a-zà-ú]+$/;
        if(!reg.test(nome)){
            arrError[0] = 'O nome deverá ser válido'
        }else{
            arrError[0] = null
        }

        });    

    //VALIDAÇÃO DO CPF
    var regCpf =  /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    var result = regCpf.test(obj.cpf)

    if(result != true){
        arrError[1] = 'O cpf Deverá ser válido';
    }else{
        arrError[1] = null
    }

    //VALIDAÇÃO EMAIL

    if(!obj.email.includes('@') || !obj.email.includes('.')){
        arrError[2] = 'O E-mail deverá ser válido'
    }else{
        arrError[2] = null
    }

    //VALIDAÇÃO D NASCIMENTO

    var regDate =  /[0-9]{4}-[0-9]{2}-[0-9]{2}/
    if(!regDate.test(obj.birthDate)){
        arrError[3] = 'Data de nascimento deverá ser válida'
    }else{
        arrError[3] = null
    }

    //VALIDAÇÃO SEXO
    var regGender =  /^[A-ZÀ-Úa-zà-ú]{1}[a-zà-ú]+$/;
    var resultGender = regGender.test(obj.gender);

    if(!resultGender){
        arrError[4] = 'Sexo deverá ser válido'
    }else{
        arrError[4] = null;
    }

    //VALIDAÇÃO SENHA

    if(obj.password.length <= 7){
        arrError[5] = 'Senha deverá ter no mínimo 8 caracteres'
    }else{
        arrError[5] = null;
    }


        return arrError
}
