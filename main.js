function test() {}
Logger.log("Start");

// | General
// | - Array
// | -- Check for a Value
// | -- Remove Duplicates
// | -- Remove Empty Elements
// | -- Get Count of Values
// | -- Intersect of Two Arrays
// | -- Compare Two Arrays
// | -- Array as Delimited String
// | -- Array as Modified Delimited String
// | - Two-Dimensional Array
// | -- Flatten Two-Dimensional Array
// | - Array of Objects
// | -- Sort by Property or Properties
// | -- Find Object With Unique Property Value
// | -- Find Earliest or Latest Object by Timestamp
// | -- Filter by Property Value or Values
// | -- Unify Properties for Array of Objects
// | - Object
// | -- Array of Matching Property Values
// | -- Merge Objects
// | - Dates and Times
// | -- Formatted Timestamps
// | -- Date Object from String
// | -- Match a Date to a Date Range
// | Drive
// | - Folders
// | -- Create or Verify Folder Path
// | -- Last Folder in Folder Path
// | -- Array of All Folders
// | --- All Folders in a Folder
// | --- All Folders at Root
// | --- All Folders in Drive
// | -- Array of All Folder Names
// | -- Find a Folder
// | --- Find a Folder in a Folder
// | --- Find a Folder at Root
// | --- Find a Folder in Drive
// | -- Create or Verify Folders
// | --- Create or Verify Folders in a Folder
// | --- Create or Verify Folders at Root
// | - Files
// | -- Array of All Files
// | --- All Files in a Folder
// | --- All Files at Root
// | --- All Files in Drive
// | -- Array of All File Names
// | -- Find a File
// | --- Find a File in a Folder
// | --- Find a File at Root
// | --- Find a File in Drive
// | --- Find a File at Path
// | -- Copy a File to a Folder
// | -- Move a File to a Folder
// | - Files and Folders
// | -- Rename a File or Folder
// | -- Parent Folder of a File or Folder
// | - JSON
// | -- Import JSON from URL
// | -- Import JSON from File
// | -- Import Script Configuration
// | Sheets
// | - Managing Spreadsheet Files
// | -- Create or Verify Spreadsheet
// | --- Create or Verify Spreadsheet in a Folder
// | --- Create or Verify Spreadsheet at Root
// | -- Id of Active Spreadsheet
// | -- Open File as Spreadsheet
// | - Utility Functions for Sheets
// | -- Convert Column Number to a Letter
// | -- Convert Column Letter to a Number
// | -- Replicating Import Range
// | -- Evaluating True and False
// | - Object
// | -- Object from Range 
// | -  Array of Objects
// | -- Utility Functions for Array of Objects
// | --- Header Range
// | --- Value Range
// | --- Header Values
// | --- Values by Row
// | -- Array of Objects from Sheet
// | -- Array of Objects from Range
// | - Array 
// | -- Array of Values for Column
// | --- For Header Value
// | --- For Column Number
// | --- For Range Object 
// | Docs
// | - Managing Document Files
// | -- Create or Verify Document
// | --- Create or Verify Document in a Folder
// | --- Create or Verify Document at Root
// | -- Id of Active Document
// | -- Open File as Document
// | - Utility Functions for Docs
// | -- Access Document Body
// | -- Clear Document Body
// | Merges
// | - Sheets and Docs
// | -- String From Object Properties 
// | -- Replace Object Properties 
// | --- Replace Object Properties in Document
// | --- Replace Object Properties in Spreadsheet
// | --- Replace Object Properties in Sheet
// | -- Copy Template for Item in Array of Objects and Replace Object Properties
// | --- Copy Document Template and Replace Object Properties
// | --- Copy Spreadsheet Template and Replace Object Properties
// | -- Cell Shading
// | --- Index Object Properties
// | -- Create Bulleted List in Document for Array of Objects
// | --- Single Division List
// | --- Multi Division List
// | - Gmail
// | -- Mail Merge
// | --- Append Body Property for Object in Array of Objects 
// | --- Run Mail Merge for Array of Objects

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

// -- Check for a Value

/**
 * Returns true if the value is in the array.
 *
 * @param {Array} arr
 * @param {*} val
 * @returns {boolean}
 */

function checkValIn(arr, val) { 
  return arr.indexOf(val) > -1; 
}

// var arr_cvi = [1, 2, 3, 4];
// Logger.log(checkValIn(arr_cvi, 5)); // false

// -- Remove Duplicates

/**
 * Returns an array with no duplicate values.
 *
 * @param {Array} arr 
 * @returns {Array}
 */

function rmDuplicatesFrom(arr) {
  var check  = {};
  var result = [];
  var j = 0;
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if(check[item] !== 1) {
      check[item] = 1;
      result[j++] = item;
    }
  }
  return result;
}

// var arr_rdf = [1, 2, 3, 1, 2, 3, 4,];
// Logger.log(rmDuplicatesFrom(arr_rdf)); // [1, 2, 3, 4]

// -- Remove Empty Elements

/**
 * Returns an array with no empty elements.
 *
 * @param {*} x
 * @returns {Array}
 */

