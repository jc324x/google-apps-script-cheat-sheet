// !=== QUICK-START
// !=== README
// # Google Apps Script Cheat Sheet #
// ===!
// !=== QUICK-START
// function test() {}
// Logger.log('Start');
// ===!
// !=== NAV
// |*| # General
// |*| - Array
// |*| -- Check Array for a Value
// |*| -- Remove Duplicates from Array
// |*| -- Remove Empty Elements from Array
// |*| -- Count of Values in Array
// |*| -- Intersect of Two Arrays
// |*| -- Compare Two Arrays
// |*| -- Array as Delimited String
// |*| -- Array as Modified Delimited String
// |*| - Two Dimensional Array
// |*| -- Flatten Two Dimensional Array
// | | - Array of Objects
// | | -- Sort Array of Objects by Property or Properties
// | | -- Find Object in Array of Objects
// | | -- Find First or Last Object in Array of Objects by Timestamp
// | | -- Filter Array of Objects by Value or Values
// | | -- Unify Properties for Objects in Array of Objects
// | | - Object
// | | -- Array of Object Values
// | | -- Merge Objects
// | | -- Check for Valid Object
// | | - Dates and Times
// | | -- Formatted Date Time
// | | -- Append Date Time
// | | -- Date Object from String
// | | -- Match a Date to a Date Range
// | | - String
// | | -- Check String for Substring
// | | -- Convert String to Snake Case
// | | Drive
// | | - Utility Functions for Drive
// | | -- Validate Path String
// | | -- Get Basename or Inverse Basename
// | | -- Validate MIME Type
// | | -- Match MIME Type 
// | | - Folders
// | | -- Array of Folders
// | | --- Array of Folders at Root
// | | --- Array of Folders in Folder
// | | --- Array of Folders at Path
// | | --- Array of Folders in Drive
// | | -- Array of Folder Names
// | | -- Find a Folder
// | | --- Find Folder at Root
// | | --- Find Folder in Folder
// | | --- Find Folder at Path
// | | --- Find Folder in Drive
// | | -- Check for a Folder
// | | --- Check for Folder at Root
// | | --- Check for Folder in Folder
// | | --- Check for Folder at Path
// | | -- Create a Folder
// | | --- Create Folder at Root
// | | --- Create Folder in Folder
// | | --- Create Folder at Path
// | | -- Create Folders
// | | --- Create Folders at Root
// | | --- Create Folders in Folder
// | | --- Create Folders at Path
// | | -- Verify Folder
// | | --- Verify Folder at Root
// | | --- Verify Folder in a Folder
// | | --- Verify Folder Path
// | | -- Verify Folders
// | | --- Verify Folders in a Folder
// | | --- Verify Folders at Root
// | | - Files
// | | -- Array of Files
// | | --- Array of Files at Root
// | | --- Array of Files in Folder
// | | --- Array of Files at Path
// | | --- Array of All Files in Drive
// | | -- Array of File Names
// | | -- Find a File
// | | --- Find a File at Root
// | | --- Find a File in a Folder
// | | --- Find File at Path
// | | --- Find a File in Drive
// | | -- Check for a File
// | | --- Check for a File at Root
// | | --- Check for a File in a Folder
// | | --- Check for a File at Path
// | | -- Create a File
// | | --- Create File at Root
// | | --- Create File in a Folder
// | | --- Create File at Path
// | | -- Verify File
// | | --- Verify File at Root
// | | --- Verify File in Folder
// | | --- Verify File at Path
// | | -- Id of Active File
// | | -- Open File as MIME Type
// | | -- Copy a File to a Folder
// | | -- Move a File to a Folder
// | | - Files and Folders
// | | -- Rename a File or Folder
// | | -- Parent Folder of a File or Folder
// | | -- Zip All Files in a Folder
// | | Sheets
// | | - Utility Functions for Sheets
// | | -- Convert Column Number to a Letter
// | | -- Convert Column Letter to a Number
// | | -- Replicating Import Range
// | | -- Array of Sheet Names
// | | - A1 Notation
// | | -- A1 Object
// | | -- Validate A1
// | | - Object
// | | -- Object for Range 
// | | - Array of Objects
// | | -- Header Range
// | | -- Value Range
// | | -- Header Values
// | | -- Array of Objects for Range
// | | -- Array of Objects for Sheet
// | | -- Array of Objects for A1 Notation
// | | - Array 
// | | -- Array of Values for Column
// | | --- For Header Value
// | | --- For Column Number
// | | --- For Range Object 
// | | Docs
// | | - Utility Functions for Docs
// | | -- Access Document Body
// | | -- Clear Document Body
// | | Merges
// | | - Sheets and Docs
// | | -- String From Object Properties 
// | | -- Replace Object Properties 
// | | --- Replace Object Properties in Document
// | | --- Replace Object Properties in Spreadsheet
// | | --- Replace Object Properties in Sheet
// | | -- Copy Template for Item in Array of Objects and Replace Object Properties
// | | --- Copy Document Template and Replace Object Properties
// | | --- Copy Spreadsheet Template and Replace Object Properties
// | | -- Cell Shading
// | | --- Index Object Properties
// | | -- Create Bulleted List in Document for Array of Objects
// | | --- Single Division List
// | | --- Multi Division List
// | | - Gmail
// | | -- Mail Merge
// | | --- Append Body Property for Object in Array of Objects 
// | | --- Run Mail Merge for Array of Objects
// | | Forms
// | | - Utility Functions for Forms
// | | -- Array of Form Items
// | | -- Get Form Item By Name
// | | -- Set Item Choices
// | | -- Get Destination Sheet
// | | - Responses
// | | -- Last Response as Object
// | | -- Last Response as Array of Objects
// | | -- All Responses as Array of Objects
// | | JSON
// | | -- Object From URL
// | | -- Object From File
// | | -- Object From Source

