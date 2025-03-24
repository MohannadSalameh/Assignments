//1. Validate Description
function validateDescription(description) {
    if(description.length > 280) {
        return "Description is too long!"
    }
    return "Description is valid!"
}
console.log (validateDescription("momomomomomomomomomomomoomommomomomomomommoom"));

//2. Check username capital letter*********************************************************************
let s1 = "javaScript";
console.log(s1.charAt(0).toUpperCase() + s1.slice(1));

//3. Format text cases*********************************
let string = "jAVASCRIPT";
if (string.charAt(0) === string.charAt(0).toLowerCase()) {
    console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}
//4. Remove spaces from email&****************************************************
let email = "  mo.htu@gmail.com    ";
console.log(email.trim());

//5. Slice article*********************
let str2 = "i love javaScript";
console.log(str2.slice(6,11))

//6. Mask digits in phone number*******
function maskPhone(str3) {
    return "*** *** " + str3.substring(str3.length-4);
}
console.log(maskPhone("0780665532"));

//7. Censor bad words**************************************
let statement = "bad weather sun bad rain snow bad";
console.log(statement.replaceAll("bad", "***"));

//8. convert user comment to array of words****************
let comment = "I Love Ramadan Month!";
console.log(comment.split(" "));

//9. Detect unstricted words in comment*********
let comment2 = "HTML, CSS, JavaScript and React";
console.log(comment2.includes("CSS"));

//10. Verify if file is image******************************
let str4 = "image.png";
if(str4.endsWith("jpg") || str4.endsWith("png")) {
    console.log(str4)
}

//11. Repeat************************************************
let name2 = "Ali ";
console.log(name2.repeat(4));

//12. Compine two parts into one*****************
let str5 = "Mohannad ", str6 = "Salameh";
console.log(str5.concat(str6));

//13. Find first & last occurance****************************
let str7 = "HTML stands for HyperText Markup Language";
console.log(str7.lastIndexOf("Markup"));






//let str8 = "messi";
//let str9 = ""
//for(let i = str8.length-1; i>=0; i--) {
//    str9 = str8[i];
//}
//console.log(str9);


function factorial(x) {
    let res = 1
    for(; x>1; x--) {
        res*=x;
    }
    return res;
}
console.log(factorial(4));

