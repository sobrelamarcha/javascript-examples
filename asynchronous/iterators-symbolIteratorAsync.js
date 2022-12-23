// Sirve para convertir una variable en iterable, con funcionamiento asíncrono.
// Véase iterators-generatorAsync.js para ver una forma similar de hacerlo con menos código y más legible.

let pages = {
    from: 1,
    to: 10,
    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() { // method is called in every iteration, to get the next value
                const result = await new Promise(resolve => {
                    setTimeout(() => resolve(this.current), 2000);
                });
                if (result <= this.last) {
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

const getResult = async () => {
    for await (let value of pages) {
        console.log(value);
    }
}

getResult();