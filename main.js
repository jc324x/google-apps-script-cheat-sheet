// v0.3-beta

function test() {}
Logger.log("Start");

// | | General
// | | - Array
// |*| -- Check Array For a Value
// |*| -- Remove Duplicates from Array
// |*| -- Remove Empty Elements from Array
// |*| -- Get Count of Values in Array
// | | -- Intersect of Two Arrays
// | | -- Compare Two Arrays
// | | -- Array as Delimited String
// | | -- Array as Modified Delimited String
// | | - Two-Dimensional Array
// | | -- Flatten Two-Dimensional Array
// | | - Array of Objects
// | | -- Sort Array of Objects by Property or Properties
// | | -- Find Object in Array of Objects
// | | -- Find Earliest or Latest Object in Array of Objects by Timestamp
// | | -- Filter Array of Objects by Property Value or Values
// | | -- Unify Properties for Array of Objects
// | | - Object
// | | -- Array of Matching Property Values
// | | -- Merge Objects
// | | - Dates and Times
// | | -- Formatted Timestamps
// | | -- Date Object from String
// | | -- Match a Date to a Date Range
// | | Drive
// | | - Folders
// | | -- Create or Verify Folder Path
// | | -- Last Folder in Folder Path
// | | -- Array of All Folders
// | | --- All Folders in a Folder
// | | --- All Folders at Root
// | | --- All Folders in Drive
// | | -- Array of All Folder Names
// | | -- Find a Folder
// | | --- Find a Folder in a Folder
// | | --- Find a Folder at Root
// | | --- Find a Folder in Drive
// | | -- Create or Verify Folders
// | | --- Create or Verify Folders in a Folder
// | | --- Create or Verify Folders at Root
// | | - Files
// | | -- Array of All Files
// | | --- All Files in a Folder
// | | --- All Files at Root
// | | --- All Files in Drive
// | | -- Array of All File Names
// | | -- Find a File
// | | --- Find a File in a Folder
// | | --- Find a File at Root
// | | --- Find a File in Drive
// | | --- Find a File at Path
// | | -- Copy a File to a Folder
// | | -- Move a File to a Folder
// | | - Files and Folders
// | | -- Rename a File or Folder
// | | -- Parent Folder of a File or Folder
// | | -- Zip All Files in a Folder
// | | JSON
// | | -- Object From URL
// | | -- Object From File
// | | -- Object From URL or File
// | | UI
// | | -- On Open
// | | -- Set Configuration
// | | -- Show Configuration
// | | -- Clear Configuration
// | | -- Run Script
// | | Sheets
// | | - Managing Spreadsheet Files
// | | -- Create or Verify Spreadsheet
// | | --- Create or Verify Spreadsheet in a Folder
// | | --- Create or Verify Spreadsheet at Root
// | | -- Id of Active Spreadsheet
// | | -- Open File as Spreadsheet
// | | - Utility Functions for Sheets
// | | -- Convert Column Number to a Letter
// | | -- Convert Column Letter to a Number
// | | -- Replicating Import Range
// | | -- Evaluating True and False
// | | - Object
// | | -- Object from Range 
// | | -  Array of Objects
// | | -- Utility Functions for Array of Objects
// | | --- Header Range
// | | --- Value Range
// | | --- Header Values
// | | --- Values by Row
// | | -- Array of Objects from Sheet
// | | -- Array of Objects from Range
// | | - Array 
// | | -- Array of Values for Column
// | | --- For Header Value
// | | --- For Column Number
// | | --- For Range Object 
// | | Docs
// | | - Managing Document Files
// | | -- Create or Verify Document
// | | --- Create or Verify Document in a Folder
// | | --- Create or Verify Document at Root
// | | -- Id of Active Document
// | | -- Open File as Document
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

// Future Additions: 
// * Timestamp on Cell Change
// * Copy Formulas Down
// * Create Multidimensional Array of Values
// * Convert JSON to Sheet
// * 5 Minute Timer Management
// * Shade Cells in Document Tables and Spreadsheets

// Possible Additions:
// * Multidimensional Array from Array of Objects
// * Count of Value in Array of Objects
// * Recursive Moving / Copying Folders

// General

// - Array 

// -- Check Array For a Value

/**
 * Returns true if the value is in the array.
 *
 * @param {Array} arr
 * @param {*} val
 * @returns {boolean}
 */

function checkArrayForValue(arr, val) { 
  return arr.indexOf(val) > -1; 
}

// var arr_cafv = [1, 2, 3, 4];
// Logger.log(checkArrayForValue(arr_cafv, 5)); // false

// -- Remove Duplicates from Array

/**
 * Returns an array with no duplicate values.
 *
 * @param {Array} arr 
 * @returns {Array}
 */

function removeDuplicatesFromArray(arr) {
  var result = [];
  var check  = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (check[item] !== 1) {
      check[item] = 1;
      result.push(item);
    }
  }
  return result;
}

// var arr_rdfa = [1, 2, 3, 1, 2, 3, 4,];
// Logger.log(removeDuplicatesFromArray(arr_rdfa)); // [1, 2, 3, 4]

// -- Remove Empty Elements from Array

/**
 * Returns an array with no empty elements.
 *
 * @param {*} x
 * @returns {Array}
 */

function removeEmptyElementsFromArray(x) {
  return (x !== (undefined || ''));
}

// var arr_reefa = ["a",,"b",,,"c"];
// Logger.log(arr_reefa.filter(removeEmptyElementsFromArray)); // ["a", "b", "c"]

// -- Get Count of Values in Array

/**
 * Returns an array of objects. Objects have two properties, count and value.
 *
 * @param {Array} arr
 * @property {value} a value found in the array
 * @property {count} count of the value in the array
 * @returns {Object[]}
 */

function countOfValuesInArray(arr) {
  var result = [];
  var copy   = arr.slice(0);
  for (var i = 0; i < arr.length; i++) {
    var myCount = 0;  
    for (var w = 0; w < copy.length; w++) {
      if (arr[i] == copy[w]) {
        myCount++;
        delete copy[w];
      }
    }
    if (myCount > 0) {
      var obj   = {};
      obj.value = arr[i];
      obj.count = myCount;
      result.push(obj);
    }
  }
  return result;
}

// var arr_covia  = ["a", "b", "c", "a", "b", "c", "a"];
// Logger.log(countOfValuesInArray(arr_covia)); // [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}]

// -- Intersect of Two Arrays

/**
 * Returns an array of the elements in both arrays.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {Array}
 */

// function intersectOfTwoArrays()

function intersectOfTwoArrays(arrA, arrB) {
  var result = [];
  var a      = 0;
  var b      = 0;
  while( a < arrA.length && b < arrB.length ) {
    if (arrA[a] < arrB[b]) a++;
    else if (arrA[a] > arrB[b]) b++;
    else {
      result.push(arrA[a]);
      a++;
      b++;
    }
  }
  return result;
}

// var arrA_iota = [1, 2, 3];
// var arrB_iota = [3, 4, 5];
// Logger.log(intersectOfTwoArrays(arrA_iota, arrB_iota)); // [3]

// -- Compare Two Arrays 

/**
 * Returns true if both arrays have the same elements in the same order.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {boolean}
 */

function compareTwoArrays(arrA, arrB) {
  if(arrA.length !== arrB.length) return false;
  for(var i = arrA.length; i--;) {
    if(arrA[i] !== arrB[i]) return false;
  }
  return true;
}

// var arrA_cta = [1, 2, 3, 4, 5];
// var arrB_cta = [1, 2, 3, 4, 5];
// var arrC_cta = ["a", "b", "c", "d", "e"];
// Logger.log(compareTwoArrays(arrA_cta, arrB_cta)); // true
// Logger.log(compareTwoArrays(arrA_cta, arrC_cta)); // false

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
  var temp   = removeDuplicatesFromArray(arr);
  for (var i = 0; i < temp.length; i++) {
    if (i < temp.length) result += temp[i] + delim + " ";
    else if (i === temp.length) result += temp[i];
  }
  return result;
}

// var arr_da = ["c@example.com", "b@example.com", "a@example.com"];
// Logger.log(arrayAsDelimitedString(arr_da, ",", true)); // "c@example.com, b@example.com, a@example.com"

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

