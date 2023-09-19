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
  

  
    if (!email || !password) {
     
      const msgError = document.getElementById("msgError");
      msgError.textContent = "Preencha todos os campos antes de cadastrar.";
      msgError.style.display = "block";
      return; 
    }

    if (!email.includes("@")) {
        const msgError = document.getElementById("msgError");
        msgError.textContent = "O email inserido é inválido. Por favor, insira um email válido.";
        msgError.style.display = "block";
        return; 
      }
  
  
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  
    const usuarioExistente = listaUsuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
      const msgError = document.getElementById("msgError");
      msgError.textContent = "E-mail já cadastrado. Por favor, faça login ou use outro e-mail.";
      msgError.style.display = "block";
      return; 
    }
  

    const novoUsuario = {
      email,
      senha: password,
    };

    listaUsuarios.push(novoUsuario);

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  
    const msgError = document.getElementById("msgError");
    msgError.style.display = "none";

    window.location.href = "../news/login.html";
  }
