// v0.3-beta

function test() {}
Logger.log("Start");

// | | General
// | | - Array
// | | -- Check Array for a Value
// | | -- Remove Duplicates from Array
// | | -- Remove Empty Elements from Array
// | | -- Get Count of Values in Array
// | | -- Intersect of Two Arrays
// | | -- Compare Two Arrays
// | | -- Array as Delimited String
// | | -- Array as Modified Delimited String
// | | - Two-Dimensional Array
// | | -- Flatten Two-Dimensional Array
// | | - Array of Objects
// | | -- Sort Array of Objects by Property or Properties
// | | -- Find Object in Array of Objects
// | | -- Find First or Last Object in Array of Objects by Timestamp
// | | -- Filter Array of Objects by Value or Values
// | | -- Add Property to Objects in Array of Objects
// | | - Object
// | | -- Array of Object Values
// | | -- Merge Objects
// | | - Dates and Times
// | | -- Formatted Date Time
// | | -- Date Object from String
// | | -- Match a Date to a Date Range
// | | - String
// | | -- Check String for Substring
// | | Drive
// | | - Utility Functions for Drive
// | | -- Validate Path String
// | | - Folders
// |+| -- Check for a Folder
// |+| --- Check for a Folder at Root
// |+| --- Check for Folder in a Folder
// |+| --- Check for a Folder at Path
// | | -- Find a Folder
// | | --- Find a Folder at Root
// | | --- Find a Folder in a Folder
// | | --- Find Folder at Path
// | | --- Find a Folder in Drive
// | | -- Create Folder
// | | --- Create Folder at Root
// | | --- Create Folder in a Folder
// | | --- Create Folder at Path
// | | -- Create Folders
// | | --- Create Folders at Root
// | | --- Create Folders in a Folder
// | | --- Create Folders at Path
// | | -- Verify Folder Path
// | | -- Verify Folder
// | | --- Verify Folder in a Folder
// | | --- Verify Folder at Root
// | | -- Verify Folders
// | | --- Verify Folders in a Folder
// | | --- Verify Folders at Root
// | | -- Array of Folders
// | | --- Array of Folders in a Folder
// | | --- Array of Folders at Root
// | | --- Array of All Folders in Drive
// | | -- Array of Folder Names
// | | - Files
// | | -- Check for a File
// | | --- Check for a File in a Folder
// | | --- Check for a File at Root
// | | --- Check for a File at Path
// | | -- Find a File
// | | --- Find a File in a Folder
// | | --- Find a File at Root
// | | --- Find a File in Drive
// | | --- Find File at Path
// | | -- Create a File
// | | --- Create File in a Folder
// | | --- Create File at Root
// | | --- Create File at Path
// | | -- Verify Google Drive File
// | | --- Verify Google Drive File in a Folder
// | | --- Verify Google Drive File at Root
// | | --- Verify Google Drive File at Path
// | | -- Array of Files
// | | --- Array of Files in a Folder
// | | --- Array of Files at Root
// | | --- Array of All Files in Drive
// | | -- Array of File Names
// | | -- Id of Active File
// | | -- Open File as Type
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
 * @param {Array} arr
 * @param {*} val
 * @returns {boolean}
 */

function checkArrayForValue(val, arr) { 
  return arr.indexOf(val) > -1; 
}

// Logger.log("checkArrayForValue");
// var arr_cafv = [1, 2, 3, 4];
// Logger.log(checkArrayForValue(5, arr_cafv)); // false

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

function removeEmptyElementsFromArray(x) {
  return (x !== (undefined || ''));
}

// Logger.log("removeEmptyElementsFromArray");
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

// Logger.log("countOfValuesInArray");
// var arr_covia  = ["a", "b", "c", "a", "b", "c", "a"];
// Logger.log(countOfValuesInArray(arr_covia)); // [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}]

// -- Intersect of Two Arrays

/**
 * Returns an array containing the elements in both arrays.
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

// Logger.log("intersectOfTwoArrays");
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

// Logger.log("compareTwoArrays");
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

// Logger.log("arrayAsDelimitedString");
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

function arrayAsModifiedDelimitedString(arr, delim, mod) {
  var result = "";
  var temp   = removeDuplicatesFromArray(arr);
  for (var i = 0; i < temp.length; i++) {
    if (i < temp.length) result += temp[i] + mod + delim + " "; 
    else if (i === temp.length) result += temp[i] + mod + delim;
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
// var sheet_ftma = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var val_fma    = sheet_fma.getRange("G2:H5").getValues();
// Logger.log(flattenTwoDArr(val_fma).sort()); // [1, 2, 3, 4, 5, 6, 7, 8]

// - Array of Objects
// -- FLAG -- example_arrObj

var ex_arrObj = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
];

// Logger.log("ex_arrObj");

// -- Sort Array of Objects by Property or Properties

/**
 * Returns an array of objects sorted by a single property value.
 *
 * @param {string} prop
 * @returns {Object[]}
 */

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

