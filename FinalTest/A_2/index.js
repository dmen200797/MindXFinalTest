let string1 = prompt('Enter stirng 1');
let string2 = prompt('Enter string 2');

let arr1 = string1.split('');
let arr2 = string2.split('');
let newStr = '';

for(i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if(i < arr1.length) {
        newStr += arr1[i];
    }
    if(i < arr2.length) {
        newStr += arr2[i];
    }
}

console.log(newStr);