// function arrayAsModifiedDelimitedString(arr, delim)

function arrayAsModifiedDelimitedString(arr, delim, mod) {
  var result = "";
  var temp   = removeDuplicatesFromArray(arr);
  for (var i = 0; i < temp.length; i++) {
    if (i < temp.length) result += temp[i] + mod + delim + " "; 
    else if (i === temp.length) result += temp[i] + mod + delim;
  }
  return result;
}

// var arr_aamds = ["x", "z", "y"];
// Logger.log(arrayAsModifiedDelimitedString(arr_aamds, ",", "@example.com")); // "x@example.com, y@example.com, z@example.com"

// - Two-Dimensional Array

// -- Flatten Two-Dimensional Array

/**
 * Returns an array containing all values in a two-dimensional array.
 *
 * @param {Array[]} twoDArr
 * @returns {Array} 
 */

// flattenTwoDimensionalArray(arr) 

function flattenTwoDimensionalArray(arr) {
  var result = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  return result;
}

// var sheet_ftma = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var val_fma   = sheet_fma.getRange("G2:H5").getValues();
// Logger.log(flattenTwoDArr(val_fma).sort()); // [1, 2, 3, 4, 5, 6, 7, 8]

// - Array of Objects

var ex_arrObj = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
];

// Logger.log(ex_arrObj);


// -- Sort by Property or Properties

/**
 * Returns an array of objects sorted by a single property value.
 *
 * @param {string} prop
 * @returns {Object[]}
 */

// sortArrayOfObjects()

function sortArrayOfObjects(prop) {
  var sortOrder = 1;
  if(prop[0] === "-") {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  return function (a,b) {
    var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    return result * sortOrder;
  };
}

// Logger.log(ex_arrObj.sort(sortArrayOfObjects("a"))); 
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}]

/**
 * Returns an array of objects sorted by multiple property values.
 * @param {...string}
 * @returns {Object[]}
 */

// sortArrayOfObjectsMulti()

function sortArrayOfObjectsMulti() {
  var props = arguments;
  return function (obj1, obj2) {
    var i = 0, result = 0, numberOfProperties = props.length;
    while(result === 0 && i < numberOfProperties) {
      result = sortArrayOfObjects(props[i])(obj1, obj2);
      i++;
    }
    return result;
  };
}

// Logger.log(ex_arrObj.sort(sortArrayOfObjectsMulti("b", "c"))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}]

// NAME
// -- Find Object With Unique Property Value

/**
 * Returns the first object in an array of objects with the key value pair.
 *
 * @param {Object[]} arrObj
 * @param {string} pQuery
 * @param {string} val
 * @param {string} [pReturn]
 * @returns {Object}
 */

function findObjectInArrayOfObjects(arrObj, pQuery, val, pReturn) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(pQuery) && prop == pQuery && obj[prop] == val) {
        if (pReturn !== undefined) {
          return obj[pReturn];
        } else {
          return obj;
        }
      }
    }
  }
}

// Logger.log(findObjectInArrayOfObjects(ex_arrObj, "a", 1000)); // {a=1000.0, b=1.0, c=5.0}
// Logger.log(findObjectInArrayOfObjects(ex_arrObj, "c", 500, "a")); // 10

// -- Find Earliest or Latest Object by Timestamp

/**
 * Returns the object with the oldest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

// earliestTimestampObjectInArrayOfObjects

function earliestTimestampObjectInArrayOfObjects(arrObj){
  if (arrObj.length >= 2) {
    var sorted = arrObj.sort(function(a,b){
      return new Date(a.Timestamp) - new Date(b.Timestamp);
    });
    return sorted[0];
  } else {
    return arrObj[0];
  }
}

// var sheet_fe  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_fe = arrObjFromRange(sheet_fe, "J1:K4");
// Logger.log(firstObjectInArrayOfObjects(arrObj_fe)); // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A}

/**
 * Returns the object with the latest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

// latestTimestampObjectInArrayOfObjects
function lastObjectInArrayOfObjects(arrObj) {
  if (arrObj.length >= 2) {
    var sorted = arrObj.sort(function(a,b){
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });
    return sorted[0];
  } else {
    return arrObj[0];
  }
} 

// var sheet_le  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_le = arrObjFromRange(sheet_le, "J1:K4");
// Logger.log(lastObjectInArrayOfObjects(arrObj_le)); // {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C}

// -- Filter by Property Value or Values

/**
 * Returns an array of objects containing matching objects.
 *
 * @param {Object} arrObj
 * @param {string} pQuery
 * @param {string || string[]} valOrValues
 * @returns {Object[]}
 */

// filterArrayOfObjects(arrObj, prop, val)
// filterArrayOfObjectsMulti(arrObj, prop, arr) | new

function filterArrayOfObjects(arrObj, pQuery, valOrValues) {
  var result = [];
  if (Array.isArray(valOrValues)) {
    for (var i = 0; i < valOrValues.length; i++) {
      var val = valOrValues[i]; 
      for (var j = 0; j < arrObj.length; j++) {
        if (arrObj[j][pQuery] == val) result.push(arrObj[j]);
      }
    } 
  } else {
    for (var k = 0; k < arrObj.length; k++) {
      if (arrObj[k][pQuery] == valOrValues) result.push(arrObj[k]);
    }
  }
  return result;
}

// Logger.log(filterArrayOfObjects(ex_arrObj, "a", 10)); // [{a=10.0, b=2.0, c=500.0}]
// Logger.log(filterArrayOfObjects(ex_arrObj, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}]

// -- Unify Properties for Array of Objects 

/**
 * Returns an array of objects, with an additional property value added to each matching object.
 *
 * @param {Object[]} arrObj
 * @param {string[]} arrProp
 * @param {string} newProp 
 * @returns {Object[]}
 */

// function unifyPropertyInArrayOfObjects(arrObj, arr, prop){

function unifyPropertyInArrayOfObjects(arrObj, arrProp, newProp){
  for (var i = 0; i < arrObj.length; i++){
    var obj = arrObj[i];
    for (var h = 0; h < arrProp.length; h++) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop == arrProp[h] && obj[prop] !== ""){
              obj[newProp] = obj[prop];
        }
      }
    }
  }
  return arrObj;
}

var arrObj_upfao  = [
  {x: 123},
  {y: 234},
  {z: 345},
];

// Logger.log(unifyPropertyInArrayOfObjects(arrObj_upfao, ["x","y","z"], "new"));
// [{new=123.0, x=123.0}, {new=234.0, y=234.0}, {new=345.0, z=345.0}]

// - Object

// -- Array of Matching Property Values 

/**
 * Returns an array of matching properties. 
 *
 * @requires intersectOfTwoArrays() 
 * @param {Object} obj
 * @param {string[]} props
 * @returns {Array}
 */

// function returnValuesFromObject(obj, arr)

function arrayOfObjectValues(obj, arrProp) {
  var result = [];
  var keys   = intersectOfTwoArrays(Object.keys(obj), arrProp);
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

// var arr_aoov = ["a", "b", "d"];
// Logger.log(arrayOfObjectValues(obj_aoov, arr_aoov)); // [1, 2]

// Merge Objects

/**
 * Returns an object with the values of the argument objects.
 * If multiple objects have the same property value, the last value set is retained. 
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

// var objA_mo = {
//  a: 1, 
//  b: 2, 
//  c: 3
// }; 

// var objB_mo = {
//  c: 4,
//  d: 5, 
//  e: 6, 
//  f: 7
// }; 

// Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0}

// - Dates and Times

// -- Formatted Timestamps

/**
 * Returns a string of today's date formatted "month-day-year".
 *
 * @returns {string}
 */

function timestampMMDDYYYY() {
  var now  = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getYear() ];
  return date.join("-");
}

// Logger.log(timestampMMDDYYYY()); // "4-24-2017"

/**
 * Returns a string of today's date formatted "year-month-day".
 *
 * @returns {string}
 */

function timestampYYYYMMDD() {
  var now  = new Date();
  var date = [now.getYear(), now.getMonth() + 1, now.getDate()];
  return date.join("-");
} 

