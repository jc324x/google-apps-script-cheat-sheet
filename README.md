# Google Apps Script Cheat Sheet #

[General](#general)
* [Array](#array)
  * [Check for a Value](#check-for-a-value--return-boolean)
  * [Remove Duplicates](#remove-duplicates--return-array)
  * [Remove Empty Values](#remove-empty-values--return-array)
  * [Get Count of Values](#get-count-of-values--return-array-objects)
  * [Intersect of Two Arrays](#intersect-of-two-arrays--return-array)
  * [Compare Two Arrays](#compare-two-arrays--return-boolean)
  * [Array as Delimited String](#array-as-delimited-string--return-string)
  * [Array as Modified Delimited String](#array-as-modified-delimited-string--return-string)
* [Multidimensional Array](#multidimensional-array)
  * [Flatten Multidimensional Array](#flatten-multidimensional-array--return-array)
* [Array of Objects](#array-of-objects)
  * [Sort by Property or Properties](#sort-by-property-or-properties--return-array-objects)
  * [Find Object With Unique Property Value](#find-object-with-unique-property-value--return-object--value)
  * [Find Earliest or Latest Object by Timestamp](#find-earliest-or-lastest-object-by-timestamp--return-object)
  * [Filter by Property Value or Values](#filter-by-property-value-or-values--return-array-objects)
  * [Unify Properties for Array of Objects](#unify-properties-for-array-of-objects--return-array-objects)
* [Object](#object)
  * [Array of Matching Property Values](#array-of-matching-property-values--return-array)
  * [Merge Objects](#merge-objects--return-object)
  * [Object from Range](#object-from-range--return-object)
* [Dates and Times](#dates-and-times)
  * [Formatted Timestamps](#)
  * [Date Object from String](#)
  * [Match a Date to a Range](#)

[Drive](#drive)
* [Folders](#folders)
  * [Create or Verify Folder Path](#)
  * [Last Folder in Folder Path](#)
  * [Array of All Folders](#)
    * [All Folders in a Folder](#)
    * [All Folders at Root](#)
    * [All Folders in Drive](#)
  * [Array of All Folder Names](#)
  * [Find a Folder](#)
    * [Find a Folder in a Folder](#)
    * [Find a Folder at Root](#)
    * [Find a Folder in Drive](#)
  * [Create or Verify Folders](#)
    * [Create or Verify Folders in a Folder](#)
    * [Create or Verify Folders at Root](#)
  * [Rename a Folder](#)
* [Files](#files)
  * [Array of All Files](#)
    * [All Files in a Folder](#)
    * [All Files at Root](#)
    * [All Files in Drive](#)
  * [Array of All File Names](#)
  * [Find a File](#)
  * [Parent Folder of a File](#)
  * [Copy a File to a Folder](#)
  * [Move a File to a Folder](#)
  * [Rename a File](#)

[Sheets](#sheets)
* [Managing Spreadsheet Files](#)
  * [Create or Verify Spreadsheet](#)
  * [Get Spreadsheet Id](#)
* [Utility Functions for Sheets](#)
  * [Convert Colmun Number to a Letter](#)
  * [Convert Column Letter to a Number](#)
  * [Replicating Import Range](#)
  * [Evaluating True and False](#)
* [Array of Objects](#)
  * [Utility Functions for Array of Objects](#)
    * [Header Range](#)
    * [Value Range](#)
    * [Header Values](#)
    * [Values by Row](#)
  * [Array of Objects from Sheet](#)
  * [Array of Objects from Range](#)
* [Array](#)
  * [Array of Values for Column](#)

[Docs](#)
* [Managing Document Files](#)
  * [Create or Verify Document](#)
* [Utility Functions for Docs](#)
  * [Access Document Body](#)
  * [Clear Document Body](#)
[Merges](#)
* [Docs](#)
  * [Find and Replace in Document by Object Properties](#)
  * [Create Merged Documents from a Template](#)
  * [Shade Cells in a Table](#)
  * [Create Bulleted List from Array of Objects](#)
* [Sheets](#)
  * [Find and Replace in Sheet by Object Properties](#)
  * [Create Merged Sheets from a Template](#)
  * [Shade Cells in a Sheet](#)
* [Gmail](#)
  * [Mail Merge from Array of Objects](#)
[Other](#)
  * [Regex Only Numbers or Letters](#)

## General ##

### Array ###

#### Check for a Value | return: `boolean` ####

```javascript
function checkValIn(arr, val) { 
  return arr.indexOf(val) > -1; 

var arr_cvi = [1,2,3,4];
Logger.log(checkValIn(arr_cvi,5)); // false
```

#### Remove Duplicates | return: `array` ####

```javascript
function rmDuplicatesFrom(arr) {
  var check  = {};
  var _arr = [];
  var j = 0;
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if(check[item] !== 1) {
      check[item] = 1;
      _arr[j++] = item;
    }
  }
  return _arr;
}

var arr_rdf = [1,2,3,1,2,3,4,];
Logger.log(rmDuplicatesFrom(arr_rdf)); // [1,2,3,4]
```

#### Remove Empty Values | return: `array` ####

```javascript
function rmEmptyVal(x){
  return (x !== (undefined || ''));
}

var arr_rev = ["a",,"b",,,"c"];
Logger.log(arr_rev.filter(rmEmptyVal)); // [a,b,c]
```

#### Get Count of Values | return: `array (objects)` #### 

```javascript
function countOfValIn(arr){
  var _arr = [];
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
      var obj = new Object();
      obj.value = arr[i];
      obj.count = myCount;
      _arr.push(obj);
    }
  }
  return _arr;
}

var arr_covi  = ["A", "B", "C", "A", "B", "C", "A"];
Logger.log(countOfValIn(arr_covi)); // {count=3.0, value=A}, {count=2.0, value=B}, {count=2.0, value=C}]
```

#### Intersect of Two Arrays | return: `array` #### 

```javascript
function intersectOf(arrA, arrB) {
  var a = 0;
  var b = 0;
  var _arr = [];
  while( a < arrA.length && b < arrB.length ) {
     if (arrA[a] < arrB[b] ) { a++; }
     else if (arrA[a] > arrB[b] ) { b++; }
     else {
       _arr.push(arrA[a]);
       a++;
       b++;
     }
  }
  return _arr;
}

var arr1_io = [1, 2, 3];
var arr2_io = [3, 4, 5];
Logger.log(intersectOf(arr1_io, arr2_io)); // [3]
```

#### Compare Two Arrays | return: `boolean` #### 

```javascript
function compareArr(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

var arr1_ca = [1,2,3,4,5]
var arr2_ca = [1,2,3,4,5]
var arr3_ca = ["a","b","c","d","e"]
Logger.log(compareArr(arr1_ca, arr2_ca)); // true
Logger.log(compareArr(arr1_ca, arr3_ca)); // false
```

#### Array as Delimited String | return: `string` #### 

```javascript
function delimited(arr, delimiter){
  var _arr = rmDuplicatesFrom(arr).sort();
  var str  = "";
  for (var i = 0; i < _arr.length; i++) {
    str += _arr[i] + delimiter + "  ";
  }
  str = str.slice(0, -2);
  return str;
}

var arr_clf = ["c@example.com", "b@example.com", "a@example.com"];
Logger.log(commaListFrom(arr_clf, ",")); // a@example.com, b@example.com, c@example.com
```

#### Array as Modified Delimited String | return: `string` #### 

```javascript
function delimitedModified(arr, extension, delimiter) {
  var _arr = rmDuplicatesFrom(arr).sort();
  var str  = "";
  for (var i = 0; i < _arr.length; i++) {
    str += _arr[i] + extension + delimiter + " "; 
  }
  str = str.slice(0, -2);
  return str;
}

var arr_clfd = ["x", "z", "y"];
Logger.log(delimitedModified(arr_clfd, "@example.com", ",")); // x@example.com, y@example.com, z@example.com
```

### Multidimensional Array ###

#### Flatten Multidimensional Array | return: `array` #### 

```javascript
function flattenMultiArr(multiArr){
  var arr = multiArr.reduce(function(a, b) {
    return a.concat(b);
  });
  return arr;
}

var ss_fma  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var val_fma = ss_fma.getRange("G2:H5").getValues();
Logger.log(flattenMultiArr(val_fma).sort()); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### Array of Objects ###

```javascript
var ex_arrObj = [
{a: 1000, b: 1, c: 5}, 
{a: 10000, b: 2, c: 5000}, 
{a: 10, b: 2, c: 500},
{a: 1, b: 1, c: 50}
]
```

#### Sort by Property or Properties | return: `array (objects)` ####

```javascript
function dynSort(prop) {
  var sortOrder = 1;
  if(prop[0] === "-") {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  return function (a,b) {
    var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    return result * sortOrder;
  }
}

Logger.log(ex_arrObj.sort(dynSort("a"))); 
// [{a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=1000.0, b=1.0, c=5.0}, {a=10000.0, b=2.0, c=5000.0}]

function dynSortM() {
  var props = arguments;
  return function (obj1, obj2) {
    var i = 0, result = 0, numberOfProperties = props.length;
    while(result === 0 && i < numberOfProperties) {
      result = dynSort(props[i])(obj1, obj2);
      i++;
    }
    return result;
  }
}

Logger.log(ex_arrObj.sort(dynSortM("b", "c"))); 
// [{a=1000.0, b=1.0, c=5.0}, {a=1.0, b=1.0, c=50.0}, {a=10.0, b=2.0, c=500.0}, {a=10000.0, b=2.0, c=5000.0}]
```

#### Find Object With Unique Property Value | return: `object / value` #### 

```javascript
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

Logger.log(findObjIn(ex_arrObj,"a",1000)); // {a=1000.0, b=1.0, c=5.0}

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

Logger.log(findObjValIn(ex_arrObj, "c", 500, "a")); // 10
```

#### Find Earliest or Lastest Object by Timestamp | return: `object` #### 

```javascript
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

var ss_fe     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_fe = arrObjFromRange(ss_fe, "J1:K4");
Logger.log(earliestTS(arrObj_fe)); // {Timestamp=Sun Feb 19 19:43:40 GMT-06:00 2017, Multiple Choice=A}

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

var ss_le     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var arrObj_le = arrObjFromRange(ss_le, "J1:K4");
Logger.log(latestTS(arrObj_le)); // {Timestamp=Wed Feb 22 19:45:07 GMT-06:00 2017, Multiple Choice=C}
```

#### Filter by Property Value or Values | return: `array (objects)` #### 

```javascript
function filterObjIn(arrObj, pQuery, arrVal) {
  var _arrObj = [];
  for (var i = 0; i < arrVal.length; i++) {
    var val = arrVal[i]; 
    for (var j = 0; j < arrObj.length; j++) {
      if (arrObj[j][pQuery] == val) _arrObj.push(arrObj[j]);
    }
  } 
  return _arrObj;
}

Logger.log(filterObjIn(ex_arrObj, "a", [10])); // [{a=10.0, b=2.0, c=500.0}]
Logger.log(filterObjIn(ex_arrObj, "c", [5, 500])); // [{a=1000.0, b=1.0, c=5.0}, {a=10.0, b=2.0, c=500.0}]
```

#### Unify Properties for Array of Objects | return: `array (objects)` #### 

```javascript
function unifyPropForArrObj(arrObj, arrProp, newProp){
  for (var i = 0; i < arrObj.length; i++){
    var obj = arrObj[i];
    for (var h = 0; h < arrProp.length; h++) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop == arrProp[h] && obj[prop] != ""){
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

Logger.log(unifyPropForArrObj(arrObj_upfao, ["x","y","z"], "new")); // [{new=123.0, x=123.0}, {new=234.0, y=234.0}, {new=345.0, z=345.0}]
```

### Object ###

#### Array of Matching Property Values | return: `array` #### 

```javascript
function filterValIn(obj, props) {
  var arr  = [];
  var keys = intersectOf(Object.keys(obj), props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]);
        break;
      }
    }
  }
  return arr;
}

var obj_fvi = { 
 a: 1, 
 b: 2, 
 c: 3
};

var arr_fvi = ["a", "b", "d"];
Logger.log(filterValIn(obj_fvi, arr_fvi)); // [1, 2]
```

#### Merge Objects | return: `object` #### 

```javascript
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

Logger.log(mergeObjs(objA_mo, objB_mo)); // {a=1.0, b=2.0, c=4.0, d=5.0, e=6.0, f=7.0}
```

#### Object from Range | return: `object` #### 

```javascript
function objFromRange(sheetObj, a1Notation) {
  var range  = sheetObj.getRange(a1Notation);
  var height = range.getHeight();
  var width  = range.getWidth();
  var values = range.getValues();
  var obj    = new Object();
  for (var i = 0; i < values.length; i++) {
    obj[values[i][0]] = values[i][1];
  } 
  return obj;
}

var sheet_ofr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
Logger.log(objFromRange(sheet_ofr, "D2:E5")); // {A=Alpha, B=Bravo, C=Charlie, D=Delta}
```



### Dates and Times ###

#### Formatted Timestamps | return: `string` ####

```javascript
function fmatD() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
    return d.join("/");
}

Logger.log(fmatD()); // 4/24/2017

function fmat24T(){
  var n  = new Date();
  var t = [ n.getHours(), n.getMinutes(), n.getSeconds() ]
    for ( var i = 1; i < 3; i++ ) {
      if ( t[i] < 10 ) {
        t[i] = "0" + t[i];
      }
      return t.join(":");
    }
}

Logger.log(fmat24T()); // 20:43:40

function fmat12DT() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
    var t = [ n.getHours(), n.getMinutes(), n.getSeconds() ]
    var s = ( t[0] < 12 ) ? "AM" : "PM";
  t[0]  = ( t[0] <= 12 ) ? t[0] : t[0] - 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( t[i] < 10 ) {
      t[i] = "0" + t[i];
    }
  }
  return d.join("/") + " " + t.join(":") + " " + s;
}

Logger.log(fmat12DT()); // 4/24/2017 8:43:40 PM
```

#### Date Object from String | return: `date` ####

```javascript
function dateObjectFrom(str) {
  var arr    = str.split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  return new Date (months[(arr[1] - 1)] + " " + arr[2] + ", " + arr[0]);
}

Logger.log(dateObjectFrom("2017-04-24")); // Mon Apr 24 00:00:00 GMT-05:00 2017
```

#### Match a Date to a Range | return: `integer` ####

```javascript
var quarterDates = [
  ["08/01/2016", "10/28/2016"],
  ["11/02/2016", "1/9/2017"],
  ["1/15/2017", "3/19/2017"],
  ["3/21/2017", "6/15/2017"],
];

function academicQuarter() {
  var d = new Date();
  for (i = 0; i < 4; i++){
    var s = new Date(quarterDates[i][0]);
    var e = new Date(quarterDates[i][1]);
    if (d >= s && d <= e ) {
      var q =  i + 1;
    } 
  }
  if (q) { return q } else { return "date outside of academic calendar"}
}

Logger.log(academicQuarter()); // 4 (4/24/2017)
```

## Drive ##

### Folders ###

#### Create or Verify Folder Path | return: `folder` ####

```javascript
function createVerifyPath(path) {
  var arr = path.split('/');
  var fldr;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(arr[i]);
      if(!(fi.hasNext())) {
        DriveApp.createFolder(arr[i]);
        fi = DriveApp.getFoldersByName(arr[i]);
      } 
      fldr = fi.next();
    } else if (i >= 1) {
      fi = fldr.getFoldersByName(arr[i]);
      if(!(fi.hasNext())) {
        fldr.createFolder(arr[i]);
        fi = DriveApp.getFoldersByName(arr[i]);
      } 
      fldr = fi.next();
    }
  } 
  return fldr;
}

Logger.log(createVerifyPath("google-apps-script-cheat-sheet-demo/A/B/C")); // C
```

#### Last Folder in Folder Path | return: `folder` ####

```javascript
function lastFolderIn(path) {
  var arr = path.split('/');
  var fldr;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(arr[i]);
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
  return fldr;
}

Logger.log(lastFolderIn("google-apps-script-cheat-sheet-demo/A/B")); // B
```

#### Array of All Folders | return: `array (folders)` ####

##### All Folders in a Folder #####

```javascript
function foldersIn(fldr) {
  var fi  = fldr.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var _fldr = fi.next();
    arr.push(_fldr);
  } 
  return arr;
}

Logger.log(foldersIn(lastFolderIn("google-apps-script-cheat-sheet-demo"))); // [A]
```

##### All Folders at Root #####

```javascript
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

Logger.log(rootFolders());
```

##### All Folders in Drive #####

```javascript
function allFolders() {
  var fi  = DriveApp.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    arr.push(fldr);
  } 
  return arr;
}

Logger.log(allFolders());
```

#### Array of All Folder Names | return: `array (strings)` ####

```javascript
function folderNames(fldrs) {
  var arr = [];
  for (var i = 0; i < fldrs.length; i++) {
    var name = fldrs[i].getName();
    arr.push(name);
  }
  return arr;
}

var arr_fn  = foldersIn(lastFolderIn("google-apps-script-cheat-sheet-demo/A/B"));
Logger.log(folderNames(arr_fn)); // [C]
```

#### Find a Folder | return: `folder` ####

##### Find a Folder in a Folder #####

```javascript
function findFolderIn(fldr, name) {
  var fldrs = foldersIn(fldr);
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var _fldr = fldr.getFoldersByName(name).next();
    return _fldr;
  }
}

var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet-demo");
Logger.log(findFolderIn(fldr_ffi, "A")); // A
```

##### Find a Folder at Root #####

```javascript
function findFolderAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var fldrs = rootFolders();
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var fldr = rf.getFoldersByName(name).next();
    return fldr;
  }
}

Logger.log(findFolderAtRoot("google-apps-script-cheat-sheet-demo")); // google-apps-script-cheat-sheet-demo
```

##### Find a Folder in Drive #####

```javascript
function findFolderInDrive(name) {
  var fi = DriveApp.getFoldersByName(name);
  while (fi.hasNext()){
    var fldr = fi.next();
    return fldr;
  }
}

Logger.log(findFolderInDrive("C")); // C
```

#### Create or Verify Folders | return: `folder` ####

##### Create or Verify Folders in a Folder #####

```javascript
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

var fldr_cvfi = lastFolderIn("google-apps-script-cheat-sheet-demo");
Logger.log(createVerifyFoldersIn(fldr_cvfi, ["X", "Y", "Z"])); // google-apps-script-cheat-sheet-demo
Logger.log(foldersIn(fldr_cvfi)); // [A,X,Y,Z]
```

##### Create or Verify Folders at Root #####

```javascipt
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
```

### Files ###

#### Array of All Files | return: `array (files)` ####

##### All Files in a Folder ##### 

```javascript
function filesIn(fldr) {
  var fi  = fldr.getFiles();
  var arr = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

var fldr_fin = lastFolderIn("google-apps-script-cheat-sheet-demo");
Logger.log(filesIn(fldr_fin)); // [example-file]
```

##### All Files at Root ##### 

```javascript
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
```

##### All Files in Drive ##### 

```javascript
function allFiles() {
  var fi = DriveApp.getFiles();
  var arr  = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}
```

#### Array of All File Names | return: `array (strings)`####

```javascript
function fileNames(files) {
  var arr = [];
  for (var i = 0; i < files.length; i++) {
    var name = files[i].getName();
    arr.push(name);
  }
  return arr;
}

var fldr_fnam = lastFolderIn("google-apps-script-cheat-sheet-demo");
var arr_fnam  = filesIn(fldr_fnam);
Logger.log(fileNames(arr_fnam)); // [example-file]
```

#### Find a File | return: `file` ####

##### Find a File in a Folder #####

```javascript
function findFileIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet-demo");
Logger.log(findFileIn(fldr_ffi, "example-file")); // example-file
```

##### Find a File at Root #####

```javascript
function findFileAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var files = rootFiles();
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = rf.getFilesByName(name).next();
    return file;
  }
}
```

##### Find a File in Drive #####

```javascript
function findFileInDrive(name) {
  var fi = DriveApp.getFilesByName(name);
  while (fi.hasNext()){
    var file = fi.next();
    return file;
  }
}

Logger.log(findFileInDrive("example-file")); // example-file
```

#### Parent Folder of a File ####

```javascript
function parentFolderOf(file) {
  var fi = file.getParents();
  return fi.next();
}

var file_pfo = findFileInDrive("example-file");
Logger.log(parentFolderOf(file_pfo)); // google-apps-script-cheat-sheet-demo
```
 
#### Copy a File to a Folder ####

```javascript
function copyFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) { file.makeCopy(name, fldr) }
  return findFileIn(fldr, name);
}

var fldr_cf = lastFolderIn("google-apps-script-cheat-sheet-demo/A/B/C");
var file_cf = findFileInDrive("example-file");
Logger.log(copyFile(file_cf, fldr_cf)); // example-file
```

#### Move a File to a Folder ####

```javascript
function moveFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) { file.makeCopy(name, fldr) }
  var _file = findFileIn(fldr, name);
  if (_file !== undefined) { file.setTrashed(true) }
  return _file;
}

var fldr_mf1 = lastFolderIn("google-apps-script-cheat-sheet-demo/A/B/C");
var file_mf  = findFileIn(fldr_mf1, "example-file");
var fldr_mf2 = lastFolderIn("google-apps-script-cheat-sheet-demo/A");
Logger.log(moveFile(file_mf, fldr_mf2)); // example-file
```

#### Rename a File ####

```javascript
function renameFile(file, name) {
  file.setName(name)
  return file;
} 

var fldr_rf = lastFolderIn("google-apps-script-cheat-sheet-demo/A")
var file_rf = findFileIn(fldr_rf, "example-file");
Logger.log(renameFile(file_rf, "modified-example-file")); // modified-example-file
```

## Sheets ##

### Managing Spreadsheet Files ###

#### Create or Verify Spreadsheet ####

##### Create or Verify Spreadsheet in a Folder #####

```javascript
```

##### Create or Verify Spreadsheet at Root #####

```javascript
```

#### Get Spreadsheet Id ####

```javascript
```

### Utility Functions for Sheets ###


