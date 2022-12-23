// Este ejemplo muestra cómo atrapar un error lanzado fuera de la promesa

function getUserByUserId1(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('This is not valid user id!');
    }
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}

// --------------------------------------------------------------

try {
    getUserByUserId1('AndyPeterson')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`));
} catch (e) {
    console.log(`Caught by try/catch statement: ${e}`);
}