// Logger.log(timestampYYYYMMDD()); // 2017-09-29

/**
 * Returns a string of the current time formatted "24 hour:minute:second".
 *
 * @returns {string}
 */

function timestampHHMMSS(){
  var now  = new Date();
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    for ( var i = 1; i < 3; i++ ) {
      if ( time[i] < 10 ) {
        time[i] = "0" + time[i];
      }
      return time.join(":");
    }
}

// Logger.log(timestampHHMMSS()); // "20:43:40"

/**
 * Returns a string of today's date and the current time formatted "year-iday-year hour:minute:second AM/PM"
 *
 * @returns {string}
 */

function timestampYYYYMMDDHHMMSSAMPM() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var ampm = ( time[0] < 12 ) ? "AM" : "PM";
  time[0]  = ( time[0] <= 12 ) ? time[0] : time[0] - 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date.join("-") + " " + time.join(":") + " " + ampm;
}

// Logger.log(timestampYYYYMMDDHHMMSSAMPM()); // "4-24-2017 8:43:40 PM"

// -- Date Object from String

/**
 * Returns a new date object from a string formatted year-month-date. 
 *
 * @param {string} str
 * @returns {Date}
 */

// function dateObjectFromString(val) {

function dateObjectFromString(str) {
  var split  = str.split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  return new Date (months[(split[1] - 1)] + " " + split[2] + ", " + split[0]);
}

// Logger.log(dateObjectFromString("2017-04-24")); // Mon Apr 24 00:00:00 GMT-05:00 2017

// -- Match a Date to Date Range

/**
 * Returns a value associated with a date range.
 *
 * @param {Object[]} arrObj
 * @param {string=new Date()} optDate - Date to match.
 * @namespace
 * @property {string} start           - Starting date.
 * @property {string} end             - Ending date.
 * @property {*} value                - The value to return for a matching date.
 * @returns {*}
 */

// matchDateARangeOfDates()

// function matchDateToRange(arrObj, val)

function matchDateToRange(arrObj, optDate) {
  var date = new Date();
  if (optDate !== undefined) {
    date = new Date(optDate);
  }
  for (i = 0; i < arrObj.length; i++) {
    var start = new Date(arrObj[i].start);
    var end   = new Date(arrObj[i].end);
    if (date >= start && date <= end ) {
      return arrObj[i].value;
    }
  }
}

// var quarterDates = [
//   {start: "08/01/2016", end: "10/28/2016", value: 1},
//   {start: "11/02/2016", end: "01/09/2017", value: 2},
//   {start: "01/15/2017", end: "03/19/2017", value: 3},
//   {start: "03/21/2017", end: "06/15/2017", value: 4},
//   {start: "06/16/2017", end: "07/30/2017", value: "summer vacation"}
// ];

// Logger.log(matchDateRange(quarterDates)); // "summer vacation" (06/25/2017)
// Logger.log(matchDateRange(quarterDates, "08/02/2016")); // 1 

// Drive

// - Folders

// -- Create or Verify Folder Path

/**
 * Returns a folder at the end of a folder path.
 * Folders in the path are created if they don't already exist.
 *
 * @param {string} path
 * @returns {Folder}
 */

// function createOrVerifyFolderPath()

function createOrVerifyFolderPath(path) {
  if (path.charAt(0) === "/") {
    path = path.substr(1);
  }
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

// Logger.log(createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/folders/A/B/C")); // C
// Logger.log(createOrVerifyFolderPath("/google-apps-script-cheat-sheet-demo/folders/A/B/C")); // C

// -- Last Folder in Folder Path 

/**
 * Returns the last folder in a folder path.
 *
 * @param path
 * @returns {Folder}
 */

// findFolderAtPath
function findFolderAtPath(path) {
  if (path.charAt(0) === "/") {
    path = path.substr(1);
  }
  var fi;
  var split = path.split("/");
  var fldr;
  for (i = 0; i < split.length; i++) {
    if (i === 0) {
      fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
      if (fi.hasNext()) {
        fldr = fi.next();
      } 
    } else if (i >= 1) {
        fi = fldr.getFoldersByName(split[i]);
        if (fi.hasNext()) {
          fldr = fi.next();
        } 
    }
  } 
  return fldr;
}

// Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B")); // B
// Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B/C/D/E/F/G")); // C

// -- Array of All Folders 

// --- All Folders in a Folder 

/**
 * Returns an array of all folders in a folder.
 *
 * @param {Folder} fldr
 * @returns {Folder[]}
 */

// arrayOfFoldersInAFolder(fldr)

function arrayOfFoldersInFolder(fldr) {
  var fi  = fldr.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var _fldr = fi.next();
    arr.push(_fldr);
  } 
  return arr;
}

// Logger.log(arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/"))); // [A]

// --- All Folders at Root

/**
 * Returns an array of all folders in the root of the user's Drive.
 *
 * @returns {Folder[]}
 */

function arrayOfRootFolders() {
  var fi     = DriveApp.getRootFolder().getFolders();
  var result = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    result.push(fldr);
  } 
  return result;
}

// Logger.log(arrayOfRootFolders());

// --- All Folders in Drive

/**
 * Returns an array of all folders in the user's Drive.
 *
 * @returns {Folder[]}
 */

function arrayOfFoldersInDrive() {
  var fi  = DriveApp.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    arr.push(fldr);
  } 
  return arr;
}

// Logger.log(arrayOfFoldersInDrive());

// -- Array of Folder Names

/**
 * Returns an array of folder names.
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

// var arr_aofldrn  = arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B"));
// Logger.log(arrayOfFolderNames(arr_aofldrn)); // [C]

// -- Find a Folder

// --- Find a Folder in a Folder

/**
 * Returns a folder.
 *
 * @requires arrayOfFoldersInFolder() 
 * @requires arrayOfFolderNames() 
 * @requires checkArrayForValue()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Folder}
 */

// findFolderInFolder()

function findFolderInFolder(fldr, name) {
  var fldrs = arrayOfFoldersInFolder(fldr);
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(names, name)) {
    return fldr.getFoldersByName(name).next();
  }
}

// var fldr_ffi = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(findFolderInFolder(fldr_ffi, "A")); // A

// --- Find a Folder at Root

/**
 * Returns a folder at the root of the user's Drive.
 *
 * @requires arrayOfRootFolders()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @param {string} name
 * @returns {Folder}
 */

function findFolderAtRoot(name) {
  var fldrs = arrayOfRootFolders();
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(names, name)) {
    return DriveApp.getRootFolder().getFoldersByName(name).next();
  }
}

// Logger.log(findFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

// --- Find a Folder in Drive

/**
 * Returns the first matching folder in Drive.
 *
 * @param {string} name
 * @returns {Folder}
 */

function findFolderInDrive(name) {
  var fi = DriveApp.getFoldersByName(name);
  while (fi.hasNext()){
    return fi.next();
  }
}

// Logger.log(findFolderInDrive("folders")); // folders

// -- Create or Verify Folders

// --- Create or Verify Folders in a Folder

/**
 * Returns a folder. 
 * Creates folders within a folder if they don't already exist.
 *
 * @requires arrayOfFoldersInFolder()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @param {Folder} fldr
 * @param {string[]} names
 * @returns {Folder}
 */

// function createOrVerifyFoldersIn(fldr, arr)

function createOrVerifyFoldersInFolder(fldr, arr) {
  var fldrs = arrayOfFoldersInFolder(fldr);
  var names = arrayOfFolderNames(fldrs);
  for (i = 0; i < arr.length; i++) {
    if (!(checkArrayForValue(names, arr[i]))) {
      fldr.createFolder(arr[i]);
    }
  }
  return fldr;
}

// var fldr_covfif = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(createOrVerifyFoldersInFolder(fldr_covfif, ["X", "Y", "Z"])); // folders
// Logger.log(arrayOfFoldersInFolder(fldr_covfif)); // [A,X,Y,Z]
  
// --- Create or Verify Folders at Root

/**
 * Returns the root folder.
 * Creates folders at root if they don't exist already.
 *
 * @param {string[]} names
 * @returns {Folder}
 */

