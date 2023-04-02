"use strict";

//Task 1:
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

// Task 2 :
let arrNum = [0, 1, 2, 3];
let n = 6;
let sum = 0;
function arrayLastElementThree(arrNum, n) {
    let newArr = []; //esas Arrayin datalarini yeni arr kocurtmek ucundu ki, birbasa mudaxile olunmasin.
    let secArr = []; //ikinci array hesablanmis datanin neticesini oturmek ucundu.
    for (let item of arrNum) {
        newArr.push(item);
    }
    let count = 3;
    while (count != 0) {
        count--;
        let arrlastnums = newArr.pop();
        secArr.push(arrlastnums)
    }
    sum = secArr.reduce(function (a, b) {
        return a + b;
    });
    arrNum.push(sum);
    return sum;
};
for (let i = 0; i < n; i++) {
    arrayLastElementThree(arrNum, n);
}

for (let item of arrNum) {
    console.log(item);
};
