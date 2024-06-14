function fuja(){
  var botaoNao = document.getElementById("nao");

  var largurajanela = window.innerWidth;
  var alturajanela = window.innerHeight;

  var maxX = largurajanela - botaoNao.offsetWidth;
  var maxY = alturajanela - botaoNao.offsetHeight;

  var aleatorioX = Math.floor(Math.random() * maxX);
  var aletorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aletorioY + "px"; 
}
