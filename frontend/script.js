const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nome = document.getElementById("nomeId").value;
  const email = document.getElementById("emailId").value;
  const senha = document.getElementById("senhaId").value;
  const corpoRequicao = {
    nome,
    email,
    senha,
  };
  try {
    const resposta = await axios.post(
      "http://localhost:3003/usuarios",
      corpoRequicao
    );

    alert("Usuário cadastrado com sucesso");
  } catch (error) {
    alert("Erro ao cadastrar!");
  }
});
