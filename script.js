const form = document.getElementById('form-data');
const dataInicio = document.getElementById('data-inicio');
const dataFinal = document.getElementById('data-final');
let dataEValida = false;


function validaData(dataA, dataB) {
    const valorDataA = new Date(dataA.value);
    const valorDataB = new Date(dataB.value);

    return valorDataB >= valorDataA; 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const containerMsgDataValidacao = document.querySelector('.validacao');
    const msgDataValida = '&#10003; Viagem reservada para o período selecionado.'
    const msgDataInvalida = '&#10060 DATA INVÁLIDA - A data de retorno deve ser menor ou igual a de ida.'
    
    dataEValida = validaData(dataInicio, dataFinal);
    if (dataEValida) {
        containerMsgDataValidacao.innerHTML = msgDataValida;
        containerMsgDataValidacao.style.display = 'block';
        dataInicio.value = '';
        dataFinal.value = '';
    } else {
        containerMsgDataValidacao.innerHTML = msgDataInvalida;
        containerMsgDataValidacao.style.display = 'block';
    }
})


