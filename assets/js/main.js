"use strict";
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];

//Deyerin movcudluqunu yoxlamaq ucun check funksiyasi: (Includes Methodunu Kecmemisden Evvel:)
function isExist() {
    for (let itm of todo) {
        if (inp.value == itm) {
            inp.value = '';
            alert('This value already exists!')
            return false;
        }
    }
    return true;
}

//Deyeri Todo liste elave etme funskiyasi:
function add() {

    if (inp.value == '') { alert("The box must be filled out"); return false; }
    if (!todo.includes(inp.value)) {
        todo.push(inp.value);
        inp.value = '';

        let data = '';

        for (let item of todo) {
            data += `<li class="list-group-item d-flex justify-content-between text-end">
             <span class="text-center">${item}</span> 
             <button id="rm" class="trash-btn" onclick="Delete(event)" type="submit">🗑</button></li> `
        }
        list.innerHTML = data;

    } else {
        alert('This value already exists!')
        inp.value = '';
    }
}
btn.addEventListener('click', add);


//Yazini daxil etdikden sonra enter duymesini vurma funksiyasi:
inp.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        add();
    }
});

//Silmek funksiyasi:
function Delete(event) {
    todo.splice(event, 1);
    event.target.parentElement.remove();
}

let arrNum = [0, 1, 2, 3];
let n = 6;
let newArr = [];
const arr = [];
let sum = 0;
let newdata = 0;
let check = 0;
function arrayLastElementThree(arr, n) {
    arrNum.push(n);
    for (let item of arrNum) {
        newArr.push(item);
    }
    let count = 3;
    while (count != 0) {
        count--;
        let arrlastnums = newArr.pop();
        arr.push(arrlastnums)
    }
    sum = arr.reduce(function (a, b) {
        return a + b;
    });
    // return sum;
    arrNum.push(sum);
};
arrayLastElementThree();

// check = arrayLastElementThree(arr, n);
// arrNum.push(check);

// while(4){
//     check = arrayLastElementThree(arr, n);
// arrNum.push(check);
// }


for (let item of arrNum) {
    console.log(item);
};
console.log("-----------------------")












// let sum=0;
// arrNum.forEach(arrayLastElementThree)





// console.log(arrayLastElementThree(arrNum));



// let test = arrNum.pop(1, 3)
// console.log(test);
