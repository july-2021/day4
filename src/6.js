let list = ["delhi", "calcutta", "chennai", "mumbai"];
console.log(list.length, list);

// Add New City :: IN THE END :: list.push()
list.push("pune");
list.push("patna");
list.push("lucknow");
console.log(list.length, list);

// smart push :: multiple element in one stament 👍
list.push("banglore", "cuttck", "kochi");

// Add New City :: In the Begining :: unshift
list.unshift("lonavala");
list.unshift("khandala");
console.log(list.length, list);

// Smart Unshift  :: in single staement 👍
list.unshift("darjelling", "kashmir", "jaipur");
console.log(list.length, list);

// AS AN ASSIGMENT :: ADD AN ELEMENT IN BETWEEN ??
// SPLICE
