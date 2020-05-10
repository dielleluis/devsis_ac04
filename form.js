function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var assunto = document.getElementById("assunto");
    var mensagem = document.getElementById("msg");

    if (nome.value == "") {
        alert("Nome não informado!");
        nome.focus();
        return;
    }

    if (email.value == "") {
        alert("E-mail não informado!");
        email.focus();
        return;
    }

    if (assunto.value == "") {
        alert("Assunto não informado!");
        assunto.focus();
        return;
    }

    if (mensagem.value == "") {
        alert("Campo Mensagem vazio!");
        mensagem.focus();
        return;
    }
    alert("Formulário enviado!");
}