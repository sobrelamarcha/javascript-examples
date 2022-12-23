function trueFalse() {
    return new Promise((resolve, reject) => {
        const result = Math.round(Math.random() * 1); // it will be 1 or 0
        result ? resolve('True') : reject('False');
    });
}
const timesToPlay = 4;
// --------------------------------------------
// Opción 1
async function randomMessages1() {
    try {
        const whatWillBe = await trueFalse();
        console.log(whatWillBe);
    } catch (err) {
        console.log(err);
    }
}

for (let i = 0; i < timesToPlay; i++) {
    randomMessages1();
}

// --------------------------------------------
// Opción 2
async function randomMessages2() {

    const whatWillBe = await trueFalse();
    console.log(whatWillBe);

}

for (let i = 0; i < timesToPlay; i++) {
    randomMessages2().catch(data => {
        console.log(data);
    });
}

