FLAG: "Copy a File to Folder" -> "Copy File to Folder"
Logger.log('Start');
function test() {}

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

// -- Find Oldest Object in Array of Objects

/**
 * Returns the object with the oldest timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function findOldestObjectInArrayOfObjects(arr) {
    if (arr.length >= 2) {
        var sorted = arr.sort(function(a, b) {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
        return sorted[0];
    } else {
        return arr[0];
    }
}

// -- Find Latest Object in Array of Objects

/**
 * Returns the object with the most recent timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function findLatestObjectInArrayOfObjects(arrObj) {
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

// Merge Objects

/**
 * Returns a single object with the values of multiple objects.
 * @param {...Object}
 * @returns {Object}
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

// Append Date Time

/**
 * appendDateTime
 *
 * @requires dateTime() 
 * @param {string} str
 * @returns {string}
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

// Drive

// - Utility Functions for Drive

// -- Validate Path String

/**
 * Returns a string with leading or trailing forward slashes '/' removed.
 *
 * @param {string} path
 * @returns {string}
 */

function validatePathString(path) {
    if ((path.charAt(0)) === "/") {
        path = path.substr(1);
    }
    if ((path.charAt(path.length - 1) === "/")) {
        path = path.slice(0, -1);
    }
    return path;
}

// -- Get Basename 

/**
 * Returns the basename from the end of a path.
 *
 * @param {string} path
 * @returns {string}
 */

function getBasename(path) {
    path = validatePathString(path);
    var split = path.split("/");
    return split.pop();
}

// -- Get Inverse Basename

/**
 * Returns a path, minus the basename.
 *
 * @param {string} path
 * @returns {string}
 */

function getInverseBasename(path) {
    path = validatePathString(path);
    var split = path.split("/");
    split.pop();
    return split.join("/");
}

// -- Validate MIME Type

/**
 * Returns a full MIME type from a short or full MIME type..
 * @param {string} val
 * @returns {string || boolean}
 */

function validateMIME(val) {
    val = val.toLowerCase();
    var prefix = "application/vnd.google-apps.";
    var mimes = [
        "audio", "document", "drawing",
        "drive-sdk", "file", "folder",
        "form", "fusiontable", "map",
        "photo", "presentation", "script",
        "site", "spreadsheet", "unknown", "video"
    ];
    for (var i = 0; i < mimes.length; i++) {
        var mime = mimes[i];
        if (val === prefix.concat(mime)) {
            return val;
        }
    }
    if (checkArrayForValue(mimes, val)) {
        return prefix.concat(val);
    } else {
        return false;
    }
}

// -- Match MIME Type

/**
 * Returns true if the file's MIME type matches the given MIME type.
 *
 * @param {File} file
 * @param {string} mime - short form mime notation (ex. "doc" or "spreadsheet")
 * @returns {boolean}
 */

function matchMIMEType(file, mime) {
    mime = validateMIME(mime);
    var type = file.getMimeType();
    if (type == mime) {
        return true;
    } else {
        return false;
    }
}

// - Folders

// -- Array of Folders 

// --- Array of Folders at Root

/**
 * Returns an array of all folders found at root.
 * The array contains folder objects, not folder names.
 *
 * @returns {Folder[]}
 */

function arrayOfFoldersAtRoot() {
    var result = [];
    var fi = DriveApp.getRootFolder().getFolders();
    while (fi.hasNext()) {
        var fldr = fi.next();
        result.push(fldr);
    }
    return result;
}

// --- Array of Folders in Folder 

/**
 * Returns an array of all folders found in a folder.
 * The array contains folder objects, not folder names.
 *
 * @param {Folder} fldr
 * @returns {Folder[]}
 */

function arrayOfFoldersInFolder(fldr) {
    var result = [];
    var fi = fldr.getFolders();
    while (fi.hasNext()) {
        var _fldr = fi.next();
        result.push(_fldr);
    }
    return result;
}

// --- Array of Folders at Path

/**
 * Returns an array of all folders found at the end of a folder path.
 * The array contains folder objects, not folder names.
 *
 * @param {string} path
 * @requires validatePathString() 
 * @requires findFolderAtPath() 
 * @requires getBasename()*
 * @requires arrayOfFoldersInFolder() 
 * @returns {Folder[]}
 */

function arrayOfFoldersAtPath(path) {
    path = validatePathString(path);
    var result = [];
    var fldr = findFolderAtPath(path);
    if (fldr) {
        return arrayOfFoldersInFolder(fldr);
    } else {
        return false;
    }
}

