let a = ''; //первое число
let b = ''; //второе число
let sign = ''; //знак 
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'x', '-', '+'];

const out = document.querySelector('.calc__window-symbol');  //экран

function clearAll () {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;  //ac - clear all

document.querySelector('.calc__buttons').onclick = (event) => {
  if (!event.target.classList.contains('calc__buttons-item')) return; //нажатие не на кнопку
  if (event.target.classList.contains('ac')) return; //нажатие кнопки С

  out.textContent = ''; 

  const key = event.target.textContent; //нажатие на кнопку

  if (digit.includes(key)) { //если нажата кнопка 0-9 или ,
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    }
    else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  if (action.includes(key)) { //если нажата кнопка + - / x
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  if (key === '=') { //если нажата кнопка =
    if (b === '') b = a;
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        if (b === '0') {
          out.textContent = 'Ошибка';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
}