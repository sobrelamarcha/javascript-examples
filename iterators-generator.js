// Sirve para convertir una variable en iterable.
// Similar a iterators-symbolIterator.js pero esta forma es más fácil de leer y tiene menos código

let pages = {
    from: 1,
    to: 10,

    [Symbol.iterator]: function* () {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
};

for (let value of pages) {
    console.log(value); //1, 2, 3 … 10
}