// async generators
// sirve para convertir una variable en iterable esta vez de forma asíncrona. Similar a symbolIteratorAsync.js pero esta vez con menos código y más fácil de leer

let pages = {
    from: 1,
    to: 10,

    [Symbol.asyncIterator]: async function* () {
        for (let i = this.from; i <=this.to; i++) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            yield i;
        }

    }
}

const getResult = async () => {
    for await(let value of pages) {
        console.log(value);
    }
}

getResult();