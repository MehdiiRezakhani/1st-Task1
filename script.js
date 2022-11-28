const mul = (A, B) => {
    if (!(Array.isArray(A) && Array.isArray(B))){
        console.log('You need to pass arrays');
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i].length !== B.length) {
            console.log('The number of columns in A needs to match the number of rows in B')
        };
    }
    for (let j = 0; j < B.length; j++) {
        if (B[j].length !== A.length) {
            console.log('The number of rows in A needs to match the number of columns in B')
        };
    }
    let result = [];
    for (let i = 0; i < A.length; i++) {
        let finalRow = [];
        for (let j = 0; j < A.length; j++) {
            let sum = 0;
            for (let k = 0; k < A[i].length; k++) {
                sum += A[i][k] * B[k][j];
            }
            finalRow.push(sum);
        }
        result.push(finalRow);
    }
    console.log(result);
}

mul(
    [[4,2], [1,5], [3,8]],
    [[4,2,1], [8,3,6]]
);