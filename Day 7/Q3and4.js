//Write a “person” class to hold all the details.

class Person {
    Constructor(name, age, qualification, location) {
        this.name = name;
        this.age = age;
        this.qualification = qualification;
        this.location = location;
    }
    getDetails() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Qualification: ${this.qualification}
        Location: ${this.location}`
    }
}

let mayank = new Person('Mayank Malhan', 21, 'Bachelor of Technology Computer Science', 'Dubai')

console.log(mayank.getDetails());


//write a class to calculate uber price.

class Uber {
    Constructor(distance, price) {
        this.distance = distance;
        this.price = price;
    }

    getPrice(){
        return this.distance*this.price;
    }
}

let taxi1 = new Uber(2, 100);
console.log(taxi1.getPrice());
