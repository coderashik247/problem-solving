const duplicateElement = (arr) => {
    const removeDuplicate = new Set();
    const duplicateValues = [];

    for (let i = 0; i < arr.length; i++) {
        if (removeDuplicate.has(arr[i])) {
            duplicateValues.push(arr[i]);
        } else {
            removeDuplicate.add(arr[i]);
        }
    }

    return duplicateValues;
};


console.log(duplicateElement([1, 3, 5, 3, 7, 1]));