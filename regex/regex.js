const basicTest = () => {

    console.log('prueba 1:');

    const myString = `hola esto es una prueba de abc's`
    // const regex = new RegExp('abc') // método 1 para hacerlo a través del constructor
    const regex = /abc/ // método 2 de forma literal
    const result = regex.test(myString)
    
    console.log(result)

}

const matchTag = () => {

    console.log('prueba 2:');

    const myString = '<h1>';
    const regex = /<(.+)>/;
    const result = myString.match(regex);

    console.log(result);
    
}

const matchTagAndProperty = () => {

    console.log('prueba 3:');

    const myString = '<h1 class="headingOne">';
    const regex = /<(([a-z/d{1}]+)\s*([^>]+))>/;
    const result = myString.match(regex);

    console.log(result);
    
}

const matchTextWithEqualQuotes = () => {

    console.log('prueba 4:');

    const myString = '"texto"';
    const regex = /(['"]).[^'"]*\1/; // deseamos capturar solo si el inicio y el final son el mismo tipo de comillas. Para ello se hace un primer grupo para saber si es " o ' y finalmente se usa el resultado del grupo capturado ya que se desea capturar si el inicio y el final son el mismo tipo de comillas
    const result = myString.match(regex);

    console.log(result);
    
}

const matchDate = () => {

    console.log('prueba 5:');

    const myString = '29-09-2022';
    const regex = /(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})/;
    const result = myString.match(regex);    
    const groups = result.groups

    console.log('The Year Is: ' + groups.year); // 2022
    console.log('The Month Is: ' + groups.month); // 09
    console.log('The Day Is: ' + groups.day); // 2022

    
}

const matchAllDates = () => {

    const myString = "29-09-2022 19-11-2023";
    const regex = /(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})/g;
    const result = myString.matchAll(regex);
    for(let groups of result){
        let {year, month, day} = groups.groups;
        console.log(`The Year Is: ${year}`);
        console.log(`The Month Is: ${month}`);
        console.log(`The Day Is: ${day}`);
    }

}

const replaceYears = () => {

    const myString = 'Yo nací en 1978. ¿Hay alguien más que nació en 1978?'
    const regex = /\d{4}/g
    const result = myString.replace(regex, '1980')

    console.log(result);
}





/* ----------------------- */

// basicTest()
// matchTag()
// matchTagAndProperty()
// matchTextWithEqualQuotes()
// matchDate()
// matchAllDates()
replaceYears()



