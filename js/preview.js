function comprar1() {
 
  const botaoComprar = document.getElementById('botaoComprar');
 
  const textoOriginal = botaoComprar.innerHTML;

  botaoComprar.innerHTML = 'Entrando...';
 
  setTimeout(() => {
    window.location.href = '../news/login.html';
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
    window.location.href = '../news/login.html';
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
    window.location.href = '../news/login.html';
  }, 3000);

  setTimeout(() => {
    botaoComprar.innerHTML = textoOriginal;
  }, 3000);
}