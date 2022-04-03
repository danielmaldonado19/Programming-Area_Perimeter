//Circle

function cirPerimeter(radius) {
    var circlePerimeter = 2 * Math.PI * radius;
    return circlePerimeter;
};

function cirArea(radius){
    var circleArea = (radius * radius) * Math.PI;
    return circleArea;
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

