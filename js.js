debugger
function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    
    if (degree < 0) {
        return 1 / (num * pow(num, -degree - 1));
    }

    return num * pow(num, degree - 1);
}

const userNum = prompt('Введіть число');
const userDegree = prompt('Введіть ступінь');

if (userNum === null || userDegree === null) {
    alert('Goodbye!');
} else if (userNum.trim() === '' || userDegree.trim() === '') {
    alert('Помилка: будь ласка, введіть числа');
} else {
    const num = +userNum;
    const degreeNum = +userDegree;

    if (!Number.isInteger(degreeNum)) {
        alert('Некоректне введення. Будь ласка, введіть числові значення і цілу ступінь.');
    } else {
        const result = pow(num, degreeNum);
        alert(`${num} в ступені ${degreeNum} = ${result}`);
    }
}