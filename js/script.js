const ruleta = document.querySelector('#ruleta');
var giro = 3600

function girarRuleta(){

    let rand = Math.random() + ((giro == 3600)? 0 : 3600);
    calcular(rand);
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');


  function premio(textPremio){
    document.getElementById("mensaje").innerText = `Premio = ${textPremio}`
  }

    function calcular(rand) {

      valor = rand / 360;
      valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
      ruleta.style.transform = "rotate("+rand+"deg)";

      setTimeout(() => {
          switch (true) {
            case valor > 0 && valor <= 45:
            premio("2 estrellas");
            break;
            case valor > 45 && valor <= 90:
            premio("5 Piezas");
            break;
            case valor > 90 && valor <= 135:
            premio("2 Corazón"); 
            break; 
            case valor > 135 && valor <= 180:
            premio("2 Nigiri");
            break;
            case valor > 180 && valor <= 225:
            premio("Handroll Mini");
            break; 
            case valor > 225 && valor <= 270:
            premio("NO HAY CORTESIAS ESTA VEZ");
            break;
            case valor > 270 && valor <= 315:
            premio("Una Coca Cola de 2L");
            break;
            case valor > 315 && valor <= 360:
            premio("2 Enjoy"); 
            break;
          }
      }, 5000);

    }
}