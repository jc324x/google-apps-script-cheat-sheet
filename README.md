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
  * [Find First or Last Object in Array of Objects by Timestamp](#find-first-or-last-object-in-array-of-objects-by-timestamp)
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
func (p *Process) lineSkipBuffer() {
	p.LineOutput = ""
	p.LineHeight = ""
}
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
var val_ftda   = sheet_ftda.getRange('G2:H5').getValues();
Logger.log(flattenTwoDimensionalArray(val_ftda).sort()); 
// [1, 2, 3, 4, 5, 6, 7, 8] 
```

### Array of Objects ###

```javascript
/**
 * Example array of objects
 */

var arrObj_ex = [{
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

Logger.log('arrObj_ex');
```

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

// Find Oldest or Latest Object by Timestamp value

```javascript
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

Logger.log("oldestObjectInArrayOfObjects");
var sheet_ooiaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_ooiaoo = arrayOfObjectsForA1("J1:K4", sheet_ooiaoo);
Logger.log(oldestObjectInArrayOfObjects(arrObj_ooiaoo)); 
// // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A} 
```

```javascript
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

Logger.log("latestObjectInArrayOfObjects");
var sheet_loiaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_loiaoo = arrayOfObjectsForA1("J1:K4", sheet_loiaoo);
Logger.log(latestObjectInArrayOfObjects(arrObj_loiaoo)); 
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

Logger.log("mergeObjs");
Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0}

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

Logger.log("appendDateTime");
Logger.log(appendDateTime("file-name"));

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


