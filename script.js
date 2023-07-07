function carregar () {
  const msg = document.querySelector("#msg");
  const imagem = document.querySelector("#imagem");
  
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minuto} horas!`;

  if (hora >= 0 && hora < 12) {
    imagem.src = "fotos/manhã.jpg";
    document.body.style.background = "#FFFF99";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "fotos/tarde.jpg";
    document.body.style.background = "#FFCC33";
  } else {
    imagem.src = "fotos/noite.jpg";
    document.body.style.background = "#000033";
    
  }

}