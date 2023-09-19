function entrar() {

    const eyeIcon = document.querySelector('.fa-eye');
const senhaInput = document.querySelector('#senha1');

eyeIcon.addEventListener('click', () => {
  if (senhaInput.getAttribute('type') === 'password') {
    senhaInput.setAttribute('type', 'text');
  } else {
    senhaInput.setAttribute('type', 'password');
  }
});

    // Obtenha o valor inserido pelo usuário para o email e a senha
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // Verifique se os campos estão preenchidos
    if (!email || !password) {
      const msgError = document.getElementById("msgError");
      msgError.textContent = "Preencha todos os campos.";
      msgError.style.display = "block";
      return;
    }
  
    // Verifique se o email contém "@"
    if (!email.includes("@")) {
      const msgError = document.getElementById("msgError");
      msgError.textContent = "Digite um endereço de email válido.";
      msgError.style.display = "block";
      return;
    }
  
     // Recupere a lista de usuários do localStorage
     const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  
     // Encontre o usuário correspondente pelo email
     const usuario = listaUsuarios.find((u) => u.email === email);
   
     if (!usuario || usuario.senha !== password) {
       // Se o usuário não for encontrado ou a senha não corresponder, exiba uma mensagem de erro
       const msgError = document.getElementById("msgError");
       msgError.textContent = "E-mail ou senha inválido(s). Por favor, tente novamente.";
       msgError.style.display = "block";
       return; // Saia da função
     }
   
     // Se o login for bem-sucedido, defina informações de usuário no localStorage
     localStorage.setItem("userLogado", JSON.stringify(usuario));
   

     const msgError = document.getElementById("msgError");
     msgError.style.display = "none";
   
     window.location.href = "../pages/index.html"; 

  }
  