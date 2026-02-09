function RandomSort (array) {
    
    let i = array.length;
    let index;
    let existingElementAtIndex;

    while (--i > 0) {
        index = Math.floor(Math.random() * (i +1));
        existingElementAtIndex = array[index];
        array[index] = array[i];
        array[i] = existingElementAtIndex
    }

    return array
}

export {RandomSort}