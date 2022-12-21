const repeatW = () => {

    const myString = 'w';
    const result = myString.repeat(3);
    console.log(result); 

}

const getInfo = (firstname, lastname) => {

    const cleanFirstname=firstname.trim()
    const cleanLastname=lastname.trim()
    const fullName = cleanFirstname.concat(cleanLastname)

    const alias = fullName.slice(0,3)
    const grupo = alias.charAt(0).toUpperCase()


    const star = String.fromCodePoint(9733);
    const stars = star.repeat(80)
    const info1 = `el usuario ${fullName} tiene de alias ${alias} y pertenece al grupo ${grupo}`.padStart(80, '-')
    const info2 = `final de impresión`.padStart(80, '-')


    console.log(stars);
    console.log(info1);
    console.log(info2);
    console.log(stars);

}

// -------------------------------------------------------------------------------------------------------------

// repeatW()

getInfo(' andy ', 'garcía ')
