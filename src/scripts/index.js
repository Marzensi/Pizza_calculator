import '../styles/index.scss';

let allCheckboxes = document.querySelectorAll('.checkmark');
let checkmarkSign = document.querySelectorAll('.checkmark-sign');
let allInputs = document.querySelectorAll(".container input");
let clearAllBtn = document.querySelector('.clear-all');
let price = document.getElementById('price');
let sum = 0;

//Select ingredient and plus/minus the price

for(let i = 1; i < allInputs.length; i++){
    allInputs[i].addEventListener('change', function(){
        if (this.checked === true) {
            allCheckboxes[i].classList.add('checkmark-color');
            checkmarkSign[i].style.opacity = "1";
            sum += Number.parseFloat(allInputs[i].dataset.price);
            price.innerHTML = sum.toFixed(2) + " zł";

        } else if (this.checked !== true) {
            allCheckboxes[0].classList.remove('checkmark-color');
            allCheckboxes[i].classList.remove('checkmark-color');
            checkmarkSign[0].style.opacity = "0";
            checkmarkSign[i].style.opacity = "0";
            sum -= Number.parseFloat(allInputs[i].dataset.price);
            price.innerHTML = sum.toFixed(2) + " zł";
            allInputs[0].checked = false;
        }
    });
}

//Select all ingredients and display the price

allInputs[0].addEventListener('change', function(){

    for(let i = 0; i < allCheckboxes.length; i++) {
        if (this.checked === true) {
            sum=0;
            allCheckboxes[i].classList.add('checkmark-color');
            checkmarkSign[i].style.opacity = "1";
            allInputs[i].checked = true;

        } else if (this.checked !== true) {
            allCheckboxes[i].classList.remove('checkmark-color');
            checkmarkSign[i].style.opacity = "0";
            allInputs[i].checked = false;
        }
    }
    for(let i = 1; i < allInputs.length; i++){
        if (this.checked === true) {
            sum += Number.parseFloat(allInputs[i].dataset.price);
            price.innerHTML = sum.toFixed(2) + " zł";
        }else if (this.checked !== true) {
            sum = 0;
            price.innerHTML = sum.toFixed(2) + " zł";
        }
    }
});

//Delete all selected ingredients and display the price

clearAllBtn.addEventListener('click', function(){
    for(let i = 0; i < allCheckboxes.length; i++) {
        if (this.checked !== true) {
            sum=0;
            allCheckboxes[i].classList.remove('checkmark-color');
            checkmarkSign[i].style.opacity = "0";
            price.innerHTML = sum.toFixed(2) + ' zł';
            allInputs[i].checked = false;
        }
    }
});




