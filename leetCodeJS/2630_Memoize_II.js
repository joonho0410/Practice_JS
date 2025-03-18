/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const mainCache = new Map();
    const resultSym = Symbol('result')

    return function(...args) {
        let currentCache = mainCache
        args.forEach((arg) => {
            if (currentCache.has(arg)) {
                currentCache = currentCache.get(arg);
                return ;
            }
            const newCache = new Map();
            currentCache.set(arg, newCache)
            currentCache = newCache;
        })

        if (currentCache.has(resultSym)) return currentCache.get(resultSym)
        const val = fn(...args)
        currentCache.set(resultSym, val)
        return val
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */