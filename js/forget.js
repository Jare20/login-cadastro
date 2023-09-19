function solicitarRecuperacao() {
    const email = document.querySelector('#email').value;
    
    if (!email) {
        // Se algum dos campos estiver vazio, exiba uma mensagem de erro
        const msgError = document.getElementById("msgError");
        msgError.textContent = "Preencha todos os campos.";
        msgError.style.display = "block";
        setTimeout( () => {
            msgError.style.display = "none";
        }, 5000)
        return; // Saia da função
      }
  
      if (!email.includes("@")) {
          const msgError = document.getElementById("msgError");
          msgError.textContent = "Digite um endereço de email válido.";
          msgError.style.display = "block";
          setTimeout( () => {
            msgError.style.display = "none";
        }, 5000)
          return;
        }

        const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  
        const usuario = listaUsuarios.find((u) => u.email === email);
      
        if (!usuario) {
          const msgError = document.getElementById("msgError");
          msgError.textContent = "E-mail inválido. Por favor, tente novamente.";
          msgError.style.display = "block";
          setTimeout( () => {
            msgError.style.display = "none";
        }, 5000)
          return; // Saia da função
        }
      
        fetch("/api/recover-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erro na solicitação");
              }
              return response.json();
            })
            .then((data) => {
              if (data.message === "E-mail de recuperação de senha enviado.") {
              }
            })
            .catch((error) => {
              console.error("Erro ao solicitar recuperação de senha:", error);
        });
        const msgSuccess = document.getElementById("msgSuccess");
        msgSuccess.textContent = "E-mail de recuperação enviado, confira sua caixa de entrada.";
        msgSuccess.style.display = "block";
        setTimeout(() => {
          msgSuccess.style.display = "none";
          window.location.href = '../news/login.html'
        }, 5000);
}

