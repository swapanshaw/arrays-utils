
/*!
 * 
 * ArrayUtils library contains utility functions which act on arrayUtils
 * and perform operation like add, addAll, contains, map, reduce etc.
 * 
 * arrays is the global object used to access the different mthod
 * array-utils <https://github.com/swapanshaw/arrays-utils>
 * Copyright (c) 2017-2018, Swapan Shaw
 * Licensed under the MIT License.
 */

'use strict';

var arrays = arrays || {};
arrays = (function () {
    var _self = this;
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
    /**
     * isSorted return check whethe an array is sorted or not
     * @param arr input array
     * @returns true if array is already sorted else false
     */
    function isSortedAsc(arr) {
        var previous = arr[0];
        var isSorted = true;
        for(var i = 1; i < arr.length ; i++) {
            if(previous > arr[i]){
                isSorted = false;
                break;
            }
            previous = arr[i];
        }
        return isSorted;
    }
    function isSortedDesc(arr) {
        var previous = arr[0];
        var isSorted = true;
        for(var i = 1; i < arr.length ; i++) {
            if(previous < arr[i]){
                isSorted = false;
                break;
            }
            previous = arr[i];
        }
        return isSorted;
    }

    return {
        /**
         * join method help to join the element od=f the array with the separator provided as the input param
         * @param arr input array
         * @param separator , the regex character which will be used to join 
         * @returns return string
         */
        join: function (arr, separator) {
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array");
            }
            return Array.prototype.join.call(arr, separator);
            
        },
        /**
         * map method map the array element with the callbac function
         * @param arr input array
         * @param func is the callback function
         * @param return new array
         */
        map: function (arr, func) {
            if (!isArray(arr) && !isFunction(func)) {
                throw new TypeError("input is not type of array or calback function is not a type of function");
            }

            for (var i = 0; i < arr.length; i++) {
                arr[i] = func(arr[i]);
            }

            return arr;
        },
        /**
         * reduce function reduce the array into a value based on the callback function
         * @param arr is input array
         * @param memo initial value for the reduce
         * @param func callback function
         * @param startIndex start index of the element in the array from which reduce start, startIndex is inclusive
         * @param endIndex is the end index of the ement in the array upto ehich callbac function act upon, 
         * endIndex is exclusive 
         * @returns value after reducing the array 
         */
        reduce: function (arr, memo, func, startIndex, endIndex) {
        
            startIndex = startIndex === 'undefined' ? 0 : startIndex;
            endIndex = endIndex === 'undefined' ? arr.length :endIndex;
            if (!isArray(arr) && !isFunction(func)) {
                throw new TypeError("input is not type of array or calback function is not a type of function");
            }
            for (var i = startIndex; i < endIndex; i++) {
                memo = func(memo, arr[i]);
            }
            return memo;
        },
        /**
         * add method add @param value values into array @param arr
         * @param arr input array
         * @param value input value to be pushed to @param arr
         * @returns return resulter @param arr, after pushing @param value to @param arr
         * 
         */
        add: function (arr, value) {
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array");
            }

            Array.prototype.push.call(arr, value);
        },
        /**
         * addAll method add @param otherArr values into @param arr
         * @param arr input array
         * @param otherArr input array
         * @returns return resulter @param arr, which contains element of itself and from otherArr aswell
         * 
         */
        addAll: function (arr, otherArr) {
            if (!isArray(arr) && !isArray(otherArr)) {
                throw new TypeError("input is not type of array");
            }
            for (var i in otherArr) {
                Array.prototype.push.call(arr, otherArr[i]);
            }
        },

        /**
         * contains method check wether the @param value is present in the @param array
         * @param arr input array
         * @param value which is check, wether it is present in the @param arr or not
         * @returns return true if value is present in the @param arr else false
         * 
         */
        contains: function (arr, value) {
            var flag = false;
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array");
            }
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    flag = true;
                    break;
                }
            }
            return flag;
        },
        /**
         * <p>isEquals method check whether two arrays are equals or not. It basically check the 
         * content of both the array. It reurns 'true' if ane is mirror copy of another</p>
         * 
         * @param arr firsr array
         * @param otherArr another array
         * @returns 'true' if arr is mirror copy of otherArr
         */
        isEqusls: function (arr, otherArr) {
            var flag = true;
            if (!isArray(arr) && !isArray(otherArr)) {
                throw new TypeError("input is not type of array or other is not a type of arrayt");
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
         * pass 'ASC' for ascending and 'DESC' for descending, default it will check for ascending order.
         * @returns return 'true' if array is sorted else 'false'
         */
        isSorted: function (arr, type) {
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array or other is not a type of arrayt");
            }
            if(type === 'DESC'){
                return isSortedDesc(arr, type);
            }else{
                return isSortedAsc(arr, type);
            }
            
        },
        /**
         * isEmpty checks for empty and null array
         * @param input is array
         * @returns true is array is empty or null else false
         */
        isEmpty : function(arr){
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array or other is not a type of arrayt");
            }
            if(arr === 'undefined' || arr.length === 0){
                return true;
            }else{
                return false;
            }
        },
        /**
         * isNotEmpty checks for not empty and not null/undefined array
         * @param input is array
         * @returns true is array is empty or null else false
         */
        isNotEmpty : function(arr){
            if (!isArray(arr)) {
                throw new TypeError("input is not type of array or other is not a type of arrayt");
            }
            if(arr === 'undefined' || arr.length > 0){
                return true;
            }else{
                return false;
            }
        }

    }
})();

//window.arrays = arrays;

module.exports = arrays;


