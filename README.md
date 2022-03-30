# Area-perimeter

This project will calculate the area and perimeter of regular poligons such circle, triangle, square, pentagon and so on.

## Tasks

* The program should ask to user how many sides does the polygon has. (For simplify, the one sided polygon corresponds to circle).
* User should type the required basic measurements according the polygon's formula (i.e. the circle needs radius; the regular polygon needs sides number and side's lenght).
* The program should report if the required values are valid.
* The program will show the operation's results.
* User has the option of use the program any given times.

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
    var radio = 2;
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

## Algoritm

var sidesNum;

if(sidesNum > 1)------------------------------------------ 
        v                           
var sideLenght;
var perimeter = sidesNum * sideLenght;
var theta = 360 / (2 * sidesNum);
var apotem = sideLenght / (2 * Math.tan(theta));
var area = (perimeter * apothem) / 2; 

-> else if(sides == 1)-------------------------------------
        v
var radius;
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

->else
    v
Prompt(Error, value's not allowed)

close if