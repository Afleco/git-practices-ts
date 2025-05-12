class Calculator {
    private readonly brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    public getBrand(): string {
        return this.brand;
    }

    private add(a: number, b: number): number {
        return a + b;
    }

    private substract(a: number, b: number): number {
        return a - b;
    }

    private multiplication(a: number, b: number): number {
        return a * b;
    }

    private division(a: number, b: number): number {
        if (b === 0) {
            throw Error("No se puede dividir por 0");
        }
        return a / b;
    }

    public calculate(a: number, b: number, op: Operation) {
        if (op === 'add') {
            console.log(calculator.add(a,b));
        } else if (op === 'subtract') {
            console.log(calculator.substract(a,b));
        } else if (op === 'multiply') {
            console.log(calculator.multiplication(a,b));
        } else if (op === 'divide') {
            console.log(calculator.division(a,b));
        }
    }
        
    
}

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
const calculator: Calculator = new Calculator('Cassio');

console.log(calculator.getBrand());

// TEST IT!
console.log(calculator.calculate(1,2, 'add'));   // Expects 3
console.log(calculator.calculate(25, 3, 'subtract'));   // Expects 22! 
console.log(calculator.calculate(8, 3, 'multiply')); // Expects 24! 
console.log(calculator.calculate(10, 2, 'divide')); // Expects 5!