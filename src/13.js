// Functions with Paramater Having Default Value
function sum(n1 = 0, n2 = 100) {
  let output = n1 + n2;
  return output;
}

let t1 = sum();
console.log(t1);

let t2 = sum(10);
console.log(t2);

let t3 = sum(10, 20);
console.log(t3);