// Logger.log("sortArrayOfObjects");
// Logger.log(ex_arrObj.sort(sortArrayOfObjects("a"))); 
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}]

/**
 * Returns an array of objects sorted by multiple property values.
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
// Logger.log(ex_arrObj.sort(sortArrayOfObjectsMulti("b", "c"))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}]

// -- Find Object in Array of Objects

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

// Logger.log("findObjectInArrayOfObjects");
// Logger.log(findObjectInArrayOfObjects(ex_arrObj, "a", 1000)); // {a=1000.0, b=1.0, c=5.0}
// Logger.log(findObjectInArrayOfObjects(ex_arrObj, "c", 500, "a")); // 10

// Find First or Last Object in Array of Objects by Timestamp

/**
 * Returns the object with the oldest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

function findFirstObjectByTimestampInArrayOfObjects(arrObj){
  if (arrObj.length >= 2) {
    var sorted = arrObj.sort(function(a,b){
      return new Date(a.Timestamp) - new Date(b.Timestamp);
    });
    return sorted[0];
  } else {
    return arrObj[0];
  }
}

// Logger.log("findFirstObjectByTimestampInArrayOfObjects");
// var sheet_fe  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_fe = arrObjFromRange(sheet_fe, "J1:K4");
// Logger.log(findFirstObjectByTimestampInArrayOfObjects(arrObj_fe)); // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A}

/**
 * Returns the object with the latest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

function findLastObjectByTimestampInArrayOfObjects(arrObj) {
  if (arrObj.length >= 2) {
    var sorted = arrObj.sort(function(a,b){
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });
    return sorted[0];
  } else {
    return arrObj[0];
  }
} 

// Logger.log("findLastObjectByTimestampInArrayOfObjects");
// var sheet_le  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var arrObj_le = arrObjFromRange(sheet_le, "J1:K4");
// Logger.log(findLastObjectByTimestampInArrayOfObjects(arrObj_le)); // {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C}

// -- Filter Array of Objects by Value or Values

/**
 * Returns an array of objects containing matching objects.
 *
 * @param {Object} arrObj
 * @param {string} pQuery
 * @param {string || string[]} val
 * @returns {Object[]}
 */

function filterArrayOfObjectsByValueOrValues(arrObj, pQuery, valOrValues) {
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

// Logger.log("filterArrayOfObjectsByValueOrValues");
// Logger.log(filterArrayOfObjectsByValueOrValues(ex_arrObj, "a", 10)); // [{a=10.0, b=2.0, c=500.0}]
// Logger.log(filterArrayOfObjectsByValueOrValues(ex_arrObj, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}]

// -- Add Property to Objects in Array of Objects

/**
 * Returns an array of objects, with an additional property value added to each matching object.
 *
 * @param {Object[]} arrObj
 * @param {string[]} arrProp
 * @param {string} newProp 
 * @returns {Object[]}
 */

function addPropertyToObjectsInArrayOfObjects(arrObj, arrProp, newProp){
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

// Logger.log("addPropertyToObjectsInArrayOfObjects");
// Logger.log(addPropertyToObjectsInArrayOfObjects(arrObj_upfao, ["x","y","z"], "new"));
// [{new=123.0, x=123.0}, {new=234.0, y=234.0}, {new=345.0, z=345.0}]

// - Object

// -- Array of Object Values

/**
 * Returns an array of matching properties. 
 *
 * @requires intersectOfTwoArrays() 
 * @param {Object} obj
 * @param {string[]} props
 * @returns {Array}
 */

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

// Logger.log("arrayOfObjectValues");
// var arr_aoov = ["a", "b", "d"];
// Logger.log(arrayOfObjectValues(obj_aoov, arr_aoov)); // [1, 2]

// FLAG
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

// Logger.log("mergeObjs");
// Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0}

// - Dates and Times

// -- Formatted Date Time

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
// Logger.log(dateTime("hms"));
// Logger.log(dateTime("mdy"));
// Logger.log(dateTime("ymd"));
// Logger.log(dateTime("mdyampm"));
// Logger.log(dateTime());

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
// Logger.log(matchDateToRangeOfDates(quarterDates)); // "summer vacation" (pretend that today is 06/25/2018)
// Logger.log(matchDateToRangeOfDates(quarterDates, "08/02/2017")); // 1 

// - String
 
// -- Check String for Substring

function checkStringForSubstring(text, sub) {
  if (text.indexOf(sub) > -1 ) {
    return true;
  } else {
    return false;
  }
} 

// Drive

// - Utility Functions for Drive

// -- Validate Path String

/**
 * -- FLAG -- validatePathString
 *
 * @param {string} path
 * @requires checkStringForSubstring() 
 * @returns {string || boolean}
 */

function validatePathString(path) {
  if (path.charAt(0) === "/") {
    path = path.substr(1);
  }

  if (checkStringForSubstring(path, "/")) {
    return path;
  } else {
    return false;
  }
}

// Logger.log("validatePathString");
// Logger.log(validatePathString("too-short")); // false
// Logger.log(validatePathString("valid/path")); // "valid/path"
// Logger.log(validatePathString("/valid/path")); // "valid/path"

// -- Target Path String

/**
 * Returns a string path to the penultimate folder in a given path.
 *
 * @param {String} path
 * @returns {String}
 */

function targetPathString(path) {
  path = validatePathString(path);
  if (path) {
    var split = path.split("/").pop();
    path      = split.join("/");
  }
} 
 
// - Folders

function createExampleFolders() {
  verifyFolderPath("google-apps-script-cheat-sheet-demo/folders");
} 

createExampleFolders(); 

// -- Check for a Folder

// --- Check for a Folder at Root

/**
 * -- FLAG -- checkForFolderAtRoot 
 *
 * @param name
 * @returns {undefined}
 */

function checkForFolderAtRoot(name) {
  var fldrs = arrayOfFoldersAtRoot();
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(name, names)) {
    return true;
  } else {
    return false;
  }
} 

// Logger.log("checkForFolderAtRoot");
// Logger.log(checkForFolderAtRoot("google-apps-script-cheat-sheet-demo")); // true

// --- Check for a Folder in Folder

/**
 * -- FLAG -- checkForFolderInFolder
 *
 * @param name
 * @param fldr
 * @returns {undefined}
 */

function checkForFolderInFolder(name, fldr) {
  var fldrs = arrayOfFoldersInFolder(fldr);
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(names, name)) {
    return true;
  } else {
    return false;
  }
}