function rmEmptyEl(x) {
  return (x !== (undefined || ''));
}

// var arr_rev = ["a",,"b",,,"c"];
// Logger.log(arr_rev.filter(rmEmptyEl)); // ["a", "b", "c"]

// -- Get Count of Values

/**
 * Returns an array of objects. Objects have two properties, count and value.
 *
 * @param {Array} arr
 * @property {value} a value found in the array
 * @property {count} count of the value in the array
 * @returns {Object[]}
 */

function countOfValIn(arr) {
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
      var obj   = {};
      obj.value = arr[i];
      obj.count = myCount;
      result.push(obj);
    }
  }
  return result;
}

// var arr_covi  = ["a", "b", "c", "a", "b", "c", "a"];
// Logger.log(countOfValIn(arr_covi)); // [{count=3.0, value=a}, {count=2.0, value=b}, {count=2.0, value=c}]

// -- Intersect of Two Arrays

/**
 * Returns an array of the elements in both arrays.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {Array}
 */

function intersectOf(arrA, arrB) {
  var a = 0;
  var b = 0;
  var result = [];
  while( a < arrA.length && b < arrB.length ) {
    if (arrA[a] < arrB[b] ) { a++; }
    else if (arrA[a] > arrB[b] ) { b++; }
    else {
      result.push(arrA[a]);
      a++;
      b++;
    }
  }
  return result;
}

// var arrA_io = [1, 2, 3];
// var arrB_io = [3, 4, 5];
// Logger.log(intersectOf(arrA_io, arrB_io)); // [3]

// -- Compare Two Arrays 

/**
 * Returns true if both arrays have the same elements in the same order.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @returns {boolean}
 */

function compareArr(arrA, arrB) {
  if(arrA.length !== arrB.length) return false;
  for(var i = arrA.length; i--;) {
    if(arrA[i] !== arrB[i]) return false;
  }
  return true;
}

// var arrA_ca = [1, 2, 3, 4, 5];
// var arrB_ca = [1, 2, 3, 4, 5];
// var arrC_ca = ["a", "b", "c", "d", "e"];
// Logger.log(compareArr(arrA_ca, arrB_ca)); // true
// Logger.log(compareArr(arrA_ca, arrC_ca)); // false

// -- Array as Delimited String

/**
 * Returns a string of array values. 
 * Elements are separated by a delimiter and a space.
 *
 * @param {Array} arr
 * @param {string} delim
 * @returns {string}
 */

function delimStrFromArr(arr, delim) {
  var _arr = rmDuplicatesFrom(arr).sort();
  var result  = "";
  for (var i = 0; i < _arr.length; i++) {
    result += _arr[i] + delim + " ";
  }
  result = result.slice(0, -2);
  return result;
}

// var arr_da = ["c@example.com", "b@example.com", "a@example.com"];
// Logger.log(delimStrFromArr(arr_da, ",")); // "a@example.com, b@example.com, c@example.com"

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

function delimStrFromArrMod(arr, delim, mod) {
  var _arr = rmDuplicatesFrom(arr).sort();
  var result  = "";
  for (var i = 0; i < _arr.length; i++) {
    result += _arr[i] + mod + delim + " "; 
  }
  result = result.slice(0, -2);
  return result;
}

// var arr_clfd = ["x", "z", "y"];
// Logger.log(delimStrFromArrMod(arr_clfd, ",", "@example.com")); // "x@example.com, y@example.com, z@example.com"

// - Two-Dimensional Array

// -- Flatten Two-Dimensional Array

/**
 * Returns an array containing all values in a two-dimensional array.
 *
 * @param {Array[]} twoDArr
 * @returns {Array} 
 */

function flattenTwoDArr(twoDArr) {
  var result = twoDArr.reduce(function(a, b) {
    return a.concat(b);
  });
  return result;
}

// var sheet_fma = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var val_fma   = sheet_fma.getRange("G2:H5").getValues();
// Logger.log(flattenTwoDArr(val_fma).sort()); // [1, 2, 3, 4, 5, 6, 7, 8]

// - Array of Objects

var ex_arrObj = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
];

// -- Sort by Property or Properties

/**
 * Returns an array of objects sorted by a single property value.
 *
 * @param {string} prop
 * @returns {Object[]}
 */

function dynSort(prop) {
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

// Logger.log(ex_arrObj.sort(dynSort("a"))); 
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}]

/**
 * Returns an array of objects sorted by multiple property values.
 * @param {...string}
 * @returns {Object[]}
 */

function dynSortM() {
  var props = arguments;
  return function (obj1, obj2) {
    var i = 0, result = 0, numberOfProperties = props.length;
    while(result === 0 && i < numberOfProperties) {
      result = dynSort(props[i])(obj1, obj2);
      i++;
    }
    return result;
  };
}

// Logger.log(ex_/rrObj.sort(dynSortM("b", "c"))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}]

// -- Find Object With Unique Property Value

/**
 * Returns the first object in an array of objects with the key value pair.
 *
 * @param {Object[]} arrObj
 * @param {string} pQuery
 * @param {string} val
 * @returns {Object}
 */

