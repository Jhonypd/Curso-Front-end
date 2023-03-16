let botoes = document.querySelectorAll('.colors div');

botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        botoes.forEach(function (outroBotao) {
            outroBotao.classList.remove('selecionado')
        })

        botao.classList.add('selecionado')
    })
})
