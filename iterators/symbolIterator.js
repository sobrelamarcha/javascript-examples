// sirve para convertir una variable en iterable. Véase generator.js para ver una forma similar de hacerlo con menos código y más legible.

let pages = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() { // method is called in every iteration, to get the next value
                if (this.current <= this.last) {
                    return {
                        value: this.current++,
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
};

for (let value of pages) {
    console.log(value);
}