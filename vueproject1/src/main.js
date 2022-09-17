'use strict';

function solveEquation() {
    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];

    if (D < 0) {
        alert(roots);
    } else if (D === 0) {
        roots[0] = -b / (2 * a);
        alert(roots);
    } else {
        roots[0] = (-b + Math.sqrt(D)) / (2 * a);
        roots[1] = (-b - Math.sqrt(D)) / (2 * a);
        alert(roots);
    }
}

let a = Number(prompt('Введите число a'));
let b = Number(prompt('Введите число b'));
let c = Number(prompt('Введите число c'));

solveEquation();