

$("#cep").on("blur", (e) => {
    chamadaDaApi(e)
})

$("#cep").on("keypress", (e) => {
    if (e.which === 13) {
        chamadaDaApi(e)
    }
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
                if(data.erro == "true"){
                    console.log("Cep inexistente")
                    apagarTudo()
                } else {
                    preenche(data) 
                }
                console.log(data)
            }
            )
    })
    .catch(e => alert("Error!!!"))
}

const preenche = (param) => {

    $('#logradouro').val(param.logradouro)
    $('#bairro').val(param.bairro)
    $('#localidade').val(param.localidade)
    $('#uf').val(param.uf)

}

const apagarTudo =_=> {
    $('#cep').val("")
    $('#logradouro').val("")
    $('#bairro').val("")
    $('#localidade').val("")
    $('#uf').val("")
}