// !=== MAIN
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

// Logger.log('checkArrayForValue');
// var arr_cafv = [1, 2, 3, 4];
// Logger.log(checkArrayForValue(arr_cafv, 5)); // false //!EX

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

// Logger.log("removeDuplicatesFromArray");
// var arr_rdfa = [1, 2, 3, 1, 2, 3, 4,];
// Logger.log(removeDuplicatesFromArray(arr_rdfa)); // [1, 2, 3, 4] //!EX

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

// Logger.log("removeEmptyElementsFromArray");
// var arr_reefa = ["a",,"b",,,"c"];
// Logger.log(removeEmptyElementsFromArray(arr_reefa)); // ["a", "b", "c"] //!EX

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

// Logger.log("countOfValuesInArray");
// var arr_covia = ["a", "b", "c", "a", "b", "c", "a"];
// Logger.log(countOfValuesInArray(arr_covia)); 
// [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}] //!EX

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

// Logger.log("intersectOfTwoArrays");
// var arrA_iota = [1, 2, 3];
// var arrB_iota = [3, 4, 5];
// Logger.log(intersectOfTwoArrays(arrA_iota, arrB_iota)); // [3] //!EX

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

// Logger.log("compareTwoArrays");
// var arrA_cta = [1, 2, 3, 4, 5];
// var arrB_cta = [1, 2, 3, 4, 5];
// var arrC_cta = [5, 4, 3, 2, 1];
// Logger.log(compareTwoArrays(arrA_cta, arrB_cta)); // true
// Logger.log(compareTwoArrays(arrA_cta, arrC_cta)); // false //!EX

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
    var result = "";
    var copy = removeDuplicatesFromArray(arr);
    for (var i = 0; i < copy.length; i++) {
        if (i < copy.length) {
            result += copy[i] + delim + " ";
        } else if (i === copy.length) {
            result += copy[i];
        }
    }
    return result;
}

// Logger.log("arrayAsDelimitedString");
// var arr_da = ["c@example.com", "b@example.com", "a@example.com"];
// Logger.log(arrayAsDelimitedString(arr_da, ",")); 
// // "c@example.com, b@example.com, a@example.com" //!EX

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
    var result = "";
    var copy = removeDuplicatesFromArray(arr);
    for (var i = 0; i < copy.length; i++) {
        if (i < copy.length) {
            result += copy[i] + mod + delim + " ";
        } else if (i === copy.length) {
            result += copy[i] + mod + delim;
        }
    }
    return result;
}

Logger.log("arrayAsModifiedDelimitedString");
var arr_aamds = ["x", "z", "y"];
Logger.log(arrayAsModifiedDelimitedString(arr_aamds, ",", "@example.com")); 
// "x@example.com, y@example.com, z@example.com" //!EX

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

// Logger.log("flattenTwoDimensionalArray");
// var sheet_ftda = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var val_ftda   = sheet_ftda.getRange("G2:H5").getValues();
// Logger.log(flattenTwoDimensionalArray(val_ftda).sort()); 
// [1, 2, 3, 4, 5, 6, 7, 8] //!EX
