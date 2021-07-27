let list = ["delhi", "calcutta", "chennai", "mumbai"];

// BAISCS ::  size of the array.
let size = list.length;
console.log(size);

// Acces the Element from Array
let mycity = list[2];
console.log(mycity);

// Iterate all the elements of the list;
console.log("=====================");
for (let i = 0; i < list.length; i++) {
  let localCity = list[i];
  console.log(localCity);
}

// Iterate all Approach 2 :: adv. for loop.
console.log("=====================");
for (let item of list) {
  console.log(item);
}

// More to come....
// Iterate all approach 3 :: using lamda known as arrow function / fat arrow
console.log("=====================");
list.forEach((item) => console.log(item));
