//Circle

function cirPerimeter(radius) {
    var circlePerimeter = 2 * Math.PI * radius;
    return circlePerimeter;
};

function cirArea(radius){
    var circleArea = (radius * radius) * Math.PI;
    return circleArea;
}; 

/*
var circlePerimeter = circlePerimeter.toFixed(2);
var circleArea = circleArea.toFixed(2);

console.group("Circle's data");
console.log("The radius of the circle's: " + circleRadius + " cm");
console.log("The circle's perimeter's: " + circlePerimeter + " cm");
console.log("The circle's area's: " + circleArea + " cm^2");
console.groupEnd();
*/

//Triangle

function triaHeight(sidesLength){
    var triangleHeight = Math.sqrt((sidesLength * sidesLength) - ((sidesLength / 2) * (sidesLength / 2)));
    return triangleHeight;
};

function triaPerimeter(sidesLength){
    var trianglePerimeter = sidesLength * 3;
    return trianglePerimeter;
};

function triaArea(sidesLength){
    var height = triaHeight(sidesLength);
    var triangleArea = (sidesLength * height) / 2;
    return triangleArea;
}

/*
var triangleHeight = triangleHeight.toFixed(2);
var trianglePerimeter = trianglePerimeter.toFixed(2);
var triangleArea = triangleArea.toFixed(2);


console.group("Triangle's data");
console.log("The triangle's height's: " + triangleHeight + " cm");
console.log("The triangle's perimeter's: " + trianglePerimeter + " cm");
console.log("The triangle's area's: " + triangleArea + " cm^2");
console.groupEnd();
*/

//Square

function squaPerimeter(sidesLength){
    var squarePerimeter = (sidesLength * 4);
    return squarePerimeter;
};

function squaArea(sidesLength){
    var squareArea = (sidesLength * sidesLength);
    return squareArea;
}

/*
var squarePerimeter = squarePerimeter.toFixed(2);
var squareArea = squareArea.toFixed(2);

console.group("Square's data");
console.log("The square's perimeter's: " + squarePerimeter + " cm");
console.log("The square's area's: " + squareArea + " cm^2");
console.groupEnd();
*/