// --- Array of All Folders in Drive

/**
 * Returns an array of all folders in Drive.
 * The array contains folder objects, not folder names.
 *
 * @returns {Folder[]}
 */

function arrayOfFoldersInDrive() {
    var result = [];
    var fi = DriveApp.getFolders();
    while (fi.hasNext()) {
        var fldr = fi.next();
        result.push(fldr);
    }
    return result;
}

// -- Array of Folder Names

/**
 * Returns an array of folder names given an array of folders.
 *
 * @param {Folders[]}
 * @returns {string[]}
 */

function arrayOfFolderNames(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].getName();
        result.push(name);
    }
    return result;
}

// -- Find a Folder

// --- Find Folder at Root

/**
 * Returns a folder from root.
 * Returns false if the folder doesn't exist.
 *
 * @param {string} name
 * @requires arrayOfFoldersAtRoot()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @returns {Folder}
 */

function findFolderAtRoot(name) {
    var fldrs = arrayOfFoldersAtRoot();
    var names = arrayOfFolderNames(fldrs);
    if (checkArrayForValue(names, name)) {
        return DriveApp.getRootFolder().getFoldersByName(name).next();
    } else {
        return false;
    }
}

// --- Find Folder in Folder

/**
 * Returns a folder from a folder.
 * Returns false if either folder doesn't exist.
 *
 * @requires arrayOfFoldersInFolder() 
 * @requires arrayOfFolderNames() 
 * @requires checkArrayForValue()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Folder}
 */

function findFolderInFolder(name, fldr) {
    var fldrs = arrayOfFoldersInFolder(fldr);
    var names = arrayOfFolderNames(fldrs);
    if (checkArrayForValue(names, name)) {
        return fldr.getFoldersByName(name).next();
    } else {
        return false;
    }
}

// -- Find Folder at Path

/**
 * Returns the folder found at the given path.
 * Returns false if the path is invalid or if the folder doesn't exist.
 *
 * @param path
 * @requires validatePathString() 
 * @requires getBasename() 
 * @returns {Folder}
 */

function findFolderAtPath(path) {
    path = validatePathString(path);
    var fi, fldr;
    var split = path.split("/");

    for (i = 0; i < split.length; i++) {
        if (i === 0) {
            fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
            if (fi.hasNext()) {
                fldr = fi.next();
            } else {
                return false;
            }
        } else if (i >= 1) {
            fi = fldr.getFoldersByName(split[i]);
            if (fi.hasNext()) {
                fldr = fi.next();
            } else {
                return false;
            }
        }
    }

    var target = getBasename(path);
    if (fldr.getName() === target) {
        return fldr;
    } else {
        return false;
    }
}

// --- Find a Folder in Drive

/**
 * Returns the first matching folder in Drive or false if no folder is found.
 *
 * @param {string} name
 * @returns {Folder}
 */

function findFolderInDrive(name) {
    var fi = DriveApp.getFoldersByName(name);
    while (fi.hasNext()) {
        return fi.next();
    }
    return false;
}

// -- Check for a Folder

// --- Check for a Folder at Root

/**
 * Returns true if the folder is found. 
 *
 * @param {string} name
 * @requires findFolderAtRoot() 
 * @requires arrayOfFoldersAtRoot()*
 * @requires arrayOfFolderNames()*
 * @requires checkArrayForValue()*
 * @returns {boolean}
 */

function checkForFolderAtRoot(name) {
    if (findFolderAtRoot(name)) {
        return true;
    } else {
        return false;
    }
}

// --- Check for a Folder at Path

/**
 * Returns true if the folder is found.
 *
 * @param {string} path
 * @requires validatePathString() 
 * @requires findFolderAtPath() 
 * @requires getBasename()*
 * @returns {boolean}
 */

function checkForFolderAtPath(path) {
    path = validatePathString(path);
    var fldr = findFolderAtPath(path);
    if (fldr) {
        return true;
    } else {
        return false;
    }
}

// -- Create Folder

// --- Create Folder at Root

/**
 * Return a newly created folder.
 * This can create duplicate folders if used without caution.
 *
 * @param name
 * @returns {Folder}
 */

function createFolderAtRoot(name) {
    return DriveApp.getRootFolder().createFolder(name);
}

// --- Create Folder in a Folder

