class Calculator{
    constructor(previousOperanTextElement,currentOperanTextElement){
        this.previousOperanTextElement = previousOperanTextElement
        this.currentOperanTextElement  = currentOperanTextElement 
        this.clear()
    }

        clear(){
           this.currentOperand = ""
           this.previousOperand = ""
           this.operation = "undefined"
        }

        delete() {

        }

        appendNumber(number){

        }

        chooseOperation(operation){

        }

        compute(){

        }
        
   updateDisplay(){

}
    }



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('data-operation');
const deleteButtons = document.querySelector('data-delete');
const allClearButtonButtons = document.querySelector('data-all-clear');
const previousOperanTextElement = document.querySelector('data-previous-operand');
const currentOperanTextElement = document.querySelector('data-current-operand');