function createOrVerifyFoldersAtRoot(arr) {
  var rfs   = arrayOfRootFolders();
  var names = arrayOfFolderNames(rfs);
  for (i = 0; i < arr.length; i++) {
    if (!(checkArrayForValue(names, arr[i]))) {
      DriveApp.createFolder(arr[i]);
    }
  } 
  return DriveApp.getRootFolder();
}

// - Files

// checkForExFile creates an empty example file

function checkForExFile() {
  var fldr = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/files");
  var file = findFileInFolder(fldr, "example-file");
  if (!(file)){fldr.createFile("example-file", "example");}
  return findFileInFolder(fldr, "example-file");
}

// Logger.log(checkForExFile());

// -- Array of Files 

// --- Array of Files in a Folder

/**
 * Returns an array of files found at the top level of a folder.
 *
 * @param {Folder} fldr
 * @returns {File[]}
 */

// arrayOfFilesInFolder()

function arrayOfFilesInFolder(fldr) {
  var result = [];
  var fi     = fldr.getFiles();
  while (fi.hasNext()) {
    var file = fi.next();
    result.push(file);
  } 
  return result;
}

// var fldr_fin = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// Logger.log(arrayOfFilesInFolder(fldr_fin)); // [example-file]

// --- All of Files at Root

/**
 * Returns an array of all files at the root of a user's Drive.
 * Note: Please don't actually use this in production. 
 *
 * @returns {File[]}
 */

function arrayOfRootFiles() {
  var result = [];
  var rf     = DriveApp.getRootFolder();
  var fi     = rf.getFiles();
  while (fi.hasNext()) {
    var file = fi.next();
    result.push(file);
  } 
  return result;
}

// Logger.log(arrayOfRootFiles());

// --- All of All Files in Drive

/**
 * Returns an array of all files in the user's Drive.
 * Note: Please don't actually use this in production. 
 *
 * @returns {File[]}
 */

function arrayOfFilesInDrive() {
  var result = [];
  var fi     = DriveApp.getFiles();
  while (fi.hasNext()) {
    var file = fi.next();
    result.push(file);
  } 
  return result;
}

// Logger.log(arrayOfFilesInDrive());

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

// var fldr_aofilen = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// var arr_aofilen  = arrayOfFilesInFolder(fldr_aofilen);
// Logger.log(arrayOfFileNames(arr_aofilen)); // [example-file]

// -- Find a File

// --- Find a File in a Folder

/**
 * Returns a file found at the top level of a folder. 
 *
 * @requires filesIn()
 * @requires fileNames()
 * @requires checkArrayForValue()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {File}
 */

function findFileInFolder(fldr, name) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

// var fldr_ffi = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// Logger.log(findFileInFolder(fldr_ffi, "example-file")); // example-file

// --- Find a File at Root

/**
 * Returns a file found at the root of a user's Drive.
 *
 * @requires rootFiles()
 * @requires fileNames()
 * @requires checkArrayForValue()
 * @param {string} name
 * @returns {File}
 */

function findFileAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var files = arrayOfRootFiles();
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, name)) {
    var file = rf.getFilesByName(name).next();
    return file;
  }
}

// --- Find a File in Drive

/**
 * Returns the first matching file found in the user's Drive.
 *
 * @param {string} name
 * @returns {File}
 */

function findFileInDrive(name) {
  var fi = DriveApp.getFilesByName(name);
  while (fi.hasNext()){
    var file = fi.next();
    return file;
  }
}

// Logger.log(findFileInDrive("example-file")); // example-file

// --- Find at File at Path

/**
 * Returns the file at the end of a path.
 *
 * @param {string} path
 * @returns {File}
 */

function findFileAtPath(path) {
  if (path.charAt(0) === "/") {
    path = path.substr(1);
  }
  var arr  = path.split("/");
  var file = arr[arr.length -1];
  var fldr, fi;
  for (i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      fi = DriveApp.getRootFolder().getFoldersByName(arr[i]);
      if (fi.hasNext()) {
        fldr = fi.next();
      } else { 
        return null;
      }
    } else if (i >= 1) {
        fi = fldr.getFoldersByName(arr[i]);
        if (fi.hasNext()) {
          fldr = fi.next();
        } else { 
          return null;
        }
    }
  } 
  return findFileInFolder(fldr, file);
} 

// Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-file"));

// -- Copy a File to a Folder

/**
 * Returns the copied file.
 *
 * @requires findFileInFolder()
 * @param {File} file
 * @param {Folder} fldr
 * @returns {File}
 */

// copyFileToFolder

function copyFileToFolder(file, fldr) {
  var name = file.getName();
  var dest = findFileInFolder(fldr, name);
  if (dest === undefined) file.makeCopy(name, fldr);
  return findFileInFolder(fldr, name);
}

// var fldr_cftf = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/files/copied");
// var file_cftf = findFileInDrive("example-file");
// Logger.log(copyFileToFolder(file_cftf, fldr_cftf)); // example-file

// -- Move a File to a Folder 

/**
 * Returns the copied file from its new destination.
 *
 * @requires findFileInFolder()
 * @param {File} file
 * @param {Folder}  fldr
 * @returns {File}
 */

// moveFileToFolder

function moveFileToFolder(file, fldr) {
  var name = file.getName();
  var dest = findFileInFolder(fldr, name);
  if (dest === undefined) file.makeCopy(name, fldr);
  var result = findFileInFolder(fldr, name);
  if (result !== undefined) file.setTrashed(true);
  return result;
}

// var fldr_mftf1 = findFolderAtPath("google-apps-script-cheat-sheet-demo/files/copied");
// var file_mftf  = findFileInFolder(fldr_mftf1, "example-file");
// var fldr_mftf2 = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/files/moved");
// Logger.log(moveFile(file_mftf, fldr_mftf2)); // example-file

// - Files and Folders

// -- Rename a File or Folder

/**
 * Returns a renamed file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @param {string} name
 * @returns {File || Folder}
 */

// renameFileOrFolder

function renameFileOrFldr(file_fldr, name) {
  file_fldr.setName(name);
  return file_fldr;
} 

// var fldr_rfof = findFolderAtPath("google-apps-script-cheat-sheet-demo/files/moved");
// var file_rfof = findFileInFolder(fldr_rfof, "example-file");
// Logger.log(renameFileOrFldr(file_rfof, "modified-example-file")); // modified-example-file

// -- Parent Folder of a File or Folder 

/**
 * Returns the parent folder or a file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @returns {Folder}
 */

// parentFolderOfFileOrFolder()

function parentFolderOfFileOrFolder(file_fldr) {
  var fi = file_fldr.getParents();
  return fi.next();
}

// var file_pfofof = findFileInDrive("example-file");
// Logger.log(parentFolderOfFileOrFolder(file_pfofof)); // files

// -- Zip All Files in a Folder

/**
 * Returns a zipped file. 
 *
 * @param {Folder} fldr
 * @param {string} name
 * @returns {File}
 */

function zipFilesInFolder(fldr, name) {
  var blobs = [];
  var files = filesIn(fldr);
  for (var i = 0; i < files.length; i++) {
    blobs.push(files[i].getBlob());
  } 
  var zips = Utilities.zip(blobs, name);
  fldr.createFile(zips);
  return findFileInFolder(fldr, name);
}

// var fldr_zfif = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/zips");
// fldr_zfif.createFile("A","hello, world!");
// fldr_zfif.createFile("B", "hello again, world!");
// fldr_zfif.createFile("C", "world! hi!");
// var zips_zfif = zipFilesInFolder(fldr_zfif, "Archive");

// JSON

