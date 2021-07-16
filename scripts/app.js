let bill = document.querySelector('#bill')
let people = document.querySelector('#people')
let custom = document.querySelector('#custom')
let custom_div = document.querySelector('#custom_div')
let reset = document.querySelector('#reset')
let tipamount = document.querySelector('#tipamount')
let total = document.querySelector('#total')
let percent_btns = document.querySelectorAll('.percent')
let billgroup = document.querySelectorAll('.input')[0]
let peoplegroup = document.querySelectorAll('.input')[1]
let billwarning_message = document.querySelectorAll('.warning')[0]
let peoplewarning_message = document.querySelectorAll('.warning')[1]
let card = document.querySelector('.card')

billgroup.classList.add('successborder')
billgroup.classList.add('warnborder')
peoplegroup.classList.add('successborder')
peoplegroup.classList.add('warnborder')
custom_div.classList.add('successborder')
custom_div.classList.add('warnborder')

let billSuccess = billgroup.classList.toggle('successborder')
let billWarning = billgroup.classList.toggle('warnborder')
let peopleSuccess = peoplegroup.classList.toggle('successborder')
let peopleWarning = peoplegroup.classList.toggle('warnborder')
let customSuccess = custom_div.classList.toggle('successborder')
let customWarning = custom_div.classList.toggle('warnborder')

function removeSigns() {
    if (billSuccess) {
        billSuccess = billgroup.classList.toggle('successborder');
    }
    if (peopleSuccess) {
        peopleSuccess = peoplegroup.classList.toggle('successborder');
    }

    if(customSuccess) {
        customSuccess = custom_div.classList.toggle('successborder')
    }
    if(bill.value.length == 0 && billWarning) {
        billWarning = billgroup.classList.toggle('warnborder');
        billwarning_message.style.display = 'none';
    }
    if(people.value.length ==0 && peopleWarning){
        peopleWarning = peoplegroup.classList.toggle('warnborder');
        peoplewarning_message.style.display = 'none';
    }
    if(custom.value.length ==0 && customWarning){
        customWarning = custom_div.classList.toggle('warnborder');
    }
}

function updateTip(event) {
    custom.value =""
    let percent = this.innerText
    percent = Number.parseFloat(percent.slice(0, -1)) / 100
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)
    if (billValue && persons) {
        if (billValue > 0 && persons > 0) {
            let tip = percent * billValue;
            tipamount.innerHTML = `$${(tip / persons).toFixed(2)}`
        }
    }
}

function customTip(event) {
    let percent = custom.value;
    percent = Number.parseFloat(percent) / 100
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)
    
    if (billValue && persons) {
        if (billValue > 0 && persons > 0) {
            let tip = percent * billValue;
            tip = tip / persons;
            if (tip) {
                tipamount.innerHTML = `$${(tip).toFixed(2)}`
            } else {
                tipamount.innerHTML = `$0.00`
            }
        }
    }
}

function updateBill(event) {
    let billValue = Number.parseFloat(bill.value)
    let persons = Number.parseFloat(people.value)

    if (billValue && persons) {
        if (billValue > 0 && persons > 0) {
            let perperson = billValue / persons;
            total.innerHTML = `$${perperson.toFixed(2)}`
            customTip();
        }

    }
}

function resetAll() {
    bill.value = "";
    people.value = "";
    tipamount.innerHTML = `$0.00`
    custom.value = "";
    total.innerHTML = "$0.00";
    billwarning_message.style.display = "none";
    peoplewarning_message.style.display = "none"
    removeSigns();
}

for (let btn of percent_btns) {
    btn.addEventListener('click', updateTip)
}

