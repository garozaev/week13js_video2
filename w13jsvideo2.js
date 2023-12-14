1.// if (условие) {действие}
/*let result = document.getElementById('test').value;
let divCheck = document.getElementById('task');
let button = document.getElementById('buttonCheck');
const check = () => {
    if (result == "") {
        divCheck.textContent = 'Заполните поле';
        console.log(divCheck);
    };
};*/

//button.addEventListener('click', check);

2.// if (условие) {действие} else {действие}
/*const compare = (a, b) => {
    if (a > b) {
        divCheck.innerHTML = a;
    }
    else {
        divCheck.innerHTML = b;
    };
};*/

3.// if (условие) {действие} else if (условие) {действие}
/*function compare (a, b) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;// else if этих может быть сколько угодно
}
    else {
        return c;
    }
} // такой вид встречается не часто*/

4.// тэнантный 
/*function checkAge (age) {
    (age >= 18) ? alert ("Всё ок"): alert ("Вход запрещён");
}// по тэнантному оператору*/

5.// оператор switch
// однотипные варианты, прим. по номеру вывести назв. дня
/*function weekDayName (number) {
    let name = '';
    switch(number) {
        case 1: name = 'Понедельник'; break;//break это ограничитель, что бы не выполнялось дальше
        case 2: name = 'Вторник'; break;
        case 3: name = 'Среда'; break;
        case 4: name = 'Четверг'; break;
        case 5: name = 'Пятница'; break;
        case 6: name = 'Субота'; break;
        case 7: name = 'Воскресенье'; break;
        default: name = 'Такого дня в неделе нет';//если номер  буде больше 7
    }
    return name;
}
weekDayName(2);//вернёт вторник*/

6.//пример
const email = document.getElementById('test_email');
const passward = document.getElementById('test_password');
const button2 = document.getElementById('buttonCheck');
const divError = document.getElementById('task');

//divError.innerHTML = '';

const check =() => {
    divError.innerHTML = '';
    if (email.value == '') {
        divError.innerHTML += 'Введите email<br>';
    };
    if (passward.value == '') {
        divError.innerHTML += 'Введите пароль<br>';
    };
    if (passward.value.length <= 5) {
        divError.innerHTML += 'Пароль короткий<br>';
    };
};
button2.addEventListener('click', check);