function findObjIn(arrObj, pQuery, val) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(pQuery) && prop == pQuery && obj[prop] == val) {
        return obj;
      }
    }
  }
}

// Logger.log(findObjIn(ex_arrObj,"a",1000)); // {a=1000.0, b=1.0, c=5.0}

/**
 * Returns a value from the first matching object in the array.
 *
 * @param {Object[]} arrObj
 * @param {string} pQuery
 * @param {string} val
 * @param {string} pReturn
 * @returns {*}
 */

function findObjValIn(arrObj, pQuery, val, pReturn) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(pQuery) && prop == pQuery && obj[prop] == val) {
        return obj[pReturn];
      }
    }
  }
}

// Logger.log(findObjValIn(ex_arrObj, "c", 500, "a")); // 10

// -- Find Earliest or Latest Object by Timestamp

/**
 * Returns the object with the oldest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

function earliestTS(arrObj){
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
// Logger.log(earliestTS(arrObj_fe)); // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A}

/**
 * Returns the object with the latest Timestamp value.
 *
 * @param {Object[]} arrObj
 * @returns {Object}
 */

function latestTS(arrObj) {
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
// Logger.log(latestTS(arrObj_le)); // {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C}

// -- Filter by Property Value or Values

/**
 * Returns an array of objects containing matching objects.
 *
 * @param {Object} arrObj
 * @param {string} pQuery
 * @param {string[]} arrVal
 * @returns {Object[]}
 */

function filterObjIn(arrObj, pQuery, arrVal) {
  var result = [];
  for (var i = 0; i < arrVal.length; i++) {
    var val = arrVal[i]; 
    for (var j = 0; j < arrObj.length; j++) {
      if (arrObj[j][pQuery] == val) result.push(arrObj[j]);
    }
  } 
  return result;
}

// Logger.log(filterObjIn(ex_arrObj, "a", [10])); // [{a=10.0, b=2.0, c=500.0}]
// Logger.log(filterObjIn(ex_arrObj, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}]

// -- Unify Properties for Array of Objects 

/**
 * Returns an array of objects, with an additional property value added to each matching object.
 *
 * @param {Object[]} arrObj
 * @param {string[]} arrProp
 * @param {string} newProp 
 * @returns {Object[]}
 */

function unifyPropForArrObj(arrObj, arrProp, newProp){
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

// Logger.log(unifyPropForArrObj(arrObj_upfao, ["x","y","z"], "new"));
// [{new=123.0, x=123.0}, {new=234.0, y=234.0}, {new=345.0, z=345.0}]

// - Object

// -- Array of Matching Property Values 

/**
 * Returns an array of matching properties. 
 *
 * @requires intersectOf() 
 * @param {Object} obj
 * @param {string[]} props
 * @returns {Array}
 */

function filterValIn(obj, props) {
  var result = [];
  var keys   = intersectOf(Object.keys(obj), props);
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

// var obj_fvi = { 
//  a: 1, 
//  b: 2, 
//  c: 3
// };

// var arr_fvi = ["a", "b", "d"];
// Logger.log(filterValIn(obj_fvi, arr_fvi)); // [1, 2]

// Merge Objects

/**
 * Returns an object with the values of the argument objects.
 * If multiple objects have the same property value, the last value set is retained. 
 * @param {...Object}
 * @returns {Object}
 */

function mergeObjs() {
  var obj = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    var src = arguments[i]; 
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
  } 
  return obj;
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

function fmatD() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ];
    return d.join("-");
}

// Logger.log(fmatD()); // "4-24-2017"

/**
 * Returns a string of the current time formatted "hour:minute:second".
 *
 * @returns {string}
 */

function fmat24T(){
  var n  = new Date();
  var t = [ n.getHours(), n.getMinutes(), n.getSeconds() ];
    for ( var i = 1; i < 3; i++ ) {
      if ( t[i] < 10 ) {
        t[i] = "0" + t[i];
      }
      return t.join(":");
    }
}

// Logger.log(fmat24T()); // "20:43:40"

/**
 * Returns a string of today's date and the current time formatted "month-day-year hour:minute:second AM/PM"
 *
 * @returns {string}
 */

function fmat12DT() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ];
    var t = [ n.getHours(), n.getMinutes(), n.getSeconds() ];
    var s = ( t[0] < 12 ) ? "AM" : "PM";
  t[0]  = ( t[0] <= 12 ) ? t[0] : t[0] - 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( t[i] < 10 ) {
      t[i] = "0" + t[i];
    }
  }
  return d.join("/") + " " + t.join(":") + " " + s;
}

// Logger.log(fmat12DT()); // "4-24-2017 8:43:40 PM"

// -- Date Object from String

/**
 * Returns a new date object from a string formatted year-month-date. 
 *
 * @param {string} str
 * @returns {Date}
 */

function dateObjectFrom(str) {
  var split  = str.split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  return new Date (months[(split[1] - 1)] + " " + split[2] + ", " + split[0]);
}