function billSigns() {

    let billValue = Number.parseFloat(bill.value)
    
    if (bill.value.length > 0) {
        if (billValue) {
            
            if (billValue > 0) {
                // flag sucess
                billwarning_message.style.display = "none"
                if (!billSuccess) {
                    billSuccess = billgroup.classList.toggle('successborder');
                }
                if (billWarning) {
                    billWarning = billgroup.classList.toggle('warnborder');
                }
            }  else if (billValue < 0) {
                // flag error
                billwarning_message.innerHTML="can't be negative"
                billwarning_message.style.display = "inline"
                if (billSuccess) {
                    billSuccess = billgroup.classList.toggle('successborder');
                }
                if (!billWarning) {
                    billWarning = billgroup.classList.toggle('warnborder');
                }
            }
        } else {
            // flag error
            billwarning_message.innerHTML="not a valid number"
            billwarning_message.style.display = "inline"
            if (billSuccess) {
                billSuccess = billgroup.classList.toggle('successborder');
            }
            if (!billWarning) {
                billWarning = billgroup.classList.toggle('warnborder');
            }
        }
    }else{
        billwarning_message.style.display = "none"
        if (billSuccess) {
            billSuccess = billgroup.classList.toggle('successborder');
        }
        if (billWarning) {
            billWarning = billgroup.classList.toggle('warnborder');
        }
    }
}
function peopleSigns(){
    let peopleValue = Number.parseFloat(people.value)
    if (people.value.length > 0) {
        if (peopleValue) {
            if (peopleValue > 0) {
                // flag sucess
                peoplewarning_message.style.display = 'none';
                if (!peopleSuccess) {
                    peopleSuccess = peoplegroup.classList.toggle('successborder');
                }
                if (peopleWarning) {
                    peopleWarning = peoplegroup.classList.toggle('warnborder');
                }
            }  else if (peopleValue < 0) {
                // flag error
                peoplewarning_message.innerHTML="can't be negative"
                peoplewarning_message.style.display="inline"
                if (peopleSuccess) {
                    peopleSuccess = peoplegroup.classList.toggle('successborder');
                }
                if (!peopleWarning) {
                    peopleWarning = peoplegroup.classList.toggle('warnborder');
                }
            }
        } else {
            // flag error

            peoplewarning_message.innerHTML="not a number"
            peoplewarning_message.style.display="inline"
            if (peopleSuccess) {
                peopleSuccess = peoplegroup.classList.toggle('successborder');
            }
            if (!peopleWarning) {
                peopleWarning = peoplegroup.classList.toggle('warnborder');
            }
        }
    }else{
        peoplewarning_message.style.display="inline"
        if (peopleSuccess) {
            peopleSuccess = peoplegroup.classList.toggle('successborder');
        }
        if (peopleWarning) {
            peopleWarning = peoplegroup.classList.toggle('warnborder');
        }
    }
}

function customSigns(){
    let customValue = Number.parseFloat(custom.value)
    if (custom.value.length > 0) {
        if (customValue) {
            if (customValue > 0) {
                // flag sucess
                
                if (!customSuccess) {
                    customSuccess = custom_div.classList.toggle('successborder');
                }
                if (customWarning) {
                    customWarning = custom_div.classList.toggle('warnborder');
                }
            } else if (customValue == 0) {
                // flag error
                
                if (!customWarning) {
                    customWarning = custom_div.classList.toggle('warnborder');
                }
                if (customSuccess) {
                    customSuccess = custom_div.classList.toggle('successborder');
                }
            } else if (customValue < 0) {
                // flag error
                
                if (customSuccess) {
                    customSuccess = custom_div.classList.toggle('successborder');
                }
                if (!customWarning) {
                    customWarning = custom_div.classList.toggle('warnborder');
                }
            }
        } else {
            // flag error
        
            if (customSuccess) {
                customSuccess = custom_div.classList.toggle('successborder');
            }
            if (!customWarning) {
                customWarning = custom_div.classList.toggle('warnborder');
            }
        }
    }
}
bill.addEventListener('keyup', updateBill)
bill.addEventListener('keyup', billSigns)
people.addEventListener('keyup', updateBill)
people.addEventListener('keyup', peopleSigns)
custom.addEventListener('keyup', customTip);
custom.addEventListener('keyup',customSigns)
reset.addEventListener('click', resetAll);
card.addEventListener('click', removeSigns);

updateBill();
removeSigns();

// warning signs
// 1. when alphabets are entered
// 2. non-positive integers are entered

// success signs
// 1. non-negative integers are entered
// when clicked on card, success signs should go off
