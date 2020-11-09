String.prototype.filter = function (word) {
    return this.split(" ").filter(x => !word.includes(x)).join(" ");
};
console.log("---------------------------------------------------------");
console.log("Testing String.filter");
console.log("---------------------------------------------------------");
console.log("Executing 'This house is not very nice!'.filter(['not', 'very'])");
console.log("This house is not very nice!".filter(['not', 'very']));

Array.prototype.swap = function (first_Index, second_Index) {
    var temp = this[first_Index];
    this[first_Index] = this[second_Index];
    this[second_Index] = temp;
}

Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0, stop = len - i; j < stop; j++) {
            if (this[j] > this[j + 1]) {
                this.swap(j, j + 1);
            }
        }
    }
    return this;
}

console.log("---------------------------------------------------------");
console.log("Testing Array.bubbleSort");
console.log("---------------------------------------------------------");
console.log("Executing [6,4,0, 3,-2,1].bubbleSort()");
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

const Person = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.")
}

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
}

const Teacher = function (name, age) {
    this.name = name;
    this.age = age;
};
Teacher.prototype = new Person(this.name, this.age);
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject)
}

const Teacher2 = function (name, age) {
    this.name = name;
    this.age = age;
};

Teacher2.prototype = Object.create(Person.prototype)
Teacher2.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject)
}


console.log("---------------------------------------------------------");
console.log("Testing Person class");
console.log("---------------------------------------------------------");
console.log("Executing person_one = new Person('Maria','30')");
person_one = new Person('Maria', '30')
console.log("Executing person_one.greeting()");
person_one.greeting()
console.log("Executing person_one.salute()");
person_one.salute()
console.log("---------------------------------------------------------");
console.log("Testing Teacher class created with FUNCTION CONSTRUCTOR");
console.log("---------------------------------------------------------");
console.log("Executing teacher_one = new Teacher('Gerardo','25')");
teacher_one = new Teacher('Gerardo', '25')
console.log("Executing teacher_one.greeting()");
teacher_one.greeting()
console.log("Executing teacher_one.salute()");
teacher_one.salute()
console.log("Executing teacher_one.teach()");
teacher_one.teach("Algorithms")
console.log("---------------------------------------------------------");
console.log("Testing Teacher2 class created with FACTORY FUNCTION");
console.log("---------------------------------------------------------");
console.log("Executing teacher_two = new Teacher2('Gabriel','26')");
teacher_two = new Teacher2('Gabriel', '26')
console.log("Executing teacher_two.greeting()");
teacher_two.greeting()
console.log("Executing teacher_two.salute()");
teacher_two.salute()
console.log("Executing teacher_two.teach()");
teacher_two.teach("Math IV")



class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greeting() {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major)
    }
}

class Professor extends Person {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    greeting() {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.")
    }
}

const Student2 = function (name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
};

Student2.prototype = Object.create(Person.prototype)
Student2.prototype.greeting = function (subject) {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major)
}

const Professor2 = function (name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
};

Professor2.prototype = Object.create(Person.prototype)
Professor2.prototype.greeting = function (subject) {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.")
}

console.log("---------------------------------------------------------");
console.log("Testing Student class created with FUNCTION CONSTRUCTOR");
console.log("---------------------------------------------------------");
console.log("Executing student_one = new Student('Daniella','24','History')");
student_one = new Student('Daniella', '24', 'History')
console.log("Executing student_one.greeting()");
student_one.greeting()
console.log("Executing student_one.salute()");
student_one.salute()
console.log("---------------------------------------------------------");
console.log("Testing Student2 class created with PROTOTYPE");
console.log("---------------------------------------------------------");
console.log("Executing student_two = new Student2('Aurora','22','Physics')");
student_two = new Student2('Aurora', '22', 'Physics')
console.log("Executing student_two.greeting()");
student_two.greeting()
console.log("Executing student_two.salute()");
student_two.salute()
console.log("---------------------------------------------------------");
console.log("Testing Professor class created with FUNCTION CONSTRUCTOR");
console.log("---------------------------------------------------------");
console.log("Executing professor_one = new Professor('Keith','34','Engineering')");
professor_one = new Professor('Keith', '34', 'Engineering')
console.log("Executing professor_one.greeting()");
professor_one.greeting()
console.log("Executing professor_one.salute()");
professor_one.salute()
console.log("---------------------------------------------------------");
console.log("Testing Professor2 class created with FUNCTION CONSTRUCTOR");
console.log("---------------------------------------------------------");
console.log("Executing professor_two = new Professor2('Avenger','32','Social Sciences')");
professor_two = new Professor2('Avenger', '32', 'Social Sciences')
console.log("Executing professor_two.greeting()");
professor_two.greeting()
console.log("Executing professor_two.salute()");
professor_two.salute()