function jsonExFile() {
  var fldr = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/json");
  var file = findFileInFolder(fldr, "example-json");
  if (!(file)) {
    var json = objectFromUrlJSON("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
    var text = JSON.stringify(json);
    var ex = fldr.createFile('example-json', text);
  }
  return findFileInFolder(fldr, "example-json");
}

jsonExFile();

// -- Object From URL

/**
 * Returns an object from a URL.
 *
 * @param {string} url
 * @returns {Object}
 */

function objectFromUrlJSON(url) {
  var rsp  = UrlFetchApp.fetch(url);
  var data = rsp.getContentText();
  return JSON.parse(data);
} 

// var obj_ofu = objectFromUrlJSON("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
// Logger.log(JSON.stringify(obj_ofu));

// -- Object From File

/**
 * Returns an object from a file in Drive.
 *
 * @param {File} file
 * @returns {Object}
 */

function objectFromFileJSON(file) {
  var data = file.getBlob().getDataAsString();
  return JSON.parse(data);
} 

// var file_off = findFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json");
// var obj_off  = objectFromFileJSON(file_off);
// Logger.log(JSON.stringify(obj_off));

// -- Object From URL or File

/**
 * Returns an object from a URL or from a file in Drive.
 *
 * @param {string || File} input
 * @returns {Object}
 */

function objectFromUrlOrFileAtPath(input) {
  var regExp = new RegExp("^(http|https)://");
  // var test   = regExp.test(input);
  if (regExp.test(input)) {
    return objectFromUrlJSON(input);
  } else {
    var file = findFileAtPath(input); 
    Logger.log(file.getName());
    return objectFromFileJSON(file);
  }
}

// Logger.log(JSON.stringify(objectFromUrlOrFileAtPath("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json")));
// Logger.log(JSON.stringify(objectFromUrlOrFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json")));

// UI

// -- On Open
// FLAG

/**
 * @requires global ui / uProp vlues 
 * Creates a menu with that allows the user to set the configuration options and run the script.
 */

// var ui    = SpreadsheetApp.getUi(); // || DocumentApp.getUi();
// var uProp = PropertiesService.getUserProperties();

// function onOpen() {
//   ui.createMenu("Easy CSV")
//   .addItem("Run Script", "runScript")
//   .addSeparator()
//   .addSubMenu(ui.createMenu("Configuration")
//     .addItem("Set Configuration", "setConfiguration")
//     .addItem("Show Configuration", "showConfiguration")
//     .addItem("Clear Configuration", "clearConfiguration"))
//   .addToUi();
// }

// FLAG
// -- Set Configuration

/**
 * @requires global ui / uProp values
 * Parses JSON at the value given and sets config equal to the stringified result.
 */

function setConfiguration() {
  var uiPrompt = ui.prompt(
      "Please enter a URL or a path to a file in Drive:",
      ui.ButtonSet.OK_CANCEL);
  var button = uiPrompt.getSelectedButton();
  if (button == ui.Button.OK) {
    var text   = uiPrompt.getResponseText();
    var config = JSON.stringify(objFromUrlOrFile(text));
    uProp.setProperty("config", config);
  } 
}

// -- Show Configuration

/**
 * @requires global ui / uProp values
 * Displays an alert of the config value or a displays a message if config is unset.
 */

function showConfiguration() {
  var config = uProp.getProperty("config");
  if (config) {
    ui.alert(config);
  } else {
    ui.alert("No configuration set.");
  }
}

// -- Clear Configuration

/**
 * @requires global ui / uProp values
 * Clears out all user properties.
 */

function clearConfiguration() {
  uProp.deleteAllProperties();
  ui.alert("All settings cleared.");
}

// FLAG
// -- Run Script

// Sheets

// - Managing Spreadsheet Files

// -- Create or Verify Spreadsheet 

// --- Create or Verify Spreadsheet in a Folder

/**
 * Returns a spreadsheet. 
 * This creates the spreadsheet if it does not already exist.
 *
 * @requires filesIn()
 * @requires fileNames()
 * @requires checkArrayForValue()
 * @requires moveFile()
 * @requires findFileInFolder()
 * @requires openFileAsSpreadsheet()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createOrVerifySpreadsheetInFolder(fldr, name) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (!(checkArrayForValue(names, name))) {
    var ss   = SpreadsheetApp.create(name).getId();
    var file = DriveApp.getFileById(ss);
    moveFileToFolder(file, fldr);
  }
  return openFileAsSpreadsheet(findFileInFolder(fldr, name));
}

// var fldr_cvssi = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/sheets");
// Logger.log(createOrVerifySpreadsheetInFolder(fldr_cvssi, "example-sheet")); // example-sheet

// --- Create or Verify Spreadsheet at Root

/**
 * Returns a spreadsheet. 
 * This creates the spreadsheet if it does not already exist.
 *
 * @requires rootFiles()
 * @requires fileNames()
 * @requires checkArrayForValue() 
 * @requires findFileAtRoot() 
 * @requires openFileAsSpreadsheet() 
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createOrVerifySpreadsheetAtRoot(name) {
  var files = rootFiles();
  var names = fileNames(files);
  if (!(checkArrayForValue(names, name))) {
    var ss = SpreadsheetApp.create(name);
  }
  return openFileAsSpreadsheet(findFileAtRoot(name));
}

// -- Id of Active Spreadsheet 

/**
 * Returns the Id of the active spreadsheet.
 *
 * @returns {string}
 */

function idOfActiveSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getId();
  // var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  // return id;
}

// Logger.log(idOfActiveSpreadsheet());

// -- Open File as Spreadsheet

/**
 * Returns a spreadsheet. 
 *
 * @param {string} 
 * @returns {Spreadsheet}
 */

function openFileAsSpreadsheet(file) {
  var id = file.getId();
  return SpreadsheetApp.openById(id);
  // var ss = SpreadsheetApp.openById(id);
  // return ss;
} 

// var fldr_ofas = findFolderAtPath("google-apps-script-cheat-sheet-demo/sheets")
// var file_ofas = findFileInFolder(fldr_ofas, "example-sheet");
// Logger.log(openFileAsSpreadsheet(file_ofas));

// - Utility Functions for Sheets

// -- Convert Column Number to a Letter 

/**
 * Returns the column number as a alphabetical column value.
 * Columns are indexed from 1, not from 0.
 * "CZ" (103) is the highest supported value.
 *
 * @param {number} number
 * @returns {string}
 */

function columnNumberAsLetter(number) {
  var num = number - 1, chr;
  if (num <= 25) {
    chr = String.fromCharCode(97 + num).toUpperCase();
    return chr;
  } else if (num >= 26 && num <= 51) {
    num -= 26;
    chr = String.fromCharCode(97 + num).toUpperCase();
    return "A" + chr;
  } else if (num >= 52 && num <= 77) {
    num -= 52;
    chr = String.fromCharCode(97 + num).toUpperCase();
    return "B" + chr;
  } else if (num >= 78 && num <= 103) {
    num -= 78;
    chr = String.fromCharCode(97 + num).toUpperCase();
    return "C" + chr;
  }
}

// function ex_cnal() {
//  for (var i = 1; i <= 104; i++) {
//    var j = columnNumberAsLetter(i);
//    Logger.log(i + " - " + j);
//  }
// }

// ex_cnal(); // 1 - A ... CZ - 104

// -- Convert Column Letter to a Number

/**
 * Returns an alphabetical column value as a number.
 *
 * @param {string} column
 * @returns {number}
 */

function columnLetterAsNumber(column) {
  var col = column.toUpperCase(), chr0, chr1;
  if (col.length === 1)  {
    chr0 = col.charCodeAt(0) - 64;
    return chr0;
  } else if (col.length === 2) {
    chr0 = (col.charCodeAt(0) - 64) * 26;
    chr1 = col.charCodeAt(1) - 64;
    return chr0 + chr1;
  }
}

// function ex_clan() {
//   var abc;
//  for (var i = 0; i <= 25; i++) {
//    abc = String.fromCharCode(97 + i).toUpperCase();
//    Logger.log(abc + " - " + columnLetterAsNumber(abc));
//  }
//  for (var j = 26; j <= 51; j++) {
//    abc = "A" + String.fromCharCode(97 - 26 + j).toUpperCase();
//    Logger.log(abc + " - " + columnLetterAsNumber(abc));
//  }
// }

// ex_clan();

// -- Replicating Import Range 

/**
 * Replicating import range in Google Apps Script.
 * Requires a trigger to function.
 * importRange : From spreadsheet : On edit
 *
 */

function importRange() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var get   = sheet.getRange("A2:A5").getValues();
  var set   = sheet.getRange("B2:B5").setValues(get);
}

// -- Evaluating True and False

