/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    const dp = [0, 1]
    let level = 0;
    
    while (1) {
        if (level >= 2) dp.push(dp[level - 1] + dp[level - 2])
        yield dp[level++];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */