// JavaScript closure
function outerFun() {
    let x = 10;

    function innerFun() {
        let y = 20;
        console.log(x + y);
    }
    return innerFun;
}

// ------------------

let firstOuter = outerFun(); //first invocation
let secondOuter = outerFun(); //second invocation

firstOuter();
firstOuter();
firstOuter();