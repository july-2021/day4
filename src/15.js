// required parameter
function createUser({ id, name, email, mobile }) {
  console.log(id, name, email, mobile);
}

// this will cause an error
// createUser();

createUser({});
createUser({ name: "rahul" });
createUser({ name: "rahul", mobile: "212121" });

createUser({
  name: "rahul",
  mobile: "12121212",
  id: 1,
  email: "adsfadfas@adsfadsf",
});
