let std1 = { id: 1, name: "rahul", email: "rahul@gmail.com" };
console.log(std1);

// duplicate reference variable :: this line is not creating new object.
let std2 = std1;

// clone :: very importnt from react
// let std3 = { id: 1, name: "rahul", email: "rahul@gmail.com" };
let std3 = { ...std1 };

console.log(std3);