/**
 * Returns true or false given truthy or falsy values.
 * true: 1, t*, T*, y*, Y*
 * false: 0, !t, || !y
 *
 * @param {string} input
 * @returns {boolean}
 */

// function booleanFromValue(input)

function evaluateTrueFalse(input) {
  if (isNaN(input)) {
    var first_letter = input.charAt(0).toLowerCase();
    if (first_letter === 't' || first_letter === 'y') {
      return true;
    } else {
      return false;
    }
  } else {
    if (input === 1) {
      return true;
    } else { 
      return false;
    }
  }
}

// Logger.log(evaluateTrueFalse("No")); // false
// Logger.log(evaluateTrueFalse("Yes")); // true

// -- Array of Sheet Names

/**
 * Returns an array of the names of the sheets in a spreadsheet.
 *
 * @param {Spreadsheet} ss
 * @returns {string[]}
 */

function arrayOfSheetNames(ss) {
  var result = [];
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    result.push(sheets[i].getName());
  } 
  return result;
} 

// var ss_aosn = SpreadsheetApp.getActiveSpreadsheet();
// Logger.log(arrayOfSheetNames(ss_aosn)); // ["Sheet1", "Sheet2", "Sheet3"]

// - Objects

// -- Object from Range

/**
 * Returns an object from a range.
 * The top row of the range is assumed to be the header row.
 * Values in the header row become the object properties.
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Object}
 */

function objectFromRange(sheet, a1Notation) {
  var result = {};
  var range  = sheet.getRange(a1Notation);
  var height = range.getHeight();
  var width  = range.getWidth();
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    result[values[i][0]] = values[i][1];
  } 
  return result;
}

// var sheet_ofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// Logger.log(objectFromRange(sheet_ofr, "D2:E5")); // {A=Alpha, B=Bravo, C=Charlie, D=Delta}

// - Array of Objects

// -- Utility Functions for Array of Objects

// --- Header Values 

/**
 * Returns an array of values for the top row of a range object.
 *
 * @param {Range} rangeObj
 * @returns {Array}
 */

function arrayOfHeaderValues(rangeObj){
  var result = [];
  var vals   = rangeObj.getValues();
  for (var i = 0; i < vals[0].length; i++) {
    var val = vals[0][i];
    result.push(val);
  } 
  return result;
}

// var sheet_hv = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_hv = sheet_hv.getRange("A2:E19");
// Logger.log(arrayOfHeaderValues(range_hv)); // ["First", "Last", "Grade", "Homeroom", "Email"]

// --- Values by Row 

/**
 * Returns an array of objects representing a range.
 *
 * @param {Range} rangeObj
 * @param {Array} headers
 * @returns {Object[]}
 */

function arrayOfValuesByRow(rangeObj, headers){
  var height = rangeObj.getHeight();
  var width  = rangeObj.getWidth();
  var vals   = rangeObj.getValues();
  var result    = [];
  for (var i = 0; i < height; i++) {
    var row = {};
    for (var j = 0; j < width; j++) {
      var prop = headers[j];
      var val  = vals[i][j];
      if (val !== "") {
        row[prop] = val;
      } 
    }
    result.push(row);
  }  
  return result;
}

// var sheet_vbr   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_vbr   = sheet_hv.getRange("A2:E19");
// var headers_vbr = arrayOfHeaderValues(range_vbr);
// Logger.log(arrayOfValuesByRow(range_vbr, headers_vbr)); 
// [{Last=Last, Email=Email, Homeroom=Homeroom, Grade=Grade, First=First}, {Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}...]

// --- Header Range 

/**
 * Returns the header range for a targeted range.
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Range}
 */

function headerRange(sheet, a1Notation) {
  var split = a1Notation.split(":");
  var col0  = split[0].match(/\D/g,'');
  var col1  = split[1].match(/\D/g,'');
  var row   = split[0].match(/\d+/g);
  var a1    = col0 + row + ":" + col1 + row;
  return sheet.getRange(a1);
}

// var sheet_hr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(headerRange(sheet_hr, "A2:E19").getA1Notation()); // "A2:E2"
// Logger.log(headerRange(sheet_hr, "A2:E19").getValues()); // [[First, Last, Grade, Homeroom, Email]]

// --- Value Range 

/**
 * Returns the value range for a targeted range. 
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Range}
 */

function valueRange(sheet, a1Notation) {
  var split = a1Notation.split(":");
  var col0  = split[0].match(/\D/g,'');
  var row0  = split[0].match(/\d+/g);
  var col1  = split[1].match(/\D/g,'');
  var row1  = split[1].match(/\d+/g);
  var a1    = col0 + (Number(row0) + 1) + ":" + col1 + row1;
  return sheet.getRange(a1);
}

// var sheet_vr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(valueRange(sheet_vr, "A2:E19").getA1Notation()); // "A3:E19"

// -- Array of Objects from Sheet 

/**
 * Returns an array of objects representing the values in a sheet.
 *
 * @requires numCol() 
 * @requires arrayOfHeaderValues() 
 * @requires arrayOfValuesByRow() 
 * @param sheet
 * @param hRow
 * @returns {undefined}
 */

function arrObjFromSheet(sheet, hRow){
  var lColNum = sheet.getLastColumn();
  var lColABC = numCol(lColNum);
  var lRow    = sheet.getLastRow();
  var hRange  = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var headers = arrayOfHeaderValues(hRange);
  var vRange  = sheet.getRange("A" + (hRow +1) + ":" + lColABC + lRow);
  return arrayOfValuesByRow(vRange, headers);
}

// var sheet_aofs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrObjFromSheet(sheet_aofs, 2)); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// -- Array of Objects from Range 

/**
 * Returns an array of values representing the values in a range.
 *
 * @requires headerRange() 
 * @requires valueRange() 
 * @requires arrayOfHeaderValues() 
 * @requires arrayOfValuesByRow() 
 * @param sheet
 * @param a1Notation
 * @returns {undefined}
 */

function arrObjFromRange(sheet, a1Notation) {
  var hRange  = headerRange(sheet, a1Notation);
  var vRange  = valueRange(sheet, a1Notation);
  var headers = arrayOfHeaderValues(hRange);
  return arrayOfValuesByRow(vRange, headers);
}

// var sheet_aofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrObjFromRange(sheet_aofr, "A2:E7")); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// - Array 

// -- Array of Values for Column

// --- For Header Value 

/**
 * Returns an array containing all values in a column.
 *
 * @param {Sheet} sheet
 * @param {number} hRow
 * @param {string} name
 * @returns {Array}
 */

// function arrayOfValuesForColumnName(sheet, hRow, name){

function arrForColName(sheet, hRow, name){
  var lColNum  = sheet.getLastColumn();
  var lColABC  = numCol(lColNum);
  var lRow     = sheet.getLastRow();
  var hRange   = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var headers  = arrayOfHeaderValues(hRange);
  var tColABC  = numCol(headers.indexOf(name) + 1);
  var rangeObj = sheet.getRange(tColABC + (hRow +1) + ":" + tColABC + lRow);
  var height   = rangeObj.getHeight();
  var vals     = rangeObj.getValues();
  var arr      = [];
  for (var i = 0; i < height; i++) {
      var val  = vals[i][0];
      arr.push(String(val));
  }  
  return arr;
}

// var sheet_afcna = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrForColName(sheet_afcna, 2, "First")); // [Arienne, Elissa, Nerses, Gülistan, Syed, Isaiah, Stanley, Sára, Kaja, Józef, Radoslava, Sarah, Oluwasegun, Ekundayo, Gina, Sylvia, Cemil]

// --- For Column Number

/**
 * Returns an array containing all values in a column.
 *
 * @param {Sheet} sheet
 * @param {number} hRow
 * @param {number} colIndex
 * @returns {Array}
 */

// function arrayOfValuesForColumnNumber(sheet, hRow, colIndex){
function arrForColNo(sheet, hRow, colIndex){
  var lColNum  = sheet.getLastColumn();
  var lColABC  = numCol(lColNum);
  var lRow     = sheet.getLastRow();
  var hRange   = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var tColABC  = numCol(colIndex);
  var rangeObj = sheet.getRange(tColABC + (hRow +1) + ":" + tColABC + lRow);
  var height   = rangeObj.getHeight();
  var vals     = rangeObj.getValues();
  var arr      = [];
  for (var i = 0; i < height; i++) {
      var val  = vals[i][0];
      arr.push(String(val));
  }  
  return arr;
}