// Logger.log(dateObjectFrom("2017-04-24")); // Mon Apr 24 00:00:00 GMT-05:00 2017

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

function matchDateRange(arrObj, optDate) {
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
 * The folder is created if it does not exist already.
 *
 * @param {string} path
 * @returns {Folder}
 */

function createVerifyPath(path) {
  var split = path.split('/');
  var fldr;
  for (i = 0; i < split.length; i++) {
    var fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
    if (i === 0) {
      if(!(fi.hasNext())) {
        DriveApp.createFolder(split[i]);
        fi = DriveApp.getFoldersByName(split[i]);
      } 
      fldr = fi.next();
    } else if (i >= 1) {
      fi = fldr.getFoldersByName(split[i]);
      if(!(fi.hasNext())) {
        fldr.createFolder(split[i]);
        fi = DriveApp.getFoldersByName(split[i]);
      } 
      fldr = fi.next();
    }
  } 
  return fldr;
}

// Logger.log(createVerifyPath("google-apps-script-cheat-sheet-demo/folders/A/B/C")); // C

// -- Last Folder in Folder Path 

/**
 * Returns the last folder in a folder path.
 *
 * @param path
 * @returns {Folder}
 */

function lastFolderIn(path) {
  var fi;
  var split = path.split('/');
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

// Logger.log(lastFolderIn("google-apps-script-cheat-sheet-demo/folders/A/B")); // B
// Logger.log(lastFolderIn("google-apps-script-cheat-sheet-demo/folders/A/B/C/D/E/F/G")); // C

// -- Array of All Folders 

// --- All Folders in a Folder 

/**
 * Returns an array of all folders in a folder.
 *
 * @param {Folder} fldr
 * @returns {Folder[]}
 */

function foldersIn(fldr) {
  var fi  = fldr.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var _fldr = fi.next();
    arr.push(_fldr);
  } 
  return arr;
}

// Logger.log(foldersIn(lastFolderIn("google-apps-script-cheat-sheet-demo/folders/"))); // [A]

// --- All Folders at Root

/**
 * Returns an array of all folders in the root of the user's Drive.
 *
 * @returns {Folder[]}
 */

function rootFolders() {
  var rf  = DriveApp.getRootFolder();
  var fi  = rf.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    arr.push(fldr);
  } 
  return arr;
}

// Logger.log(rootFolders());

// --- All Folders in Drive

/**
 * Returns an array of all folders in the user's Drive.
 *
 * @returns {Folder[]}
 */

function allFolders() {
  var fi  = DriveApp.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    arr.push(fldr);
  } 
  return arr;
}

// Logger.log(allFolders());

// -- Array of Folder Names

/**
 * Returns an array of folder names.
 *
 * @param {Folders[]}
 * @returns {string[]}
 */

function folderNames(fldrs) {
  var arr = [];
  for (var i = 0; i < fldrs.length; i++) {
    var name = fldrs[i].getName();
    arr.push(name);
  }
  return arr;
}

// var arr_fn  = foldersIn(lastFolderIn("google-apps-script-cheat-sheet-demo/folders/A/B"));
// Logger.log(folderNames(arr_fn)); // [C]

// -- Find a Folder

// --- Find a Folder in a Folder

/**
 * Returns a folder.
 *
 * @requires foldersIn() 
 * @requires folderNames() 
 * @requires checkValIn()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Folder}
 */

function findFolderIn(fldr, name) {
  var fldrs = foldersIn(fldr);
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var _fldr = fldr.getFoldersByName(name).next();
    return _fldr;
  }
}

// var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(findFolderIn(fldr_ffi, "A")); // A

// --- Find a Folder at Root

/**
 * Returns a folder at the root of the user's Drive.
 *
 * @requires rootFolders()
 * @requires folderNames()
 * @requires checkValIn()
 * @param {string} name
 * @returns {Folder}
 */

function findFolderAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var fldrs = rootFolders();
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var fldr = rf.getFoldersByName(name).next();
    return fldr;
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
    var fldr = fi.next();
    return fldr;
  }
}

// Logger.log(findFolderInDrive("folders")); // folders

// -- Create or Verify Folders

// --- Create or Verify Folders in a Folder

/**
 * Returns a folder. 
 * Creates folders within a folder if they don't already exist.
 *
 * @requires foldersIn()
 * @requires folderNames()
 * @requires checkValIn()
 * @param {Folder} fldr
 * @param {string[]} names
 * @returns {Folder}
 */

function createVerifyFoldersIn(fldr, names) {
  var fldrs  = foldersIn(fldr);
  var _names = folderNames(fldrs);
  for (i = 0; i < names.length; i++) {
    if (!(checkValIn(_names, names[i]))) {
      fldr.createFolder(names[i]);
    }
  }
  return fldr;
}

// var fldr_cvfi = lastFolderIn("google-apps-script-cheat-sheet-demo/folders");
// Logger.log(createVerifyFoldersIn(fldr_cvfi, ["X", "Y", "Z"])); // folders
// Logger.log(foldersIn(fldr_cvfi)); // [A,X,Y,Z]
  
