function createUser(id, name, email, mobile) {
  console.log(id, name, email, mobile);
}

// ideal way
createUser(1, "rahul", "rahul@gmail.com", "211212");

// might make mistake :: by passing the data in wrong order
createUser("rahul", "211212", "rahul@gmail.com", 1);
