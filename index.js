//comments helps others to understand your code better
//single line comments are denoted with double slash (//)
//multiple line comments are denoted with /** */

function addNumbers(){
    //a variable in a programming language should have
    //variable_type variable_name variable_value

    //if any value after '=' is enclosed in double quotes (") that value is a string
    let alpha = "abc"; // ---> javascript understands this variable 'alpha' as a string and converts its type into a string
    
    let digits = 123; // ---> javascript understands this variable 'digits' as a number and converts the variable type into a number

    //code to perform adding numbers

    /**
     * identify an element in html using, here ID is the attribute mentioned for the desired element in html page
     * document.getElementById("ID")
     * 
     * to get value typed in the above element use .value
     * 
     * document.getElementById("ID").value - returns a string
     */

    //read first value
    let first_value = document.getElementById("firstValue").value; // --> because document.getElementById("firstValue").value returns a string, javascript evaulates 'first_value' variable type as string

    //read second value
    let second_value = document.getElementById("secondValue").value; // --> because document.getElementById("secondValue").value returns a string, javascript evaulates 'second_value' variable type as string

    /**
     * because first_value and second_value are evaluated as strings, 
     * adding them will just concatenate but will not sumup their digits value
     * 
     * so convert each of the above variable strings to integers using the javascript inbuilt method parseInt()
     * more on parseInt - https://www.w3schools.com/jsref/jsref_parseint.asp
     */
    let result = parseInt(first_value) + parseInt(second_value);
    

    //put the value in third textbox
    document.getElementById("result").value = result;
}
