document.getElementById('denunciaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pega o texto da denúncia
    const denunciaText = document.getElementById('denunciaText').value;

    // Salva no localStorage
    localStorage.setItem('denuncia', denunciaText);

    // Redireciona para a página de consulta
    window.location.href = './consut.html';
});
