/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    
    const ret = Array.from({length: rowsCount}, () => 
        Array(colsCount).fill(0)
    )

    let row = 0;
    let col = 0;
    let dir = 1;
    for (let i = 0 ; i < this.length; ++i) {
        ret[row][col] = this[i]
        row += dir;
        if (dir === 1 && row === rowsCount) {++col; dir = -1; row = rowsCount - 1}
        if (dir === -1 && row === -1) {++col;dir = 1; row = 0; }
    }

    return ret;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */