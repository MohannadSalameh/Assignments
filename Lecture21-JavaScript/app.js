function calc(x, y, operation) {
    let result;
    switch (operation) {
        case '+' :
            result= x+y; 
            break;

        case '-' :
            result= x-y; 
            break;

        case '*' :
            result= x*y; 
            break;

        case '/' :
            result= x/y; 
            break;
    
        default:
            break;
    }

    return result;
}
console.log(calc(10,15,'*'))

//************************************************************************************/

function calculate(x, y, operate) {
    let res;
    if (operate === "+") {
        return x + y;
    }
    else if (operate === "-") {
        return x - y;
    }
    else if (operate === "*") {
        return x * y;
    }
    else if (operate === "/") {
        return x / y;
    }
    else {
        return "wrong";
    }
}
console.log(calculate(10,15,'/'))

