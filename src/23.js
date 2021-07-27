// INPUT ::  [1, 2, 3, 4, 5]
// OUTPUT :: [1, 4, 9, 16, 25]
let list = [1, 2, 3, 4, 5];

let output = [];
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  let modifiedItem = item * item;
  output[i] = modifiedItem;
}

console.log(output);
