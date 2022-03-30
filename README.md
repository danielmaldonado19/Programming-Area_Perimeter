# Area-perimeter

This project will calculate the area and perimeter of regular poligons such circle, triangle, square, pentagon and so on.

## Tasks

* The program should ask to user how many sides does the polygon has. (For simplify, the one sided polygon corresponds to circle).
* User should type the required basic measurements according the polygon's formula (i.e. the circle needs radius; the regular polygon needs sides number and side's lenght).
* El programa debe definir cuando los valores ingresados son validos y cual es el limite de lados que debe tener el poligono que se desea calcular (esto depende de lo complejas que se vuelvan las operaciones segun el numero de lados).
* El programa debe contener las formulas de los poligonos y que, de acuerdo a los valores ingresados (sobretodo el numero de lados), se ejecuten los calculos correctos.
* El usuario debe mostrar el resultado de la operacion.
* El usuario podra reiniciar el proceso cuantas veces desee.

### Bugs

* Ingresa parametros no numericos.
* Ingresa en la variable numLados un numero float.
* No ingresar ningun valor


## Manual Exercise

Tendremos como limite el poligono regular de 10 lados.

Ejercicio 1: Se brindan los parametros basicos

var numLados = 3;
var polygon =  [circle, polygon];
var area;
var perimetro;

If (numLados < 1){
    var longitudLado = 5;
    var perimetro = numLados * longitudLado;
    var teta = 360 / (2 * numLados);
    var apotema = longitudLado / (2 * Math.tan(teta));
    var area = (perimetro * apotema) / 2;

}
Else if (numLados == 1){
    radio = 2;
    var perimetro = 2 * Math.PI * radio;
    var area = Math.PI * radio * radio;
}
Else{
    El usuario ingresa un valor no permitido para numLados
}

Print
Perimetro; 
Area;

Ejercicio 2: De acuerdo a los parametros que ingrese el usuario, se activaran ciertas funciones.