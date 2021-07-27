// clone the object
let std1 = { id: 1, name: "rahul" };
let std2 = { ...std1, id: 2 };

// clone the list
let list1 = ["delhi", "calcutta", "chennai", "mumbai"];
let list2 = [...list1];
let list3 = [...list1, "pune"];
let list4 = ["pune", ...list1];

console.log(list1, list2, list3);
