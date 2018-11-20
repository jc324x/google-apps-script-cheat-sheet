# Google Apps Script Cheat Sheet #

[General](#general-1)
=====
* [Array](#array)
  * [Check Array for a Value](#check-array-for-a-value)
  * [Remove Duplicates from Array](#remove-duplicates-from-array)
  * [Remove Empty Elements from Array](#remove-empty-elements-from-array)
  * [Count of Values in Array](#count-of-values-in-array)
  * [Intersect of Two Arrays](#intersect-of-two-arrays)
  * [Compare Two Arrays](#compare-two-arrays)
  * [Array as Delimited String](#array-as-delimited-string)
  * [Array as Modified Delimited String](#array-as-modified-delimited-string)
* [Two Dimensional Array](#two-dimensional-array)
  * [Flatten Two Dimensional Array](#flatten-two-dimensional-array)
* [Array of Objects](#array-of-objects)
  * [Sort Array of Objects by Property](#sort-array-of-objects-by-property)
  * [Sort Array of Objects by Properties](#sort-array-of-objects-by-properties)
  * [Find Object in Array of Objects](#find-object-in-array-of-objects)
  * [Find First Object in Array of Objects by Timestamp](#find-first-object-in-array-of-objects-by-timestamp)
  * [Find Last Object in Array of Objects by Timestamp](#find-last-object-in-array-of-objects-by-timestamp)
  * [Filter Array of Objects by Value or Values](#filter-array-of-objects-by-value-or-values)
  * [Unify Properties for Objects in Array of Objects](#unify-properties-for-objects-in-array-of-objects)
* [Object](#object)
  * [Array of Object Values](#array-of-object-values)
  * [Merge Objects](#merge-objects)
  * [Check for Valid Object](#check-for-valid-object)
* [Dates and Times](#dates-and-times)
  * [Formatted Date Time](#formatted-date-time)
  * [Append Date Time](#append-date-time)
  * [Date Object from String](#date-object-from-string)
  * [Match a Date to a Date Range](#match-a-date-to-a-date-range)
* [String](#string)
  * [Check String for Substring](#check-string-for-substring)
  * [Convert String to Snake Case](#convert-string-to-snake-case)
* [Utility Functions for Drive](#utility-functions-for-drive)
  * [Validate Path String](#validate-path-string)
  * [Get Basename or Inverse Basename](#get-basename-or-inverse-basename)
  * [Validate MIME Type](#validate-mime-type)
  * [Match MIME Type ](#match-mime-type-)
* [Folders](#folders)
  * [Array of Folders](#array-of-folders)
   * [Array of Folders at Root](#array-of-folders-at-root)
   * [Array of Folders in Folder](#array-of-folders-in-folder)
   * [Array of Folders at Path](#array-of-folders-at-path)
   * [Array of Folders in Drive](#array-of-folders-in-drive)
  * [Array of Folder Names](#array-of-folder-names)
  * [Find a Folder](#find-a-folder)
   * [Find Folder at Root](#find-folder-at-root)
   * [Find Folder in Folder](#find-folder-in-folder)
   * [Find Folder at Path](#find-folder-at-path)
   * [Find Folder in Drive](#find-folder-in-drive)
  * [Check for a Folder](#check-for-a-folder)
   * [Check for Folder at Root](#check-for-folder-at-root)
   * [Check for Folder in Folder](#check-for-folder-in-folder)
   * [Check for Folder at Path](#check-for-folder-at-path)
  * [Create a Folder](#create-a-folder)
   * [Create Folder at Root](#create-folder-at-root)
   * [Create Folder in Folder](#create-folder-in-folder)
   * [Create Folder at Path](#create-folder-at-path)
  * [Create Folders](#create-folders)
   * [Create Folders at Root](#create-folders-at-root)
   * [Create Folders in Folder](#create-folders-in-folder)
   * [Create Folders at Path](#create-folders-at-path)
  * [Verify Folder](#verify-folder)
   * [Verify Folder at Root](#verify-folder-at-root)
   * [Verify Folder in a Folder](#verify-folder-in-a-folder)
   * [Verify Folder Path](#verify-folder-path)
  * [Verify Folders](#verify-folders)
   * [Verify Folders in a Folder](#verify-folders-in-a-folder)
   * [Verify Folders at Root](#verify-folders-at-root)
* [Files](#files)
  * [Array of Files](#array-of-files)
   * [Array of Files at Root](#array-of-files-at-root)
   * [Array of Files in Folder](#array-of-files-in-folder)
   * [Array of Files at Path](#array-of-files-at-path)
   * [Array of All Files in Drive](#array-of-all-files-in-drive)
  * [Array of File Names](#array-of-file-names)
  * [Find a File](#find-a-file)
   * [Find a File at Root](#find-a-file-at-root)
   * [Find a File in a Folder](#find-a-file-in-a-folder)
   * [Find File at Path](#find-file-at-path)
   * [Find a File in Drive](#find-a-file-in-drive)
  * [Check for a File](#check-for-a-file)
   * [Check for a File at Root](#check-for-a-file-at-root)
   * [Check for a File in a Folder](#check-for-a-file-in-a-folder)
   * [Check for a File at Path](#check-for-a-file-at-path)
  * [Create a File](#create-a-file)
   * [Create File at Root](#create-file-at-root)
   * [Create File in a Folder](#create-file-in-a-folder)
   * [Create File at Path](#create-file-at-path)
  * [Verify File](#verify-file)
   * [Verify File at Root](#verify-file-at-root)
   * [Verify File in Folder](#verify-file-in-folder)
   * [Verify File at Path](#verify-file-at-path)
  * [Id of Active File](#id-of-active-file)
  * [Open File as MIME Type](#open-file-as-mime-type)
  * [Copy a File to a Folder](#copy-a-file-to-a-folder)
  * [Move a File to a Folder](#move-a-file-to-a-folder)
* [Files and Folders](#files-and-folders)
  * [Rename a File or Folder](#rename-a-file-or-folder)
  * [Parent Folder of a File or Folder](#parent-folder-of-a-file-or-folder)
  * [Zip All Files in a Folder](#zip-all-files-in-a-folder)
* [Utility Functions for Sheets](#utility-functions-for-sheets)
  * [Convert Column Number to a Letter](#convert-column-number-to-a-letter)
  * [Convert Column Letter to a Number](#convert-column-letter-to-a-number)
  * [Replicating Import Range](#replicating-import-range)
  * [Array of Sheet Names](#array-of-sheet-names)
* [A1 Notation](#a1-notation)
  * [A1 Object](#a1-object)
  * [Validate A1](#validate-a1)
* [Object](#object)
  * [Object for Range ](#object-for-range-)
* [Array of Objects](#array-of-objects)
  * [Header Range](#header-range)
  * [Value Range](#value-range)
  * [Header Values](#header-values)
  * [Array of Objects for Range](#array-of-objects-for-range)
  * [Array of Objects for Sheet](#array-of-objects-for-sheet)
  * [Array of Objects for A1 Notation](#array-of-objects-for-a1-notation)
* [Array ](#array-)
  * [Array of Values for Column](#array-of-values-for-column)
   * [For Header Value](#for-header-value)
   * [For Column Number](#for-column-number)
   * [For Range Object ](#for-range-object-)
* [Utility Functions for Docs](#utility-functions-for-docs)
  * [Access Document Body](#access-document-body)
  * [Clear Document Body](#clear-document-body)
* [Sheets and Docs](#sheets-and-docs)
  * [String From Object Properties ](#string-from-object-properties-)
  * [Replace Object Properties ](#replace-object-properties-)
   * [Replace Object Properties in Document](#replace-object-properties-in-document)
   * [Replace Object Properties in Spreadsheet](#replace-object-properties-in-spreadsheet)
   * [Replace Object Properties in Sheet](#replace-object-properties-in-sheet)
  * [Copy Template for Item in Array of Objects and Replace Object Properties](#copy-template-for-item-in-array-of-objects-and-replace-object-properties)
   * [Copy Document Template and Replace Object Properties](#copy-document-template-and-replace-object-properties)
   * [Copy Spreadsheet Template and Replace Object Properties](#copy-spreadsheet-template-and-replace-object-properties)
  * [Cell Shading](#cell-shading)
   * [Index Object Properties](#index-object-properties)
  * [Create Bulleted List in Document for Array of Objects](#create-bulleted-list-in-document-for-array-of-objects)
   * [Single Division List](#single-division-list)
   * [Multi Division List](#multi-division-list)
* [Gmail](#gmail)
  * [Mail Merge](#mail-merge)
   * [Append Body Property for Object in Array of Objects ](#append-body-property-for-object-in-array-of-objects-)
   * [Run Mail Merge for Array of Objects](#run-mail-merge-for-array-of-objects)
* [Utility Functions for Forms](#utility-functions-for-forms)
  * [Array of Form Items](#array-of-form-items)
  * [Get Form Item By Name](#get-form-item-by-name)
  * [Set Item Choices](#set-item-choices)
  * [Get Destination Sheet](#get-destination-sheet)
* [Responses](#responses)
  * [Last Response as Object](#last-response-as-object)
  * [Last Response as Array of Objects](#last-response-as-array-of-objects)
  * [All Responses as Array of Objects](#all-responses-as-array-of-objects)
  * [Object From URL](#object-from-url)
  * [Object From File](#object-from-file)
  * [Object From Source](#object-from-source)

## General ##

### Array  ###

#### Check Array For a Value ####

```javascript
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

Logger.log('checkArrayForValue');
var arr_cafv = [1, 2, 3, 4];
Logger.log(checkArrayForValue(arr_cafv, 5)); // false 
```

#### Remove Duplicates from Array ####

```javascript
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

Logger.log('removeDuplicatesFromArray');
var arr_rdfa = [1, 2, 3, 1, 2, 3, 4,];
Logger.log(removeDuplicatesFromArray(arr_rdfa)); // [1, 2, 3, 4] 
```

#### Remove Empty Elements from Array ####

```javascript
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

Logger.log('removeEmptyElementsFromArray');
var arr_reefa = ['a',,'b',,,'c'];
Logger.log(removeEmptyElementsFromArray(arr_reefa)); // ['a', 'b', 'c'] 
```

#### Count of Values in Array ####

```javascript
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

Logger.log('countOfValuesInArray');
var arr_covia = ['a', 'b', 'c', 'a', 'b', 'c', 'a'];
Logger.log(countOfValuesInArray(arr_covia)); 
// [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}] 
```

#### Intersect of Two Arrays ####

```javascript
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

Logger.log('intersectOfTwoArrays');
var arrA_iota = [1, 2, 3];
var arrB_iota = [3, 4, 5];
Logger.log(intersectOfTwoArrays(arrA_iota, arrB_iota)); // [3] 
```

#### Compare Two Arrays  ####

```javascript
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

Logger.log('compareTwoArrays');
var arrA_cta = [1, 2, 3, 4, 5];
var arrB_cta = [1, 2, 3, 4, 5];
var arrC_cta = [5, 4, 3, 2, 1];
Logger.log(compareTwoArrays(arrA_cta, arrB_cta)); // true
Logger.log(compareTwoArrays(arrA_cta, arrC_cta)); // false 
```

#### Array as Delimited String ####

```javascript
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

Logger.log('arrayAsDelimitedString');
var arr_da = ['c@example.com', 'b@example.com', 'a@example.com'];
Logger.log(arrayAsDelimitedString(arr_da, ',')); 
// 'c@example.com, b@example.com, a@example.com' 
```

#### Array as Modified Delimited String ####

```javascript
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

Logger.log('arrayAsModifiedDelimitedString');
var arr_aamds = ['x', 'z', 'y'];
Logger.log(arrayAsModifiedDelimitedString(arr_aamds, ',', '@example.com'));
// 'x@example.com, y@example.com, z@example.com' 
```

### Two Dimensional Array ###

```javascript
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

Logger.log('flattenTwoDimensionalArray');
var sheet_ftda = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
var vals_ftda   = sheet_ftda.getRange('G2:H5').getValues();
Logger.log(flattenTwoDimensionalArray(vals_ftda).sort()); 
// [1, 2, 3, 4, 5, 6, 7, 8] 
```

### Array of Objects ###

#### Sort Array of Objects by Property ####

```javascript
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

Logger.log('sortArrayOfObjects');

var saoo1_ao = [{
        a: 1000,
        b: 1,
        c: 5
    },
    {
        a: 10000,
        b: 2,
        c: 5000
    },
    {
        a: 10,
        b: 2,
        c: 500
    },
    {
        a: 1,
        b: 1,
        c: 50
    }
];

Logger.log(arrObj_ex.sort(sortArrayOfObjects('a')));
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}] 
```

#### Sort Array of Objects by Properties ####

```javascript
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

Logger.log('sortArrayOfObjectsMulti');
Logger.log(arrObj_ex.sort(sortArrayOfObjectsMulti('b', 'c'))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}] 
```

#### Find Object in Array of Objects ####

```javascript
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

Logger.log("findObjectInArrayOfObjects");
Logger.log(findObjectInArrayOfObjects(arrObj_ex, "a", 1000)); // {a=1000.0, b=1.0, c=5.0} 
```

#### Find Oldest Object in Array of Objects ####

```javascript
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

Logger.log("findOldestObjectInArrayOfObjects ");
var sheet_ooiaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_ooiaoo = arrayOfObjectsForA1("J1:K4", sheet_ooiaoo);
Logger.log(oldestObjectInArrayOfObjects(arrObj_ooiaoo)); 
// {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A} 
```

#### Find Latest Object in Array of Objects ####

```javascript
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

Logger.log("findLatestObjectInArrayOfObjects");
var sheet_loiaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_loiaoo = arrayOfObjectsForA1("J1:K4", sheet_loiaoo);
Logger.log(findLatestObjectInArrayOfObjects(arrObj_loiaoo)); 
// {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C} 
```

#### Filter Array of Objects by Value or Values ####

```javascript
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

Logger.log("filterArrayOfObjectsByValueOrValues");
Logger.log(filterArrayOfObjectsByValueOrValues(arrObj_ex, "a", 10)); // [{a=10.0, b=2.0, c=500.0}]
Logger.log(filterArrayOfObjectsByValueOrValues(arrObj_ex, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}] 
```

#### Unify Properties for Objects in Array of Objects ####

```javascript
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

Logger.log("unifyPropertiesForObjectsInArrayOfObjects");
Logger.log(unifyPropertiesForObjectsInArrayOfObjects(arrObj_upfoiaoo, ["x","y","z"], "new"));
// [{a=1.0, new=123.0, x=123.0}, {new=234.0, b=2.0, y=234.0}, {new=345.0, c=3.0, z=345.0}] 
```

### Object ###

#### Array of Object Values ####

```javascript
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

Logger.log("arrayOfObjectValues");
var arr_aoov = ["a", "b", "d"];
Logger.log(arrayOfObjectValues(obj_aoov, arr_aoov)); // [1, 2] 
```

// Merge Objects

```javascript
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

Logger.log("mergeObjs");
Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0} 
```

#### Check for Valid Object ####

```javascript
/**
 * Returns true if the object has at least one property value set.
 *
 * @param obj
 * @returns {boolean}
 */

function checkForValidObject(obj) {
    return Object.keys(obj).length !== 0;
}

Logger.log("checkForValidObject");
var obj_cfvo = {};
Logger.log(checkForValidObject(obj_cfvo)); // false
// obj_cfvo = {a: 100};
Logger.log(checkForValidObject(obj_cfvo)); // true 
```

### Dates and Times ###

#### Formatted Date Time ####

```javascript
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

Logger.log("dateTime");
Logger.log(dateTime()); // 2018-3-7 7:05:07 PM 
```

// Append Date Time

```javascript
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

Logger.log("appendDateTime");
Logger.log(appendDateTime("file-name")); 
```

#### Date Object from String ####

```javascript
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

Logger.log("dateObjectFromString");
Logger.log(dateObjectFromString("2017-04-24")); // Mon Apr 24 00:00:00 GMT-05:00 2017 
```

#### Match a Date to a Range of Dates ####

```javascript
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

Logger.log("matchDateToRangeOfDates");
Logger.log(matchDateToRangeOfDates(quarterDates)); // 2 (12/21/2017)
Logger.log(matchDateToRangeOfDates(quarterDates, "08/02/2017")); // 1 
```

### String ###

#### Check String for Substring ####

```javascript
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

Logger.log("checkStringForSubstring");
var str_csfs = "google-apps-script-cheat-sheet-demo";
var val_csfs = "google-apps-script"; 
Logger.log(checkStringForSubstring(val_csfs, str_csfs)); // true 
```

#### Convert String to Snake Case ####

```javascript
/**
 * Returns a string in snake case.
 *
 * @param {string} str
 * @returns {string}
 */

function convertStringToSnakeCase(str) {
    return String(str).toLowerCase().replace(/ /g, '_');
}

Logger.log("convertStringToSnakeCase");
var str_vsc = "Hello World"; 
Logger.log(convertStringToSnakeCase(str_vsc)); // hello_world 
```

// Drive

### Utility Functions for Drive ###

#### Validate Path String ####

```javascript
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

Logger.log("validatePathString");
Logger.log(validatePathString("valid/path")); // "valid/path"
Logger.log(validatePathString("/valid/path/")); // "valid/path" 
```

#### Get Basename  ####

```javascript
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

Logger.log("getBasename");
Logger.log(getBasename("/a/b/c")); // c 
```

#### Get Inverse Basename ####

```javascript
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

Logger.log("getInverseBasename");
Logger.log(getInverseBasename("/a/b/c")); // a/b 
```

#### Validate MIME Type ####

```javascript
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

Logger.log("validateMIME");
Logger.log(validateMIME("audio")); // application/vnd.google-apps.audio
Logger.log(validateMIME("application/vnd.google-apps.spreadsheet")); // application/vnd.google-apps.spreadsheet
Logger.log(validateMIME("this-type-doesnt-exist")); // false 
```

#### Match MIME Type ####

```javascript
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

Logger.log("matchMIMEType");
var file_mmt = findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-document", "document");
Logger.log(file_mmt);
Logger.log(matchMIMEType(file_mmt, "document")); // true
Logger.log(matchMIMEType(file_mmt, "application/vnd.google-apps.document")); // true
Logger.log(matchMIMEType(file_mmt, "spreadsheet")); // false 
```

### Folders ###

#### Array of Folders  ####

##### Array of Folders at Root #####

```javascript
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

Logger.log("arrayOfFoldersAtRoot");
Logger.log(arrayOfFoldersAtRoot()); 
```

##### Array of Folders in Folder  #####

```javascript
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

Logger.log("arrayOfFoldersInFolder");
var fldr_aofif = findFolderAtPath("google-apps-script-cheat-sheet-demo"); 
Logger.log(arrayOfFoldersInFolder(fldr_aofif)); 
```

##### Array of Folders at Path #####

```javascript
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

Logger.log("arrayOfFoldersAtPath");
Logger.log(arrayOfFoldersAtPath("google-apps-script-cheat-sheet-demo")); 
```

##### Array of All Folders in Drive #####

```javascript
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

Logger.log("arrayOfFoldersInDrive");
Logger.log(arrayOfFoldersInDrive()); 
```

#### Array of Folder Names ####

```javascript
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

Logger.log("arrayOfFolderNames");
var arr_aofn  = arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/"));
Logger.log(arrayOfFolderNames(arr_aofn)); 
```

#### Find a Folder ####

##### Find Folder at Root #####

```javascript
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

Logger.log("findFolderAtRoot");
Logger.log(findFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo 
```

##### Find Folder in Folder #####

```javascript
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

Logger.log("findFolderInFolder");
var fldr_ffif = findFolderAtPath("google-apps-script-cheat-sheet-demo");
Logger.log(findFolderInFolder("folders", fldr_ffif)); // folders 
```

#### Find Folder at Path ####

```javascript
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

Logger.log("findFolderAtPath");
Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders")); // folders 
```

##### Find a Folder in Drive #####

```javascript
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

Logger.log("findFolderInDrive");
Logger.log(findFolderInDrive("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo 
```

#### Check for a Folder ####

##### Check for a Folder at Root #####

```javascript
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

Logger.log("checkForFolderAtRoot");
Logger.log(checkForFolderAtRoot("google-apps-script-cheat-sheet-demo")); // true 
```

##### Check for a Folder at Path #####

```javascript
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

Logger.log("checkForFolderAtPath");
Logger.log(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/folders")); // true
Logger.log(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/folders/1/10/100")); // false 
```

#### Create Folder ####

##### Create Folder at Root #####

```javascript
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

Logger.log("createFolderAtRoot"); 
```

##### Create Folder in a Folder #####

```javascript
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

Logger.log("createFolderInFolder");
var dt_cfif = dateTime();
var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/bulk");
Logger.log(createFolderInFolder(dt_cfif, fldr_cfif)); 
```

##### Create Folder at Path #####

```javascript
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

Logger.log("createFolderAtPath");
var dt_cfap = dateTime();
Logger.log(createFolderAtPath("google-apps-script-cheat-sheet-demo/bulk/" + dt_cfap)); // 2017-12-16 13:34:38
Logger.log(createFolderAtPath("no/path/here")); // false 
```

#### Create Folders ####

##### Create Folders at Root #####

```javascript
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

Logger.log("createFoldersAtRoot"); 
```

##### Create Folders in Folder #####

```javascript
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

Logger.log("createFoldersInFolder");
var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/bulk");
var arr_cfif  = ["A", "B", "C"];
Logger.log(createFoldersInFolder(arr_cfif, fldr_cfif)); // bulk 
```

##### Create Folders at Path #####

```javascript
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

Logger.log("createFoldersAtPath");
var fldr_cfap = verifyFolderPath("google-apps-script-cheat-sheet-demo/bulk");
var arr_cfap  = ["X", "Y", "Z"];
Logger.log(createFoldersAtPath(arr_cfap, "google-apps-script-cheat-sheet-demo/bulk")); // bulk

### Verify Folder ###

##### Verify Folder at Root #####

```javascript
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

Logger.log("verifyFolderAtRoot");
Logger.log(verifyFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

##### Verify Folder in Folder #####

```javascript
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

Logger.log("verifyFolderInFolder");
var fldr_vfif = findFolderAtRoot("google-apps-script-cheat-sheet-demo"); 
Logger.log(verifyFolderInFolder("folders", fldr_vfif)); // google-apps-script-cheat-sheet-demo/folders

##### Verify Folder Path #####

```javascript
/**
```javascript

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

Logger.log("verifyFolderPath");
Logger.log(verifyFolderPath("google-apps-script-cheat-sheet-demo/folders")); // folders

#### Verify Folders ####

##### Verify Folders at Root #####

```javascript
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

Logger.log("verifyFoldersAtRoot");

##### Verify Folders in a Folder #####

```javascript
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

Logger.log("verifyFoldersInFolder");
var fldr_vfsif = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
Logger.log(verifyFoldersInFolder(["X", "Y", "Z"], fldr_vfsif)); // folders
Logger.log(arrayOfFoldersInFolder(fldr_vfsif)); 

##### Verify Folders at Path #####

```javascript
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

### Files ###

#### Array of Files  ####

##### Array of Files at Root #####

```javascript
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

Logger.log("arrayOfFilesAtRoot");
Logger.log(arrayOfFilesAtRoot());

##### Array of Files in Folder #####

```javascript
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

Logger.log("arrayOfFilesInFolder");
var fldr_fin = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
Logger.log(arrayOfFilesInFolder(fldr_fin)); // [example-file, example-doc, example-spreadsheet];

##### Array of Files at Path #####

```javascript
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

Logger.log("arrayOfFilesAtPath");
Logger.log(arrayOfFilesAtPath("google-apps-script-cheat-sheet-demo/files")); // example-spreadsheet...

##### Array of All Files in Drive #####

```javascript
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

Logger.log("arrayOfFilesInDrive");
Logger.log(arrayOfFilesInDrive());

#### Array of File Names  ####

```javascript
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

Logger.log("arrayOfFileNames");
var fldr_aofilen = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
var arr_aofilen  = arrayOfFilesInFolder(fldr_aofilen);
Logger.log(arrayOfFileNames(arr_aofilen)); // [example-file]

#### Find a File ####

##### Find a File at Root #####

```javascript
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

##### Find a File in a Folder #####

```javascript
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

Logger.log("findFileInFolder");
var fldr_ffif = verifyFolderPath("google-apps-script-cheat-sheet-demo/sheets");
Logger.log(findFileInFolder("example-sheet", fldr_ffif)); // example-sheet
Logger.log(findFileInFolder("example-sheet", fldr_ffif, "document")); // false
Logger.log(findFileInFolder("example-sheet", fldr_ffif, "spreadsheet")); // example-sheet

##### Find File at Path #####

```javascript
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

Logger.log("findFileAtPath");
Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-file")); // example-file
Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-spreadsheet", "spreadsheet")); // example-spreadsheet
Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-document", "document")); // false

##### Find a File in Drive #####

```javascript
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

Logger.log("findFileInDrive");
Logger.log(findFileInDrive("example-file")); // example-file

#### Check for a File ####

##### Check for a File at Root #####

```javascript
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

Logger.log("checkForFileAtRoot");

##### Check for File in Folder #####

```javascript
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

Logger.log("checkForFileInFolder");
var fldr_cffif = verifyFolderPath("google-apps-script-cheat-sheet-demo/sheets"); 
Logger.log(checkForFileInFolder("example-sheet", fldr_cffif, "spreadsheet")); // true
Logger.log(checkForFileInFolder("example-sheet", fldr_cffif)); // true 
```

//  --- Check for File at Path

```javascript
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

Logger.log("checkForFileAtPath");
Logger.log(checkForFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet")); // true
Logger.log(checkForFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet", "spreadsheet")); // true

// Create a File

##### Create File at Root #####

```javascript
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

Logger.log("createFileAtRoot");

##### Create File in Folder #####

```javascript
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

Logger.log("createFileInFolder");
var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/files/create");
Logger.log(createFileInFolder("example-spreadsheet", fldr_cfif, "spreadsheet")); // amazing-spreadsheet

##### Create File at Path #####

```javascript
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

Logger.log("createFileAtPath");
Logger.log(createFileAtPath("google-apps-script-cheat-sheet-demo/bulk/example-spreadsheet", "spreadsheet")); // example-spreadsheet


