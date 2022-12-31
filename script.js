
//this keyWord inside Global  ***********************************
// this.table = 'window table';
// console.log(window.table);

// this.garage = {
//     table: 'garage table',
//     // Commented for function.
//     // cleanTable(){
//     //     console.log(`cleaning ${this.table}`)
//     // }s
// };
// console.log(this.garage.table);
// // this.garage.cleanTable();

// //this KeyWord in object ****************************************
// let john = {
//     table: 'john table'
// };
// // console.log(this.john.table); // Error.
// console.log(john.table); //because the john is the seperate variable.

// //this inside a mehtod. *******************************************
// let mainBedRoom = {
//     table: 'mainBedRoom table',
//     // Commented for function.
//     // cleanTable(){
//     //     console.log(`cleaning ${this.table}`)
//     // }
// }
// mainBedRoom.cleanTable();

//Creating function - this inside the function. **********************
// const cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap} soap.`)
// }
// cleanTable(); //Gives the window table because that exists in the window scope.

//call function to rescue
// cleanTable.call(this, 'simple');
// cleanTable.call(this.garage, 'hard');
// cleanTable.call(john, 'soft');
// cleanTable.call(mainBedRoom, 'purple');

//this inside the inner function. ************************************

//Method 1
// const cleanTable = function(soap) {
//     let that = this;
//     const innerFunction = function(soap) {
//         console.log(`cleaning ${that.table} using ${soap} soap.`)
//     }
//     innerFunction();
// }

//Method 2
// const cleanTable = function(soap) {
//     const innerFunction = function(soap) {
//         console.log(`cleaning ${this.table} using ${soap} soap.`)
//     }
//     // innerFunction.call(this, soap);
//     //also can use bind
//     innerFunction.bind(this)(soap);
// }

//Method 3

// const cleanTable = function(soap) {
//     const innerFunction = (soap) => {
//         console.log(`cleaning ${this.table} using ${soap} soap.`)
//     }
//     innerFunction.call(soap);
//also can use bind
// innerFunction.bind(this)(soap);
// }
// cleanTable.call(this, 'simple');
// cleanTable.call(this.garage, 'hard');
// cleanTable.call(john, 'soft');
// cleanTable.call(mainBedRoom, 'purple');

//this inside the constructor ****************************************

// let createRoom = function(name) {
//     this.table = `${name}'s Room`;
// }

// createRoom.prototype.cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap} soap.`)
// };
// const jillRoom = new createRoom('jill');
// const johnRoom = new createRoom('john');

// jillRoom.cleanTable('pink');
// johnRoom.cleanTable('yelllow');

//this inside the Class **********************************************

// class createRoom {
//     constructor(name) {
//         this.table = `${name}'s Table`
//     }
//     cleanTable(soap) {
//         console.log(`cleaning ${this.table} using ${soap} soap.`)
//     }
// }

// const jillRoom = new createRoom('jill');
// const johnRoom = new createRoom('john');
// // console.log(jillRoom);

// jillRoom.cleanTable('pink');
// johnRoom.cleanTable('yelllow');




class Student {
    static numStudents = 0;  // static variable to keep track of number of students

    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.numStudents++;  // increment the count of students
    }

    isEligible() {
        return this.marks > 40;
    }
}

// create 5 students with different names and ages
const student1 = new Student("Nidhi", 24, 7129387423, 70);
const student2 = new Student("Teena", 21, 8532334567, 35);
const student3 = new Student("Aarti", 25, 9673423422, 50);
const student4 = new Student("Dinky", 23, 9823456789, 30);
const student5 = new Student("Ritu", 24, 8625647890, 55);

// check if a student is eligible for college
if (student1.isEligible()) {
    console.log(`${student1.name} is eligible for college.`);
} else {
    console.log(`${student1.name} is not eligible for college.`);
}

// print the number of students created
console.log(`Number of students: ${Student.numStudents}`);
