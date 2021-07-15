// id=bill input
// id=people input
// class=percent button
// id=custom input
// id=reset button
// id=tipamount label
// id=total label
let bill = document.querySelector('#bill')
let people = document.querySelector('#people')
let custom = document.querySelector('#custom')
let reset = document.querySelector('#reset')
let tipamount = document.querySelector('#tipamount')
let total = document.querySelector('#total')
let percent_btns = document.querySelectorAll('.percent')
let billgroup = document.querySelectorAll('.input')[0]
let peoplegroup = document.querySelectorAll('.input')[1]
let billwarning_message = document.querySelectorAll('.warning')[0]
let peoplewarning_message = document.querySelectorAll('.warning')[1]
billgroup.classList.add('successborder')
billgroup.classList.add('warnborder')
peoplegroup.classList.add('successborder')
peoplegroup.classList.add('warnborder')

let billSuccess = billgroup.classList.toggle('successborder')
let billWarning = billgroup.classList.toggle('warnborder')
let peopleSuccess = peoplegroup.classList.toggle('successborder')
let peopleWarning = peoplegroup.classList.toggle('warnborder')

function updateTip(event){
    let percent = this.innerText
    percent = Number.parseFloat(percent.slice(0,-1)) / 100
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)
    if (billValue && persons) {
        if(billValue > 0 && persons > 0) {
            let tip = percent * billValue;
            tipamount.innerHTML = `$${(tip/persons).toFixed(2)}`
        }
    }
}

function customTip(event){
    let percent = custom.value;
    percent = Number.parseFloat(percent) / 100
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)
    tipamount.innerHTML = `$0.0`
    if (billValue && persons) {
        if(billValue > 0 && persons > 0) {
            let tip = percent * billValue;
            tip = tip/persons;
            if(tip){
                tipamount.innerHTML = `$${(tip).toFixed(2)}`
            }else{
                tipamount.innerHTML = `$0.0`
            }
        }
    }
}

function updateBill(event) {
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)

    if (billValue && persons) {
        if(billValue > 0 && persons > 0) {
            let perperson = billValue / persons;
            total.innerHTML = `$${perperson.toFixed(2)}`            
            customTip();
        }

    }
}

function resetAll() {
    bill.value = "";
    people.value = "";
    tipamount.innerHTML = `$0.0`
    custom.value = "";
    total.innerHTML = "";
}

for(let btn of percent_btns){
    btn.addEventListener('click', updateTip)
}
bill.addEventListener('keyup', updateBill)
people.addEventListener('keyup', updateBill)
custom.addEventListener('keyup',customTip);
reset.addEventListener('click', resetAll)
updateBill();

// warning signs
// 1. when alphabets are entered
// 2. non-positive integers are entered

// success signs
// 1. non-negative integers are entered
// when clicked on card, success signs should go off