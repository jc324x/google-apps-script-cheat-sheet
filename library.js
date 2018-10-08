// # General

// - Array 

// -- Check Array For a Value

/**
 * Returns true if the value is in the array.
 *
 * @param {*} val
 * @param {Array} arr
 * @returns {boolean}
 */

function checkArrayForValue(arr, val) {
    return arr.indexOf(val) > -1;
}

// -- Remove Duplicates from Array

/**
 * Returns an array with no duplicate values.
 *
 * @param {Array} arr 
 * @returns {Array}
 */

function removeDuplicatesFromArray(arr) {
    var result = [];
    var check = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (check[item] !== 1) {
            check[item] = 1;
            result.push(item);
        }
    }
    return result;
}

// -- Remove Empty Elements from Array

/**
 * Returns an array with no empty elements.
 *
 * @param {*} x
 * @returns {Array}
 */

function removeEmptyElementsFromArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined || '') {
            result.push(arr[i]);
        }
    }
    return result;
}

// -- Count of Values in Array

/**
 * Returns an array of objects. 
 * Objects in the array have two properties: count and value.
 *
 * @param {Array} arr
 * @property {string} value 
 * @property {string} count 
 * @returns {Object[]}
 */

function countOfValuesInArray(arr) {
    var result = [];
    var copy = arr.slice(0);
    for (var i = 0; i < arr.length; i++) {
        var myCount = 0;
        for (var w = 0; w < copy.length; w++) {
            if (arr[i] == copy[w]) {
                myCount++;
                delete copy[w];
            }
        }
        if (myCount > 0) {
            var obj = {};
            obj.value = arr[i];
            obj.count = myCount;
            result.push(obj);
        }
    }
    return result;
}

// -- Intersect of Two Arrays

/**
 * Returns an array containing the elements found in both arrays.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {Array}
 */

function intersectOfTwoArrays(arrA, arrB) {
    var result = [];
    var a = 0;
    var b = 0;
    while (a < arrA.length && b < arrB.length) {
        if (arrA[a] < arrB[b]) {
            a++;
        } else if (arrA[a] > arrB[b]) {
            b++;
        } else {
            result.push(arrA[a]);
            a++;
            b++;
        }
    }
    return result;
}

// -- Compare Two Arrays 

/**
 * Returns true if both arrays contain the same elements in the same order.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {boolean}
 */

