        // Recupera a denúncia do localStorage
        const denuncia = localStorage.getItem('denuncia');

        // Exibe a denúncia na página
        if (denuncia) {
            document.getElementById('denunciaDisplay').innerText = denuncia;
        } else {
            document.getElementById('denunciaDisplay').innerText = 'Nenhuma denúncia encontrada.';
        }