/**
 * 
 * ArrayUtils library contains utility functions which act on arrayUtils
 * and perform operation
 */

var arrays = arrays || {};
arrays = (function () {

    "use strict";
    /**
     * @param o object
     * @returns boolean true or false
     */
    function isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    /**
     * @param o object
     * @returns boolean true or false
     */
    function isFunction(o) {
        return Object.prototype.toString.call(o) === '[object Function]';
    }

    /**
     * @param o object
     * @returns boolean true or false
     */
    function isNumber(o) {
        return Object.prototype.toString.call(o) === '[object Number]';
    }

    return {
        join: function (arr, separator) {
            if (isArray(arr)) {
                return Array.prototype.join.call(arr, separator);
            } else {
                throw 'input provide is an type of error';
            }
        },

        map: function (arr, func) {
            if (!isArray(arr) && !isFunction(func)) {
                throw "input is not type of array or calback functio is not a type of function";
            }

            for (var i = 0; i < arr.length; i++) {
                arr[i] = func(arr[i]);
            }

            return arr;
        },

        reduce: function (arr, func, startIndex, endIndex) {
            var result = 1;
            if (!isArray(arr) && !isFunction(func)) {
                throw "input is not type of array or calback functio is not a type of function";
            }
            for (var i = 0; i < arr.length; i++) {
                result = func(result, arr[i]);
            }
            return result;
        },

        add: function (arr, value) {
            if (!isArray(arr)) {
                throw "input is not type of array or calback functio is not a type of function";
            }

            Array.prototype.push.call(arr, value);
        },
        addAll: function (arr, otherArr) {
            if (!isArray(arr) && !isArray(otherArr)) {
                throw "input is not type of array or other is not a type of arrayt";
            }
            for (var i in otherArr) {
                Array.prototype.push.call(arr, otherArr[i]);
            }
        },

        contains: function (arr, value) {
            var flag = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    flag = true;
                    break;
                }
            }
            return flag;
        },

        isEqusls: function (arr, otherArr) {
            var flag = true;
            if (!isArray(arr) && !isArray(otherArr)) {
                throw "input is not type of array or other is not a type of arrayt";
            }
            if (arr.length !== otherArr.length) {
                return false;
            }
            for (var i in otherArr) {
                if (arr[i] !== otherArr[i]) {
                    flag = false;
                    break;
                }
            }

            return flag;
        },

        /**
         * isSorted method checks whether the array is sorted or not
         * @param arr which is under ispection
         * @param type can be passed to check whether array is sorted in ascending or desending order
         * pass 'ASC' for ascending and 'DESC' for descending
         * @returns return 'true' if array is sorted else 'false'
         */
        isSorted: function (arr, type) {
            if (!isArray(arr)) {
                throw "input is not type of array or other is not a type of arrayt";
            }


            //checkFOrSort(arr)

        }

    }
})();


// test code
var arr = [1, 2, 3, 4];

console.log(arrays.contains(arr, 10));
console.log(arrays.join([1, 2, 3], ","));
console.log(arrays.map([1, 2, 3], function (x) {
    return x * x;
}));

console.log(arrays.reduce([1, 2, 3, 5, 6, 7], function (total, x) {
    return total * x;
}));

console.log(arrays.isEqusls(arr, arr));

