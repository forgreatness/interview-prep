// Reverse an array
let arr = [3, 6, 8, 2, 7, 19, 2, 9, 70, 1, 13];

reverseArray(arr);
cyclicallyRotate(arr, 5);
console.log("Reverse an array - result", arr);


/* ********************************************************* HELPER FUNCTION *****************************************************/
function reverseArray(arr = []) {
    if (!arr || arr.length < 1) {
        return;
    }

    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

function cyclicallyRotate(arr = [], rotationNum) {
    if (!arr || arr.length < 1) {
        return;
    }

    let i = 0;
    while (rotationNum-i > 0) {
        let removed = arr.shift();
        arr.push(removed);

        i++;
    }
}