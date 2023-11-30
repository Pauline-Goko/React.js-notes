function mergeSort(arr){
if(arr.length <=1){
    return arr;
}
let mid = Math.floor(arr.length/2);
let left = arr.slice(0,mid);
let right = arr.slice(mid);
return sorted (mergeSort(left), mergeSort(right));

}

function sorted(left, right){
let emptyArray = [];
while(left.length && right.length){
    if (left[0] < right[0]){
        emptyArray.push(left.shift());
    }
    else{
        emptyArray.push(right.shift());
    }
}
return[...emptyArray, ...left, ...right];

}
let arr = [8,9,10,1,3,2,4,7];
let sortedArrays = mergeSort((arr));
console.log(sortedArrays);




function arraySort(arr2){
    if(arr2.length <=1){
        return arr2;
    }
    let mid = Math.floor(arr2.length/2);
    let left2 = arr2.slice(0,mid);
    let right2 = arr2.slice(mid);
    return sorted (mergeSort(left2), mergeSort(right2));
    
    }
    
    function sorted(left2, right2){
    let nullArray = [];
    while(left2.length && right2.length){
        if (left2[0] > right2[0]){
            nullArray.push(left2.shift());
        }
        else{
            nullArray.push(right2.shift());
        }
    }
    return[...nullArray, ...left2, ...right2];

    }


let arr2 = [5,4,2,1,3,9,10,8,7];
let arraysSorted = arraySort(arr2);
console.log(arraysSorted);




array = [1,3,5,7,8,9];
x = 6;
console.log(array.includes(x));