const formulario = document.querySelector("form");

// função para retornar mensagem de feedback para o usuario, apos o envio do formulario.
function formularioEnviado(resposta) {
    if (resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagen enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24h.</p>";
    } else {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    const botao = document.querySelector("form button");

    botao.disabled = true;
    botao.innerText = "Enviando..."; // quando estiver enviando, irá alterar o texto do botao.

    const data = new FormData(formulario); // capturando todas as informações do formulario.

    // console.log(data.get("email")) ==> capturando o valor do input 'email'.

    fetch("./enviar.php", {
        method: "POST", 
        body: data
    }).then(formularioEnviado)
}

formulario.addEventListener("submit", enviarFormulario)