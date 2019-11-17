function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((prev, curr) => { return prev + curr}) + arr2.reduce((prev, curr) => { return prev + curr});
    }