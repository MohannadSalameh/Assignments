let arr = [1, 2, 3, 4, 5];
let triple = arr.map(x => x*3);
console.log(triple);


let arr2 = [1, 2, 2, 3, 4, 4, 5];

let arr3 = arr2.filter((x, y, z) => z.indexOf(x) === y);

console.log(arr3);


let arr4 = [
    {name: "mohannad", age: 30},
    {name: "ali", age: 28},
    {name: "osama", age: 25}
];

arr4.sort((a, b) => a.age - b.age);

console.log(arr4);



//let arr5 = [1,5,9,6,3,87,72,23];
//function maximum(arr5) {
//    return Math.max(...arr5);
//}
//console.log(maximum(arr5));





let arr6 = [1, 5, 9, 6, 3, 87, 72, 23];
function maximum(arr5){
    let maxNum = arr[0];
    for(let i = 1; i <= arr5.length; i++) {
        if (maxNum < arr5[i]) {
            maxNum = arr5[i];
        }
    }
    return maxNum
}
console.log(maximum(arr))



let arr7 = [1, 4, 6, 7, 9, 11];
let reversedArr = arr => {
    let reverse = [];
    for (let i = arr.length -1 ; i >= 0; i-- ) {
        reverse.push(arr[i]);
    }
    return reverse
}
console.log(reversedArr(arr7))



//function targetNums(target) {
//    let arr8 = [1, 5, 9, 6, 3, 87, 72, 23]; // Sample array
//    let seen = new Map();
//    
//    for (let num of arr8) {
//        let complement = target - num;
//        if (seen.has(complement)) {
//            return [complement, num]; // Found the pair
//        }
//        seen.set(num, true);
//    }
//    
//    return "No pair found";
//}

//console.log(targetNums(9)); // Example output: [6, 3]


for (let i = 1; i<=3; i++) {
    for (let j = 1; j<=3; j++) {
        console.log(`(${i}, ${j})`);
    }
}


let arr9 = [2, 3, 5, 6] ;
let double = arr9.map(x => x*2);
console.log(double)







