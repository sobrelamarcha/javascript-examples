let testObj = {
    a:1,
    b:2,
    c:3,
    d:4
}

console.log(Object.keys(testObj));
console.log(Object.entries(testObj));

// ej1
propertyNames = '';
for (let name of Object.keys(testObj)){
    propertyNames += name;
}
console.log(propertyNames);

// ej2
for (let [k,v] of Object.entries(testObj)) {
    console.log(`key ${k} - value ${v}`);
}

// ej3
for (const key in testObj){
    console.log(`key ${key} - value ${testObj[key]}`);
}