/**
 * Return a newly created folder.
 * This can create duplicate folders if used without caution.
 *
 * @param {string} name
 * @param {Folder} fldr
 * @returns {Folder}
 */

function createFolderInFolder(name, fldr) {
    return fldr.createFolder(name);
}

// --- Create Folder at Path

/**
 * Creates a folder at the given path. 
 * Returns false if the supporting folders in the path are missing.
 * To verify a complete folder path, use verifyFolderPath instead.
 * This can create duplicate folders if used without caution.
 *
 * @requires validatePathString() 
 * @requires getInverseBasename() 
 * @requires findFolderAtPath() 
 * @requires getBasename() 
 * @param {string} path
 * @returns {Folder || boolean}
 */

function createFolderAtPath(path) {
    path = validatePathString(path);
    var inverse = getInverseBasename(path);
    var fldr = findFolderAtPath(inverse);
    if (!fldr) return false;
    var basename = getBasename(path);
    return fldr.createFolder(basename);
}

// -- Create Folders

// --- Create Folders at Root

/**
 * Returns the root folder. 
 * This can create duplicate folders if used without caution.
 *
 * @param {Array} arr
 * @returns {Folder}
 */

function createFoldersAtRoot(arr) {
    for (i = 0; i < arr.length; i++) {
        DriveApp.getRootFolder().createFolder(arr[i]);
    }
    return DriveApp.getRootFolder();
}

// --- Create Folders in Folder

/**
 * Returns the targeted folder.
 * This can create duplicate folders if used without caution.
 *
 * @param {Array} arr
 * @param {Folder} fldr
 * @returns {Folder}
 */

function createFoldersInFolder(arr, fldr) {
    for (i = 0; i < arr.length; i++) {
        fldr.createFolder(arr[i]);
    }
    return fldr;
}

// --- Create Folders at Path

/**
 * Returns the target folder.
 * This can create duplicate folders if used without caution.
 *
 * @requires validatePathString() 
 * @requires getInverseBasename() 
 * @requires findFolderAtPath()
 * @param {Array} arr
 * @param {string} path
 * @returns {Folder || boolean}
 */

function createFoldersAtPath(arr, path) {
    path = validatePathString(path);
    var fldr = findFolderAtPath(path);
    if (!fldr) return false;
    for (i = 0; i < arr.length; i++) {
        fldr.createFolder(arr[i]);
    }
    return fldr;
}

// - Verify Folder

// --- Verify Folder at Root

/**
 * Returns the targeted folder.
 * A new folder is created only if necessary; this will not create duplicate folders.
 *
 * @requires checkForFolderAtRoot() 
 * @requires findFolderAtRoot()*
 * @requires arrayOfFoldersAtRoot()*
 * @requires arrayOfFolderNames()*
 * @requires checkArrayForValue()*
 * @requires createFolderAtRoot() 
 * @requires findFolderAtRoot() 
 * @param {string} name
 * @returns {Folder}
 */

function verifyFolderAtRoot(name) {
    if (!(checkForFolderAtRoot(name))) {
        return createFolderAtRoot(name);
    } else {
        return findFolderAtRoot(name);
    }
}

// --- Verify Folder in Folder

/**
 * Returns the targeted folder.
 * A new folder is created only if necessary; this will not create duplicate folders.
 *
 * @requires checkForFolderInFolder() 
 * @requires findFolderInFolder()*
 * @requires arrayOfFoldersInFolder()*
 * @requires arrayOfFolderNames()*
 * @requires checkArrayForValue()*
 * @requires createFolderInFolder() 
 * @requires findFolderInFolder() 
 * @param {string} name
 * @param {Folder} fldr
 * @returns {Folder}
 */

function verifyFolderInFolder(name, fldr) {
    if (!(checkForFolderInFolder(name, fldr))) {
        return createFolderInFolder(name, fldr);
    } else {
        return findFolderInFolder(name, fldr);
    }
}

// --- Verify Folder Path

/**

 * Returns a folder at the end of a folder path.
 * Folders in the path are created if they don't already exist.
 *
 * @requires validatePathString() 
 * @param {string} path
 * @returns {Folder}
 */

function verifyFolderPath(path) {
    path = validatePathString(path);
    var split = path.split("/");
    var fldr;
    for (i = 0; i < split.length; i++) {
        var fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
        if (i === 0) {
            if (!(fi.hasNext())) {
                DriveApp.createFolder(split[i]);
                fi = DriveApp.getFoldersByName(split[i]);
            }
            fldr = fi.next();
        } else if (i >= 1) {
            fi = fldr.getFoldersByName(split[i]);
            if (!(fi.hasNext())) {
                fldr.createFolder(split[i]);
                fi = DriveApp.getFoldersByName(split[i]);
            }
            fldr = fi.next();
        }
    }
    return fldr;
}