function compareTwoArrays(arrA, arrB) {
    if (arrA.length !== arrB.length) {
        return false;
    }

    for (var i = arrA.length; i--;) {
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}

// -- Array as Delimited String

/**
 * Returns a string of array values. 
 * Elements are separated by a delimiter and a space.
 *
 * @param {Array} arr
 * @param {string} delim
 * @returns {string}
 */

function arrayAsDelimitedString(arr, delim) {
    var result = '';
    var copy = removeDuplicatesFromArray(arr);
    for (var i = 0; i < copy.length; i++) {
        if (i < copy.length) {
            result += copy[i] + delim + ' ';
        } else if (i === copy.length) {
            result += copy[i];
        }
    }
    return result;
}

// -- Array as Modified Delimited String

/**
 * Returns a string of array values.
 * Elements are separated by a delimiter and a space, each followed by a modification.
 *
 * @param {Array} arr
 * @param {string} delim
 * @param {string} mod Modification to append to each item in the array.
 * @returns {string}
 */

function arrayAsModifiedDelimitedString(arr, delim, mod) {
    var result = '';
    var copy = removeDuplicatesFromArray(arr);
    for (var i = 0; i < copy.length; i++) {
        if (i < copy.length) {
            result += copy[i] + mod + delim + ' ';
        } else if (i === copy.length) {
            result += copy[i] + mod + delim;
        }
    }
    return result;
}

// - Two Dimensional Array

/**
 * Returns an array containing all values in a two dimensional array.
 *
 * @param {Array[]} arr
 * @returns {Array} 
 */

function flattenTwoDimensionalArray(arr) {
    var result = arr.reduce(function(a, b) {
        return a.concat(b);
    });
    return result;
}

// - Array of Objects

// -- Sort Array of Objects by Property

/**
 * Returns an array of objects sorted by a single property value.
 *
 * @param {string} prop
 * @returns {Object[]}
 */

function sortArrayOfObjects(prop) {
    var sortOrder = 1;
    if (prop[0] === '-') {
        sortOrder = -1;
        prop = prop.substr(1);
    }
    return function(a, b) {
        var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
        return result * sortOrder;
    };
}

// -- Sort Array of Objects by Properties

/**
 * Returns an array of objects sorted by multiple property values.
 * @requires sortArrayOfObjects() 
 * @param {...string}
 * @returns {Object[]}
 */

function sortArrayOfObjectsMulti() {
    var props = arguments;
    return function(obj1, obj2) {
        var i = 0,
            result = 0,
            numberOfProperties = props.length;
        while (result === 0 && i < numberOfProperties) {
            result = sortArrayOfObjects(props[i])(obj1, obj2);
            i++;
        }
        return result;
    };
}

// -- Find Object in Array of Objects

/**
 * Returns the first object in an array of objects with the key value pair.
 *
 * @param {Object[]} arrObj
 * @param {string} prop
 * @param {string} val
 * @returns {Object}
 */

function findObjectInArrayOfObjects(arrObj, prop, val) {
    for (var i = 0; i < arrObj.length; i++) {
        var obj = arrObj[i];
        for (var p in obj) {
            if (obj.hasOwnProperty(prop) && p == prop && obj[p] == val) {
                return obj;
            }
        }
    }
}

// Find Oldest or Latest Object by Timestamp value

/**
 * Returns the object with the oldest timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function oldestObjectInArrayOfObjects(arr) {
    if (arr.length >= 2) {
        var sorted = arr.sort(function(a, b) {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
        return sorted[0];
    } else {
        return arr[0];
    }
}

/**
 * Returns the object with the most recent timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function latestObjectInArrayOfObjects(arrObj) {
    if (arrObj.length >= 2) {
        var sorted = arrObj.sort(function(a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });
        return sorted[0];
    } else {
        return arrObj[0];
    }
}

// -- Filter Array of Objects by Value or Values

/**
 * Returns an array of objects containing matching objects.
 *
 * @param {Object} arrObj
 * @param {string} prop
 * @param {string || string[]} vals
 * @returns {Object[]}
 */

function filterArrayOfObjects(arrObj, prop, vals) {
    var result = [];
    if (Array.isArray(vals)) {
        for (var i = 0; i < vals.length; i++) {
            var val = vals[i];
            for (var j = 0; j < arrObj.length; j++) {
                if (arrObj[j][prop] == val) result.push(arrObj[j]);
            }
        }
    } else {
        for (var k = 0; k < arrObj.length; k++) {
            if (arrObj[k][prop] == vals) result.push(arrObj[k]);
        }
    }
    return result;
}

// -- Unify Properties for Objects in Array of Objects

/**
 * Returns an array of objects, with an additional property value added to each matching object.
 *
 * @param {Object[]} arrObj
 * @param {string[]} arr
 * @param {string} prop 
 * @returns {Object[]}
 */

function unifyPropertiesForObjectsInArrayOfObjects(arrObj, arr, prop) {
    for (var i = 0; i < arrObj.length; i++) {
        var obj = arrObj[i];
        for (var h = 0; h < arr.length; h++) {
            for (var p in obj) {
                if (obj.hasOwnProperty(p) && p == arr[h] && obj[p] !== "") {
                    obj[prop] = obj[p];
                }
            }
        }
    }
    return arrObj;
}

var arrObj_upfoiaoo = [{
        x: 123,
        a: 1
    },
    {
        y: 234,
        b: 2
    },
    {
        z: 345,
        c: 3
    },
];

// - Object

// -- Array of Object Values

/**
 * Returns an array of matching properties. 
 *
 * @param {Object} obj
 * @param {string[]} arr
 * @requires intersectOfTwoArrays() 
 * @returns {Array}
 */

function arrayOfObjectValues(obj, arr) {
    var result = [];
    var keys = intersectOfTwoArrays(Object.keys(obj), arr);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var prop in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push(obj[key]);
                break;
            }
        }
    }
    return result;
}

