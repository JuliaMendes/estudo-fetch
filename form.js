let inputCep = document.querySelector('#cep');

inputCep.addEventListener('blur', () => {
    const valor = inputCep.value;

    let inputEnd = document.querySelector('#endereco');
    let inputBairro = document.querySelector('#bairro');
    let inputCidade = document.querySelector('#cidade');
    let inputUF = document.querySelector('#estado');

    if(valor.length != 8) {
        alert('CEP no formato incorreto')
        return;
    }

    fetch('https://viacep.com.br/ws/' + valor + '/json/')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function (resposta) {
        if(resposta.erro) {
            alert('CEP inexistente')
            return;
        }
        inputEnd.value = resposta.logradouro;
        inputBairro.value = resposta.bairro;
        inputCidade.value = resposta.localidade;
        inputUF.value = resposta.uf;
    })
    .catch(function(erro) {
        alert('Erro ao procurar cep')
        inputEnd.value = '';
        inputBairro.value = '';
        inputCidade.value = '';
        inputUF.value = '';
    })
})


