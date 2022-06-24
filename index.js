let botao = document.querySelector('#btn')

botao.addEventListener('click', () => {
    let msg = document.getElementById('turno')
    let mensagem = String(msg.value)
    let resposta = document.getElementById('res')

    if(mensagem === 'M' || mensagem === 'm') {
        resposta.style.color = 'white'
        resposta.innerHTML = `<p><strong>BOM DIA!</strong></p>`
    } else if(mensagem === 'V' || mensagem === 'v') {
        resposta.style.color = 'white'
        resposta.innerHTML = `<p><strong>BOA TARDE!</strong></p>`
    } else if(mensagem === 'N' || mensagem === 'n') {
        resposta.style.color = 'white'
        resposta.innerHTML = `<p><strong>BOA NOITE!</strong></p>`
    } else {
        alert('INFORMAÇÃO INVÁLIDA')
    }
})