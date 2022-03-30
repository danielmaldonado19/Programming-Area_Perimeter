/*var sidesNum;

if(sidesNum > 1)------------------------------------------ 
        v                           
var sideLength;
var perimeter = sidesNum * sideLength;
var theta = 360 / (2 * sidesNum);
var apotem = sideLength / (2 * Math.tan(theta));
var area = (perimeter * apothem) / 2; 

-> else if(sides == 1)-------------------------------------
        v
var radius;
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

->else
    v
Prompt(Error, value's not allowed)

close if*/

var sidesNum = 1;
var perimeter;
var area;
 
if(sidesNum > 1){
    var sideLength = 5;
    perimeter = sidesNum * sideLength;

    var theta = 360 / (2 * sidesNum);
    var apothem = sideLength / (2 * Math.tan(theta * Math.PI / 180));

    area = (perimeter * apothem) / 2;

    console.log(area);
}
else if(sidesNum == 1){
    var radius = 10;
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

console.log(perimeter);
console.log(area);
}