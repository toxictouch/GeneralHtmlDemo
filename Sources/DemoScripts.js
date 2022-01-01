/// Author: Stanley
/// Date: 2022-01-01



//This function performs some simple math on two numbers provided by the page then sets the results
function calculateNumbers(){
    
    //We need to get the number values from the inputs. Notice we parse the value into a float
    //Parsing makes the value an actual number for mathematical purposes (float is a number type)
    var num1 = parseFloat(document.getElementById("numberOne").value);
    var num2 = parseFloat(document.getElementById("numberTwo").value);

    //Addition and multiplication don't care about the order they are done, so get those results now
    var additionResult = num1 + num2;
    var multiplicationResult = num1 * num2;
    
    //Create some empty variables. We need to determine which number was greater to proceed further
    var subtractionResult;
    var divisionResult;
    
    //If num1 is greater then num2, lets subtract/divide num2 from num1
    if (num1 >= num2)
    {
        //We can assign the variables above now within the IF or ELSE blocks
        subtractionResult = num1 - num2;
        divisionResult = num1 / num2;
    }
    //Now if num2 was greater then num1, we need to do the math this way
    else
    {
        subtractionResult = num2 - num1;
        divisionResult = num2 /num1;
    }

    //Find the inputs to display the values and set the values now
    document.getElementById("addResult").value = additionResult;
    document.getElementById("subResult").value = subtractionResult;
    document.getElementById("multiResult").value = multiplicationResult;
    document.getElementById("divResult").value = divisionResult;
};



//This function will display the surprise div
function showDiv(){
    //Review the DemoSheet.css file to see what the classes do to the divs
    
    
    // We can get whole html elements, here we get the divs by the IDs
    var buttonDiv = document.getElementById("buttonDiv");
    var fryDiv = document.getElementById("fryDiv");

    //We can remove classes from elements once we retrieve them
    buttonDiv.classList.remove("show");
    fryDiv.classList.remove("hidden");
    
    //And we can also add classes to elements 
    buttonDiv.classList.add("hidden");
    fryDiv.classList.add("show");    
};



//The reverse of the showDiv() function above
function hideDiv() {
    //html div elements
    var buttonDiv = document.getElementById("buttonDiv");
    var fryDiv = document.getElementById("fryDiv");

    //Remove classes
    buttonDiv.classList.remove("hidden");
    fryDiv.classList.remove("show");
    
    //Add classes
    buttonDiv.classList.add("show");
    fryDiv.classList.add("hidden");
};