// Q1 For the given JSON iterate over all for loops (for, for in, for of, forEach)

var object = [
    { person: "Mohan", age: 2, company: "Guvi" },
    { person: "Rohan", age: 3, company: "Guvi Geeks" },
    { person: "Raju", age: 4, company: "Guvi Geek Network" },
  ];

// normal for loop
// for(i=0; i<object.length; i++){
//     console.log(`
//     Name : ${object[i].person}
//     Age : ${object[i].age}
//     Company : ${object[i].company}    
//     `);
// }

// for in
// for(let index in object){
//     console.log(`
//     Name : ${object[index].person}
//     Age : ${object[index].age}
//     Company : ${object[index].company}    
//     `);
// }

// for of
// for (let i of object) {
//     console.log(`
//     Name : ${i.person}
//     Age : ${i.age}
//     Company : ${i.company}    
//     `);
// }

// For each
// object.forEach((item) => {
//     console.log(`
//     Name : ${item.person}
//     Age : ${item.age}
//     Company : ${item.company}    
//     `);
// })

// OUTPUT:
// Name : Mohan
// Age : 2
// Company : Guvi    

// script.js:37 
// Name : Rohan
// Age : 3
// Company : Guvi Geeks    

// script.js:37 
// Name : Raju
// Age : 4
// Company : Guvi Geek Network  

// Q2 Create your own resume data in JSON format

let resume = {
    name: "Mayank",
    age: 20,
    Qualification: "Bachelor of Technology Computer Science",
    Certifications: {
        Coursera: [
            "Discrete Optimisation",
            "R programming",
            "The Data Scientist's Toolbox"
        ],
        ICT: "Machine Learning",
        EC_Council: "Certified Ethical Hacker(CEH)"
    },
    Work_Experience: {
        Duration: "6 Months",
        Company: "Intern at KPMG India"
    },
    Technical_Skills: [
        "HTML and CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "Mongo DB"
    ]
}