// -- Verify Folders

// --- Verify Folders at Root

/**
 * Returns the root folder.
 * Creates folders at root if they don't exist already.
 *
 * @requires arrayOfFoldersAtRoot() 
 * @requires arrayOfFolderNames() 
 * @requires checkArrayForValue() 
 *
 * @param {string[]} names
 * @returns {Folder}
 */

function verifyFoldersAtRoot(arr) {
    var rfs = arrayOfFoldersAtRoot();
    var names = arrayOfFolderNames(rfs);
    for (i = 0; i < arr.length; i++) {
        if (!(checkArrayForValue(names, arr[i]))) {
            DriveApp.createFolder(arr[i]);
        }
    }
    return DriveApp.getRootFolder();
}

// --- Verify Folders in a Folder

/**
 * Returns the targeted folder. 
 * Creates folders within a folder if they don't already exist.
 *
 * @requires arrayOfFoldersInFolder()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @param {string[]} arr
 * @param {Folder} fldr
 * @returns {Folder}
 */

function verifyFoldersInFolder(arr, fldr) {
    var fldrs = arrayOfFoldersInFolder(fldr);
    var names = arrayOfFolderNames(fldrs);
    for (i = 0; i < arr.length; i++) {
        if (!(checkArrayForValue(arr[i], names))) {
            fldr.createFolder(arr[i]);
        }
    }
    return fldr;
}

// --- Verify Folders at Path

/**
 * Returns the folder at the end of the target path or false if the given path is invalid.
 * Creates folders within a folder if they don't already exist.
 *
 * @requires validatePathString() 
 * @requires findFolderAtPath() 
 * @requires getBasename() 
 * @requires verifyFoldersInFolder() 
 * @requires arrayOfFoldersInFolder()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @returns {Folder}
 */

function verifyFoldersAtPath(arr, path) {
    path = validatePathString(path);
    var fldr = findFolderAtPath(path);
    verifyFoldersInFolder(arr, fldr);
}

// - Files

// -- Array of Files 

// --- Array of Files at Root

/**
 * Returns an array containing all files found at root.
 *
 * @returns {File[]}
 */

function arrayOfFilesAtRoot() {
    var result = [];
    var fi = DriveApp.getRootFolder().getFiles();
    while (fi.hasNext()) {
        var file = fi.next();
        result.push(file);
    }
    return result;
}

// --- Array of Files in Folder

/**
 * Returns an array containing all files found at the top level of a folder.
 *
 * @param {Folder} fldr
 * @returns {File[]}
 */

function arrayOfFilesInFolder(fldr) {
    var result = [];
    var fi = fldr.getFiles();
    while (fi.hasNext()) {
        var file = fi.next();
        result.push(file);
    }
    return result;
}

// --- Array of Files at Path

/**
 * Returns an array containing all files found at the top level of a folder path.
 *
 * @requires validatePathString() 
 * @requires findFolderAtPath() 
 * @requires getBasename()*
 * @requires arrayOfFilesInFolder() 
 * @param {string} path
 * @returns {Files[] || boolean}
 */

function arrayOfFilesAtPath(path) {
    path = validatePathString(path);
    var result = [];
    var fldr = findFolderAtPath(path);
    if (!fldr) {
        return arrayOfFilesInFolder(fldr);
    } else {
        return false;
    }
}

// --- Array of All Files in Drive

/**
 * Returns an array of all files in Drive..
 * Please don't actually use this in production. 
 *
 * @returns {File[]}
 */

function arrayOfFilesInDrive() {
    var result = [];
    var fi = DriveApp.getFiles();
    while (fi.hasNext()) {
        var file = fi.next();
        result.push(file);
    }
    return result;
}

// -- Array of File Names 

/**
 *  Returns an array of file names.
 *
 * @param {File[]} files
 * @returns {string[]}
 */

function arrayOfFileNames(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].getName();
        result.push(name);
    }
    return result;
}

// -- Find a File

// --- Find a File at Root

/**
 * Returns a file from root. 
 *
 * @requires arrayOfFilesAtRoot() 
 * @requires arrayOfFileNames() 
 * @requires checkArrayForValue() 
 * @requires validateMIME() 
 * @param {string} name
 * @returns {File || false}
 */

