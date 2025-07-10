import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    output;
    firstNumber;
    secondNumber;
    result;

    inpChangehandeler(event) {
        const label = event.target.label;
        if (label === 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (label === 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    handleAdd() {
        this.output = 'Addition';
        if (isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            alert('Please enter a valid number');
            return;
        }
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = 'Result of ' + firstNum + ' and ' + secondNum + ' is: ' + (firstNum + secondNum);
    }

    handleSubtract() {
        this.output = 'Subtraction';
        if (isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            alert('Please enter a valid number');
            return;
        }
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = 'Result of ' + firstNum + ' and ' + secondNum + ' is: ' + (firstNum - secondNum);
    }

    handleMultiply() {
        this.output = 'Multiplication';
        if (isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            alert('Please enter a valid number');
            return;
        }
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = 'Result of ' + firstNum + ' and ' + secondNum + ' is: ' + (firstNum * secondNum);
    }

    handleDivide() {
        this.output = 'Division';
        if (isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            alert('Please enter a valid number');
            return;
        }
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        if (secondNum === 0) {
            this.result = 'Cannot divide by zero';
        } else {
            this.result = 'Result of ' + firstNum + ' and ' + secondNum + ' is: ' + (firstNum / secondNum);
        }
    }
}