// Logger.log("checkForFolderInFolder");
// var fldr_cffif = verifyFolderPath("google-apps-script-cheat-sheet-demo");
// Logger.log(checkForFolderInFolder("folders", fldr_cffif)); // true

// --- Check for a Folder at Path

function checkForFolderAtPath(path) {
  path = validatePathString(path);
  if (path) {
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
    return true;
  }
}

// Logger.log("checkForFolderAtPath");
// Logger.log(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/folders")); // true

// -- Find a Folder

// --- Find a Folder at Root

/**
 * Returns a folder at the root of the user's Drive.
 *
 * @requires arrayOfFoldersAtRoot()
 * @requires arrayOfFolderNames()
 * @requires checkArrayForValue()
 * @param {string} name
 * @returns {Folder}
 */

function findFolderAtRoot(name) {
  var fldrs = arrayOfFoldersAtRoot();
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(name, names)) {
    return DriveApp.getRootFolder().getFoldersByName(name).next();
  } else {
    return false;
  }
}

// Logger.log("findFolderAtRoot");
// Logger.log(findFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo

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

function findFolderInFolder(name, fldr) {
  var fldrs = arrayOfFoldersInFolder(fldr);
  var names = arrayOfFolderNames(fldrs);
  if (checkArrayForValue(name, names)) {
    return fldr.getFoldersByName(name).next();
  } else {
    return false;
  }
}

// Logger.log("findFolderInFolder");
// var fldr_ffi = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(findFolderInFolder("A", fldr_ffi)); // A

// -- Find Folder at Path

/**
 * Returns the last folder in a folder path.
 *
 * @param path
 * @returns {Folder}
 */

function findFolderAtPath(path) {
  if (path.charAt(0) === "/") {
    path = path.substr(1);
  }

  var fi, fldr;
  var split = path.split("/");

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
  
  // -- FLAG -- check if fldr.getName() = last part of the path
  return fldr;
}

// Logger.log("findFolderAtPath");
// Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B")); // B
// Logger.log(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B/C/D/E/F/G")); // C || Folders D - G haven't been created yet.

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

// Logger.log("findFolderInDrive");
// Logger.log(findFolderInDrive("folders")); // folders

// -- Create Folder
  
// --- Create Folder at Root

function createFolderAtRoot(name) {
  return DriveApp.getRootFolder().createFolder(name);
} 

// Logger.log("createFolderAtRoot");
// -- FLAG -- don't write to root
// var now_cfar = dateTime();
// Logger.log(createFolderAtRoot(now_cfar));

// --- Create Folder in a Folder

function createFolderInFolder(name, fldr) {
  return fldr.createFolder(name);
} 

Logger.log("createFolderInFolder");
var now_cfif = dateTime();
var fldr_cfif = verifyFolderPath("google-apps-script-cheat-sheet-demo/folders/create");
Logger.log(createFolderInFolder(now_cfif, fldr_cfif));

// --- Create Folder at Path

function createFolderAtPath(path) {

} 

  
// -- Create Folders
  
// --- Create Folders at Root
  
