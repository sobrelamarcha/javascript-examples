let isAuthorized = false;

function getUserByUserId(id) {
    return new Promise((resolve, reject) => {
        if (!isAuthorized) {
            //throw new Error('Unauthorized access!'); equivalente a la instrucción de abajo del reject
            reject('Unauthorized access!');
        }
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}

// --------------------------------------------------------------

getUserByUserId(1234756525)
    .then(user => console.log(user.username))
    .catch(err => console.log(`Caught by .catch ${err}`));