// --- Create or Verify Folders at Root

/**
 * Returns the root folder.
 * Creates folders at root if they don't exist already.
 *
 * @param {string[]} names
 * @returns {Folder}
 */

function createVerifyFoldersAtRoot(names) {
  var rfs    = rootFolders();
  var _names = folderNames(rfs);
  for (i=0; i < names.length; i++) {
    if (!(checkValIn(_names, names[i]))) {
      DriveApp.createFolder(names[i]);
    }
  } 
  return DriveApp.getRootFolder();
}

// - Files

// checkForExFile creates an empty example file

function checkForExFile() {
  var fldr = createVerifyPath("google-apps-script-cheat-sheet-demo/files");
  var file = findFileIn(fldr, "example-file");
  if (!(file)){fldr.createFile("example-file", "example");}
  return findFileIn(fldr, "example-file");
}

// Logger.log(checkForExFile());

// -- Array of All Files 

// --- All Files in a Folder

/**
 * Returns an array of files found at the top level of a folder.
 *
 * @param {Folder} fldr
 * @returns {File[]}
 */

function filesIn(fldr) {
  var fi  = fldr.getFiles();
  var arr = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

// var fldr_fin = lastFolderIn("google-apps-script-cheat-sheet-demo/files");
// Logger.log(filesIn(fldr_fin)); // [example-file]

// --- All Files at Root

/**
 * Returns an array of all files at the root of a user's Drive.
 *
 * @returns {File[]}
 */

function rootFiles() {
  var rf = DriveApp.getRootFolder();
  var fi = rf.getFiles();
  var arr = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

// Logger.log(rootFiles());

// --- All Files in Drive

/**
 * Returns an array of all files in the user's Drive.
 *
 * @returns {File[]}
 */

function allFiles() {
  var fi = DriveApp.getFiles();
  var arr  = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

// Logger.log(allFiles());

// -- Array of File Names 

/**
 *  Returns an array of file names.
 *
 * @param {File[]} files
 * @returns {string[]}
 */

function fileNames(files) {
  var arr = [];
  for (var i = 0; i < files.length; i++) {
    var name = files[i].getName();
    arr.push(name);
  }
  return arr;
}

// var fldr_fnam = lastFolderIn("google-apps-script-cheat-sheet-demo/files");
// var arr_fnam  = filesIn(fldr_fnam);
// Logger.log(fileNames(arr_fnam)); // [example-file]

// -- Find a File

// --- Find a File in a Folder

/**
 * Returns a file found at the top level of a folder. 
 *
 * @requires filesIn()
 * @requires fileNames()
 * @requires checkValIn()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {File}
 */

function findFileIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

// var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet-demo/files");
// Logger.log(findFileIn(fldr_ffi, "example-file")); // example-file

// --- Find a File at Root

/**
 * Returns a file found at the root of a user's Drive.
 *
 * @requires rootFiles()
 * @requires fileNames()
 * @requires checkValIn()
 * @param {string} name
 * @returns {File}
 */

function findFileAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var files = rootFiles();
  var names = fileNames(files);
  if (checkValIn(names, name)) {
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
 * Returns the file found at the end of a path.
 *
 * @param {string} path
 * @returns {File}
 */

function findFileAtPath(path) {
  var fi;
  var split = path.split('/');
  var file  = split[split.length -1];
  var fldr;
  for (i = 0; i < split.length - 1; i++) {
    if (i === 0) {
      fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
      if (fi.hasNext()) {
        fldr = fi.next();
      } else { 
        return null;
      }
    } else if (i >= 1) {
        fi = fldr.getFoldersByName(split[i]);
        if (fi.hasNext()) {
          fldr = fi.next();
        } else { 
          return null;
        }
    }
  } 
  return findFileIn(fldr, file);
} 

// Logger.log(findFileAtPath("google-apps-script-cheat-sheet-demo/files/example-file"));

// -- Copy a File to a Folder

/**
 * Returns the copied file.
 *
 * @requires findFileIn()
 * @param {File} file
 * @param {Folder} fldr
 * @returns {File}
 */

function copyFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) file.makeCopy(name, fldr);
  return findFileIn(fldr, name);
}

// var fldr_cf = createVerifyPath("google-apps-script-cheat-sheet-demo/files/copied");
// var file_cf = findFileInDrive("example-file");
// Logger.log(copyFile(file_cf, fldr_cf)); // example-file

// -- Move a File to a Folder 

/**
 * Returns the copied file from its new destination.
 *
 * @requires findFileIn()
 * @param {File} file
 * @param {Folder}  fldr
 * @returns {File}
 */

function moveFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) file.makeCopy(name, fldr);
  var _file = findFileIn(fldr, name);
  if (_file !== undefined) file.setTrashed(true);
  return _file;
}

// var fldr_mf1 = lastFolderIn("google-apps-script-cheat-sheet-demo/files/copied");
// var file_mf  = findFileIn(fldr_mf1, "example-file");
// var fldr_mf2 = createVerifyPath("google-apps-script-cheat-sheet-demo/files/moved");
// Logger.log(moveFile(file_mf, fldr_mf2)); // example-file

