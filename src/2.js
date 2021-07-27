let std1 = { id: 1, name: "rahul", email: "rahul@gmail.com" };
console.log(std1); // id:1

// clone :: very importnt from react
// let std3 = { ...std1 }; // id:1
let std3 = { ...std1, id: 2 }; // id:2

console.log(std3);
