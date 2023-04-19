

$("#cep").on("blur", (e) => {
    if($("#cep").val().length == 8 || $("#cep").val().length == 9 ){
        chamadaDaApi(e)
    } else{inputVermelho("adicionar")}
})

$("#cep").on("keypress", (e) => {

   if (e.which === 13) {
    if($("#cep").val().length == 8 || $("#cep").val().length == 9 ){
        
        chamadaDaApi(e)
    } else{ inputVermelho("adicionar")}
}
$("#cep").on("focus", _=>{inputVermelho("remover")})

})



const chamadaDaApi = (e) => {
    let cep = $("#cep").val().replace("-", "")

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        response.json()
            .then(data => {
                preenche(data) 


                console.log(data)
            }
            )
    })

    .catch(e => {
        inputVermelho("adicionar");
        apagarTudo();
        $('#cep').val("CEP invalido");  
    } )
}

const preenche = (param) => {
    if(param.erro == "true"){
        inputVermelho("adicionar")
        apagarTudo()
        $('#cep').val("CEP invalido") 
    } else  {


    $('#logradouro').val(param.logradouro)
    $('#bairro').val(param.bairro)
    $('#localidade').val(param.localidade)
    $('#uf').val(param.uf)
    inputVermelho("remover")
    }
}

const apagarTudo =_=> {
    $('#cep').val("")
    $('#logradouro').val("")
    $('#bairro').val("")
    $('#localidade').val("")
    $('#uf').val("")
    inputVermelho("remover")
}

const inputVermelho=(res)=>{
    if(res == "adicionar"){
        $("#cep").addClass("inputVermelho")
    } else if(res == "remover"){
        $("#cep").removeClass("inputVermelho")
    }
}



