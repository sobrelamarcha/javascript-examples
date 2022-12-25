//arrow functions and arrays
const carBrands = ["Saab", "Volvo", "BMW"];

console.log('Printing only the elements of the array');
carBrands.forEach(element => {
    console.log(element);
});

console.log('Printing the elements of the array and its index positions');
carBrands.forEach((element,index) => {
    console.log(element , index);
});

console.log('Printing the elements of the array, its index positions and the entire array');
carBrands.forEach((element,index,array) => {
    console.log(element , index, array);
});