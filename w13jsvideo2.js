
/*let result = document.getElementById('test').value;*/
let divCheck = document.getElementById('task');
let button = document.getElementById('buttonCheck');
/*const check = () => {
    if (result == "") {
        divCheck.textContent = 'Заполните поле';
        console.log(divCheck);
    };
};*/

//button.addEventListener('click', check);


const compare = (a, b) => {
    if (a > b) {
        divCheck.innerHTML = a;
    }
    else {
        divCheck.innerHTML = b;
    };
};
const a = 5;
const b = 3;
button.addEventListener('click', compare);
