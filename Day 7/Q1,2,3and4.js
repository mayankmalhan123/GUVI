// Create a class Movie

class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(arr) {
        let result = [];
        arr.filter((movie) => {
            if(movie.rating === 'PG') {
                result.push(movie)
            }
        })
        return result;
    }
}

let movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
let movie2 = new Movie('Tenet', 'Warner Bros', 'PG');
let movie3 = new Movie('Shawshank Redemption', 'Columbia Pictures', 'R');
let movie4 = new Movie('Toy Story', 'Pixar Animation Studios', 'PG')
let moviesArr = [movie1, movie2, movie3, movie4];
console.log(movie1.getPG(moviesArr));

//Write a "circle" class 



//Write a “person” class to hold all the details.

class Person {
    constructor(name, age, qualification, location) {
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
    constructor(distance, price) {
        this.distance = distance;
        this.price = price;
    }

    getPrice(){
        return this.distance*this.price;
    }
}

let taxi1 = new Uber(2, 100);
console.log(taxi1.getPrice());
