var numero = 0;
var max = 10;
var stepsize = 25;

function cambia(n){
    if(Math.abs(numero + n) <= max){
        numero += n;
    }
    document.getElementById("numero").innerText = numero;

    if(numero == 0){
        document.getElementById("cntbarra").style.width = "10px";
        document.getElementById("cntbarra").style.marginLeft = "245px";
    }
    else{
        document.getElementById("cntbarra").style.width = Math.abs(numero*stepsize) + "px";
        document.getElementById("cntbarra").style.transitionDuration = "400ms";
        if(numero > 0){
            document.getElementById("cntbarra").style.marginLeft = "245px";
        }
        else{
            document.getElementById("cntbarra").style.marginLeft = (255 - Math.abs(numero*stepsize)) + "px";
        }
    }
}

function freccia(evt){
    if(evt.keyCode == 37){
        cambia(-1);
    }
    else if(evt.keyCode == 39){
        cambia(1);
    }
}