function createFoldersAtRoot(arr) {
  for (i = 0; i < arr.length; i++) {
      DriveApp.getRootFolder().createFolder(arr[i]);
  }
  return DriveApp.getRootFolder();
}

// Logger.log("createFoldersAtRoot");

// --- Create Folders in a Folder
  
// --- Create Folders at Path

// -- Verify Folder Path

/**

 * Returns a folder at the end of a folder path.
 * Folders in the path are created if they don't already exist.
 *
 * @param {string} path
 * @returns {Folder}
 */

// -- FLAG -- Can this verify a path of "/testing"?
// -- FLAG -- was verifyPath

function verifyFolderPath(path) {
  path = validatePathString(path);
  if (path) {
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
}

// Logger.log("verifyFolderPath");
// Logger.log(verifyFolderPath("google-apps-script-cheat-sheet-demo/folders/A/B/C")); // C

// -- Array of Folders 

// --- Array of Folders in a Folder 

/**
 * Returns an array of all folders in a folder.
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
// Logger.log(arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/"))); // [A]

// --- Array of Folders at Root

/**
 * Returns an array of all folders in the root of the user's Drive.
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

// --- Array of All Folders in Drive

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
// var arr_aofldrn  = arrayOfFoldersInFolder(findFolderAtPath("google-apps-script-cheat-sheet-demo/folders/A/B"));
// Logger.log(arrayOfFolderNames(arr_aofldrn)); // [C]

// -- Create or Verify Folders

// --- Create or Verify Folders in a Folder
// -- FLAG -- argument order (!)

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
    if (!(checkArrayForValue(names, arr[i]))) {
      fldr.createFolder(arr[i]);
    }
  }
  return fldr;
}

// Logger.log("verifyFoldersInFolder");
// var fldr_covfif = findFolderAtPath("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(verifyFoldersInFolder(fldr_covfif, ["X", "Y", "Z"])); // folders
// Logger.log(arrayOfFoldersInFolder(fldr_covfif)); // [A, X, Y, Z]
  
// --- Create or Verify Folders at Root
// -- FLAG -- retest

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

// - Files

// -- Check for a File

// --- Check for File in a Folder

// function checkForFileInFolder(file, fldr) {
//   var files = arrayOfFilesInFolder(fldr); 
//   var names = arrayOfFileNames(files);
//   if (checkArrayForValue(names, file)) {
//     return true;
//   } else {
//     return false;
//   }
// }
 
// --- Check for a File at Root

function checkForFileAtRoot(file) {
  var files = arrayOfFilesAtRoot(); 
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, file)) {
    return true;
  } else {
    return false;
  }
} 

// Logger.log(checkForFileAtRoot("OK"));

//  --- Check for File at Path

function checkForFileAtPath(path) {
  path = validatePath(path);
  if (path) {
    var split = path.split("/");
    var file  = split.pop();
    path      = split.join("/");
    var fldr  = findFolderAtPath(path);
    return checkForFileInFolder(file, fldr);
  }
}
 
// -- FLAG -- Update with example file and all that
// -- FLAG -- Why is this weirdly compressed?
 
// Logger.log("checkForFileAtPath"); 
// Logger.log(checkForFileAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet"));

// -- FLAG -- createExampleFiles

function checkForExFile() {
  var fldr = verifyPath("google-apps-script-cheat-sheet-demo/files");
  var file = findFileInFolder("example-file", fldr);
  if (!(file)){fldr.createFile("example-file", "example");}
  return findFileInFolder("example-file", fldr);
}

// Logger.log("checkForExFile");
// checkForExFile();

// -- Array of Files 

// --- Array of Files in a Folder

/**
 * Returns an array of files found at the top level of a folder.
 *
 * @param {Folder} fldr
 * @returns {File[]}
 */

function arrayOfFilesInFolder(fldr) {
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
 * Note: Please *don't* actually use this in production. 
 *
 * @returns {File[]}
 */

function arrayOfFilesAtRoot() {
  var result = [];
  var rf     = DriveApp.getRootFolder();
  var fi     = rf.getFiles();
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

/**
 * Returns a file found at the top level of a folder. 
 *
 * @requires arrayOfFilesInFolder()
 * @requires arrayOfFileNames()
 * @requires checkArrayForValue()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {File}
 */

function findFileInFolder(name, fldr) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

// Logger.log("findFileInFolder");
// var fldr_ffif = findFolderAtPath("google-apps-script-cheat-sheet-demo/files");
// Logger.log(findFileInFolder("example-file", fldr_ffif)); // example-file

// --- Find a File at Root

/**
 * Returns a file found at the root of a user's Drive.
 *
 * @requires arrayOfFilesAtRoot()
 * @requires arrayOfFileNames()
 * @requires checkArrayForValue()
 * @param {string} name
 * @returns {File}
 */

function findFileAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var files = arrayOfFilesAtRoot();
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

// Logger.log("findFileInDrive");
// Logger.log(findFileInDrive("example-file")); // example-file

// --- Find File at Path

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
  return findFileInFolder(file, fldr);
} 

// Logger.log("findFileAtPath");
// Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-file")); // example-file

// -- Copy a File to a Folder

/**
 * Returns the copied file.
 *
 * @requires findFileInFolder()
 * @param {File} file
 * @param {Folder} fldr
 * @returns {File}
 */

function copyFileToFolder(file, fldr) {
  var name = file.getName();
  var dest = findFileInFolder(name, fldr);
  if (dest === undefined) file.makeCopy(name, fldr);
  return findFileInFolder(name, fldr);
}

// Logger.log("copyFileToFolder");
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
  var name = file.getName();
  var dest = findFileInFolder(name, fldr);
  if (dest === undefined) file.makeCopy(name, fldr);
  var result = findFileInFolder(name, fldr);
  if (result !== undefined) file.setTrashed(true);
  return result;
}

// Logger.log("moveFileToFolder");
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
// var file_pfofof = findFileInDrive("example-file");
// Logger.log(parentFolderOfFileOrFolder(file_pfofof)); // files

// -- Zip All Files in a Folder

function filesForZipExample() {
  Logger.log("zipExFiles");

  if (!(checkForFolderAtPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip"))) {
    var fldr = verifyPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip");
    fldr.createFile("A","hello, world!");
    fldr.createFile("B", "hello again, world!");
    fldr.createFile("C", "world! hi!");
  }
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
    Logger.log(blobs);
    Logger.log(blobs.length);
  } 

  var zips = Utilities.zip(blobs, name);

  if (dest !== null) {
    dest.createFile(zips);
    return findFileInFolder(name, dest);
  }
}

// Logger.log("zipFilesInFolder");
// filesForZipExample();
// var fldr_zfif = verifyPath("google-apps-script-cheat-sheet-demo/zip/files-to-zip");
// var dest_zfif = verifyPath("google-apps-script-cheat-sheet-demo/zip/destination");
// zipFilesInFolder(fldr_zfif, "Archive", dest_zfif);

// Google Drive Files

// -- Check for a Google Drive File

// --- Check for a Google Drive File in a Folder

/**
 * checkForGDriveFileInFolder
 *
 * @param name
 * @param fldr
 * @param type
 * @returns {undefined}
 */

function checkForFileInFolder(name, fldr, type) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, name)) {
    var mime = findFileInFolder(name, fldr).getMimeType();
    if (type === undefined) {
      return true;
    } else if (type === mime) {
      return true;
    } else {
      return false;
    }
  }
}