var obj_aoov = {
    a: 1,
    b: 2,
    c: 3
};

 */

function mergeObjs() {
    var result = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            if (src.hasOwnProperty(key)) result[key] = src[key];
        }
    }
    return result;
}

var objA_mo = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

var objB_mo = {
    c: 4,
    d: 5,
    e: 6,
    f: 7
};

// -- Check for Valid Object

/**
 * Returns true if the object has at least one property value set.
 *
 * @param obj
 * @returns {boolean}
 */

function checkForValidObject(obj) {
    return Object.keys(obj).length !== 0;
}

// - Dates and Times

// -- Formatted Date Time

/**
 * Returns a formatted date time string.
 * @returns {string}
 */

function dateTime(opt) {
    var now = new Date();
    var date = [now.getYear(), now.getMonth() + 1, now.getDate()];
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    var ampm = (time[0] < 12) ? "AM" : "PM";
    time[0] = (time[0] <= 12) ? time[0] : time[0] - 12;
    for (var j = 1; j < 3; j++) {
        if (time[j] < 10) {
            time[j] = "0" + time[j];
        }
    }
    return date.join("-") + " " + time.join(":") + " " + ampm;
}

 */

function appendDateTime(str) {
    return str += " - " + dateTime();
}

// -- Date Object from String

/**
 * Returns a new date object from a string formatted year-month-date. 
 *
 * @param {string} str
 * @returns {Date}
 */

function dateObjectFromString(str) {
    var split = str.split("-");
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return new Date(months[(split[1] - 1)] + " " + split[2] + ", " + split[0]);
}

// -- Match a Date to a Range of Dates

/**
 * Returns a value associated with a date range.
 *
 * @param {Object[]} arrObj
 * @param {string=new Date()} optDate - Date to match.
 * @property {string} start           - Starting date.
 * @property {string} end             - Ending date.
 * @property {*} value                - The value to return for a matching date.
 * @returns {*}
 */

function matchDateToRangeOfDates(arrObj, optDate) {
    var date = new Date();
    if (optDate !== undefined) {
        date = new Date(optDate);
    }
    for (i = 0; i < arrObj.length; i++) {
        var start = new Date(arrObj[i].start);
        var end = new Date(arrObj[i].end);
        if (date >= start && date <= end) {
            return arrObj[i].value;
        }
    }
}

var quarterDates = [{
        start: "08/01/2017",
        end: "10/28/2017",
        value: 1
    },
    {
        start: "11/02/2017",
        end: "01/09/2018",
        value: 2
    },
    {
        start: "01/15/2018",
        end: "03/19/2018",
        value: 3
    },
    {
        start: "03/21/2018",
        end: "06/15/2018",
        value: 4
    },
    {
        start: "06/16/2018",
        end: "08/30/2018",
        value: "summer vacation"
    }
];

// - String

// -- Check String for Substring

/**
 * Returns true if the string contains the substring.
 *
 * @param {string} val
 * @param {string} str
 * @returns {boolean}
 */

function checkStringForSubstring(val, str) {
    if (str.indexOf(val) > -1) {
        return true;
    } else {
        return false;
    }
}

// -- Convert String to Snake Case

/**
 * Returns a string in snake case.
 *
 * @param {string} str
 * @returns {string}
 */

function convertStringToSnakeCase(str) {
    return String(str).toLowerCase().replace(/ /g, '_');
}

