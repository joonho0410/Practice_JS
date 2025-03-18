/**
 * @param {Array} arr
 * @return {Generator}
 */

var inorderTraversal = function*(arr) {
    const flat_ary = arr.flat(Infinity)
    let idx = 0;
    
    while (idx < flat_ary.length) {
        yield flat_ary[idx++]
    } 
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */