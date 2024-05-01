function convertNullableValues(obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            obj[key] = 0;
        } else if (obj[key] === undefined) {
            obj[key] = '';
        }
    }
    return obj;
}


let myObject = {
    a: null,
    b: undefined,
    c: 1,
    d: 'test'
};

console.log(convertNullableValues(myObject));
// Output will be: { a: 0, b: '', c: 1, d: 'test' }