// Logger.log("checkForFileInFolder");
// var fldr_cfgdfif = verifyPath("google-apps-script-cheat-sheet-demo/files");
// Logger.log(checkForFileInFolder("testing", fldr_cfgdfif)); 
// Logger.log(checkForFileInFolder("testing", fldr_cfgdfif, "application/vnd.google-apps.document"));
// Logger.log(checkForFileInFolder("another", fldr_cfgdfif, "application/vnd.google-apps.document"));

// --- Check for a Google Drive File in a Folder
// --- Check for a Google Drive File at Root
// --- Check for a Google Drive File at Path
// -- Create Google Drive File
// --- Create Google Drive File in a Folder
// --- Create Google Drive File at Root
// --- Create Google Drive File at Path
// -- Verify Google Drive File
// --- Verify Google Drive File in a Folder
// --- Verify Google Drive File at Root
// --- Verify Google Drive File at Path
// -- Id of Active Google Drive File
// -- Open File as Google Drive File


// --- Check for a Spreadsheet at Root

function checkForSpreadsheetAtRoot(ss) {
  var files = arrayOfFilesAtRoot(); 
  var names = arrayOfFileNames(files);
  if (checkArrayForValue(names, ss)) {
    var type = findFileAtRoot(ss).getMimeType();
    if (type === "application/vnd.google-apps.spreadsheet") {
      return true;
    }
  } else {
    return false;
  }
} 

// --- Check for a Spreadsheet at Path

function checkForSpreadsheetAtPath(path) {
  path = validatePath(path);
  if (path) {
    var split = path.split("/");
    var ss    = split.pop();
    path      = split.join("/");
    var fldr  = findFolderAtPath(path);
    return checkForSpreadsheetInFolder(ss, fldr);
  } else {
    return false;
  }
} 

// Logger.log("checkForSpreadsheetAtPath");
// Logger.log(checkForSpreadsheetAtPath("not-a-valid-path")); // false
// Logger.log(checkForSpreadsheetAtPath("google-apps-script-cheat-sheet-demo/sheets/example-sheet")); // true
// Logger.log(checkForSpreadsheetAtPath("google-apps-script-cheat-sheet-demo/sheets/no-sheet-here")); // false
 
// -- Create Spreadsheet

