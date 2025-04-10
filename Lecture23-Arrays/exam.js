function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ("aeiouAEIOU".includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("JavaScript"));
///////////////////////////////////////////////////////////////
let arr = [1, 4, 7, 10];

function evenOdd(array){
    for(let i = 0; i <= array.length-1; i++){
    
    if(array[i] %2 === 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
}

evenOdd(arr);
/////////////////////////////////////////////////////////////
function longestWord(sentence) {
    return sentence.split(" ").reduce((longest, word) => {
        if (word.length > longest.length) {
            return word;
        } else {
            return longest;
        }
    }, "");
}

console.log(longestWord("I love JavaScript programming"));
////////////////////////////////////////////////////////////
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let output = "";
        if (i % 3 === 0){
            output += "Fizz";
        }
        if (i % 5 === 0){
            output += "Buzz";
        }
        console.log(output || i);
    }
}

fizzBuzz(50);
///////////////////////////////////////////////////////////
//let arr2 = [10, 5, 20, 8, 12];
//for(let i = 0; i <= arr2.length; i++) {
//    if(arr2[i] === arr2[i]) {
//
//    }
//}

////////////////////////////////
// const arr6 = [10, 5, 20, 8, 12];
// function secondLargest(arr) {
//     let n = arr6.length;
//     arr.sort((a, b) => a - b);

//     for (let i = n - 2; i >= 0; i--) {
//         if (arr[i] !== arr[n - 1]) {
//             return arr[i];
//         }
//     }

//     return -1;
// }

// console.log(secondLargest(arr));
const arr5 = [10, 5, 20, 8, 12];
function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
let num = arr[i];

if (num > first) {
    second = first;
    first = num;
}
if (num <= first && num > second && num !== first) {
    second = num;
}
}
if (second === -Infinity) {
    return null;
}
    return second;
}

console.log(findSecondLargest(arr));
/////////////////////////////////////////////////////////////
const arr9 = [1, [2, [3, 4], 5], 6];
function flatArr(arr9) {
    let result = [];
    for (let i = 0; i < arr9.length; i++) {
    let element = arr9[i];
    if (Array.isArray(element)) {
    result = result.concat(flatArr(element));
    } else {
    result.push(element);
    }
    }
    return result;
}

console.log(flatArr(arr9));
