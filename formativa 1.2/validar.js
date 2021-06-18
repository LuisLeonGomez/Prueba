//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0]="errorparcialuno";
arreglo[1]="errorparcialdos";
arreglo[2]="errorparcialtres";
arreglo[3]="errorparcialcuatro";
arreglo[4]="errorexamen";

function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('parcialuno').value;
    entrada[1]=document.getElementById('parcialdos').value;
    entrada[2]=document.getElementById('parcialtres').value;
    entrada[3]=document.getElementById('parcialcuatro').value;
    entrada[4]=document.getElementById('examen').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese La primera nota!!</span>";
    error[1] = "<span style='color: red'>Ingrese La segunda nota!!</span>";
    error[2] = "<span style='color: red'>Ingrese la tercera nota!!</span>";
    error[3] = "<span style='color: red'>Ingrese la cuarta nota!!</span>";
    error[4] = "<span style='color: red'>Ingrese la nota de examen!!</span>";


    //Definiendo un ciclo forech
    for(i in entrada){
        var mensajeError = error[i]
        var valorArreglo = arreglo[i]
        //Validando campo requerido
        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }

        //Validar correo
        else if (i==2){
                var arroba = entrada[i].indexOf("@");
                var punto = entrada[i].lastIndexOf(".");

                if(arroba<1 || punto < arroba + 2 || entrada[i].length<punto+2){
                    document.getElementById('errorEmail').innerHTML =
                    "<span style='color: red'>Ingrese un email válido!!</span>";
                }
                else {
                    document.getElementById('errorEmail').innerHTML =
                    "Campo válido!!";
                }
        }
        else if (i==5){
            var primero = document.getElementById('password').value;
            var segundo = document.getElementById('confirmarpassword').value;

            if(primero != segundo)
            {
                document.getElementById('errorConfirmar').innerHTML =
                "<span style='color: red'>Los password no coinciden!!</span>";
            }
            else{
                document.getElementById('errorConfirmar').innerHTML =
                "Campo válido!!";
            }

        }
        else {
            document.getElementById(valorArreglo).innerHTML =
                "Campo válido!!";
        }

    }

}

function validarTodos(){
    var contador = 0;
    for(i=0; i<6; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            contador++;
        }
    }
    if(contador == 6){
        document.getElementById('mensajefinal').innerHTML
    }
}