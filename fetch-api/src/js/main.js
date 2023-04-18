
$("#cep").on("blur", (e)=>{
    let cep = $("#cep").val().replace("-","")
    const options ={
        method: 'GET',
        mode:'cors',
        cache:'default'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response=>{response.json()
        .then(data => console.log(data))
    })
    .catch(e => console.log("Error"))



})  


