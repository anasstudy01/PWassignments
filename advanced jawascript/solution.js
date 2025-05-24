// questions :
// Problem 1

// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
// a method sayHello to greet the person.

answer1:
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Usage:
const person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.

// Problem 2
// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
// property designation and a method getDetails to display the employee details.
// solution 2: 
function Employee(name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;

    this.getDetails = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Usage:
const emp1 = new Employee("Alice", 25, "Developer");
emp1.sayHello(); // Inherited from Person
emp1.getDetails(); // Output: Name: Alice, Age: 25, Designation: Developer



// Problem 3

// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.
// solution 3:
const Calculator = {
    value: 0,

    add: function (num) {
        this.value += num;
        return this;
    },

    subtract: function (num) {
        this.value -= num;
        return this;
    },

    multiply: function (num) {
        this.value *= num;
        return this;
    },

    divide: function (num) {
        this.value /= num;
        return this;
    },

    getResult: function () {
        return this.value;
    }
};

// Usage:
const result = Calculator.add(5).multiply(3).subtract(2).divide(2).getResult();
console.log(result); // Output: ((5 * 3) - 2) / 2 = 6.5

// Problem 4

// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.

// solution 4: 

class Shape {
    draw() {
        console.log("Drawing a generic shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

// Usage demonstrating polymorphism:
const shapes = [new Shape(), new Circle(), new Rectangle()];
shapes.forEach(shape => shape.draw());
/*
Output:
Drawing a generic shape
Drawing a circle
Drawing a rectangle
*/
// Problem 5
// Create a simple polyfill for the Array.includes method by the name of customIncludes.


answer5:
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement, fromIndex = 0) {
        // Handle negative fromIndex
        const startIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

        for (let i = startIndex; i < this.length; i++) {
            // Check for NaN (since NaN !== NaN)
            if (typeof searchElement === 'number' && isNaN(searchElement)) {
                if (typeof this[i] === 'number' && isNaN(this[i])) {
                    return true;
                }
            }
            // Normal comparison
            if (this[i] === searchElement) {
                return true;
            }
        }
        return false;
    };
}

// Usage:
const arr = [1, 2, 3, NaN];
console.log(arr.customIncludes(2)); // true
console.log(arr.customIncludes(4)); // false
console.log(arr.customIncludes(NaN)); // true
console.log(arr.customIncludes(2, 2)); // false (starts searching from index 2)