// var sheet_afcno = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2"); 
// Logger.log(arrForColNo(sheet_afcno, 2, 2)); // [Garret, Jules, Juda, Armen, Yeong-Suk, Coy, Stevie, Emin, Tiriaq, Dilay, Kirabo, Ariadna, Devrim, Adjoa, Suk, Lyle, Edita]

// --- For Range Object

/**
 * Returns an array containing all values in the first column of a range. 
 *
 * @param {Range} rangeObj
 * @returns {Array}
 */

function arrForColRange(rangeObj){
  var height = rangeObj.getHeight();
  var vals   = rangeObj.getValues();
  var arr    = [];
  for (var i = 0; i < height; i++) {
    arr.push(vals[i][0]);
  }
  return arr;
}

// var sheet_vafro = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var range_vafro = sheet_vafro.getRange("A2:F5");
// Logger.log(arrForColRange(range_vafro)); // ["A", "B", "C", "D"]

// Docs

// - Managing Document Files

// -- Create or Verify Document

// --- Create or Verify Document in a Folder
// * requires checkArrayForValue

/**
 * Returns a document.
 * This creates the document if it does not already exist.
 *
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Document}
 */

function createVerifyDocIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (!(checkArrayForValue(names, name))) {
    var doc  = DocumentApp.create(name).getId();
    var file = DriveApp.getFileById(doc);
    moveFile(file, fldr);
  }
  return openFileAsDocument(findFileInFolder(fldr, name));
}

// var fldr_cvdi = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/docs");
// Logger.log(createVerifyDocIn(fldr_cvdi, "example-doc")); // example-doc

// --- Create or Verify Document at Root

/**
 * Returns a document.
 * This creates the document if it does not already exist.
 *
 * @param {string} name
 * @returns {Document}
 */

function createVerifyDocAtRoot(name) {
  var files = rootFiles();
  var names = fileNames(files);
  if (!(checkArrayForValue(names, name))) {
    var ss = DocumentApp.create(name);
  }
  return findFileAtRoot(name);
}

// -- Id of Active Document
 
/**
 * Returns the Id of the active document.
 *
 * @returns {string}
 */

function docId() {
  var _id = DocumentApp.getActiveDocument().getId();
  return _id;
}
  
// -- Open File as Document

/**
 * Returns a file as a document.
 *
 * @param {File} file
 * @returns {Document}
 */

function openFileAsDocument(file) {
  var _id = file.getId();
  var _doc = DocumentApp.openById(_id);
  return _doc;
} 

// var fldr_ofad = findFolderAtPath("google-apps-script-cheat-sheet-demo/docs");
// var file_ofad = findFileInFolder(fldr_ofad, "example-doc");
// Logger.log(openFileAsDocument(file_ofad));

// - Utility Functions for Docs

// -- Access Document Body

// var fldr_adb = findFolderAtPath("google-apps-script-cheat-sheet-demo/docs");
// var file_adb = findFileInFolder(fldr_adb, "example-doc");
// var doc_adb  = openFileAsDocument(file_adb);
// doc_adb.appendParagraph("Hello, world!");

// -- Clear Document Body

// var fldr_cdb = findFolderAtPath("google-apps-script-cheat-sheet-demo/docs");
// var file_cdb = findFileInFolder(fldr_cdb, "example-doc");
// var doc_cdb  = openFileAsDocument(file_cdb);
// var body_cdb = doc_cdb.getBody();
// body_cdb.clear();

// Merges

// - Sheets and Docs

// -- String From Object Properties 

var ex_obj = { 
  name:  "Jon",
  state: "MN",
  job:   "IT Administrator"
};

/**
 * Returns a string. 
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {string} str
 * @param {string} delim
 * @returns {string}
 */

function strFromProp(obj, str, delim) {
  var split  = str.split(" ");
  var result = [];
  for (var i = 0; i < split.length; i++) {
    var _str = split[i]; 
    for (var prop in obj){
      var first = _str.slice().charAt(0);
      var last  = _str.slice().substr(-1);
      var mod   = _str.substr(0, _str.length-1).substr(1);
      if ((obj.hasOwnProperty(mod)) && (first === delim) && (last === delim)) {
        result.push(obj[mod]);
      } else {
        result.push(_str);
      }
      break;
    }
  } 
  return result.join(" ");
}

// Logger.log(strFromProp(ex_obj, "name: %name% - state: %state% - job: %job%", "%")); // "name: Jon - state: MN - job: IT Administrator"

// -- Replace Object Properties 

// --- Replace Object Properties in Document

/**
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {Document} doc
 * @param {string} delim
 */

function findReplaceInDoc(obj, doc, delim) {
  var body = doc.getBody(); 
  for (var prop in obj) {
    var query = delim + prop + delim;
    var val   = obj[prop];
    body.replaceText(query, val);
  } 
} 

// var fldr_frid = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var doc_frid  = createVerifyDocIn(fldr_frid, "find-replace-doc");
// var body_frid = doc_frid.getBody();
// body_frid.clear();
// doc_frid.appendParagraph("name: %name%");
// doc_frid.appendParagraph("state: %state%");
// doc_frid.appendParagraph("job: %job%");
// findReplaceInDoc(ex_obj, doc_frid, "%");

// --- Replace Object Properties in Spreadsheet

/**
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {Spreadsheet} ss
 * @param {string} delim
 */

function findReplaceInSpreadsheet(obj, ss, delim) {
  var numSheets = ss.getNumSheets();
  var sheets    = ss.getSheets();
  for (var i = 0; i < numSheets; i++) {
    var sheet = sheets[i];
    var values = sheet.getDataRange().getValues();
    for (var row in values){
      var update = values[row].map(function(original) {
        var text = original.toString();
        for (var prop in obj) {
          var query = delim + prop+ delim;
          if (text.indexOf(query) !== -1) {
            text = text.replace(query, obj[prop]);
          }
        } 
        return text;
      });
    values[row] = update;
    }
    sheet.getDataRange().setValues(values);
  } 
}

// var fldr_fris  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_frid    = createOrVerifySpreadsheetInFolder(fldr_fris, "find-replace-sheet");
// var sheet_frid = ss_frid.getSheets()[0];
// sheet_frid.clear();

// var val_frid = [
//   [ "name", "state", "job" ],
//   [ "%name%", "%state%", "%job%"]
// ];

// var range_frid = sheet_frid.getRange("A1:C2");
// range_frid.setValues(val_frid);
// findReplaceInSpreadsheet(ex_obj, ss_frid, "%");

// --- Replace Object Properties in Sheet

/**
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {Sheet} sheet
 * @param {string} delim
 */

function findReplaceinSheet(obj, sheet, delim) {
  var values = sheet.getDataRange().getValues();
  for(var row in values){
    var update = values[row].map(function(original) {
      var text = original.toString();
      for (var prop in obj) {
        var query = delim + prop + delim;
          if (text.indexOf(query) !== -1) {
            text = text.replace(query, obj[prop]);
          }
      } 
      return text;
    });
    values[row] = update;
  }
  sheet.getDataRange().setValues(values);
}

// var fldr_fris  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_fris    = createOrVerifySpreadsheetInFolder(fldr_fris, "find-replace-sheet");
// var sheet_fris = ss_fris.getSheets()[0];
// sheet_fris.clear();

// var val_fris = [
//   [ "name", "state", "job" ],
//   [ "<<name>>", "<<state>>", "<<job>>"]
// ];

// var range_fris = sheet_fris.getRange("A1:C2");
// range_fris.setValues(val_fris);
// findReplaceinSheet(ex_obj, sheet_fris, "%");

// -- Copy Template for Item in Array of Objects and Replace Object Properties

// --- Copy Document Template and Replace Object Properties