function findFileAtRoot(name, mime) {

    function findFileAtRootAny(name) {
        var files = arrayOfFilesAtRoot();
        var names = arrayOfFileNames(files);
        if (checkArrayForValue(names, name)) {
            return DriveApp.getRootFolder().getFilesByName(name).next();
        } else {
            return false;
        }
    }

    function findFileAtRootType(name, mime) {
        mime = validateMIME(mime);
        var files = arrayOfFilesAtRoot();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if ((file.getName() === name) && file.getMimeType() === mime) {
                return file;
            }
        }
        return false;
    }

    if (mime !== undefined) {
        return findFileAtRootType(name, mime);
    } else {
        return findFileAtRootAny(name);
    }
}

// --- Find a File in a Folder

/**
 * Returns a file from a folder.
 *
 * @requires arrayOfFilesInFolder() 
 * @requires arrayOfFileNames() 
 * @requires checkArrayForValue() 
 * @requires validateMIME() 
 * @param {string} name
 * @param {Folder} fldr
 * @param {string} [mime]
 * @returns {File || boolean}
 */

function findFileInFolder(name, fldr, mime) {

    function findFileInFolderAny(name, fldr) {
        var files = arrayOfFilesInFolder(fldr);
        var names = arrayOfFileNames(files);
        if (checkArrayForValue(names, name)) {
            return fldr.getFilesByName(name).next();
        } else {
            return false;
        }
    }

    function findFileInFolderType(name, fldr, mime) {
        mime = validateMIME(mime);
        if (mime) {
            var files = arrayOfFilesInFolder(fldr);
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if ((file.getName() === name) && file.getMimeType() === mime) {
                    return file;
                }
            }
        } else {
            return false;
        }
        return false;
    }

    if (mime !== undefined) {
        return findFileInFolderType(name, fldr, mime);
    } else {
        return findFileInFolderAny(name, fldr);
    }
}

// --- Find File at Path

/**
 * Returns a file from a path.
 * Returns false if the given path is incomplete.
 * Returns false if passed a mime value that doesn't match the file's mime type.
 *
 * @requires validatePathString() 
 * @requires getBasename() 
 * @requires getInverseBasename() 
 * @requires findFolderAtPath() 
 * @requires findFileInFolder() 
 * @requires arrayOfFilesInFolder()*
 * @requires arrayOfFileNames()*
 * @requires checkArrayForValue()*
 * @requires validateMIME() 
 * @requires matchMIMEType() 
 * @param {string} path
 * @returns {File}
 */

function findFileAtPath(path, mime) {

    function findFileAtPathAny(path) {
        path = validatePathString(path);
        var file = getBasename(path);
        path = getInverseBasename(path);
        var fldr = findFolderAtPath(path);
        if (fldr) {
            return findFileInFolder(file, fldr);
        } else {
            return false;
        }
    }

    function findFileAtPathType(path, mime) {
        path = validatePathString(path);
        mime = validateMIME(mime);
        var file = getBasename(path);
        path = getInverseBasename(path);
        var fldr = findFolderAtPath(path);

        if (fldr) {
            file = findFileInFolder(file, fldr);
        } else {
            return false;
        }

        if (file && matchMIMEType(file, mime)) {
            return file;
        } else {
            return false;
        }
    }

    if (mime !== undefined) {
        return findFileAtPathType(path, mime);
    } else {
        return findFileAtPathAny(path);
    }
}

// --- Find a File in Drive

/**
 * Returns a file from Drive.
 *
 * @requires validateMIME() 
 * @param {string} name
 * @returns {File}
 */

function findFileInDrive(name, mime) {

    function findFileInDriveAny(name) {
        var fi = DriveApp.getFilesByName(name);
        while (fi.hasNext()) {
            var file = fi.next();
            return file;
        }
    }

    function findFileInDriveType(name, mime) {
        mime = validateMIME(mime);
        var fi = DriveApp.getFilesByName(name);
        while (fi.hasNext()) {
            var file = fi.next();
            if ((file.getName() === name) && file.getMimeType() === mime) {
                return file;
            }
        }
        return false;
    }

    if (mime !== undefined) {
        return findFileInDriveType(name, mime);
    } else {
        return findFileInDriveAny(name);
    }
}

// -- Check for a File

// --- Check for a File at Root