// --- Create Spreadsheet in a Folder

/**
 * Creates a spreadsheet in a folder. 
 * This will create duplicate spreadsheets in a folder if called directly.
 *
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createSpreadsheetInFolder(name, fldr) {
  var ss   = SpreadsheetApp.create(name).getId();
  var file = DriveApp.getFileById(ss);
  file     = moveFileToFolder(file, fldr);
  return openFileAsSpreadsheet(file);
} 

// --- Create Spreadsheet at Root

/**
 * createSpreadsheetAtRoot
 *
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createSpreadsheetAtRoot(name) {
  var ss   = SpreadsheetApp.create(name).getId();
  var file = DriveApp.getFileById(ss);
  return openFileAsSpreadsheet(file);
} 

// --- Create Spreadsheet at Path

function createSpreadsheetAtPath(path) {
  path = validatePath(path);
  if (path) {
    var split = path.split("/");
    var ss    = split.pop();
    path      = split.join("/");
    var fldr  = verifyPath(path);
    return createSpreadsheetInFolder(ss, fldr);
  }
}

// Logger.log("createSpreadsheetAtPath");

// -- Verify Spreadsheet 

// --- Verify Spreadsheet in a Folder

/**
 * Returns a spreadsheet. 
 * This creates a spreadsheet if it does not already exist.
 *
 * @param {string} name
 * @param {Folder} fldr
 * @requires arrayOfFilesInFolder()
 * @requires arrayOfFileNames()
 * @requires checkArrayForValue()
 * @requires createSpreadsheetInFolder() 
 * @requires findFileInFolder() 
 * @requires openFileAsSpreadsheet()
 * @returns {Spreadsheet}
 */

function verifySpreadsheetInFolder(name, fldr) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (!(checkArrayForValue(names, name))) {
    return createSpreadsheetInFolder(name, fldr);
  } else {
    var type = findFileInFolder(name, fldr).getMimeType();
    if (type !== "application/vnd.google-apps.spreadsheet") {
      return createSpreadsheetInFolder(name, fldr);
    }
  }
  return openFileAsSpreadsheet(findFileInFolder(name, fldr));
}

// Logger.log("verifySpreadsheetInFolder");
// var fldr_cvssi = verifyPath("google-apps-script-cheat-sheet-demo/sheets");
// Logger.log(verifySpreadsheetInFolder("example-sheet", fldr_cvssi).getName()); // example-sheet

// --- Verify Spreadsheet at Root

/**
 * Returns a spreadsheet. 
 * This creates the spreadsheet if it does not already exist.
 *
 * @requires arrayOfFilesAtRoot()
 * @requires arrayOfFileNames()
 * @requires checkArrayForValue() 
 * @requires findFileAtRoot() 
 * @requires openFileAsSpreadsheet() 
 * @param {string} name
 * @returns {Spreadsheet}
 */

function verifySpreadsheetAtRoot(name) {
  var files = arrayOfFilesAtRoot();
  var names = arrayOfFileNames(files);
  if (!(checkArrayForValue(names, name))) {
    return createSpreadsheetAtRoot(name);
  } else {
    var type = findFileAtRoot(name).getMimeType();
    if (type !== "application/vnd.google-apps.spreadsheet") {
      createSpreadsheetAtRoot(name);
    }
  }
  return openFileAsSpreadsheet(findFileAtRoot(name));
}

// -- Verify Spreadsheet at Path

function verifySpreadsheetAtPath(path) {
  path = validatePath(path);
  if (path) {
    var split = path.split("/");
    var ss    = split.pop();
    path      = split.join("/");
    var fldr  = verifyPath(path);
    return verifySpreadsheetInFolder(ss, fldr);
  }
}
 
// Logger.log("verifySpreadsheetAtPath");
// var path_vsap = "google-apps-script-cheat-sheet-demo/sheets/example-sheet"; 
// Logger.log(verifySpreadsheetAtPath(path_vsap).getName()); // example-sheet

// -- Id of Active Spreadsheet 

/**
 * Returns the Id of the active spreadsheet.
 *
 * @returns {string}
 */

function idOfActiveSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getId();
}

// Logger.log("idOfActiveSpreadsheet");
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
} 

// Logger.log("openFileAsSpreadsheet");
// var fldr_ofas = findFolderAtPath("google-apps-script-cheat-sheet-demo/sheets");
// var file_ofas = findFileInFolder("example-sheet", fldr_ofas);
// Logger.log(openFileAsSpreadsheet(file_ofas).getName()); // example-sheet


// JSON

