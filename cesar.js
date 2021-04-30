function recebeDisplay () {
    var displayOn = document.getElementById ('select');
    var incremento = document.getElementById ('increment');
    
    if (document.querySelector('#select').value == "cifradecesar") {
        document.querySelector ('#entregarC')
        document.getElementById('increment').style.visibility = 'visible';
        document.querySelector ('#receberC').style.display="initial";
        document.querySelector ('#receberC').style.width="410px";
        document.querySelector ('#receberC').style.height="160px";
        document.querySelector ('#entregarC').style.display="block";
        document.querySelector ('#entregar').style.display="none";
        document.querySelector ('#receber').style.display="none";   
    }
    else if (document.querySelector('#select').value == "base64") {
        document.getElementById('increment').style.visibility = 'hidden';
        document.querySelector ('#receberC').style.display="none";
        document.querySelector ('#entregarC').style.display="none";
        document.querySelector ('#entregar').style.display="block";
        document.querySelector ('#receber').style.display="block";
    }
    else {

    }
}



function decisao () {
    if (document.querySelector('#select').value == "base64") {  
        base64()
    }
    else 
        validaIncremento()
    
}
    


function validaIncremento(){
    document.getElementById ('escolhaC')
    var incremento = document.getElementById("increment").value;
    incremento = incremento % 26; 
    var radioDecodificar = document.getElementById ('descodificar');
    if (radioDecodificar.checked) {
        incremento = incremento * (-1);
    }
    cesar(incremento)
}

function cesar(incremento) {

    var textoDeEntrada = document.querySelector("#receberC").value;
    var textoDeSaida = document.querySelector("#entregarC");
    var transiçao = "";
    textoDeSaida.innerHTML = "";
    for (var i = 0; i < textoDeEntrada.length; i++) {
        transiçao = textoDeEntrada.charCodeAt(i);

        if (transiçao >= 65 && transiçao <= 90) {
            transiçao = transiçao + incremento; 
            if (transiçao > 90) {
                transiçao = transiçao - 26;
            } else if (transiçao < 65) {
                transiçao = transiçao + 26; 
            }
        }
        if (transiçao >= 97 && transiçao <= 122) {
            transiçao = transiçao + incremento;
            if (transiçao > 122) {
                transiçao = transiçao - 26; 
            } else if (transiçao < 97) {
                transiçao = transiçao + 26; 
            }
        }

        document.getElementById('entregarC').innerHTML += String.fromCharCode(transiçao);
    }

}