/**
 * Returns true if a matching file is found.
 *
 * @requires findFileAtRoot() 
 * @requires arrayOfFilesAtRoot()*
 * @requires arrayOfFileNames()*
 * @requires checkArrayForValue()*
 * @requires validateMIME()* 
 * @param {string} name
 * @param {string} mime
 * @returns {boolean}
 */

function checkForFileAtRoot(name, mime) {
    var check = findFileAtRoot(name, mime);
    if (check) {
        return true;
    } else {
        return false;
    }
}

// --- Check for File in Folder

/**
 * Returns true if a matching file is found.
 *
 * @requires findFileInFolder() 
 * @requires arrayOfFilesInFolder()*
 * @requires arrayOfFileNames()* 
 * @requires checkArrayForValue()*
 * @requires validateMIME()*
 * @param {string} name
 * @param {Folder} fldr
 * @param {string} mime
 * @returns {boolean}
 */

function checkForFileInFolder(name, fldr, mime) {
    var check = findFileInFolder(name, fldr, mime);
    if (check) {
        return true;
    } else {
        return false;
    }
}

//  --- Check for File at Path

/**
 * Returns true if a matching file is found.
 *
 * @requires findFileAtPath() 
 * @requires validatePathString()*
 * @requires getBasename()* 
 * @requires getInverseBasename()*
 * @requires findFolderAtPath()*
 * @requires findFileInFolder()*
 * @requires arrayOfFilesInFolder()*
 * @requires arrayOfFileNames()*
 * @requires checkArrayForValue()*
 * @requires validateMIME()*
 * @requires matchMIMEType()*
 * @param {string} path
 * @param {string} mime
 * @returns {boolean}
 */

function checkForFileAtPath(path, mime) {
    var check = findFileAtPath(path, mime);
    if (check) {
        return true;
    } else {
        return false;
    }
}

// --- Create File at Root

/**
 * Returns a newly created file.
 * This can create documents, forms, presentations or spreadsheets, 
 * but it will always return a file.
 *
 * @param {string} name
 * @param {string} [mime]
 * @returns {File}
 */

function createFileAtRoot(name, mime) {
    switch (mime) {
        case "document":
            var document = DocumentApp.create(name);
            return DriveApp.getFileById(document.getId());
        case "form":
            var form = FormApp.create(name);
            return DriveApp.getFileById(form.getId());
        case "presentation":
            var presentation = SlidesApp.create(name);
            return DriveApp.getFileById(presentation.getId());
        case "spreadsheet":
            var spreadsheet = SpreadsheetApp.create(name);
            return DriveApp.getFileById(spreadsheet.getId());
        default:
            var file = DriveApp.getRootFolder().createFile(name, "");
            return DriveApp.getFileById(file.getId());
    }
}

// --- Create File in Folder

/**
 * Returns a newly created file.
 * This can create documents, forms, presentations or spreadsheets, 
 * but it will always return a file.
 *
 * @requires createFileAtRoot() 
 * @requires moveFileToFolder() 
 * @requires findFileInFolder()*
 * @requires arrayOfFilesInFolder()*
 * @requires arrayOfFileNames()*
 * @requires checkArrayForValue()*
 * @requires validateMIME()*
 * @param {string} name
 * @param {Folder} fldr
 * @param {string} [mime]
 * @returns {File || boolean}
 */

function createFileInFolder(name, fldr, mime) {
    var file = createFileAtRoot(name, mime);
    return moveFileToFolder(file, fldr);
}

// --- Create File at Path

/**
 * Returns a newly created file.
 * This can create documents, forms, presentations or spreadsheets, 
 * but it will always return a file.
 *
 * @requires getBasename() 
 * @requires getInverseBasename() 
 * @requires findFolderAtPath() 
 * @requires validatePathString()*
 * @requires createFileInFolder() 
 * @requires createFileAtRoot()*
 * @requires moveFileToFolder()*
 * @requires findFileInFolder()*
 * @requires arrayOfFilesInFolder()*
 * @requires arrayOfFileNames()*
 * @requires checkArrayForValue()*
 * @requires validateMIME()*
 * @param {string} path
 * @param {string} [mime]
 * @returns {File || boolean}
 */

function createFileAtPath(path, mime) {
    // validate path...
    var name = getBasename(path);
    path = getInverseBasename(path);
    var fldr = findFolderAtPath(path);
    return createFileInFolder(name, fldr, mime);
}

Logger.log('End');
