let list = ["Delhi", "Calcutta", "Chennai", "Mumbai"];

// A1
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

// A2
console.log("=======================");
for (let item of list) {
  console.log(item);
}

// A3
console.log("=======================");
list.forEach((item) => console.log(item));
