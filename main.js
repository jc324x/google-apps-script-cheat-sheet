// v0.1.2-beta - Review

function test() {}
Logger.log("Start");

// |+| General
// |+| - Array
// |+| -- Check Array for a Value
// |+| -- Remove Duplicates from Array
// |+| -- Remove Empty Elements from Array
// |+| -- Count of Values in Array
// |+| -- Intersect of Two Arrays
// |+| -- Compare Two Arrays
// |+| -- Array as Delimited String
// |+| -- Array as Modified Delimited String
// |+| - Two-Dimensional Array
// |+| -- Flatten Two-Dimensional Array
// | | - Array of Objects
// | | -- Sort Array of Objects by Property or Properties
// | | -- Find Object in Array of Objects
// | | -- Find First or Last Object in Array of Objects by Timestamp
// | | -- Filter Array of Objects by Value or Values
// | | -- Add Property to Objects in Array of Objects
// | | - Object
// | | -- Array of Object Values
// | | -- Merge Objects
// | | -- Check if Object is Empty
// | | - Dates and Times
// | | -- Formatted Date Time
// | | -- Date Object from String
// | | -- Match a Date to a Date Range
// | | - String
// | | -- Check String for Substring
// | | Drive
// | | - Utility Functions for Drive
// | | -- Verify Path
// | | -- Target Path
// | | -- MIME Types
// | | - Folders
// | | -- Array Of Folders
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
// | | --- Find a File in Drive
// | | --- Find File at Path
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
// | | -- Evaluating True and False
// | | - Range
// | | -- Validate Range
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
 * @param {*} val
 * @param {Array} arr
 * @returns {boolean}
 */

function checkArrayForValue(arr, val) { 
  return arr.indexOf(val) > -1; 
}

// Logger.log("checkArrayForValue");
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

// Logger.log("removeDuplicatesFromArray");
// var arr_rdfa = [1, 2, 3, 1, 2, 3, 4,];
// Logger.log(removeDuplicatesFromArray(arr_rdfa)); // [1, 2, 3, 4]

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
// Logger.log(removeEmptyElementsFromArray(arr_reefa)); // ["a", "b", "c"]
 
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

// Logger.log("countOfValuesInArray");
// var arr_covia = ["a", "b", "c", "a", "b", "c", "a"];
// Logger.log(countOfValuesInArray(arr_covia)); // [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}]

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
  var a      = 0;
  var b      = 0;
  while( a < arrA.length && b < arrB.length ) {
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
// Logger.log(intersectOfTwoArrays(arrA_iota, arrB_iota)); // [3]

// -- Compare Two Arrays 

/**
 * Returns true if both arrays contain the same elements in the same order.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {boolean}
 */

function compareTwoArrays(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;
    for (var i = arrA.length; i--;) {
      if (arrA[i] !== arrB[i]) return false;
    }
  return true;
}

// Logger.log("compareTwoArrays");
// var arrA_cta = [1, 2, 3, 4, 5];
// var arrB_cta = [1, 2, 3, 4, 5];
// var arrC_cta = [5, 4, 3, 2, 1];
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
    if (i < temp.length) {
      result += temp[i] + delim + " "; 
    } else if (i === temp.length) {
      result += temp[i];
    }
  }
  return result;
}

// Logger.log("arrayAsDelimitedString");
// var arr_da = ["c@example.com", "b@example.com", "a@example.com"];
// Logger.log(arrayAsDelimitedString(arr_da, ",")); // "c@example.com, b@example.com, a@example.com"

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
  var temp   = removeDuplicatesFromArray(arr);
  for (var i = 0; i < temp.length; i++) {
    if (i < temp.length) {
      result += temp[i] + mod + delim + " "; 
    } else if (i === temp.length) { 
      result += temp[i] + mod + delim;
    }
  }
  return result;
}

// Logger.log("arrayAsModifiedDelimitedString");
// var arr_aamds = ["x", "z", "y"];
// Logger.log(arrayAsModifiedDelimitedString(arr_aamds, ",", "@example.com")); // "x@example.com, y@example.com, z@example.com"

// - Two-Dimensional Array

/**
 * Returns an array containing all values in a two-dimensional array.
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
// Logger.log(flattenTwoDimensionalArray(val_ftda).sort()); // [1, 2, 3, 4, 5, 6, 7, 8]

// - Array of Objects

/**
 * Example array of objects
 */

var arrObj_ex = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
];

// Logger.log("arrObj_ex");

// -- Sort Array of Objects by Property or Properties

/**
 * Returns an array of objects sorted by a single property value.
 *
 * @param {string} prop
 * @returns {Object[]}
 */

function sortArrayOfObjects(prop) {
  var sortOrder = 1;
  if (prop[0] === "-") {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  return function (a, b) {
    var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    return result * sortOrder;
  };
}

// Logger.log("sortArrayOfObjects");
// Logger.log(arrObj_ex.sort(sortArrayOfObjects("a"))); 
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}]

/**
 * Returns an array of objects sorted by multiple property values.
 * @requires sortArrayOfObjects() 
 * @param {...string}
 * @returns {Object[]}
 */

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

// Logger.log("sortArrayOfObjectsMulti");
// Logger.log(arrObj_ex.sort(sortArrayOfObjectsMulti("b", "c"))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}]

// -- Find Object in Array of Objects
 
/**
 * Returns the first object in an array of objects with the key value pair.
 * This can return an object or a value from an object if `ret` is set.
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

// Logger.log("findObjectInArray");
// Logger.log(findObjectInArray(arrObj_ex, "a", 1000)); // {a=1000.0, b=1.0, c=5.0}

// Find Oldest or Latest Object by Timestamp value

/**
 * Returns the object with the oldest timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function oldestObjectInArrayOfObjects(arr){
  if (arr.length >= 2) {
    var sorted = arr.sort(function(a, b){
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    return sorted[0];
  } else {
    return arr[0];
  }
}

// Logger.log("oldestObjectInArray");
// var sheet_ooia  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_fe = arrayOfObjectsA1("J1:K4", sheet_ooia);
// Logger.log(oldestObjectInArray(arrObj_fe)); // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A}

/**
 * Returns the object with the most recent timestamp value.
 *
 * @param {Object[]} arr
 * @returns {Object}
 */

