// HIGHER ORDER FUNCTION
// SPECIAL
// FUNCTION IS ACCEPTIING ANOTHER FUNCTION AS A PARAMTER :: CALLBACK FUNCTION
function myfunction(callback) {
  console.log(p1, typeof p1);
}

/*myfunction();
myfunction(100);
myfunction(99.999);
myfunction("google");
myfunction({});
myfunction([]);*/

// this is spcial
myfunction(function () {});

//
// read(1, {}, function () {});
