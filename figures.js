/*
1.Create global variables
2.Conditional create for, once the user enter the number of sides of the geometric figure, the program itself run the correct piece of calculation code.
3.Solve the bug for invalid values entered.
4.Input's configuration which will point out how many sides has the polygon the program will execute.
5.Configuration of the button which will run the program.
6.Function "calculate()" created for the program running once the user click the button.
7.Display the calculations's results in the site.
8.Configure the area and perimeter values to only display 2 decimals.
*/

//1.-----------------------------------------------------------
var perimeter;
var area;

//5.--------------------------------------------
var button = document.getElementById("button");
button.addEventListener("click", calculate);

//6.-----------------------------------------------------------------------------------------------------------------------------------------------------
function calculate(){
    //4.-------------------------------------------------------------------
    var sidesNum = parseInt( document.getElementById("sidesNumber").value );
    /* Variable "sidesNum" has to be initializated inside calculate()'s function 'cause it has to have a value already typed before it has been read"*/

   //2.-----------------------------------------------------------------
    if(sidesNum > 1){
        var sideLength = window.prompt("What's the polygon sides lenght");
        perimeter = sidesNum * sideLength;
        var theta = 360 / (2 * sidesNum);
        var apothem = sideLength / (2 * Math.tan(theta * Math.PI / 180));
        area = (perimeter * apothem) / 2;

        perimeter = perimeter.toFixed(2);
        area = area.toFixed(2);
        


    }
    else if(sidesNum == 1){
        var radius = window.prompt("Whta's the circle's radius");
        var perimeter = 2 * Math.PI * radius;
        var area = Math.PI * radius * radius;

        perimeter = perimeter.toFixed(2);
        area = area.toFixed(2);

    }
    //3.------------------------------------------------
    else{
        console.log("Invalid value entered. Try again");
    }
    //7.---------------------------------------------------------------------------------------------------------------------
    console.log(perimeter);
    console.log(area);
    result.innerHTML = "Your polygon has " + sidesNum + " sides. Its perimeter is " + perimeter + " and its area is " + area;
}



