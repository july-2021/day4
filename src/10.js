// let list = [];
// let list = ["Delhi", "Calcutta", "Chennai", "Mummbai"];

// let list = [{}, {}, {}];
let list = [
  { id: 1, name: "sachin", email: "sachin@gmail.com" },
  { id: 2, name: "saurav", email: "saurav@gmail.com" },
  { id: 3, name: "rahul", email: "rahul@gmail.com" },
];

// accessing
console.log(list[2].email);

// Adding new element in the list
list.push({ id: 4, name: "laxman", email: "laxman@gmail.com" });
list.unshift({ id: 5, name: "dhoni", email: "dhoni@gmail.com" });

console.log(list);
