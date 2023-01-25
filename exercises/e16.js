// see e16.md

export function find(array, callback) {
    let returnArray = [];
    for (let element of array) {
        if (callback(element)) {
        returnArray.push(element);
        }
    }
    return returnArray[0];
}