function latestObjectInArrayOfObjects(arrObj) {
  if (arrObj.length >= 2) {
    var sorted = arrObj.sort(function(a, b){
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    return sorted[0];
  } else {
    return arrObj[0];
  }
} 

// Logger.log("latestObjectInArray");
// var sheet_loia  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_loia = arrayOfObjectsA1("J1:K4", sheet_loia);
// Logger.log(latestObjectInArray(arrObj_loia)); // {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C}

// -- Filter Array of Objects by Value or Values

/**
 * Returns an array of objects containing matching objects.
 *
 * @param {Object} arrObj
 * @param {string} prop
 * @param {string || string[]} val
 * @returns {Object[]}
 */

// filterArrayOfObjects

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

// Logger.log("filterArrayOfObjectsByValueOrValues");
// Logger.log(filterArrayOfObjectsByValueOrValues(arrObj_ex, "a", 10)); // [{a=10.0, b=2.0, c=500.0}]
// Logger.log(filterArrayOfObjectsByValueOrValues(arrObj_ex, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}]

// -- Add Property to Objects in Array of Objects

/**
 * Returns an array of objects, with an additional property value added to each matching object.
 *
 * @param {Object[]} arrObj
 * @param {string[]} arr
 * @param {string} prop 
 * @returns {Object[]}
 */

// blendPropertyForObjectInArray()

function addPropertyToObjectsInArrayOfObjects(arrObj, arr, prop){
  for (var i = 0; i < arrObj.length; i++){
    var obj = arrObj[i];
    for (var h = 0; h < arr.length; h++) {
      for (var p in obj) {
        if (obj.hasOwnProperty(p) && p == arr[h] && obj[p] !== ""){
              obj[prop] = obj[p];
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

// Logger.log("addPropertyToObjectsInArrayOfObjects");
// Logger.log(addPropertyToObjectsInArrayOfObjects(arrObj_upfao, ["x","y","z"], "new"));
// [{new=123.0, x=123.0}, {new=234.0, y=234.0}, {new=345.0, z=345.0}]

// - Object

// -- Array of Object Values

/**
 * Returns an array of matching properties. 
 *
 * @param {Object} obj
 * @param {string[]} props
 * @requires intersectOfTwoArrays() 
 * @returns {Array}
 */

function arrayOfObjectValues(obj, arr) {
  var result = [];
  var keys   = intersectOfTwoArrays(Object.keys(obj), arr);
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

// Logger.log("arrayOfObjectValues");
// var arr_aoov = ["a", "b", "d"];
// Logger.log(arrayOfObjectValues(obj_aoov, arr_aoov)); // [1, 2]

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
 c: 3
}; 

var objB_mo = {
 c: 4,
 d: 5, 
 e: 6, 
 f: 7
}; 

// Logger.log("mergeObjs");
// Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0}

// Check if Object Is Empty
// Check if Object Is Valid

// valid just means that it's not empty

function checkForValidObject(obj) {
    return Object.keys(obj).length !== 0;
}

// Logger.log("checkForValidObject");
// var obj_vohv = {};
// Logger.log(checkForValidObject(obj_vohv)); // false

// - Dates and Times
// TODO: why is this such an ugly cluster? there's gotta be a better way to do this...

// -- Formatted Date Time

/**
 * Returns a formatted date time string.
 * Options:
 *    hms     -> hour:minute:second (24)
 *    mdy     -> month-day-year
 *    ymd     -> year-month-day
 *    mdyampm -> month-day-year hour:minute:second am|pm
 *    default -> year-month-day hour:minute:second (24)
 * @param opt
 * @returns {undefined}
 */

function dateTime(opt) {
  var now = new Date();
  var date, time;

  switch(opt) {
    case "hms":
      time = [now.getHours(), now.getMinutes(), now.getSeconds()];
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }
      return time.join(":");
    case "mdy":
      date = [now.getMonth() + 1, now.getDate(), now.getYear()];
      return date.join("-");
    case "ymd":
      date = [now.getYear(), now.getMonth() + 1, now.getDate()];
      return date.join("-");
    case "mdyampm":
      date = [ now.getMonth() + 1, now.getDate(), now.getYear() ];
      time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
      var ampm = ( time[0] < 12 ) ? "AM" : "PM";
      time[0]  = ( time[0] <= 12 ) ? time[0] : time[0] - 12;
      for ( var j = 1; j < 3; j++ ) {
        if ( time[j] < 10 ) {
          time[j] = "0" + time[j];
        }
      }
      return date.join("-") + " " + time.join(":") + " " + ampm;
    default:
      date = [now.getYear(), now.getMonth() + 1, now.getDate()];
      time = [now.getHours(), now.getMinutes(), now.getSeconds()];
      for ( var k = 1; k < 3; k++ ) {
        if ( time[k] < 10 ) {
          time[k] = "0" + time[k];
        }
      }
      return date.join("-") + " " + time.join(":");
  } 
} 

// Logger.log("dateTime");
// Logger.log(dateTime("hms")); // 9:13:23
// Logger.log(dateTime("mdy")); // 12-21-2017
// Logger.log(dateTime("ymd")); // 2017-12-21
// Logger.log(dateTime("mdyampm")); // 12-21-2017 9:13:23 AM
// Logger.log(dateTime()); // 2017-12-21 9:13:23

function appendDateTime(str, opt) {
  if (opt !== undefined) {
    str += " - " + dateTime(opt);
  }
 return str; 
} 

// -- Date Object from String

/**
 * Returns a new date object from a string formatted year-month-date. 
 *
 * @param {string} str
 * @returns {Date}
 */

function dateObjectFromString(str) {
  var split  = str.split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return new Date (months[(split[1] - 1)] + " " + split[2] + ", " + split[0]);
}

// Logger.log("dateObjectFromString");
// Logger.log(dateObjectFromString("2017-04-24")); // Mon Apr 24 00:00:00 GMT-05:00 2017

// -- Match a Date to a Range of Dates

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

function matchDateToRangeOfDates(arrObj, optDate) {
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

var quarterDates = [
  {start: "08/01/2017", end: "10/28/2017", value: 1},
  {start: "11/02/2017", end: "01/09/2018", value: 2},
  {start: "01/15/2018", end: "03/19/2018", value: 3},
  {start: "03/21/2018", end: "06/15/2018", value: 4},
  {start: "06/16/2018", end: "08/30/2018", value: "summer vacation"}
];

// Logger.log("matchDateToRangeOfDates");
// Logger.log(matchDateToRangeOfDates(quarterDates)); // 2 (12/21/2017)
// Logger.log(matchDateToRangeOfDates(quarterDates, "08/02/2017")); // 1 

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
  if (str.indexOf(val) > -1 ) {
    return true;
  } else {
    return false;
  }
} 

// Logger.log("checkStringForSubstring");
// var str_csfs = "google-apps-script-cheat-sheet-demo";
// var val_csfs = "google-apps-script"; 
// Logger.log(checkStringForSubstring(val_csfs, str_csfs)); // true

// Drive

// - Utility Functions for Drive

// -- Verify Path
// TODO: verifyPathString()

/**
 * Returns a string with leading and trailing '/' removed.
 *
 * @param {string} path
 * @returns {string}
 */

function verifyPath(path) {
  if ((path.charAt(0)) === "/") {
    path = path.substr(1);
  }
  
  if ((path.charAt(path.length - 1) === "/")) {
    path = path.slice(0, -1);
  }

  return path;
}

// Logger.log("verifyPath");
// Logger.log(verifyPath("valid/path")); // "valid/path"
// Logger.log(verifyPath("/valid/path/")); // "valid/path"

// -- Target Path

/**
 * Returns a path or the last object in a path.
 * (0) The last file or folder in a path.
 * (1) The path to the penultimate folder.
 *
 * @param {String} path
 * @returns {String}
 */

function targetPath(path, opt) {
  path      = verifyPath(path);
  var split = path.split("/");

  if (opt === 0 || opt === undefined) {
    return split.pop();
  } else if (opt === 1) {
    split.pop();
    return split.join("/");
  } 
} 

// Logger.log("targetPath");
// Logger.log(targetPath("a/b/c", 0)); // c
// Logger.log(targetPath("a/b/c", 1)); // a/b

// TODO: move to validate
// Validate MIME Type

// vs. expand

function validateMIME(val) {
  // lower case
  // if matches case statment
  // return + "application/vnd.google-apps.
} 


function expandMIMEType(val) {
  return "application/vnd.google-apps." + val.toLowerCase();
}

// Logger.log("expandMIMEType");
// Logger.log(expandMIMEType("audio"));

// - Folders

function createExampleFolders() {
  verifyFolderPath("google-apps-script-cheat-sheet-demo/folders");
} 

createExampleFolders(); 

// -- Array of Folders 

// --- Array of Folders at Root

/**
 * Returns an array containing all of the folders found at root.
 * The array contains folder objects, not folder names.
 *
 * @returns {Folder[]}
 */

function arrayOfFoldersAtRoot() {
  var result = [];
  var fi     = DriveApp.getRootFolder().getFolders();
  while (fi.hasNext()) {
    var fldr = fi.next();
    result.push(fldr);
  } 
  return result;
}

// Logger.log("arrayOfFoldersAtRoot");
// Logger.log(arrayOfFoldersAtRoot());
 
// --- Array of Folders in Folder 

/**
 * Returns an array containing all of the folders inside the target folder.
 * The array contains folder objects, not just the names of the folders.
 *
 * @param {Folder} fldr
 * @returns {Folder[]}
 */

function arrayOfFoldersInFolder(fldr) {
  var result = [];
  var fi     = fldr.getFolders();
  while (fi.hasNext()) {
    var _fldr = fi.next();
    result.push(_fldr);
  } 
  return result;
}

// Logger.log("arrayOfFoldersInFolder");
// var fldr_aofif = findFolderAtPath("google-apps-script-cheat-sheet-demo"); 
// Logger.log(arrayOfFoldersInFolder(fldr_aofif));

// --- Array of Folders at Path

/**
 * Returns an array containing all of the folders inside the folder at the specified path.
 * The array contains folder objects, not just the names of the folders.
 *
 * @param {string} path
 * @requires verifyPath() 
 * @requires findFolderAtPath() 
 * @requires arrayOfFoldersInFolder() 
 * @returns {Folder[]}
 */

function arrayOfFoldersAtPath(path) {
  path       = verifyPath(path);
  var result = [];
  var fldr   = findFolderAtPath(path);
  if (fldr) {
    return arrayOfFoldersInFolder(fldr);
  } else {
    return false;
  }
} 

// Logger.log("arrayOfFoldersAtPath");
// Logger.log(arrayOfFoldersAtPath("google-apps-script-cheat-sheet-demo"));

// --- Array of All Folders in Drive

/**
 * Returns an array of all folders in Drive.
 * The array contains folder objects, not just the names of the folders.
 *
 * @returns {Folder[]}
 */

function arrayOfFoldersInDrive() {
  var result = [];
  var fi     = DriveApp.getFolders();
  while (fi.hasNext()) {
    var fldr = fi.next();
    result.push(fldr);
  } 
  return result;
}

// Logger.log("arrayOfFoldersInDrive");
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

// Logger.log("arrayOfFolderNames");
// var arr_aofn  = arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/"));
// Logger.log(arrayOfFolderNames(arr_aofn));

// -- Find a Folder

// --- Find a Folder at Root

/**
 * Returns a folder found at root or false if the folder doesn't exist.
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

// Logger.log("findFolderAtRoot");
// Logger.log(findFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

// --- Find a Folder in a Folder

/**
 * Returns a folder from inside another folder or false if either folder doesn't exist.
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

// Logger.log("findFolderInFolder");
// var fldr_ffi = findFolderAtPath("google-apps-script-cheat-sheet-demo");
// Logger.log(findFolderInFolder("folders", fldr_ffi)); // folders

// -- Find Folder at Path

/**
 * Returns the folder found at the given path or false if that folder doesn't exist.
 *
 * @param path
 * @requires verifyPath() 
 * @requires targetPath() 
 * @returns {Folder}
 */

function findFolderAtPath(path) {
  path = verifyPath(path);
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

  var target = targetPath(path);
  if (fldr.getName() === target) {
    return fldr;
  } else {
    return false;
  }
}

// Logger.log("findFolderAtPath");
// Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders")); // folders

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
  return false;
}

// Logger.log("findFolderInDrive");
// Logger.log(findFolderInDrive("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

// -- Check for a Folder

// --- Check for a Folder at Root

/**
 * Returns true if the folder is found. 
 *
 * @param {string} name
 * @requires findFolderAtRoot() 
 * @requires arrayOfFoldersAtRoot()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @returns {boolean}
 */

function checkForFolderAtRoot(name) {
  if (findFolderAtRoot(name)) {
    return true;
  } else {
    return false;
  }
} 

// Logger.log("checkForFolderAtRoot");
// Logger.log(checkForFolderAtRoot("google-apps-script-cheat-sheet-demo")); // true

// --- Check for a Folder in Folder

/**
 * Returns true if the folder is found.
 *
 * @param name
 * @param fldr
 * @requires findFolderInDrive() 
 * @returns {undefined}
 */

function checkForFolderInFolder(name, fldr) {
  if (findFolderInFolder(name, fldr)) {
    return true;
  } else {
    return false;
  }
}

// Logger.log("checkForFolderInFolder");
// var fldr_cffif = verifyFolderPath("google-apps-script-cheat-sheet-demo");
// Logger.log(checkForFolderInFolder("folders", fldr_cffif)); // true

// --- Check for a Folder at Path

/**
 * Returns true if the folder is found.
 *
 * @param path
 * @requires verifyPath() 
 * @requires targetPath() 
 * @requires findFolderAtPath() 
 * @returns {boolean}
 */

function checkForFolderAtPath(path) {
  path = verifyPath(path);
  var fldr = findFolderAtPath(path);
  if (fldr) {
    return true;
  } else {
    return false;
  }
}

// Logger.log("checkForFolderAtPath");
// Logger.log(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/folders")); // true
// Logger.log(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/folders/1/10/100")); // false

// -- Create Folder
  
// --- Create Folder at Root

/**
 * Return a newly created folder.
 * This will create duplicates if used without caution. 
 *
 * @param name
 * @returns {Folder}
 */

function createFolderAtRoot(name) {
  return DriveApp.getRootFolder().createFolder(name);
} 

// Logger.log("createFolderAtRoot");

// --- Create Folder in a Folder

/**
 * Return a newly created folder.
 * This will create duplicates if used without caution. 
 *
 * @param {string} name
 * @param {Folder} fldr
 * @returns {undefined}
 */

function createFolderInFolder(name, fldr) {
  return fldr.createFolder(name);
} 

// Logger.log("createFolderInFolder");
// var now_cfif = dateTime();
// var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/folders/create");
// Logger.log(createFolderInFolder(now_cfif, fldr_cfif));

// --- Create Folder at Path

/**
 * Creates the folder at the given path. 
 * Returns false if the supporting directories in the path are missing.
 * To verify a complete folder path, use verifyFolderPath instead.
 * This will create duplicates if used without caution. 
 *
 * @param {string} path
 * @requires verifyPath() 
 * @requires targetPath() 
 * @requires findFolderAtPath() 
 * @returns {Folder || boolean}
 */

function createFolderAtPath(path) {
  path       = verifyPath(path);
  var target = targetPath(path, 1);
  var fldr   = findFolderAtPath(target);
  if (fldr) {
    target = targetPath(path);
    return fldr.createFolder(target);
  } else {
    return false;
  }
} 

// Logger.log("createFolderAtPath");
// var dt_cfap = dateTime();
// Logger.log(createFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B/C/" + dt_cfap)); // 2017-12-16 13:34:38
// Logger.log(createFolderAtPath("no/path/here")); // false

// -- Create Folders
  
// --- Create Folders at Root
  
/**
 * Returns the root folder. 
 * This will create duplicates if used without caution. 
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

// Logger.log("createFoldersAtRoot");

// --- Create Folders in a Folder

/**
 * Returns the target folder.
 * This will create duplicates if used without caution. 
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

// Logger.log("createFoldersInFolder");
  
// --- Create Folders at Path

/**
 * Returns the target folder.
 * This will create duplicates if used without caution. 
 *
 * @param {Array} arr
 * @param {string} path
 * @returns {Folder || boolean}
 */

function createFoldersAtPath(arr, path) {
  path       = verifyPath(path);
  var target = targetPath(path, 1);
  var fldr   = findFolderAtPath(target);
  if (fldr) {
    for (i = 0; i < arr.length; i++) {
      fldr.createFolder(arr[i]);
    }
    return fldr.createFolder(target);
  } else {
    return false;
  }
} 

// Logger.log("createFoldersAtPath");

// - Verify Folder

// --- Verify Folder at Root

/**
 * Returns the folder found at root.
 * The folder is created if it doesn't already exist.
 *
 * @param {string} name
 * @requires checkForFolderAtRoot() 
 * @requires createFolderAtRoot() 
 * @requires findFolderAtRoot() 
 * @requires arrayOfFoldersAtRoot()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @returns {Folder}
 */

function verifyFolderAtRoot(name) {
  if (!(checkForFolderAtRoot(name))) {
    return createFolderAtRoot(name);
  } else {
    return findFolderAtRoot(name);
  }
} 

// Logger.log("verifyFolderAtRoot");
// Logger.log(verifyFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

// --- Verify Folder in Folder

/**
 * Returns a folder from its parent folder.
 *
 * @param {string} name
 * @param {Folder} fldr
 * @requires checkForFolderInFolder() 
 * @requires createFolderInFolder() 
 * @requires findFolderInFolder() 
 * @returns {Folder}
 */

function verifyFolderInFolder(name, fldr) {
  if (!(checkForFolderInFolder(name, fldr))) {
    return createFolderInFolder(name, fldr);
  } else {
    return findFolderInFolder(name, fldr);
  }
}

// Logger.log("verifyFolderInFolder");
// var fldr_vfif = findFolderAtRoot("google-apps-script-cheat-sheet-demo"); 
// Logger.log(verifyFolderInFolder("folders", fldr_vfif)); // google-apps-script-cheat-sheet-demo/folders
 
// --- Verify Folder Path

/**

 * Returns a folder at the end of a folder path.
 * Folders in the path are created if they don't already exist.
 *
 * @param {string} path
 * @returns {Folder}
 */

function verifyFolderPath(path) {
  path = verifyPath(path);
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

// Logger.log("verifyFolderPath");
// Logger.log(verifyFolderPath("google-apps-script-cheat-sheet-demo/folders/A/B/C")); // C

// -- Verify Folders

// --- Verify Folders at Root

/**
 * Returns the root folder.
 * Creates folders at root if they don't exist already.
 *
 * @param {string[]} names
 * @returns {Folder}
 */

function verifyFoldersAtRoot(arr) {
  var rfs   = arrayOfFoldersAtRoot();
  var names = arrayOfFolderNames(rfs);
  for (i = 0; i < arr.length; i++) {
    if (!(checkArrayForValue(names, arr[i]))) {
      DriveApp.createFolder(arr[i]);
    }
  } 
  return DriveApp.getRootFolder();
}

// Logger.log("verifyFoldersAtRoot");

// --- Verify Folders in a Folder

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

// Logger.log("verifyFoldersInFolder");
// var fldr_vfsif = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(verifyFoldersInFolder(["X", "Y", "Z"], fldr_vfsif)); // folders
// Logger.log(arrayOfFoldersInFolder(fldr_vfsif)); 

// --- Verify Folders at Path

/**
 * Returns a folder.
 * Creates folders within a folder if they don't already exist.
 *
 * @requires verifyPath() 
 * @requires findFolderAtPath() 
 * @requires arrayOfFoldersInFolder() 
 * @requires arrayOfFolderNames() 
 * @requires checkArrayForValue() 
 * @returns {Folder}
 */

function verifyFoldersAtPath(arr, path) {
  path     = verifyPath(path);
  var fldr = findFolderAtPath(path);
  verifyFoldersInFolder(arr, fldr);
} 

// - Files
 
// -- Array of Files 

// --- Array of Files in a Folder

/**
 * Returns an array of files found at the top level of a folder.
 *
 * @param {Folder} fldr
 * @returns {File[]}
 */

function arrayOfFilesInFolder(fldr) {
  // Logger.log(fldr);
  var result = [];
  var fi     = fldr.getFiles();
  while (fi.hasNext()) {
    var file = fi.next();
    result.push(file);
  } 
  return result;
}

// Logger.log("arrayOfFilesInFolder");
// var fldr_fin = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// Logger.log(arrayOfFilesInFolder(fldr_fin)); // [example-file]

// --- Array of Files at Root

/**
 * Returns an array of all files at the root of a user's Drive.
 *
 * @returns {File[]}
 */

function arrayOfFilesAtRoot() {
  var result = [];
  var fi     = DriveApp.getRootFolder().getFiles();
  while (fi.hasNext()) {
    var file = fi.next();
    result.push(file);
  } 
  return result;
}

// Logger.log("arrayOfFilesAtRoot");
// Logger.log(arrayOfFilesAtRoot());

// --- Array of All Files in Drive

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

// Logger.log("arrayOfFilesInDrive");
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

// Logger.log("arrayOfFileNames");
// var fldr_aofilen = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// var arr_aofilen  = arrayOfFilesInFolder(fldr_aofilen);
// Logger.log(arrayOfFileNames(arr_aofilen)); // [example-file]

// -- Find a File

// --- Find a File in a Folder
// TODO: Documentation

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
  mime = expandMIMEType(mime);
  var files = arrayOfFilesInFolder(fldr);
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if ((file.getName() === name) && file.getMimeType() === mime) {
      return file;
    }
  } 
  return false;
} 

function findFileInFolder(name, fldr, mime) {
  if (mime !== undefined) {
    return findFileInFolderType(name, fldr, mime);
  } else {
    return findFileInFolderAny(name, fldr);
  }
}

// Logger.log("findFileInFolder");
// var fldr_ffif = verifyFolderPath("google-apps-script-cheat-sheet-demo/sheets");
// Logger.log(findFileInFolder("example-sheet", fldr_ffif)); // example-sheet
// Logger.log(findFileInFolder("example-sheet", fldr_ffif, "document")); // false
// Logger.log(findFileInFolder("example-sheet", fldr_ffif, "spreadsheet")); // example-sheet

// --- Find a File at Root
// TODO: Documentation

function findFileAtRootAny(name) {
  var files = arrayOfFilesAtRoot();
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, name)) {
    return DriveApp.getRootFolder().getFilesByName(name).next();
  } else {
    return false;
  }
} 

// Logger.log("findFileAtRootAny");
// Logger.log(findFileAtRootAny("Testing"));

function findFileAtRootType(name, mime) {
  mime      = expandMIMEType(mime);
  var files = arrayOfFilesAtRoot();
  for (var i = 0; i < files.length; i++) {
    var file = files[i]; 
    if ((file.getName() === name) && file.getMimeType() === mime) {
      return file;
    }
  } 
  return false;
} 

// Logger.log("findFileAtRootType");
// Logger.log(findFileAtRootType("Testing", "document"));

function findFileAtRoot(name, mime) {
  if (mime !== undefined) {
    return findFileAtRootType(name, mime);
  } else {
    return findFileAtRootAny(name);
  }
} 

// Logger.log("findFileAtRoot");
// Logger.log(findFileAtRoot("Testing"));
// Logger.log(findFileAtRoot("Testing", "document"));

// --- Find a File in Drive
// TODO: Documentation

function findFileInDriveAny(name) {
  var fi = DriveApp.getFilesByName(name);
  while (fi.hasNext()){
    var file = fi.next();
    return file;
  }
} 

function findFileInDriveType(name, mime) {
  mime = expandMIMEType(mime);
  var fi = DriveApp.getFilesByName(name);
  while (fi.hasNext()) {
    var file = fi.next();
    if ((file.getName() === name) && file.getMimeType() === mime) {
      return file;
    }
  }
  return false;
}

/**
 * Returns the first matching file found in the user's Drive.
 *
 * @param {string} name
 * @returns {File}
 */

function findFileInDrive(name, mime) {
  if (mime !== undefined) {
    return findFileInDriveType(name, mime);
  } else {
    return findFileInDrive(name);
  }
}

// Logger.log("findFileInDrive");
// Logger.log(findFileInDrive("example-file")); // example-file

// --- Find File at Path

/**
 * Returns the file at the end of a path.
 *
 * @param {string} path
 * @returns {File}
 */

function findFileAtPathAny(path) {
  path     = verifyPath(path);
  var file = targetPath(path, 0);
  path     = targetPath(path, 1);
  var fldr = findFolderAtPath(path);
  return findFileInFolder(file, fldr);
} 

// Logger.log("findFileAtPathAny");
// Logger.log(findFileAtPathAny("google-apps-script-cheat-sheet-demo/files/example-file")); // example-file

// function findFileAtPathType(path, mime) {
//   path     = verifyPath(path);
//   mime     = expandMIMEType(mime);
//   var file = targetPath(path, 0);
//   path     = targetPath(path, 1);
//   var fldr = findFolderAtPath(path);
//   if (fldr) {
//     file = findFileInFolder(file, fldr);

//     if (file.getMimeType() === mime) {
//       return file;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// } 

function matchMIMEType(file, mime) {
  var type;

  if (file) {
    type = file.getMimeType(); 
  } else {
    return false;
  }

  if (type === mime) {
    return true;
  } else {
    return false;
  }
} 

// TODO: Bring into other functions 

function findFileAtPathType(path, mime) {
  path     = verifyPath(path);
  mime     = expandMIMEType(mime);
  var file = targetPath(path, 0);
  path     = targetPath(path, 1);
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

// Logger.log("findFileAtPathType");
// Logger.log(findFileAtPathType("google-apps-script-cheat-sheet-demo/files/example-file", "document")); // false

function findFileAtPath(path, mime) {
  if (mime !== undefined) {
    return findFileAtPathType(path, mime);
  } else {
    return findFileAtPathAny(path);
  }
} 

// -- Check for a File

// --- Check for a File at Root

function checkForFileAtRoot(name, mime) {
  var result;

  if (mime !== undefined) {
    result = findFileAtRootType(name, mime);
  } else {
    result = findFileAtRootAny(name);
  }

  if (result) {
    return true;
  } else {
    return false;
  }
} 

// Logger.log("checkForFileAtRoot");

// --- Check for File in a Folder

function checkForFileInFolder(name, fldr, mime) {
  var result;
  if (mime !== undefined) {
    result = findFileInFolderType(name, fldr, mime);
  } else {
    result = findFileInFolderAny(name, fldr);
  }

  if (result) {
    return true;
  } else {
    return false;
  }
}

// Logger.log("checkForFileInFolder");
// var fldr_cffif = findFolderAtPath("google-apps-script-cheat-sheet-demo/sheets"); 
// Logger.log(checkForFileInFolder("example-sheet", fldr_cffif, "spreadsheet")); // true
// Logger.log(checkForFileInFolder("example-sheet", fldr_cffif)); // true

//  --- Check for File at Path

function checkForFileAtPath(path, mime) {
  var result;

  if (mime !== undefined) {
    result = findFileAtPathType(path, mime);
  } else {
    result = findFileAtPathAny(path);
  }

  if (result) {
    return true;
  } else {
    return false;
  }
}

// Logger.log("checkForFileAtPath");
// Logger.log(checkForFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet")); // true
// Logger.log(checkForFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet", "spreadsheet")); // true

// Create File

// --- Create File at Root

function createFileAtRoot(name, mime) {
  switch (mime) {
    case "document": 
      var document = DocumentApp.create(name).getId();
      return DriveApp.getFileById(document);
    case "form":
      var form = FormApp.create(name).getId();
      return DriveApp.getFileById(form);
    case "presentation": 
      var presentation = SlidesApp.create(name).getId();
      return DriveApp.getFileById(presentation);
    case "spreadsheet": 
      var spreadsheet = SpreadsheetApp.create(name).getId();
      return DriveApp.getFileById(spreadsheet);
    default: DriveApp.getRootFolder().createFile(name, "");
  }
}

// Logger.log("createFileAtRoot");
// Logger.log(createFileAtRoot("testing", "document"));
// Logger.log(createFileAtRoot("testing", "form"));
// Logger.log(createFileAtRoot("testing", "presentation"));
// Logger.log(createFileAtRoot("testing", "spreadsheet"));

function openFileAsType(file, mime) {
  var id = file.getId();
  switch (mime) {
    case "document": return DocumentApp.openById(id);
    case "form": return FormApp.create(name);
    case "presentation": return PresentationApp.create(name);
    case "spreadsheet": return SpreadsheetApp.openById(id);
    default: return false;
  }
} 

// Logger.log("openFileAsType");
// var file_ofat = findFileAtRoot("testing", "document");
// Logger.log(openFileAsType(file_ofat, "document"));

// --- Create File in Folder

function createFileInFolder(name, fldr, mime) {
  var file = createFileAtRoot(name, mime);
  return moveFileToFolder(file, fldr);
}  

// Logger.log("createFileInFolder");
// var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/sheets");
// Logger.log(createFileInFolder("amazing-spreadsheet", fldr_cfif, "spreadsheet")); // amazing-spreadsheet

// --- Create File at Path

function createFileAtPath(path, mime) {
  var name = targetPath(path, 0);
  path     = targetPath(path, 1);
  var fldr = findFolderAtPath(path);
  return createFileInFolder(name, fldr, mime);
} 

// Logger.log("createFileAtPath");
// Logger.log(createFileAtPath("google-apps-script-cheat-sheet-demo/sheets/cool-sheet", "spreadsheet"));

// Verify File 
 
// --- Verify File at Root

function verifyFileAtRoot(name, mime) {
  if (checkForFileAtRoot(name, mime)) {
    return findFileAtRoot(name, mime);
  } else {
    return createFileAtRoot(name, mime);
  }
} 

// Logger.log("verifyFileAtRoot");
// Logger.log(verifyFileAtRoot("test_document", "document"));

// --- Verify File in Folder

function verifyFileInFolder(name, fldr, mime) {
  if (checkForFileInFolder(name, fldr, mime)) {
    return findFileInFolder(name, fldr, mime);
  } else {
    return createFileInFolder(name, fldr, mime);
  }
} 

// Logger.log("verifyFileInFolder");
 
// --- Verify File at Path

function verifyFileAtPath(path, mime) {
  var folderPath = targetPath(path, 1);
  verifyFolderPath(folderPath);

  if (checkForFileAtPath(path, mime)) {
    return findFileAtPath(path, mime);
  } else {
    return createFileAtPath(path, mime);
  }
}


// Logger.log("verifyFileAtPath");

// -- Id of Active File

function idOfActiveFile(mime) {
  switch(mime) {
    case "document": return DocumentApp.getActiveDocument().getId();
    case "form": return FormApp.getActiveForm().getId();
    case "presentation": return SlidesApp.getActivePresentation().getId();
    case "spreadsheet": return DocumentApp.getActiveSpreadsheet().getId();
  }
} 

// Logger.log("idOfActiveFile");

// -- Copy a File to a Folder
// TODO: Changed else return -> file either way
function copyFileToFolder(file, fldr) {
  var name = file.getName();
  var dest = findFileInFolderAny(name, fldr);
  if (dest === false) {
    file.makeCopy(name, fldr);
  }
  return findFileInFolderAny(name, fldr);
} 

// Logger.log("copyFileToFolder");
// TODO: VERIFY
// var fldr_cftf = verifyPath("google-apps-script-cheat-sheet-demo/files/copied");
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

function moveFileToFolder(file, fldr) {
  var result;
  var name = file.getName();
  var dest = findFileInFolderAny(name, fldr);

  if (dest === false) {
    file.makeCopy(name, fldr);
    result = findFileInFolderAny(name, fldr);
  }

  if (result) {
    return result;
  } else {
    return false;
  }
} 

// Logger.log("moveFileToFolder");
// TODO: VERIFY
// var fldr_mftf1 = findFolderAtPath("google-apps-script-cheat-sheet-demo/files/copied");
// var file_mftf  = findFileInFolder("example-file", fldr_mftf1);
// var fldr_mftf2 = verifyPath("google-apps-script-cheat-sheet-demo/files/moved");
// Logger.log(moveFileToFolder(file_mftf, fldr_mftf2)); // example-file

// - Files and Folders

// -- Rename a File or Folder

/**
 * Returns a renamed file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @param {string} name
 * @returns {File || Folder}
 */

function renameFileOrFolder(file_fldr, name) {
  file_fldr.setName(name);
  return file_fldr;
} 

// Logger.log("renameFileOrFolder");
// TODO: VERIFY
// var fldr_rfof = findFolderAtPath("google-apps-script-cheat-sheet-demo/files/moved");
// var file_rfof = findFileInFolder("example-file", fldr_rfof);
// Logger.log(renameFileOrFolder(file_rfof, "modified-example-file")); // modified-example-file

// -- Parent Folder of a File or Folder 

/**
 * Returns the parent folder or a file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @returns {Folder}
 */

function parentFolderOfFileOrFolder(file_fldr) {
  var fi = file_fldr.getParents();
  return fi.next();
}

// Logger.log("parentFolderOfFileOrFolder");
// TODO: VERIFY
// var file_pfofof = findFileInDrive("example-file");
// Logger.log(parentFolderOfFileOrFolder(file_pfofof)); // files

// -- Zip All Files in a Folder

// TODO: Update with new checking functions

function verifyFilesForZipEx() {
  verifyFolderPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip");
  verifyFileAtPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip/A", "document");
  verifyFileAtPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip/B", "document");
  verifyFileAtPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip/C", "document");
} 

/**
 * Returns a zipped file. 
 *
 * @requires arrayOfFilesInFolder()
 * @requires findFileInFolder()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {File}
 */

function zipFilesInFolder(fldr, name, dest) {
  var blobs = [];
  var files = arrayOfFilesInFolder(fldr);

  for (var i = 0; i < files.length; i++) {
    blobs.push(files[i].getBlob());
  } 

  var zips = Utilities.zip(blobs, name);

  if (dest !== null) {
    dest.createFile(zips);
    return findFileInFolder(name, dest);
  } else {
    return false;
  }
}

// Logger.log("zipFilesInFolder");
// verifyFilesForZipEx();
// var fldr_zfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip");
// var dest_zfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/zip/destination");
// zipFilesInFolder(fldr_zfif, "Archive", dest_zfif);

// JSON

// TODO: match style for other example only functions 
// not just a blank example file, specific format required

function verifyFileForJSONEx() {
  var fldr = verifyFolderPath("google-apps-script-cheat-sheet-demo/json");
  var file = findFileInFolder("example-json", fldr);
  if (!(file)) {
    var json = objectFromUrlJSON("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
    var text = JSON.stringify(json);
    var ex = fldr.createFile('example-json', text);
  }
  return findFileInFolder("example-json", fldr);
}

// -- Object From URL

/**
 * Returns an object from a URL.
 *
 * @param {string} url
 * @returns {Object}
 */

function objectFromUrl(url) {
  var rsp  = UrlFetchApp.fetch(url);
  var data = rsp.getContentText();
  return JSON.parse(data);
} 

// Logger.log("objectFromUrl");
// var obj_ofu = objectFromUrl("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
// Logger.log(JSON.stringify(obj_ofu));

// -- Object From File

/**
 * Returns an object from a file in Drive.
 *
 * @param {File} file
 * @returns {Object}
 */

function objectFromFile(file) {
  var data = file.getBlob().getDataAsString();
  return JSON.parse(data);
} 

// Logger.log("objectFromFile");
// verifyFileForJSONEx();
// var file_off = findFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json");
// var obj_off  = objectFromFile(file_off);
// Logger.log(JSON.stringify(obj_off));

// -- Object From Source
// TODO: stuff

/**
 * Returns an object from a URL or from a file in Drive.
 *
 * @param {string || File} input
 * @returns {Object}
 */

function objectFromSource(input) {
  var regExp = new RegExp("^(http|https)://");
  var test   = regExp.test(input);
  if (regExp.test(input)) {
    return objectFromUrl(input);
  } else {
    var file = findFileAtPath(input); 
    return objectFromFile(file);
  }
}

// Logger.log("objectFromUrlOrFileAtPath");
// Logger.log(JSON.stringify(objectFromUrlOrFileAtPath("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json")));
// Logger.log(JSON.stringify(objectFromUrlOrFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json")));

// UI

/**
 * @requires global ui / uProp vlues 
 * @requires a custom trigger -> Run: 'exampleUI', Events: 'From spreadsheet', 'On open'
 * Creates a menu with that allows the user to set the configuration options and run the script.
 * 
 */

var ui    = SpreadsheetApp.getUi(); // or DocumentApp.getUi();
var uProp = PropertiesService.getUserProperties();

function exampleUI() {
  ui.createMenu("Example UI")
  .addItem("Run Script", "runScript")
  .addSeparator()
  .addSubMenu(ui.createMenu("Configuration")
    .addItem("Set Configuration", "setConfiguration")
    .addItem("Show Configuration", "showConfiguration")
    .addItem("Clear Configuration", "clearConfiguration"))
  .addToUi();
}

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

// Sheets

// - Utility Functions for Sheets

// -- Convert Column Number to a Letter 

/**
 * Returns the column number as a alphabetical column value.
 * Columns are indexed from 1, not from 0.
 * "CZ" (104) is the highest supported value.
 *
 * @param {number} number
 * @returns {string}
 */

function convertIndexToColumn(number) {
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

function logAllValuesIndexToColumn() {
 for (var i = 1; i <= 104; i++) {
   var j = convertIndexToColumn(i);
   Logger.log(i + " - " + j);
 }
}

// Logger.log("convertIndexToColumn");
// Logger.log(convertIndexToColumn(26)); // Z
// logAllValuesIndexToColumn(); // 1 - A ... CZ - 104

// -- Convert Column Letter to a Number

/**
 * Returns an alphabetical column value as a number.
 *
 * @param {string} column
 * @returns {number}
 */

function convertColumnToIndex(column) {
  var chr0, chr1;
  var col = column.toUpperCase();
  if (col.length === 1)  {
    chr0 = col.charCodeAt(0) - 64;
    return chr0;
  } else if (col.length === 2) {
    chr0 = (col.charCodeAt(0) - 64) * 26;
    chr1 = col.charCodeAt(1) - 64;
    return chr0 + chr1;
  }
}

function logAllValuesColumnToIndex() {
  var abc;
 for (var i = 0; i <= 25; i++) {
   abc = String.fromCharCode(97 + i).toUpperCase();
   Logger.log(abc + " - " + convertColumnToIndex(abc));
 }
 for (var j = 26; j <= 51; j++) {
   abc = "A" + String.fromCharCode(97 - 26 + j).toUpperCase();
   Logger.log(abc + " - " + convertColumnToIndex(abc));
 }
}

// Logger.log("convertColumnToIndex");
// Logger.log(convertColumnToIndex("BB")); // 54
// logAllValuesColumnToIndex();

// -- Replicating Import Range 

/**
 * Replicating import range in Google Apps Script.
 * Requires a trigger to function.
 * testingImportRange : From spreadsheet : On edit
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

function checkInput(input) {
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

// Logger.log("checkInput");
// Logger.log(checkInput("No")); // false
// Logger.log(checkInput("Yes")); // true

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

// Logger.log("arrayOfSheetNames");
// var ss_aosn = SpreadsheetApp.getActiveSpreadsheet();
// Logger.log(arrayOfSheetNames(ss_aosn)); // ["Sheet1", "Sheet2", "Sheet3"]

// -- Validate Header Range
 
function validateHeaderRow(number) {
  if (number !== undefined && number === 0) {
    number = 1;
  }
  return number;
} 

// - A1 Notation

// - A1 Object

function A1Object(a1Notation) {
  var split         = a1Notation.split(":");
  this.start_column = convertColumnToIndex(String(split[0].match(/\D/g,'')));
  this.start_row    = Number(split[0].match(/\d+/g));
  this.end_column   = convertColumnToIndex(String(split[1].match(/\D/g,'')));
  this.end_row      = Number(split[1].match(/\d+/g));

  this.getA1Notation = function () {
    return convertIndexToColumn(this.start_column) + String(this.start_row) + ":" + convertIndexToColumn(this.end_column) + String(this.end_row);
  };

  this.getHeaderA1Notation = function () {
    return convertIndexToColumn(this.start_column) + String(this.start_row) + ":" + convertIndexToColumn(this.end_column) + String(this.start_row);
  };

  this.getValueA1Notation = function () {
    return convertIndexToColumn(this.start_column) + String(this.start_row + 1) + ":" + convertIndexToColumn(this.end_column) + String(this.end_row);
  };

  this.getTargetA1Notation = function (targetColumn) {
    return convertIndexToColumn(targetColumn) + String(this.start_row + 1) + ":" + convertIndexToColumn(targetColumn) + String(this.end_row);
  };
}

// Logger.log("A1Object");
// var obj_a1o = new A1Object("A1:J10");
// Logger.log(obj_a1o.getA1Notation()); // "A1:J10"
// Logger.log(obj_a1o.getHeaderA1Notation()); // "A1:J1"
// Logger.log(obj_a1o.getValueA1Notation()); // "A2:J10"
// Logger.log(obj_a1o.getTargetA1Notation(1)); // "A2:A10"

function validateA1(a1Notation, sheet) {
  var check   = new A1Object(a1Notation);
  var sheetA1 = sheet.getDataRange().getA1Notation();
  var limit   = new A1Object(sheetA1);
  if ((check.start_column <= limit.end_column) && (check.end_column <= limit.end_column)) {
    if ((check.start_row <= limit.end_row) && (check.end_row <= limit.end_row)) {
      return true;
    } 
  } else {
    return false;
  }
} 

// Logger.log("validateA1");
// var sheet_van = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// Logger.log(validateA1("A1:B2", sheet_van)); // "A1:B2"
// Logger.log(validateA1("A10000, ZZZ:50000", sheet_van)); // false

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

function objectFromRange(a1Notation, sheet) {
  a1Notation = validateA1(a1Notation, sheet);
  if (a1Notation) {
    var result = {};
    var range  = sheet.getRange(a1Notation);
    var values = range.getValues();
    for (var i = 0; i < values.length; i++) {
      result[values[i][0]] = values[i][1];
    } 
    return result;
  } else {
    return false;
  }
}

// Logger.log("objectFromRange");
// var sheet_ofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// Logger.log(objectFromRange("D2:E5", sheet_ofr)); // {A=Alpha, B=Bravo, C=Charlie, D=Delta}

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
  var values = rangeObj.getValues();
  for (var i = 0; i < values[0].length; i++) {
    var val = values[0][i];
    result.push(val);
  } 
  return result;
}

// Logger.log("arrayOfHeaderValues");
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

function arrayOfObjectsByRow(rangeObj, headers){
  var height = rangeObj.getHeight();
  var width  = rangeObj.getWidth();
  var values = rangeObj.getValues();
  var result = [];
  for (var i = 0; i < height; i++) {
    var row = {};
    for (var j = 0; j < width; j++) {
      var prop = String(headers[j]).toLowerCase();
      var val  = values[i][j];
      if (val !== "") {
        row[prop] = val;
      } 
    }
    if (checkForValidObject(row)) {
      result.push(row);
    }
  }  
  return result;
}

// Logger.log("arrayOfObjectsByRow");
// TODO: rename
// var sheet_vbr   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_vbr   = sheet_vbr.getRange("A1:E19");
// var headers_vbr = arrayOfHeaderValues(range_vbr);
// range_vbr       = sheet_vbr.getRange("A2:E19");
// Logger.log(arrayOfObjectsByRow(range_vbr, headers_vbr)); 
 // [{last=Garret, grade=6.0, homeroom=Muhsina, first=Arienne, email=agarret@example.com},...]

// --- Header Range 

/**
 * Returns the header range for a targeted range.
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Range}
 */

function headerRange(a1Notation, sheet) {
  if (validateA1(a1Notation, sheet)) {
    var coordinates = new A1Object(a1Notation);
    return sheet.getRange(coordinates.getHeaderA1Notation());
  }
}

// Logger.log("headerRange");
// var sheet_hr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(headerRange("A2:E19", sheet_hr).getA1Notation()); // "A2:E2"
// Logger.log(headerRange("A2:E19", sheet_hr).getValues()); // [[First, Last, Grade, Homeroom, Email]]

// --- Value Range 

/**
 * Returns the value range for a targeted range. 
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Range}
 */

function valueRange(a1Notation, sheet) {
  if (validateA1(a1Notation, sheet)) {
    var coordinates = new A1Object(a1Notation);
    return sheet.getRange(coordinates.getValueA1Notation());
  }
}

// Logger.log("valueRange");
// var sheet_vr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(valueRange("A2:E19", sheet_vr).getA1Notation()); // "A3:E19"

// -- Array of Objects from Sheet 

/**
 * Returns an array of objects representing the values in a sheet.
 *
 * @requires convertIndexToColumn() 
 * @requires arrayOfHeaderValues() 
 * @requires arrayOfObjectsByRow() 
 * @param sheet
 * @param hRow
 * TODO:  @returns {undefined}
 */

// arrayOfObjectsFromSheet 

function arrayOfObjectsSheet(sheet) {
  var a1Notation  = sheet.getDataRange().getA1Notation();
  var a1Object    = new A1Object(a1Notation);
  var headerRange = sheet.getRange(a1Object.getHeaderA1Notation());
  var valueRange  = sheet.getRange(a1Object.getValueA1Notation());
  var headers     = arrayOfHeaderValues(headerRange);
  return arrayOfObjectsByRow(valueRange, headers);
}

// Logger.log("arrayOfObjectsSheet");
// var sheet_aofs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrayOfObjectsSheet(sheet_aofs)); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// -- Array of Objects from Range 

/**
 * Returns an array of values representing the values in a range.
 *
 * @requires headerRange() 
 * @requires valueRange() 
 * @requires arrayOfHeaderValues() 
 * @requires arrayOfObjectsByRow() 
 * @param sheet
 * @param a1Notation
 * @returns {undefined}
 */

function arrayOfObjectsA1(a1Notation, sheet) {
  if (validateA1(a1Notation, sheet)) {
    var a1Object    = new A1Object(a1Notation);
    var headerRange = sheet.getRange(a1Object.getHeaderA1Notation());
    var valueRange  = sheet.getRange(a1Object.getValueA1Notation());
    var headers     = arrayOfHeaderValues(headerRange);
    return arrayOfObjectsByRow(valueRange, headers);
  } else {
    return false;
  }
}

// Logger.log("arrayOfObjectsA1");
// var sheet_aofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrayOfObjectsA1("A1:E7", sheet_aofr)); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// - Array 

// -- Array of Values for Column

// --- For Header Value 

/**
 * Returns an array containing all values in a column.
 */

function arrayForColumnName(name, sheet) {
  var result       = [];
  var a1Notation   = sheet.getDataRange().getA1Notation();
  var a1Object     = new A1Object(a1Notation);
  var headerRange  = sheet.getRange(a1Object.getHeaderA1Notation());
  var headers      = arrayOfHeaderValues(headerRange);
  var targetColumn = headers.indexOf(name) + 1;
  var targetRange  = sheet.getRange(a1Object.getTargetA1Notation(targetColumn));
  var height       = targetRange.getHeight();
  var values       = targetRange.getValues();

  for (var i = 0; i < targetRange.getHeight(); i++) {
    result.push(values[i][0]);
  } 

  return result;
} 

// Logger.log("arrayForColumnName");
// var sheet_afcna = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrayForColumnName("First", sheet_afcna)); // [Arienne, Elissa, Nerses, Gülistan, Syed, Isaiah, Stanley, Sára, Kaja, Józef, Radoslava, Sarah, ...]

// --- For Column Number

/**
 * Returns an array containing all values in a column.
 *
 * @param {Sheet} sheet
 * @param {number} hRow
 * @param {number} colIndex
 * @returns {Array}
 */

function arrayForColumnIndex(number, sheet) {
  var result       = [];
  var a1Notation   = sheet.getDataRange().getA1Notation();
  var a1Object     = new A1Object(a1Notation);
  var headerRange  = sheet.getRange(a1Object.getHeaderA1Notation());
  var headers      = arrayOfHeaderValues(headerRange);
  var targetRange  = sheet.getRange(a1Object.getTargetA1Notation(number));
  var height       = targetRange.getHeight();
  var values       = targetRange.getValues();

  for (var i = 0; i < targetRange.getHeight(); i++) {
    result.push(values[i][0]);
  } 

  return result;
}

// Logger.log("arrayForColumnIndex");
// var sheet_afcno = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2"); 
// Logger.log(arrayForColumnIndex(2, sheet_afcno)); // [Garret, Jules, Juda, Armen, Yeong-Suk, Coy, Stevie, Emin, Tiriaq, Dilay, Kirabo, Ariadna, Devrim, Adjoa, Suk, Lyle, Edita]

// --- For Range Object

/**
 * Returns an array containing all values in the first column of a range. 
 *
 * @param {Range} rangeObj
 * @returns {Array}
 */

function arrayForColumnRange(targetRange){
  var result = [];
  var height = targetRange.getHeight();
  var values = targetRange.getValues();
  for (var i = 0; i < height; i++) {
    result.push(values[i][0]);
  }
  return result;
}

// Logger.log("arrayForColumnRange");
// var sheet_vafro = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var range_vafro = sheet_vafro.getRange("A2:F5");
// Logger.log(arrayForColumnRange(range_vafro)); // ["A", "B", "C", "D"]

// - Docs
 
// - Utility Functions for Docs

// -- Append Paragraph to Document

// var file_adb = verifyFileAtPath("google-apps-script-cheat-sheet-demo/docs/example-doc", "document");
// var doc_adb  = openFileAsType(file_adb, "document");
// var body_adb = doc_adb.getBody();
// body_adb.appendParagraph("Hello, world!");

// -- Clear Document Body

// var file_cdb = verifyFileAtPath("google-apps-script-cheat-sheet-demo/docs/example-doc", "document");
// var doc_cdb  = openFileAsType(file_cdb, "document");
// var body_cdb = doc_cdb.getBody();
// body_cdb.clear();

// Merges

// - Sheets and Docs

// TODO: Right section?
// -- String From Object Properties 

/**
 * Example object
 */

var obj_ex = { 
  name:  "Jon",
  state: "MN",
  occupation:   "IT Administrator"
};

/**
 * Returns a string. 
 * Words %wrapped% in '%' are replaced with the matching property value.
 * Trailing punctuation marks are allowed. 
 *
 * @param {Object} obj
 * @param {string} str
 * @param {string} delim
 * @returns {string}
 */

function findReplaceInSubstring(substr, obj) {
  if (typeof substr !== 'string') {
    return substr;
  }

  var count = substr.split("%").length - 1;

  if (count !== 2) {
    return substr;
  }

  substr      = substr.replace(/%/g, "");
  var last = substr.slice(-1);

  if (last.match(/[a-z]/i)) { 
    return obj[substr];
  } else {
    substr = substr.substring(0, substr.length - 1);
    return obj[substr] + last;
  }
}

// Logger.log("findReplaceInSubstring");
// var string_friss = "%name%,";
// Logger.log(findReplaceInSubstring(string_friss, obj_ex));

function findReplaceInString(str, obj) {
  var result = [];
  var split  = str.split(" ");

  for (var i = 0; i < split.length; i++) {
    result.push(findReplaceInSubstring(split[i], obj));
  }

  return result.join(" ");
} 

// Logger.log("findReplaceInString");
// var string_fris = "name: %name%, occupation: %occupation%";
// Logger.log(findReplaceInString(string_fris, obj_ex));

// -- Replace Object Properties 

// --- Replace Object Properties in Document

/**
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {Document} doc
 * @param {string} delim
 */

function findReplaceInDoc(doc, obj) {
  var body = doc.getBody(); 
  for (var prop in obj) {
    body.replaceText(("%" + prop + "%"), obj[prop]);
  } 
} 

// Logger.log("findReplaceInDoc");
// var file_frid = verifyFileAtPath("google-apps-script-cheat-sheet-demo/docs/example-doc");
// var doc_frid = openFileAsType(file_frid, "document");
// var body_frid = doc_frid.getBody();
// body_frid.clear();
// doc_frid.appendParagraph("name: %name%");
// doc_frid.appendParagraph("state: %state%");
// doc_frid.appendParagraph("occupation: %occupation%");
// findReplaceInDoc(doc_frid, obj_ex);

// --

/**
 * findReplaceInArray
 *
 * @param arr
 * @param obj
 * @returns {undefined}
 */

function findReplaceInArray(arr, obj) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(findReplace(arr[i], obj));
  } 
  return result;
} 

// --- Replace Object Properties in Sheet

function findReplaceInSheet(sheet, obj) {
  var values = sheet.getDataRange().getValues();
  for (var i = 0; i < values.length; i++) {
    values[i] = findReplaceInArray(values[i], obj);
  } 
  sheet.getDataRange().setValues(values);
}

// var file_fris  = verifyFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet", "spreadsheet");
// var ss_fris    = openFileAsType(file_fris, "spreadsheet");
// var sheet_fris = ss_fris.getSheets()[0];
// sheet_fris.clear();

// var val_fris = [
//   [ "name", "state", "job" ],
//   [ "%name%", "%state%", "%occupation%"]
// ];

// Logger.log("findReplaceInSheet);
// var range_fris = sheet_fris.getRange("A1:C2");
// range_fris.setValues(val_fris);
// Logger.log(findReplaceInSheet(sheet_fris, obj_ex)); // Range

// --- Replace Object Properties in Spreadsheet

/**
 * Words wrapped by the delimiter are replaced with the matching property value.
 *
 * @param {Object} obj
 * @param {Spreadsheet} ss
 * @param {string} delim
 */

function findReplaceInSpreadsheet(ss, obj) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    findReplaceInSheet(sheets[i], obj);
  } 
}

// var file_fris  = verifyFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet", "spreadsheet");
// var ss_fris    = openFileAsType(file_fris, "spreadsheet");
// var sheet_fris = ss_fris.getSheets()[0];
// sheet_fris.clear();

// var val_fris = [
//   [ "name", "state", "occupation" ],
//   [ "%name%", "%state%", "%occupation%"]
// ];

// Logger.log("findReplaceInSpreadsheet");
// var range_fris = sheet_fris.getRange("A1:C2");
// range_fris.setValues(val_fris);
// findReplaceInSpreadsheet(ss_fris, obj_ex);

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

// function runDocumentMerge(template, name, fldr, ts)

// function createDocsFromTemplateArrObj(arrObj, templateDoc, naming, fldr, ts, delim) {
//   for (var i = 0; i < arrObj.length; i++) {
//     var obj  = arrObj[i];
//     var name = strFromProp(obj, naming, delim);
//     if (ts === true) name += " - " + fmat12DT();
//     var file  = DriveApp.getFileById(templateDoc.getId());
//     var docId = copyFile(file, fldr).setName(name).getId();
//     var doc   = DocumentApp.openById(docId);
//     findReplaceInDoc(obj, doc, delim);
//     }
// } 

// createMergedDocumentForObject

function documentMergeObject(naming, template, fldr, obj) {
  var name = findReplaceInString(naming, obj);
  var file = copyFileToFolder(template, fldr).setName(name);
  var doc  = openFileAsType(file, "document");
  findReplaceInDoc(doc, obj);
  return file;
} 

function documentMergeArrayOfObjects(naming, template, fldr, arrObj, opt) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    documentMergeObject(naming, template, fldr, obj, opt);
  } 
  return fldr;
} 

