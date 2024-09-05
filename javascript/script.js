

  function consultarCEP(cep) {
    // Verifica se o CEP tem 8 dígitos e é composto apenas por números
    if (cep.length === 8 && /^\d+$/.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          // Verifica se a resposta foi bem-sucedida
          if (!response.ok) {
            throw new Error('Erro ao consultar o CEP');
          }
          return response.json();
        })
        .then(data => preencherCampos(data))
        .catch(error => console.error('Erro:', error));
    } else {
      console.error('CEP inválido');
    }
  }