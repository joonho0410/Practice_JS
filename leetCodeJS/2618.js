// https://leetcode.com/problems/check-if-object-instance-of-class/
/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') return false
    let prototype = Object.getPrototypeOf(obj)
 
    while (prototype) {
     if (prototype === classFunction.prototype) return true;
     prototype = Object.getPrototypeOf(prototype)
    }
    return false;
 };
 
 /**
  * checkIfInstanceOf(new Date(), Date); // true
  */