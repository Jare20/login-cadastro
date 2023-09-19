if (localStorage.getItem("userLogado") === null) {
  window.location.href = "../news/login.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

if (userLogado) {
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
}

function sair() {
    localStorage.removeItem("userLogado");
    window.location.href = "../pages/preview.html";
}


  function comprar1() {
 
    const botaoComprar = document.getElementById('botaoComprar');
   
    const textoOriginal = botaoComprar.innerHTML;
  
    botaoComprar.innerHTML = 'Entrando...';
   
    setTimeout(() => {
      window.location.href = '../pages/comprar.html';
    }, 3000);
  
    setTimeout(() => {
      botaoComprar.innerHTML = textoOriginal;
    }, 3000);
  }
  
  function comprar2() {
   
    const botaoComprar = document.getElementById('botaoComprar2');
   
    const textoOriginal = botaoComprar.innerHTML;
  
    botaoComprar.innerHTML = 'Entrando...';
   
    setTimeout(() => {
      window.location.href = '../pages/comprar.html';
    }, 3000);
  
    setTimeout(() => {
      botaoComprar.innerHTML = textoOriginal;
    }, 3000);
  }
  
  function comprar3() {
   
    const botaoComprar = document.getElementById('botaoComprar3');
   
    const textoOriginal = botaoComprar.innerHTML;
  
    botaoComprar.innerHTML = 'Entrando...';
   
    setTimeout(() => {
      window.location.href = '../pages/comprar.html';
    }, 3000);
  
    setTimeout(() => {
      botaoComprar.innerHTML = textoOriginal;
    }, 3000);
  }