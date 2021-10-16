const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let value = document.getElementById('value')
let number = 0;

const setValue = () => {
    value.innerHTML = number;
    console.log(number);

    if (number < 0) {
        value.style.color = '#ff0000';
    }
    else if (number == 0) {
        value.style.color = '#333';
    }
    else {
        value.style.color = '#00aa00';
    }
}

increase.addEventListener('click', function () {
    number++;
    setValue();
})

decrease.addEventListener('click', function () {
    number--;
    setValue();
})
reset.addEventListener('click', () => {
    number = 0;
    setValue();
})


