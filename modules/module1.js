//module1.js

let firstName = 'Tom';
let lastName = 'Holland';

function userDetails1(user) {
    return user;
}

//exporting individual features and rename named exports
export {
    firstName,
    lastName,
    userDetails1 as currentUser
}