// Logger.log("runDocumentMerge");
// var sheet_rdm  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_rdm = arrayOfObjectsSheet(sheet_rdm);
// var fldr_rdm   = verifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var file_rdm   = verifyFileAtPath("google-apps-script-cheat-sheet-demo/merges/template-doc", "document");
// var doc_rdm    = openFileAsType(file_rdm, "document");
// var body_rdm   = doc_rdm.getBody();
// body_rdm.clear();
// body_rdm.appendParagraph("First: %First%");
// body_rdm.appendParagraph("Last: %Last%");
// body_rdm.appendParagraph("Grade: %Grade%");
// body_rdm.appendParagraph("Homeroom: %Homeroom%");
// body_rdm.appendParagraph("Email: %Email%");
// var naming_rdm = "Name: %Last%, %First%";
// documentMergeArrayOfObjects(naming_rdm, file_rdm, fldr_rdm, arrObj_rdm);
 
// --- Copy Spreadsheet Template and Replace Object Properties

function spreadsheetMergeObject(naming, template, fldr, obj, opt) {
  var name = findReplaceInString(naming, obj);
  name     = appendDateTime(name, opt);
  var file = copyFileToFolder(template, fldr).setName(name);
  var ss   = openFileAsType(file, "spreadsheet");
  findReplaceInSpreadsheet(ss, obj);
} 

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

