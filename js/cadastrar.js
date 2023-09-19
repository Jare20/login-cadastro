let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha1')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
function cadastrar() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // Valide o email e a senha conforme necessário (por exemplo, verificando se o email é válido e se a senha atende aos critérios)
  
    if (!email || !password) {
      // Exiba uma mensagem de erro se algum dos campos estiver em branco
      const msgError = document.getElementById("msgError");
      msgError.textContent = "Preencha todos os campos antes de cadastrar.";
      msgError.style.display = "block";
      return; // Saia da função para evitar o cadastro com campos em branco
    }

    if (!email.includes("@")) {
        const msgError = document.getElementById("msgError");
        msgError.textContent = "O email inserido é inválido. Por favor, insira um email válido.";
        msgError.style.display = "block";
        return; // Saia da função
      }
  
    // Verifique se o email já está cadastrado (você pode fazer isso comparando com os registros existentes no localStorage)
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  
    const usuarioExistente = listaUsuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
      const msgError = document.getElementById("msgError");
      msgError.textContent = "E-mail já cadastrado. Por favor, faça login ou use outro e-mail.";
      msgError.style.display = "block";
      return; // Saia da função para evitar o cadastro duplicado
    }
  
    // Se tudo estiver válido, crie um novo objeto de usuário
    const novoUsuario = {
      email,
      senha: password,
    };

    // Adicione o novo usuário à lista de usuários
    listaUsuarios.push(novoUsuario);

    // Salve a lista atualizada no localStorage
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  
    // Limpe a mensagem de erro, se houver
    const msgError = document.getElementById("msgError");
    msgError.style.display = "none";
    // Redirecione o usuário para a tela de login
    window.location.href = "../news/login.html";
  }