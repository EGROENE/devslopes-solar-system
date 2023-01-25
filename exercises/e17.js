export function minBy(array, cb) {
    if (array.length === 0) {
        return undefined;
    }
    let min = array[0];
    for (let elem of array) {
        if (cb(elem) < cb(min)) {
            min = elem;
        }
    }
    return min;
}

export function maxBy(array, cb) {
    if (array.length === 0) {
        return undefined;
    }
    let max = array[0];
    for (let elem of array) {
        if (cb(elem) > cb(max)) {
            max = elem;
        }
    }
    return max;
}
