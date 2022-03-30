# Area-perimeter

This project will calculate the area and perimeter of regular poligons such circle, triangle, square, pentagon and so on.

## Tasks

* The program should ask to user how many sides does the polygon has. (For simplify, the one sided polygon corresponds to circle).
* User should type the required basic measurements according the polygon's formula (i.e. the circle needs radius; the regular polygon needs sides number and side's lenght).
* The program should report if the required values are valid.
* The program will show the operation's results.
* User has the option of use the program any given times.

### Bugs

* Enter non-numeric parameters.
* Enter sidesNum variable as a float number.
* Non entering a value (empty input).


## Manual Exercise

For this exercise, we found out the formula for any given regular polygon with n sides.

Exercise 1: User only has to input the very basic values (sides number, side lenght or radius).

var sidesNum = 3;
var area;
var perimeter;

If (sidesNum < 1){
    var sideLength = 5;
    var perimeter = sidesNum * sideLength;
    var theta = 360 / (2 * sidesNum);
    var apothem = sideLength / (2 * Math.tan(theta));
    var area = (perimeter * apothem) / 2;

}
Else if (sidesNum == 1){
    var radius = 2;
    var perimeter = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
}
Else{
    El usuario ingresa un valor no permitido para sidesNum
}

print perimeter; 
print area;

Ejercicio 2: Acording of the parameters the user types as input, the program will calculate the area and perimeter with the most efective formula for the task (due the many ways we can obtain such results).

## Algoritm

var sidesNum;
var perimeter;
var area;

if(sidesNum > 1)------------------------------------------ 
        v                           
var sideLength;
perimeter = sidesNum * sideLength;

var theta = 360 / (2 * sidesNum);
var apothem = sideLength / (2 * Math.tan(theta));

area = (perimeter * apothem) / 2; 

-> else if(sides == 1)-------------------------------------
        v
var radius;
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

->else
    v
Prompt(Error, value's not allowed)

close if