function spreadsheetMergeArrayOfObjects(naming, template, fldr, arrObj, opt) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    spreadsheetMergeObject(naming, template, fldr, obj, opt);
  } 
  return fldr;
} 

// Logger.log("spreadsheetMergeArrayOfObjects");
// var sheet_smaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_smaoo = arrayOfObjectsSheet(sheet_smaoo);
// var fldr_smaoo   = verifyFolderPath("google-apps-script-cheat-sheet-demo/merges");
// var file_smaoo   = verifyFileAtPath("google-apps-script-cheat-sheet-demo/merges/template-ss", "spreadsheet");
// var ss_smaoo     = openFileAsType(file_smaoo, "spreadsheet");
// var sheet_smaoo  = ss_smaoo.getSheets()[0];

// var val_smaoo = [
//   [ "First", "Last", "Grade", "Homeroom", "Email" ],
//   [ "%First%", "%Last%", "%Grade%", "%Homeroom%", "%Email%"]
// ];

// var range_csftao = sheet_smaoo.getRange("A1:E2");
// range_csftao.setValues(val_smaoo);
// var naming_csftao = "Name: %Last%, %First%";

// spreadsheetMergeArrayOfObjects(naming_csftao, file_smaoo, fldr_smaoo, arrObj_smaoo);

