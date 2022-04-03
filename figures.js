/*
1.Circle's required functions
2.Button's function for doing the math operations
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

//2.
function circleCalculation() {
    var radius = document.getElementById("inputCirRadius").value;
    var circlePerimeter = cirPerimeter(radius);
    var circleArea = cirArea(radius);

    circlePerimeter = circlePerimeter.toFixed(2);
    circleArea = circleArea.toFixed(2);

    document.getElementById("circleResult").innerHTML = "For a circle with RADIUS: " + radius + "cm ," + " the resulting PERIMETER is " + circlePerimeter + "cm and the AREA is " + circleArea + "cm2";
};


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



//Square

function squaPerimeter(sidesLength){
    var squarePerimeter = (sidesLength * 4);
    return squarePerimeter;
};

function squaArea(sidesLength){
    var squareArea = (sidesLength * sidesLength);
    return squareArea;
}