// - Files and Folders

// -- Rename a File or Folder

/**
 * Returns a renamed file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @param {string} name
 * @returns {File || Folder}
 */

function renameFileFldr(file_fldr, name) {
  file_fldr.setName(name);
  return file_fldr;
} 

// var fldr_rf = lastFolderIn("google-apps-script-cheat-sheet-demo/files/moved");
// var file_rf = findFileIn(fldr_rf, "example-file");
// Logger.log(renameFileFldr(file_rf, "modified-example-file")); // modified-example-file

// -- Parent Folder of a File or Folder 

/**
 * Returns the parent folder or a file or a folder.
 *
 * @param {File || Folder} file_fldr
 * @returns {Folder}
 */

function parentFolderOf(file_fldr) {
  var fi = file_fldr.getParents();
  return fi.next();
}

// var file_pfo = findFileInDrive("example-file");
// Logger.log(parentFolderOf(file_pfo)); // files

// JSON

function jsonExFile() {
  var fldr = createVerifyPath("google-apps-script-cheat-sheet-demo/json");
  var file = findFileIn(fldr, "example-json");
  var json = jsonFromUrl("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
  var text = JSON.stringify(json);
  if (!(file)){fldr.createFile("example-json");}
  file.setContent(text);
  return findFileIn(fldr, "example-json");
}

// jsonExFile()

// -- Object From URL

/**
 * Returns an object from a URL.
 *
 * @param {string} url
 * @returns {JSON}
 */

function parseJSONFromURL(url) {
  var rsp  = UrlFetchApp.fetch(url);
  var data = rsp.getContentText();
  return JSON.parse(data);
} 

// var json_jfu     = jsonFromUrl("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json");
// var glossary_jfu = json_jfu.glossary;
// Logger.log(JSON.stringify(json_jfu));
// Logger.log(JSON.stringify(glossary_jfu));

// -- Object From File

/**
 * Returns JSON from a file in the user's Drive.
 *
 * @param {File} file
 * @returns {JSON}
 */

function parseJSONFromFile(file) {
  var data = file.getBlob().getDataAsString();
  return JSON.parse(data);
} 

// var file_jff     = findFileAtPath("google-apps-script-cheat-sheet-demo/json/example-json");
// var json_jff     = jsonFromFile(file_jff);
// var glossary_jff = json_jff.glossary;
// Logger.log(JSON.stringify(json_jff));
// Logger.log(JSON.stringify(glossary_jff));

// -- Import Script Configuration

/**
 * Returns JSON from a URL or from a file in the user's Drive.
 *
 * @param {string || File} scriptConfig
 * @returns {JSON}
 */

function importConfiguration(scriptConfig) {
  var regExp = new RegExp("^(http|https)://");
  var test   = regExp.test(scriptConfig);
  var json;
  if (test) {
    json = jsonFromUrl(scriptConfig); 
    return json;
  } else {
    var file = findFileAtPath(scriptConfig); 
    json = jsonFromFile(file); 
    return json;
  }
}

// Logger.log(JSON.stringify(importConfiguration("https://raw.githubusercontent.com/jcodesmn/google-apps-script-cheat-sheet/dev/example.json")));
// Logger.log(JSON.stringify(importConfiguration("google-apps-script-cheat-sheet-demo/json/example-json")));

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
 * @requires checkValIn
 * @requires moveFile()
 * @requires findFileIn()
 * @requires openFileAsSpreadsheet()
 * @param {Folder} fldr
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createVerifySSIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (!(checkValIn(names, name))) {
    var ss   = SpreadsheetApp.create(name).getId();
    var file = DriveApp.getFileById(ss);
    moveFile(file, fldr);
  }
  return openFileAsSpreadsheet(findFileIn(fldr, name));
}

// var fldr_cvssi = createVerifyPath("google-apps-script-cheat-sheet-demo/sheets");
// Logger.log(createVerifySSIn(fldr_cvssi, "example-sheet")); // example-sheet

// --- Create or Verify Spreadsheet at Root

/**
 * Returns a spreadsheet. 
 * This creates the spreadsheet if it does not already exist.
 *
 * @requires rootFiles()
 * @requires fileNames()
 * @requires checkValIn() 
 * @requires findFileAtRoot() 
 * @requires openFileAsSpreadsheet() 
 * @param {string} name
 * @returns {Spreadsheet}
 */