// -- Create Bulleted List in Document for Array of Objects

// -- Single Division List

// var sheet_sdl  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_sdl = arrayOfObjectsSheet(sheet_sdl);
// var file_sdl   = verifyFileAtPath("google-apps-script-cheat-sheet-demo/docs/example-doc", "document");
// var doc_sdl    = openFileAsType(file_sdl, "document");
// var body_sdl   = doc_sdl.getBody();

// Logger.log("Single Division List");
// (function(){
//   arrObj_sdl.sort(sortArrayOfObjectsMulti("Last", "First"));
//   var sectionHeader = body_sdl.appendParagraph("Students");
//   sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
//   for (var i in arrObj_sdl) {
//     body_sdl.appendListItem(arrObj_sdl[i].Last + ", " + arrObj_sdl[i].First);
//   }
// })();

// -- Multi Division List

// var sheet_mdl  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_mdl = arrayOfObjectsSheet(sheet_mdl);
// var file_mdl   = verifyFileAtPath("google-apps-script-cheat-sheet-demo/docs/example-doc", "document");
// var doc_mdl    = openFileAsType(file_mdl, "document");
// var body_mdl   = doc_mdl.getBody();

// (function(){
//   arrObj_mdl.sort(sortArrayOfObjectsMulti("Homeroom", "Last", "First"));
//   var sectionHeader = body_mdl.appendParagraph("Homerooms and Students");
//   sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
//   var homeroom = arrObj_mdl[0].Homeroom;
//   body_mdl.appendListItem(homeroom);
//   for (var i in arrObj_mdl) {
//     if (arrObj_mdl[i].Homeroom === homeroom) {
//       body_mdl.appendListItem(arrObj_mdl[i].First + " " + arrObj_mdl[i].Last)
//       .setNestingLevel(1).setIndentStart(10)
//       .setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
//     } else {
//       homeroom = arrObj_mdl[i].Homeroom;
//       body_mdl.appendListItem(homeroom);
//       body_mdl.appendListItem(arrObj_mdl[i].First + " " + arrObj_mdl[i].Last)
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

