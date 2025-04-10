let arr = [3, 2, '10', 5, 1, 4, 9, 3];
arr.sort((a, b) => a - b);
console.log(arr)
////////////////////////////////////////////////////////////////////
let arr2 = [1, 2, 3];
console.log(arr2.map((value, index, arr2) => value*2))
////////////////////////////////////////////////////////////////////
let filter = arr2.filter((value, index, arr2) => value > 1);
console.log(filter)
////////////////////////////////////////////////////////////////////
let arr3 = [2, 4, 4]
let reduce = arr3.reduce((pre, currVal, currIndex, arr3) => pre + currVal);
console.log(reduce)
////////////////////////////////////////////////////////////////////
let person = {
    fName: 'Mohannad',
    lName: 'Salameh',
    print: function(){},
    address: {
        street: 'rainbowST',
        buildNum: '23'
    }
}
