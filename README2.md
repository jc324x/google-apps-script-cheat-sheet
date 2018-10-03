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
  * [Sort Array of Objects by Property or Properties](#sort-array-of-objects-by-property-or-properties)
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

Logger.log("removeDuplicatesFromArray");
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

Logger.log("removeEmptyElementsFromArray");
var arr_reefa = ["a",,"b",,,"c"];
Logger.log(removeEmptyElementsFromArray(arr_reefa)); // ["a", "b", "c"] 
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

Logger.log("countOfValuesInArray");
var arr_covia = ["a", "b", "c", "a", "b", "c", "a"];
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

Logger.log("intersectOfTwoArrays");
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

Logger.log("compareTwoArrays");
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

Logger.log("arrayAsDelimitedString");
var arr_da = ["c@example.com", "b@example.com", "a@example.com"];
Logger.log(arrayAsDelimitedString(arr_da, ",")); 
// // "c@example.com, b@example.com, a@example.com" 
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
// "x@example.com, y@example.com, z@example.com" 
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

Logger.log("flattenTwoDimensionalArray");
var sheet_ftda = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var val_ftda   = sheet_ftda.getRange("G2:H5").getValues();
Logger.log(flattenTwoDimensionalArray(val_ftda).sort()); 
// [1, 2, 3, 4, 5, 6, 7, 8] 
```