function createVerifySSAtRoot(name) {
  var files = rootFiles();
  var names = fileNames(files);
  if (!(checkValIn(names, name))) {
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

function ssId() {
  var _id = SpreadsheetApp.getActiveSpreadsheet().getId();
  return _id;
}

// Logger.log(ssId());

// -- Open File as Spreadsheet

/**
 * Returns a spreadsheet. 
 *
 * @param {string} 
 * @returns {Spreadsheet}
 */

function openFileAsSpreadsheet(file) {
  var _id = file.getId();
  var _ss = SpreadsheetApp.openById(_id);
  return _ss;
} 

// var fldr_ofas = lastFolderIn("google-apps-script-cheat-sheet-demo/sheets")
// var file_ofas = findFileIn(fldr_ofas, "example-sheet");
// Logger.log(openFileAsSpreadsheet(file_ofas));

// - Utility Functions for Sheets

// -- Convert Column Number to a Letter 

/**
 * Returns the column number as a alphabetical column value.
 * Columns are indexed from 1, not from 0.
 * "CZ" // 103 is the highest supported value.
 *
 * @param {number} number
 * @returns {string}
 */

function numCol(number) {
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

// function ex_nc() {
//  for (var i = 1; i <= 104; i++) {
//    var j = numCol(i);
//    Logger.log(i + " - " + j);
//  }
// }

// ex_nc();

// -- Convert Column Letter to a Number

/**
 * Returns an alphabetical column value as a number.
 *
 * @param {string} column
 * @returns {number}
 */

function colNum(column) {
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

// function ex_cn() {
//   var abc;
//  for (var i = 0; i <= 25; i++) {
//    abc = String.fromCharCode(97 + i).toUpperCase();
//    Logger.log(abc + " - " + colNum(abc));
//  }
//  for (var j = 26; j <= 51; j++) {
//    abc = "A" + String.fromCharCode(97 - 26 + j).toUpperCase();
//    Logger.log(abc + " - " + colNum(abc));
//  }
// }

// ex_cn();

// -- Replicating Import Range 

/**
 * Replicating import range in Google Apps Script.
 * Requires a trigger to function.
 * importRange : From spreadsheet : On edit
 *
 */

function importRange(){
  var get = sheet_gs.getRange("A2:A5").getValues();
  var set = sheet_gs.getRange("B2:B5").setValues(get);
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

function checkTF(input) {
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

// Logger.log(checkTF("No")); // false
// Logger.log(checkTF("Yes")); // true

// -- Array of Sheet Names

/**
 * Returns an array of the sheet names for a spreadsheet.
 *
 * @param {Spreadsheet} ss
 * @returns {string[]}
 */

function arrSheetNames(ss) {
  var sheets = ss.getSheets();
  var arr    = [];
  for (var i = 0; i < sheets.length; i++) {
    arr.push(sheets[i].getName());
  } 
  return arr;
} 

// var ss_asn = SpreadsheetApp.getActiveSpreadsheet();
// Logger.log(arrSheetNames(ss_asn)); // [Sheet1, Sheet2, Sheet3]

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

function objFromRange(sheet, a1Notation) {
  var range  = sheet.getRange(a1Notation);
  var height = range.getHeight();
  var width  = range.getWidth();
  var values = range.getValues();
  var obj    = {};
  for (var i = 0; i < values.length; i++) {
    obj[values[i][0]] = values[i][1];
  } 
  return obj;
}

// var sheet_ofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// Logger.log(objFromRange(sheet_ofr, "D2:E5")); // {A=Alpha, B=Bravo, C=Charlie, D=Delta}

// - Array of Objects

// -- Utility Functions for Array of Objects

// --- Header Values 

/**
 * Returns an array of values for the top row of a range object.
 *
 * @param {Range} rangeObj
 * @returns {Array}
 */

function headerVal(rangeObj){
  var vals = rangeObj.getValues();
  var arr  = [];
  for (var i = 0; i < vals[0].length; i++) {
    var val = vals[0][i];
    arr.push(val);
  } 
  return arr;
}

// var sheet_hv = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_hv = sheet_hv.getRange("A2:E19");
// Logger.log(headerVal(range_hv)); // [First, Last, Grade, Homeroom, Email]

// --- Values by Row 

/**
 * Returns an array of objects representing a range.
 *
 * @param {Range} rangeObj
 * @param {Array} headers
 * @returns {Object[]}
 */

function valByRow(rangeObj, headers){
  var height = rangeObj.getHeight();
  var width  = rangeObj.getWidth();
  var vals   = rangeObj.getValues();
  var arr  = [];
  for (var i = 0; i < height; i++) {
    var row = {};
    for (var j = 0; j < width; j++) {
      var prop = headers[j];
      var val  = vals[i][j];
      if (val !== "") {
        row[prop] = val;
      } 
    }
    arr.push(row);
  }  
  return arr;
}

// var sheet_vbr   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var range_vbr   = sheet_hv.getRange("A2:E19");
// var headers_vbr = headerVal(range_vbr);
// Logger.log(valByRow(range_vbr, headers_vbr)); // [{Last=Last, Email=Email, Homeroom=Homeroom, Grade=Grade, First=First}, {Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}...]

// --- Header Range 

/**
 * Returns the header range for a targeted range.
 *
 * @param {Sheet} sheet
 * @param {string} a1Notation
 * @returns {Range}
 */


// function arrObjFromRange(sheet, a1Notation) {
//   var hRange  = headerRange(sheet, a1Notation);
//   var vRange  = valueRange(sheet, a1Notation);
//   var headers = headerVal(hRange);
//   return valByRow(vRange, headers);
// }


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
// Logger.log(valueRange(sheet_vr, "A2:E19").getValues()); // [[Arienne, Garret, 6.0, Muhsina, agarret@example.com], [Elissa, Jules, 6.0, Lale, ejules@example.com]...]

// -- Array of Objects from Sheet 

/**
 * Returns an array of objects representing the values in a sheet.
 *
 * @requires numCol() 
 * @requires headerVal() 
 * @requires valByRow() 
 * @param sheet
 * @param hRow
 * @returns {undefined}
 */

function arrObjFromSheet(sheet, hRow){
  var lColNum = sheet.getLastColumn();
  var lColABC = numCol(lColNum);
  var lRow    = sheet.getLastRow();
  var hRange  = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var headers = headerVal(hRange);
  var vRange  = sheet.getRange("A" + (hRow +1) + ":" + lColABC + lRow);
  return valByRow(vRange, headers);
}

// var sheet_aofs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// Logger.log(arrObjFromSheet(sheet_aofs, 2)); // [{Last=Garret, Email=agarret@example.com, Homeroom=Muhsina, Grade=6.0, First=Arienne}, {Last=Jules, Email=ejules@example.com, Homeroom=Lale, Grade=6.0, First=Elissa}...]

// -- Array of Objects from Range 

/**
 * Returns an array of values representing the values in a range.
 *
 * @requires headerRange() 
 * @requires valueRange() 
 * @requires headerVal() 
 * @requires valByRow() 
 * @param sheet
 * @param a1Notation
 * @returns {undefined}
 */

function arrObjFromRange(sheet, a1Notation) {
  var hRange  = headerRange(sheet, a1Notation);
  var vRange  = valueRange(sheet, a1Notation);
  var headers = headerVal(hRange);
  return valByRow(vRange, headers);
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

function arrForColName(sheet, hRow, name){
  var lColNum  = sheet.getLastColumn();
  var lColABC  = numCol(lColNum);
  var lRow     = sheet.getLastRow();
  var hRange   = sheet.getRange("A" + hRow + ":" + lColABC + hRow);
  var headers  = headerVal(hRange);
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

// -- Create or Verify Document in a Folder or at Root 

// --- Create or Verify Document in a Folder

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
  if (!(checkValIn(names, name))) {
    var doc  = DocumentApp.create(name).getId();
    var file = DriveApp.getFileById(doc);
    moveFile(file, fldr);
  }
  return openFileAsDocument(findFileIn(fldr, name));
}

// var fldr_cvdi = createVerifyPath("google-apps-script-cheat-sheet-demo/docs");
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
  if (!(checkValIn(names, name))) {
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

// var fldr_ofad = lastFolderIn("google-apps-script-cheat-sheet-demo/docs");
// var file_ofad = findFileIn(fldr_ofad, "example-doc");
// Logger.log(openFileAsDocument(file_ofad));

// - Utility Functions for Docs

// -- Access Document Body

// var fldr_adb = lastFolderIn("google-apps-script-cheat-sheet-demo/docs");
// var file_adb = findFileIn(fldr_adb, "example-doc");
// var doc_adb  = openFileAsDocument(file_adb);
// doc_adb.appendParagraph("Hello, world!");

// -- Clear Document Body

// var fldr_cdb = lastFolderIn("google-apps-script-cheat-sheet-demo/docs");
// var file_cdb = findFileIn(fldr_cdb, "example-doc");
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

// var fldr_frid = createVerifyPath("google-apps-script-cheat-sheet-demo/merges");
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

// var fldr_fris  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_frid    = createVerifySSIn(fldr_fris, "find-replace-sheet");
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

// var fldr_fris  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges");
// var ss_fris    = createVerifySSIn(fldr_fris, "find-replace-sheet");
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
 * For every object in the array, create a new merged document from a template.
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
// var fldr1_cdftao  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_cdftao  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges/arrObj-docs");
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
 * For every object in the array, create a new merged spreadsheet from a template.
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
// var fldr1_csftao  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges");
// var fldr2_csftao  = createVerifyPath("google-apps-script-cheat-sheet-demo/merges/arrObj-sheets");
// var file_csftao   = createVerifySSIn(fldr1_csftao, "template-sheet");
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
// var fldr_sdl   = createVerifyPath("google-apps-script-cheat-sheet-demo/docs");
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
// var fldr_mdl   = createVerifyPath("google-apps-script-cheat-sheet-demo/docs");
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

var sheet_aasbfao = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_asbfao = arrObjFromSheet(sheet_aasbfao, 2);
var subj_asbfao   = "Classroom update for %First% %Last%";
var body_asbfao   = "<p>%First% %Last% is in %Homeroom%'s this fall!</p>";
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
// var subj_rmmfao   = "Classroom update for %First% %Last%"
// var body_rmmfao   = "<p>%First% %Last% is in %Homeroom%'s this fall!</p>";
// arrObj_rmmfao     = appendSubjBodyForArrObj(arrObj_rmmfao, subj_rmmfao, body_rmmfao);
// runMailMergeForArrObj(arrObj_rmmfao);

Logger.log("End");