// function appendSubjBodyForArrObj(arrObj, subj, body, delim) {
//   for (var i = 0; i < arrObj.length; i++) {
//     var obj = arrObj[i];
//     for (var prop in obj) {
//       var search = delim + prop + delim;
//       if (body.indexOf(search) !== -1) {
//         body = body.replace(search, obj[prop]);
//         }
//       if (subj.indexOf(search) !== -1) {
//         subj = subj.replace(search, obj[prop]);
//         }
//       }
//     obj.Subject = subj;
//     obj.Body    = body;
//     }
//   return arrObj;
// } 

function appendSubjectBodyArrayOfObjects(subj, body, arrObj) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj     = arrObj[i];
    obj.Subject = findReplaceInString(subj, obj);
    obj.Body    = findReplaceInString(body, obj);
  } 
  return arrObj;
} 

// Logger.log("appendSubjectBodyArrayOfObjects");
// var sheet_asbaoo  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var arrObj_asbaoo = arrayOfObjectsSheet(sheet_asbaoo);
// var subj_asbaoo   = "Classroom update for %First% %Last%";
// var body_asbaoo   = "<p>%First% %Last% is in %Homeroom%'s homeroom this fall!</p>";
// Logger.log(appendSubjectBodyArrayOfObjects(subj_asbaoo, body_asbaoo, arrObj_asbaoo)); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne, Body=<p>Arienne Garret is in Muhsina's this fall!</p>, Subject=Classroom update for Arienne Garret}...]

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
