function isValid(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}


// ------------------------------------------------------------------------------------
let text = '{"name": "vulcan","version": "2"}';

console.log(isValid(text));