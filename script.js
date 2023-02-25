var input = [0];
var newNum = true

function press(num) {
    if (newNum) {
        display.innerText = ""
    }
    newNum = false;
    display.innerText += num;
}

function clr() {
    display.innerText = 0
    input = [0];
    newNum = true;
}

function setOP(operator) {
    if (newNum == false) {
        input.push(Number(display.innerText));
        input.push(operator);
        console.log(input)
        newNum = true;
    }
    else {
        input.pop();
        input.push(operator);
        console.log(input)
        newNum = true;
    }
}

function calculate() {
    input.push(display.innerText)
    var total = Number(eval(input.join('')));
    console.log(total)
    display.innerText = total;
    input = [0];
}
