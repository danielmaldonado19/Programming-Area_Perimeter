/*
1.Circle's required functions
2.Button's function for doing the math operations of the circle.
3.Triangle's required functions
4.Button's activation function for triangle calculations.
5.Do the same process for square
*/

//Circle

//1.---------------------------------------------
function cirPerimeter(radius) {
    var circlePerimeter = 2 * Math.PI * radius;
    return circlePerimeter;
};

function cirArea(radius){
    var circleArea = (radius * radius) * Math.PI;
    return circleArea;
}; 

//2.------------------------------------------------------
function circleCalculation() {
    var radius = document.getElementById("inputCirRadius").value;
    var circlePerimeter = cirPerimeter(radius);
    var circleArea = cirArea(radius);

    circlePerimeter = circlePerimeter.toFixed(2);
    circleArea = circleArea.toFixed(2);

    document.getElementById("circleResult").innerHTML = "For a circle with RADIUS: " + radius + "cm ," + " the resulting PERIMETER is " + circlePerimeter + "cm and the AREA is " + circleArea + "cm2";
};


//Triangle

//3.-------------------------------------------------------
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

//4.-------------------------------------------------------
function triangleCalculation(){
    var sideLength = document.getElementById("inputTriSideLenght").value;
    var trianglePerimeter = triaPerimeter(sideLength);
    var triangleArea = triaArea(sideLength);;
    
    trianglePerimeter = trianglePerimeter.toFixed(2);
    triangleArea = triangleArea.toFixed(2);

    document.getElementById("triangleResult").innerHTML = "For a equilateral triangle with SIDE LENGTH: " + sideLength + "cm ," + " the resulting PERIMETER is " + trianglePerimeter + "cm and the AREA is " + triangleArea + "cm2";
}



//Square

//5.------------------------------------------------------
function squaPerimeter(sidesLength){
    var squarePerimeter = (sidesLength * 4);
    return squarePerimeter;
};

function squaArea(sidesLength){
    var squareArea = (sidesLength * sidesLength);
    return squareArea;
}

function squareCalculation() {
    var sideLength = document.getElementById("inputSquaSideLenght").value;
    var squarePerimeter = squaPerimeter(sideLength);
    var squareArea = squaArea(sideLength);

    squarePerimeter = squarePerimeter.toFixed(2);
    squareArea = squareArea.toFixed(2);

    document.getElementById("squareResult").innerHTML = "For a square with SIDE LENGTH: " + sideLength + "cm ," + " the resulting PERIMETER is " + squarePerimeter + "cm and the AREA is " + squareArea + "cm2";
}

