*Note:* Drop source.js into a Sheet or form.js into a Form for a quickstart! This README is a digestable version of source.js / form.js

---

# Google Apps Script Cheat Sheet

##[General](#general)
* [Array](#array)
  * [Check for a Value](#check-for-a-value)
  * [Remove Duplicates](#remove-duplicates)
  * [Remove Empty](#remove-empty)
  * [Get Count of Values in Array](#get-count-of-values-in-array)
  * [Intersect of Two Arrays](#intersect-of-two-arrays)
* [Array of Objects](#array-of-objects)
  * [Sort by Property or Properties](#sort-by-property-or-properties)
  * [Find Object With Unique Property Value](#find-object-with-unique-property-value)
  * [Filter by Property Value](#filter-by-property-value)
* [Object](#object)
  * [Array of Matching Property Values](#array-of-matching-property-values)
* [Dates and Times](#dates-and-times)
  * [Formatted Timestamps](#formatted-timestamps)
  * [Match a Date to a Range](#match-a-date-to-a-range)

## General

### Array

#### Check for a Value
`boolean`

```javascript
function checkValIn(arr, val) { 
  return arr.indexOf(val) > -1; 
}

var arr_cvi = [1,2,3,4];

if (checkValIn(arr_cvi, 99)) {
  Logger.log("check value in ➡ 99 is in the array"); 
  } else {
  Logger.log("check value in ➡ 99 is not in the array");
}

```

#### Remove Duplicates
`array`

```javascript
function rmDuplicatesFrom(arr) {
  var check = {};
  var _arr  = [];
  var j     = 0;
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
var ex_rdf  = rmDuplicatesFrom(arr_rdf);
Logger.log("rmDup input ➡ " + arr_rdf);
Logger.log("rmDup output ➡ " + ex_rdf);
```

#### Remove Empty Values
`array`

```javascript

function rmEmptyVal(x){
  return (x !== (undefined || ''));
}

var arr_rev = ["a",,"b",,,"c"];
var ex_rev  = arr_rev.filter(rmEmptyVal);
Logger.log("rmEmpty input ➡ " + arr_rev);
Logger.log("rmEmpty output ➡ " + ex_rev);
```

#### Get Count of Values in Array
`array of objects`

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
      var a   = new Object();
      a.value = arr[i];
      a.count = myCount;
      _arr.push(a);
    }
  }
  return _arr;
}

var arr_covi = ["A", "B", "C", "A", "B", "C", "D", "A"];
var ex_covi  = countOfValIn(arr_covi);
Logger.log("countVal input ➡ " + arr_covi);
Logger.log("countVal out ⬇ ");
Logger.log(ex_covi);
```

#### Intersect of Two Arrays
`array`

```javascript
function intersectOf(arrA, arrB) {
  var a    = 0;
  var b    = 0;
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
Logger.log(intersectOf(arr1_io, arr2_io));
```

### Array of Objects

#### Example Array
```javascript
var ex_arrObj = [
{a: 1000, b: 1, c: 5}, 
{a: 10000, b: 2, c: 5000}, 
{a: 10, b: 2, c: 500},
{a: 1, b: 1, c: 50}
]
```

#### Sort by Property or Properties
`array of objects`

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

ex_arrObj.sort(dynSort("a"));
Logger.log("arrObj sorted by 'a' value ⬇ ");
Logger.log(ex_arrObj);

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

ex_arrObj.sort(dynSortM("b", "c"));
Logger.log("arrObj sorted by 'b' and 'c' values ⬇ ");
Logger.log(ex_arrObj);
```

#### Find Object With Unique Property Value

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


Logger.log("find obj with 'a' value of 1000 ⬇ ");
var ex_foi = findObjIn(ex_arrObj, "a", 1000);
Logger.log(ex_foi);

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

Logger.log("find obj with 'c' value of 500 and return its 'a' value ⬇ ");
var ex_fovi = findObjValIn(ex_arrObj, "c", 500, "a");
Logger.log(ex_fovi);
```

#### Filter by Property Value
`array of objects`

```javascript
function filterObjIn(arrObj, pQuery, val) {
  var _arr = [];
  for (var i=0; i < arrObj.length; i++) {
    if (arrObj[i][pQuery] == val) _arr.push(arrObj[i]);
  }
  return _arr;
}

var ex_foi = filterObjIn(ex_arrObj, "b", 2);
Logger.log("filter arrObjs with 'b' value of 2 ⬇ ");
Logger.log(ex_foi);
```

### Object

#### Array of Matching Property Values

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
var ex_fvi  = filterValIn(obj_fvi, arr_fvi);
Logger.log(ex_fvi);
```

### Dates and Times

#### Formatted Timestamps

```javascript

function fmatD() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
  return d.join("/");
}

var ex_fd = fmatD();
Logger.log("current date ➡ " + ex_fd);

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

var ex_24T = fmat24T();
Logger.log("current time (24 hour) ➡ " + ex_24T);

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

var ex_dt12 = fmat12DT();
Logger.log("current date + time (12 hour) ➡ " + ex_dt12);
```

#### Match a Date to a Range

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

var acdQ = academicQuarter();
Logger.log("current quarter ➡ " + acdQ);
```

## Drive

### Folders

#### Create or Verify Folder Path
```javascript
  function createVerifyPath(path) {
  var arr = path.split('/');
  var fldr;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(arr[i]);
      if(!(fi.hasNext())) {
        DriveApp.createFolder(arr[i]);
        fi = DriveApp.getFoldersByName(arry[i]);
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

var ex_cov = createVerifyPath("google-apps-script-cheat-sheet/A/B/C");
Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_cov.getId());

```

#### Last Folder in Folder Path
```javascript
function lastFolderIn(path) {
  var arr = path.split('/');
  var fldr;
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(arr[i]);
      if(fi.hasNext()) {fldr = fi.next();} else { return null;}
    } else if (i >= 1) {
      fi = fldr.getFoldersByName(arr[i]);
      if(fi.hasNext()) {fldr = fi.next();} else { return null;}
    }
  } 
  return fldr;
}

var ex_lfi = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_lfi.getId());
```

#### Array of All Folders in a Folder, at Root or in Drive
```javascript
// --- All Folders in a Folder

function foldersIn(fldr) {
  var fi  = fldr.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var _fldr = fi.next();
    arr.push(_fldr);
  } 
  return arr;
}

var fldr_fi = lastFolderIn("google-apps-script-cheat-sheet");
var ex_fi   = foldersIn(fldr_fi);
Logger.log("'google-apps-script-cheat-sheet' has top level folders ➡ " + ex_fi);

// --- All Folders at Root

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

var ex_rf  = rootFolders();
Logger.log("all root folders ⬇ ");
Logger.log(ex_rf);

// --- All Folders in Drive

function allFolders() {
  var fi  = DriveApp.getFolders();
  var arr = [];
  while (fi.hasNext()) {
    var fldr = fi.next();
    arr.push(fldr);
  } 
  return arr;
}

var ex_af = allFolders();
Logger.log("all folders in Drive ⬇ ");
Logger.log(ex_af);

```

#### Array of all Folder Names
```javascript

function folderNames(fldrs) {
  var arr = [];
  for (var i = 0; i < fldrs.length; i++) {
    var name = fldrs[i].getName();
    arr.push(name);
  }
  return arr;
}

var fldr_fn = lastFolderIn("google-apps-script-cheat-sheet");
var arr_fn  = foldersIn(fldr_fn);
var ex_fn   = folderNames(arr_fn)
Logger.log("'google-apps-script-cheat-sheet' has top level folders " + ex_fn);
```

#### Find a Folder in a Folder, at Root or in Drive
```javascript
// --- Find a Folder in a Folder

function findFolderIn(fldr, name) {
  var fldrs = foldersIn(fldr);
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var _fldr = fldr.getFoldersByName(name).next();
    return _fldr;
  }
}

var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet");
var ex_ffi = findFolderIn(fldr_ffi, "A");
Logger.log(" Id of 'A' in 'google-apps-script-cheat-sheet' is ➡ " + ex_ffi.getId());

// --- Find a Folder at Root

function findFolderAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var fldrs = rootFolders();
  var names = folderNames(fldrs);
  if (checkValIn(names, name)) {
    var fldr = rf.getFoldersByName(name).next();
    return fldr;
  }
}

var ex_ffar = findFolderAtRoot("google-apps-script-cheat-sheet");
Logger.log(" Id of 'google-apps-script-cheat-sheet' at root ➡ " + ex_ffar.getId());

// --- Find a Folder in Drive

function findFolderInDrive(name) {
  var fi = DriveApp.getFoldersByName(name);
  while (fi.hasNext()){
    var fldr = fi.next();
    return fldr;
  }
}

var ex_ffid = findFolderInDrive("google-apps-script-cheat-sheet");
Logger.log(" Id of 'google-apps-script-cheat-sheet' at root ➡ " + ex_ffid.getId());
```

#### Create or Verify Folders in a Folder or at Root
```javascript
// --- Create or Verify Folders in a Folder

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

var fldr_cvfi = lastFolderIn("google-apps-script-cheat-sheet");
var arr_cvfi  = ["X", "Y", "Z"];
var ex_cfi = createVerifyFoldersIn(fldr_cvfi, arr_cvfi);
Logger.log("all folders in 'google-apps-script-cheat-sheet' = AXYZ+ ⬇ ");
Logger.log(foldersIn(ex_cfi));

// --- Create or Verify Folders at Root

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

var arr_cvfar = ["1", "2", "3"];
var ex_cvfar  = createVerifyFoldersAtRoot(arr_cvfar);
Logger.log("all folders at Root ⬇ ");
Logger.log(rootFolders());

```

### Files

#### Array of All Files in a Folder, at Root or in Drive
```javascript
// --- All Files in a Folder

function filesIn(fldr) {
  var fi  = fldr.getFiles();
  var arr = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

var fldr_fin = lastFolderIn("google-apps-script-cheat-sheet");
var ex_afi   = filesIn(fldr_fin);
Logger.log(ex_afi);

// --- All Files at Root

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

var ex_arf = rootFiles();
Logger.log(ex_arf);

// --- All Files in Drive

function allFiles() {
  var fi = DriveApp.getFiles();
  var arr  = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

var ex_afid = allFiles();
Logger.log(ex_afid);
```

#### Array of All File Names
```javascript
function fileNames(files) {
	var arr = [];
	for (var i = 0; i < files.length; i++) {
		var name = files[i].getName();
		arr.push(name);
	}
	return arr;
}

var fldr_fnam = lastFolderIn("google-apps-script-cheat-sheet");
var arr_fnam  = filesIn(fldr_fnam);
var ex_fnam   = fileNames(arr_fnam);
Logger.log(ex_fnam);
```

#### Find a File in a Folder, at Root or in Drive
```javascript
// --- Find a File in a Folder, at Root or Search All of Drive 

function findFileIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

var fldr_ffli = lastFolderIn("google-apps-script-cheat-sheet");
var ex_ffli   = findFileIn(fldr_ffli, "example_file");
Logger.log(" Id of 'example_file' in 'google-apps-script-cheat-sheet' is ➡ " + ex_ffi.getId());

// --- Find a File at Root

function findFileAtRoot(name) {
  var rf    = DriveApp.getRootFolder();
  var files = rootFiles();
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = rf.getFilesByName(name).next();
    return file;
  }
}

var file_ffar = findFileAtRoot("NAME-OF-YOUR-FILE-GOES-HERE");
Logger.log(" Id of '" + file_ffar + "' at root ➡ " + file_ffar.getId());

// --- Find a File in Drive

function findFileInDrive(name) {
  var fi = DriveApp.getFilesByName(name);
  while (fi.hasNext()){
    var file = fi.next();
    return file;
  }
}

var file_ffid = findFileInDrive("example_file");
Logger.log(" Id of '" + file_ffid + "' in " + parentFolderOf(file_ffid) + " ➡ " + file_ffid.getId());


```

#### Parent Folder for a File 
```javascript
function parentFolderOf(file) {
  var fi = file.getParents();
  return fi.next();
}

var file_pfo = findFileInDrive("example_file");
var ex_pfo   = parentFolderOf(file_pfo);
Logger.log("The parent folder of '" + file_pfo + "' is '" + ex_pfo + "'");
```

#### Copy a File to a Folder
```javascript
function copyFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) { file.makeCopy(name, fldr) }
  return findFileIn(fldr, name);
}

var fldr_cf1 = lastFolderIn("google-apps-script-cheat-sheet");
var file_cf  = findFileIn(fldr_cf1, "example_file");
var fldr_cf2 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
var ex_cf    = copyFile(file_cf, fldr_cf2);
Logger.log("'" + ex_cf + "' " + "has been copied to " + parentFolderOf(ex_cf));
```

#### Move a File to a Folder
```javascript
function moveFile(file, fldr) {
  var name = file.getName();
  var dest = findFileIn(fldr, name);
  if (dest === undefined) { file.makeCopy(name, fldr) }
  var _file = findFileIn(fldr, name);
  if (_file !== undefined) { file.setTrashed(true) }
  return _file;
}

var fldr_mf1 = lastFolderIn("google-apps-script-cheat-sheet");
var file_mf  = findFileIn(fldr_mf1, "example_file");
var fldr_mf2 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
var ex_mf    = moveFile(file_mf, fldr_mf2);
Logger.log("'" + ex_mf + "' " + "has been moved to " + parentFolderOf(ex_mf));
```

## Sheets

### Managing Spreadsheet Files

#### Create or Verify Spreadsheet in a Folder or at Root
```javascript

```

### Utility Functions for Sheets
#### Convert Column Number to a Letter
```javascript

```

#### Convert Column Letter to a Number
```javascript

```

#### Replicating Import Range
```javascript

```

#### Evaluating True or False
```javascript

```

### Range as Array of Objects
```javascript

```

#### Array of Objects by Sheet
```javascript

```

#### Array of Objects from Range
```javascript

```

#### Array of Objects from Two Columns
```javascript

```

#### Grid Object
```javascript

```

## Docs

### Managing Document Files

#### Create or Verify Document in a Folder or at Root
```javascript

```

### Utility Functions for Docs

#### Access Document Body
```javascript

```

#### Clear Document Body
```javascript

```

## Gmail

### Send Email 

#### Comma Separated List of Recipients
```javascript

```

#### HTML in Email Body
```javascript

```

#### Mail Merge
```javascript

```

## Other

### Regex Only Numbers or Letters
```javascript

```