/**
 * For each object, create a new template document and merge in object values.
 *
 * @requires strFromProp() 
 * @requires copyFile() 
 * @requires findReplaceInDoc() 
 * @param {Object[]} arrObj
 * @param {Document} templateDoc
 * @param {string} naming
 * @param {Folder} fldr
 * @param {boolean} ts
 * @param {string} delim
 */

function createDocsFromTemplateArrObj(arrObj, templateDoc, naming, fldr, ts, delim) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj  = arrObj[i];
    var name = strFromProp(obj, naming, delim);
    if (ts === true) name += " - " + fmat12DT();
    var file  = DriveApp.getFileById(templateDoc.getId());
    var docId = copyFile(file, fldr).setName(name).getId();
    var doc   = DocumentApp.openById(docId);
    findReplaceInDoc(obj, doc, delim);
    }
} 

// var sheet_cdftao  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_cdftao = arrObjFromSheet(sheet_cdftao, 2);
// var fldr1_cdftao  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_cdftao  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges/arrObj-docs");
// var doc_cdftao    = createVerifyDocIn(fldr1_cdftao, "template-doc");
// var body_cdftao   = doc_cdftao.getBody();
// body_cdftao.clear();
// doc_cdftao.appendParagraph("First: %First%");
// doc_cdftao.appendParagraph("Last: %Last%");
// doc_cdftao.appendParagraph("Grade: %Grade%");
// doc_cdftao.appendParagraph("Homeroom: %Homeroom%");
// doc_cdftao.appendParagraph("Email: %Email%");
// createDocsFromTemplateArrObj(arrObj_cdftao, doc_cdftao, "Name: %Last% %First%", fldr2_cdftao, true, "%");

// --- Copy Spreadsheet Template and Replace Object Properties

/**
 * For each object, create a new template spreadsheet and merge in object values.
 *
 * @requires strFromProp() 
 * @requires copyFile() 
 * @requires findReplaceInSpreadsheet() 
 * @param {Object[]} arrObj
 * @param {Spreadsheet} templateDoc
 * @param {string} naming
 * @param {Folder} fldr
 * @param {boolean} ts
 * @param {string} delim
 */

function createSpreadsheetsFromTemplateArrObj(arrObj, templateSS, naming, fldr, ts, delim) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj  = arrObj[i];
    var name = strFromProp(obj, naming, delim);
    if (ts === true) name += " - " + fmat12DT();
    var file = DriveApp.getFileById(templateSS.getId());
    var ssId = copyFile(file, fldr).setName(name).getId();
    var ss   = SpreadsheetApp.openById(ssId);
    findReplaceInSpreadsheet(obj, ss, delim);
    }
} 

// var ss1_csftao    = SpreadsheetApp.getActiveSpreadsheet();
// var sheet1_csftao = ss1_csftao.getSheetByName("Sheet2");
// var arrObj_csftao = arrObjFromSheet(sheet1_csftao, 2);
// var fldr1_csftao  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_csftao  = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/merges/arrObj-sheets");
// var file_csftao   = createOrVerifySpreadsheetInFolder(fldr1_csftao, "template-sheet");
// var ss2_csftao    = openFileAsSpreadsheet(file_csftao);
// var sheet2_csftao = ss2_csftao.getSheets()[0];

// var val_csftao = [
//   [ "First", "Last", "Grade", "Homeroom", "Email" ],
//   [ "%First%", "%Last%", "%Grade%", "%Homeroom%", "%Email%"]
// ];

// var range_csftao = sheet2_csftao.getRange("A1:E2");
// range_csftao.setValues(val_csftao);
// createSpreadsheetsFromTemplateArrObj(arrObj_csftao, file_csftao, "Name: %Last% %First%", fldr2_csftao, true, "%");

// -- Create Bulleted List in Document for Array of Objects

// -- Single Division List

// var sheet_sdl  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_sdl = arrObjFromSheet(sheet_sdl, 2);
// var fldr_sdl   = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/docs");
// var file_sdl   = createVerifyDocIn(fldr_sdl, "example-doc");
// var doc_sdl    = openFileAsDocument(file_sdl);
// var body_sdl   = doc_sdl.getBody();

// (function(){
//   arrObj_sdl.sort(dynSortM("Last", "First"));
//   var sectionHeader = body_sdl.appendParagraph("Students");
//   sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
//   for (var i in arrObj_sdl) {
//     body_sdl.appendListItem(arrObj_sdl[i]["Last"] + ", " + arrObj_sdl[i]["First"]);
//   }
// })();

// -- Multi Division List

// var sheet_mdl  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_mdl = arrObjFromSheet(sheet_mdl, 2);
// var fldr_mdl   = createOrVerifyFolderPath("google-apps-script-cheat-sheet-demo/docs");
// var file_mdl   = createVerifyDocIn(fldr_mdl, "example-doc");
// var doc_mdl    = openFileAsDocument(file_mdl);
// var body_mdl   = doc_mdl.getBody();

// (function(){
//   arrObj_mdl.sort(dynSortM("Homeroom", "Last", "First"));
//   var sectionHeader = body_mdl.appendParagraph("Homerooms and Students");
//   sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
//   var homeroom = arrObj_mdl[0]["Homeroom"];
//   body_mdl.appendListItem(homeroom);
//   for (var i in arrObj_mdl) {
//     if (arrObj_mdl[i]["Homeroom"] === homeroom) {
//       body_mdl.appendListItem(arrObj_mdl[i]["First"] + " " + arrObj_mdl[i]["Last"])
//       .setNestingLevel(1).setIndentStart(10)
//       .setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
//     } else {
//       homeroom = arrObj_mdl[i]["Homeroom"];
//       body_mdl.appendListItem(homeroom);
//       body_mdl.appendListItem(arrObj_mdl[i]["First"] + " " + arrObj_mdl[i]["Last"])
//       .setNestingLevel(1).setIndentStart(10)
//       .setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
//     }
//   }
// })();

// Gmail

// - Mail Merge

// -- Append Subject and Body Properties for Array of Objects 

/**
 * Returns an array of objects. Subject and Body properties are appended to each object.
 *
 * @param {Object[]} arrObj
 * @param {string} subj
 * @param {string} body
 * @param {string} delim
 * @returns {Object[]}
 */

function appendSubjBodyForArrObj(arrObj, subj, body, delim) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      var search = delim + prop + delim;
      if (body.indexOf(search) !== -1) {
        body = body.replace(search, obj[prop]);
        }
      if (subj.indexOf(search) !== -1) {
        subj = subj.replace(search, obj[prop]);
        }
      }
    obj.Subject = subj;
    obj.Body    = body;
    }
  return arrObj;
} 

// var sheet_aasbfao = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_asbfao = arrObjFromSheet(sheet_aasbfao, 2);
// var subj_asbfao   = "Classroom update for %First% %Last%";
// var body_asbfao   = "<p>%First% %Last% is in %Homeroom%'s this fall!</p>";
// Logger.log(appendSubjBodyForArrObj(arrObj_asbfao, subj_asbfao, body_asbfao, "%")); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne, Body=<p>Arienne Garret is in Muhsina's this fall!</p>, Subject=Classroom update for Arienne Garret}...]

// -- Run Mail Merge for Array of Objects

/**
 * Sends and email for each object in an array of objects.
 * Properties Email, Subject and Body are used.
 *
 * @requires appendSubjBodyForArrObj() 
 * @param {Object[]} arrObj
 */

function runMailMergeForArrObj(arrObj) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
      MailApp.sendEmail({
        to: obj.Email,
        subject: obj.Subject,
        htmlBody: obj.Body
      });
  }
}

// var sheet_rmmfao  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_rmmfao = arrObjFromSheet(sheet_rmmfao, 2);
// var subj_rmmfao   = "Classroom update for %First% %Last%";
// var body_rmmfao   = "<p>%First% %Last% is in %Homeroom%'s this fall!</p>";
// arrObj_rmmfao     = appendSubjBodyForArrObj(arrObj_rmmfao, subj_rmmfao, body_rmmfao);
// runMailMergeForArrObj(arrObj_rmmfao);

Logger.log("End");


// dev

function sheetFromFileAtPath(path, name) {
  var file = findFileAtPath(path);
  var ss   = openFileAsSpreadsheet(file);
  return ss.getSheetByName(name);
} 