function fileForJSONExample() {
  var fldr = verifyPath("google-apps-script-cheat-sheet-demo/json");
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
// fileForJSONExample();
// var file_off = findFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json");
// var obj_off  = objectFromFile(file_off);
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

function ex_cnal() {
 for (var i = 1; i <= 104; i++) {
   var j = convertIndexToColumn(i);
   Logger.log(i + " - " + j);
 }
}

// Logger.log("convertIndexToColumn");
// ex_cnal(); // 1 - A ... CZ - 104

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

function ex_clan() {
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

// - A1 Notation

// -- Convert A1 Notation to Array

function convertA1ToArray(a1Notation) {
  var result = [];
  var split  = a1Notation.split(":");
  if (split.length === 2) {
    var tmp = split[0].match(/\D/g,'');
    tmp = convertColumnToIndex(String(tmp));
    result.push(tmp);
    tmp = Number(split[0].match(/\d+/g));
    result.push(tmp);
    tmp = split[1].match(/\D/g,'');
    tmp = convertColumnToIndex(String(tmp));
    result.push(tmp);
    tmp = Number(split[1].match(/\d+/g));
    result.push(tmp);
    return result;
  } else {
    return false;
  }
}

// Logger.log("convertA1ToArray");
// Logger.log(convertA1ToArray("A1:J10")); // [1, 1, 10, 10]

// -- Validate A1 Notation

function validateA1(a1Notation, sheet) {
  var col, row;
  var inputArray     = convertA1ToArray(a1Notation);
  var dataRangeA1    = sheet.getDataRange().getA1Notation();
  var dataRangeArray = convertA1ToArray(dataRangeA1);

  if ((inputArray[0] <= dataRangeArray[2]) && (inputArray[2]) <= dataRangeArray[2]) {
    col = true;
  } else {
    col = false;
  }

  if ((inputArray[1] <= dataRangeArray[3]) && (inputArray[3]) <= dataRangeArray[3]) {
    row = true;
  } else {
    row = false;
  }

  if (row && col) {
    return a1Notation;
  } else {
    return false;
  }
}

// Logger.log("validateA1Notation");
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

function arrayOfValuesByRow(rangeObj, headers){
  var height = rangeObj.getHeight();
  var width  = rangeObj.getWidth();
  var values = rangeObj.getValues();
  var result = [];
  for (var i = 0; i < height; i++) {
    var row = {};
    for (var j = 0; j < width; j++) {
      var prop = headers[j];
      var val  = values[i][j];
      if (val !== "") {
        row[prop] = val;
      } 
    }
    result.push(row);
  }  
  return result;
}

// Logger.log("arrayOfValuesByRow");
// var sheet_vbr   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_vbr   = sheet_vbr.getRange("A2:E19");
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

function headerRange(a1Notation, sheet) {
  a1Notation = validateA1(a1Notation, sheet);
  if (a1Notation) {
    var split = a1Notation.split(":");
    var col0  = split[0].match(/\D/g,'');
    var col1  = split[1].match(/\D/g,'');
    var row   = split[0].match(/\d+/g);
    var a1    = col0 + row + ":" + col1 + row;
    return sheet.getRange(a1);
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
  var split = a1Notation.split(":");
  var col0  = split[0].match(/\D/g,'');
  var row0  = split[0].match(/\d+/g);
  var col1  = split[1].match(/\D/g,'');
  var row1  = split[1].match(/\d+/g);
  var a1    = col0 + (Number(row0) + 1) + ":" + col1 + row1;
  return sheet.getRange(a1);
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
 * @requires arrayOfValuesByRow() 
 * @param sheet
 * @param hRow
 * @returns {undefined} -- FLAG -- 
 */

function arrObjFromSheet(sheet, hRow){
  if (hRow === undefined) {
    hRow = 1;
  }

  var lColNum = sheet.getLastColumn();
  var lColABC = convertIndexToColumn(lColNum);
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
  var hRange  = headerRange(a1Notation, sheet);
  var vRange  = valueRange(a1Notation, sheet);
  Logger.log("vRange");
  Logger.log(vRange);
  var headers = arrayOfHeaderValues(hRange);
  return arrayOfValuesByRow(vRange, headers);
}

// Logger.log("arrObjFromRange");
// var sheet_aofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrObjFromRange(sheet_aofr, "A2:E7")); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// - Array 

// -- Array of Values for Column

// --- For Header Value 

/**
 * Returns an array containing all values in a column.
 *
 * @param {Sheet} sheet
 * @param {number} 
 * @param {string} name
 * @returns {Array}
 */

function arrayForColumnName(sheet, name, hRow){
  if (hRow === undefined) {
    hRow = 1;
  }

  var lColNum  = sheet.getLastColumn();
  var lColABC  = convertIndexToColumn(lColNum);
  var lRow     = sheet.getLastRow();
  var hRange   = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var headers  = arrayOfHeaderValues(hRange);
  var tColABC  = convertIndexToColumn(headers.indexOf(name) + 1);
  var rangeObj = sheet.getRange(tColABC + (hRow +1) + ":" + tColABC + lRow);
  var height   = rangeObj.getHeight();
  var values   = rangeObj.getValues();
  var arr      = [];
  for (var i = 0; i < height; i++) {
      var val  = values[i][0];
      arr.push(String(val));
  }  
  return arr;
}

// Logger.log("arrayForColumnName");
// var sheet_afcna = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrayForColumnName(sheet_afcna, "First", 2)); // [Arienne, Elissa, Nerses, Gülistan, Syed, Isaiah, Stanley, Sára, Kaja, Józef, Radoslava, Sarah, ...]

// --- For Column Number

/**
 * Returns an array containing all values in a column.
 *
 * @param {Sheet} sheet
 * @param {number} hRow
 * @param {number} colIndex
 * @returns {Array}
 */

function arrayForColumnIndex(sheet, colIndex, hRow){
  if (hRow === undefined) {
    hRow = 1;
  }

  var lColNum  = sheet.getLastColumn();
  var lColABC  = convertIndexToColumn(lColNum);
  var lRow     = sheet.getLastRow();
  var hRange   = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var tColABC  = convertIndexToColumn(colIndex);
  var rangeObj = sheet.getRange(tColABC + (hRow +1) + ":" + tColABC + lRow);
  var height   = rangeObj.getHeight();
  var values   = rangeObj.getValues();
  var arr      = [];
  for (var i = 0; i < height; i++) {
      var val  = values[i][0];
      arr.push(String(val));
  }  
  return arr;
}

// Logger.log("arrayForColumnIndex");
// var sheet_afcno = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2"); 
// Logger.log(arrayForColumnIndex(sheet_afcno, 2, 2)); // [Garret, Jules, Juda, Armen, Yeong-Suk, Coy, Stevie, Emin, Tiriaq, Dilay, Kirabo, Ariadna, Devrim, Adjoa, Suk, Lyle, Edita]

// --- For Range Object

/**
 * Returns an array containing all values in the first column of a range. 
 *
 * @param {Range} rangeObj
 * @returns {Array}
 */

function arrayForColumnRange(rangeObj){
  var result = [];
  var height = rangeObj.getHeight();
  var values = rangeObj.getValues();
  var arr    = [];
  for (var i = 0; i < height; i++) {
    arr.push(values[i][0]);
  }
  return arr;
}

// Logger.log("arrayForColumnRange");
// var sheet_vafro = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var range_vafro = sheet_vafro.getRange("A2:F5");
// Logger.log(arrayForColumnRange(range_vafro)); // ["A", "B", "C", "D"]

// Docs

// - Managing Document Files
// -- Check for a Document
// --- Check for a Document in a Folder
// --- Check for a Document at Root
// --- Check for a Document at Path
// -- Create Document
// --- Create Document in a Folder
// --- Create Document at Root
// --- Create Document at Path
// -- Verify Document
// --- Verify Document in a Folder
// --- Verify Document at Root
// --- Verify Document at Path

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

function verifyDocumentInFolder(fldr, name) {
  var files = arrayOfFilesInFolder(fldr);
  var names = arrayOfFileNames(files);
  if (!(checkArrayForValue(names, name))) {
    var doc  = DocumentApp.create(name).getId();
    var file = DriveApp.getFileById(doc);
    moveFileToFolder(file, fldr);
  }
  return openFileAsDocument(findFileInFolder(name, fldr));
}

// var fldr_cvdi = verifyPath("google-apps-script-cheat-sheet-demo/docs");
// Logger.log(verifyDocumentInFolder(fldr_cvdi, "example-doc")); // example-doc

// --- Create or Verify Document at Root

/**
 * Returns a document.
 * This creates the document if it does not already exist.
 *
 * @param {string} name
 * @returns {Document}
 */

function createVerifyDocAtRoot(name) {
  var files = arrayOfFilesAtRoot();
  var names = arrayOfFileNames(files);
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

// var fldr_frid = verifyPath("google-apps-script-cheat-sheet-demo/merges");
// var doc_frid  = verifyDocumentInFolder(fldr_frid, "find-replace-doc");
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

// var fldr_fris  = verifyPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_frid    = verifySpreadsheetInFolder(fldr_fris, "find-replace-sheet");
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

// var fldr_fris  = verifyPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_fris    = verifySpreadsheetInFolder(fldr_fris, "find-replace-sheet");
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
// var fldr1_cdftao  = verifyPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_cdftao  = verifyPath("google-apps-script-cheat-sheet-demo/merges/arrObj-docs");
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
// var fldr1_csftao  = verifyPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_csftao  = verifyPath("google-apps-script-cheat-sheet-demo/merges/arrObj-sheets");
// var file_csftao   = verifySpreadsheetInFolder(fldr1_csftao, "template-sheet");
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
// var fldr_sdl   = verifyPath("google-apps-script-cheat-sheet-demo/docs");
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
// var fldr_mdl   = verifyPath("google-apps-script-cheat-sheet-demo/docs");
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
