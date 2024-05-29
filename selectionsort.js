
// Selection sort func
function selectionSort(arr) {
    let n = arr.length;

    // Loop over the entire array
    for (let j = 0; j < n - 1; j++) {
        // Assume the minimum element is the first element of the unsorted part
        let iMin = j;

        // Find the minimum element in the unsorted part of the array
        for (let i = j + 1; i < n; i++) {
            if (arr[i] < arr[iMin]) {
                iMin = i;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (iMin !== j) {
            let temp = arr[j];
            arr[j] = arr[iMin];
            arr[iMin] = temp;
        }
        console.log(arr);
    }
}

// Example usage
let arr = [64, 25, 12, 22, 11];
console.log("Unsorted array:", arr);

selectionSort(arr);
console.log("Sorted array:", arr);
