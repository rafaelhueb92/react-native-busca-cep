const buscarCEP = cep =>
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(endereco => endereco);

export default buscarCEP;
