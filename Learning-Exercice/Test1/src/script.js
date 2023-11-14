let a;
let b;
let c = 0;
let checkadd;
let checkmult;

let calc_addition = function() {
    a = Number(prompt('Premier chiffre'));
    b = Number(prompt('Second chiffre'));
    c = a+b;
    alert(c)
}

function calc_multiplication(){
    a = Number(prompt('Premier chiffre'));
    b = Number(prompt('Second chiffre'));
    c = a*b;
    alert(c)
}

function check_addition() {
    checkadd = confirm('Veux tu faire une addition')
}

function check_multiplication() {
    checkmult = confirm('Veux tu faire une multiplication')
}

//Boucle
while(true)
{
    check_addition();
    if (checkadd) {calc_addition()};

    check_multiplication()
    if (checkmult) {calc_multiplication()}
}