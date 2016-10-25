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
* [Multidimensional Array](#multidimensional-array)
  * [Flatten Multidimensional Array](#flatten-multidimensional-array)
* [Object](#object)
  * [Array of Matching Property Values](#array-of-matching-property-values)
* [Dates and Times](#dates-and-times)
  * [Formatted Timestamps](#formatted-timestamps)
  * [Match a Date to a Range](#match-a-date-to-a-range)

##[Drive](#drive)
* [Folders](#folders)
  * [Create or Verify Folder Path](#create-or-verify-folder-path)
  * [Last Folder in Folder Path](#last-folder-in-folder-path)
  * [Array of All Folders](#array-of-all-folders)
  * [Array of All Folder Names](#array-of-all-folder-names)
  * [Find a Folder](#find-a-folder)
  * [Create or Verify Folders](#create-or-verify-folders)
* [Files](#files)
  * [Array of All Files](#array-of-all-files)
  * [Array of All File Names](#array-of-all-file-names)
  * [Find a File](#find-a-file)
  * [Parent Folder of a File](#parent-folder-of-a-file)
  * [Copy a File to a Folder](#copy-a-file-to-a-folder)
  * [Move a File to a Folder](#move-a-flie-to-a-folder)

##[Sheets](#sheets)
* [Managing Spreadsheet Files](#managing-spreadsheet-files)
  * [Create or Verify Spreadsheet](#create-or-verify-spreadsheet-in-a-folder-or-at-root)
* [Utility Functions for Sheets](#utility-functions-for-sheets)
  * [Convert Column Number to a Letter](#convert-column-number-to-a-letter)
  * [Convert Column Letter to a Number](#convert-column-letter-to-a-number)
  * [Replicating Import Range](#replicating-import-range)
  * [Evaluating True and False](#evaluating-true-and-false)
* [Array of Objects](#array-of-objects)
  * [Utility Functions for Array of Objects](#utility-functions-for-array-of-objects)
    * [Header Range](#header-range)
    * [Value Range](#value-range)
    * [Header Values](#header-values)
    * [Values by Row](#values-by-row)
  * [Array of Objects from Sheet](#array-of-objects-from-sheet)
  * [Array of Objects from Range](#array-of-objects-from-range)
  * [Array of Objects from Two Columns](#array-of-objects-from-two-columns)

##[Docs](#docs)
* [Managing Document Files](#managing-document-files)
  * [Create or Verify Document](#create-or-verify-document)
* [Utility Functions for Docs](#utility-functions-for-docs)
  * [Access Document Body](#access-document-body)
  * [Clear Document Body](#clear-document-body)

##[Sheets and Docs](#sheets-and-docs)
* [Bulleted Lists] (#bulleted-lists)
  * [Single Division List](#single-division-list)
  * [Multi Division List](#multi-division-list)

##[Gmail](#gmail)
* [Send Email](#send-email)
  * [Comma Separated List of Recipients](#comma-separated-list-of-recipients)
  * [Mail Merge](#mail-merge)

##[Other](#other)
  * [Regex Only Numbers or Letters](#regex-only-numbers-or-letters)

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
var ex_lfi = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_lfi.getId());
```

#### Array of All Folders
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

#### Find a Folder
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

#### Create or Verify Folders
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
var ex_cfi    = createVerifyFoldersIn(fldr_cvfi, arr_cvfi);
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

#### Array of All Files
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

#### Find a File
```javascript
// --- Find a File in a Folder

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

#### Parent Folder of a File 
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

#### Create or Verify Spreadsheet
```javascript
// --- Create or Verify Spreadsheet in a Folder

function createVerifySSIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (!(checkValIn(names, name))) {
    var ss   = SpreadsheetApp.create(name).getId();
    var file = DriveApp.getFileById(ss);
    moveFile(file, fldr);
  }
  return findFileIn(fldr, name);
}

var fldr_cvssi = createVerifyPath("google-apps-script-cheat-sheet");
var ex_cvssi   = createVerifySSIn(fldr_cvssi, "example_sheet");
Logger.log("The Id of '" + ex_cvssi + "' in " + parentFolderOf(ex_cvssi) + " is '" + ex_cvssi.getId());

// --- Create or Verify Spreadsheet at Root

function createVerifySSAtRoot(name) {
  var files = rootFiles();
  var names = fileNames(files);
  if (!(checkValIn(names, name))) {
    var ss = SpreadsheetApp.create(name);
  }
  return findFileAtRoot(name);
}

var ex_cvssar = createVerifySSAtRoot("example_sheet");
Logger.log("The Id of '" + ex_cvssar + "' at root is '" + ex_cvssar.getId());
```

### Utility Functions for Sheets

#### Convert Column Number to a Letter
```javascript
function numCol(num) {
  var num = num - 1, chr;
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

function ex_nc() {
  for (var i = 1; i <= 104; i++) {
    var j = numCol(i);
    Logger.log(i + " - " + j);
  }
}

ex_nc();
```

#### Convert Column Letter to a Number
```javascript
function colNum(col) {
  var col = col.toUpperCase();
  if (col.length === 1)  {
    var chr0 = col.charCodeAt(0) - 64;
    return chr0;
  } else if (col.length === 2) {
    var chr0 = (col.charCodeAt(0) - 64) * 26;
    var chr1 = col.charCodeAt(1) - 64;
    return chr0 + chr1;
  }
}

function ex_cn() {
  for (var i = 0; i <= 25; i++) {
    var abc = String.fromCharCode(97 + i).toUpperCase();
    Logger.log(abc + " - " + colNum(abc));
  }
  for (var i = 26; i <= 51; i++) {
    var abc = "A" + String.fromCharCode(97 - 26 + i).toUpperCase();
    Logger.log(abc + " - " + colNum(abc));
  }
}

ex_cn();

```

#### Replicating Import Range
```javascript
// trigger -> getSet : From spreadsheet : On edit

var sheet_oe = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

function getSet(){
  var get = sheet_oe.getRange("G2:G5").getValues();
  var set = sheet_oe.getRange("H2:H5").setValues(get);
}
```

#### Evaluating True or False
```javascript
// true:  1, t*, T*, y*, Y*
// false: 0, !t || !y

function checkTF(input) {
  if (isNaN(input)) {
    var first_letter = input.charAt(0).toLowerCase();
    if (first_letter === 't' || first_letter === 'y') {
    return true 
  } else {
    return false
  }
  } else {
    if (input === 1) {
    return true
  } else { 
    return false;
  }
  }
}

var ex_ctf1 = "Yes";
var ex_ctf2 = "No";
Logger.log(checkTF(ex_ctf1));
Logger.log(checkTF(ex_ctf2));
```

### Array of Objects

#### Utility Functions for Array of Objects

##### Header Range

```javascript
function headerRange(sheetObj, a1Notation) {
	var arr  = a1Notation.split(":");
	var col0 = arr[0].match(/\D/g,'');
	var col1 = arr[1].match(/\D/g,'');
	var row  = arr[0].match(/\d+/g);
	var a1   = col0 + row + ":" + col1 + row;
	return sheetObj.getRange(a1);
}
```

##### Value Range
```javascript
function valueRange(sheetObj, a1Notation) {
	var arr  = a1Notation.split(":");
	var col0 = arr[0].match(/\D/g,'');
	var row0 = arr[0].match(/\d+/g);
	var col1 = arr[1].match(/\D/g,'');
	var row1 = arr[1].match(/\d+/g);
	var a1   = col0 + (Number(row0) + 1) + ":" + col1 + row1;
	return sheetObj.getRange(a1);
}
```
 
##### Header Values
```javascript
function headerVal(rangeObj){
  var vals = rangeObj.getValues();
  var arr  = [];
  for (var i = 0; i < vals[0].length; i++) {
  var val = vals[0][i];
  arr.push(val);
  } 
  return arr;
}
```

##### Values by Row
```javascript
function valByRow(rangeObj, headers){
	var h    = rangeObj.getHeight();
	var w    = rangeObj.getWidth();
	var vals = rangeObj.getValues();
	var arr  = [];
	for (var i = 0; i < h; i++) {
		var row = {};
		for (var j = 0; j < w; j++) {
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
```

#### Array of Objects from Sheet
```javascript
function arrObjSheet(sheetObj, hRow){
  var lColNum = sheetObj.getLastColumn();
  var lColABC = numCol(lColNum);
  var lRow    = sheetObj.getLastRow();
  var hRange  = sheetObj.getRange("A" + hRow + ":" + lColABC + hRow);
  var vRange  = sheetObj.getRange("A" + (hRow +1 ) + ":" + lColABC + lRow);
  var headers = headerVal(hRange);
  return valByRow(vRange, headers)
}

var ss_aos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var ex_aos = arrObjSheet(ss_aos, 2);
Logger.log(ex_aos);
```

#### Array of Objects from Range
```javascript
function arrObjRange(sheetObj, a1Notation) {
  var hRange  = headerRange(sheetObj, a1Notation);
  var vRange  = valueRange(sheetObj, a1Notation);
  var headers = headerVal(hRange);
  return valByRow(vRange, headers);
}

var ss_aor = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var ex_aor = arrObjRange(ss_aor, "A2:E7");
Logger.log(ex_aor);
```

#### Array of Objects from Two Columns
```javascript
function arrObjTwoCol(sheetObj, a1Notation) {
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

var sheet_vg = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var ex_vg    = arrObjTwoCol(sheet_vg, "D2:E5");
Logger.log(ex_vg);
```

## Docs

### Managing Document Files

#### Create or Verify Document
```javascript

// --- Create or Verify Document in a Folder

function createVerifyDocIn(fldr, name) {
	var files = filesIn(fldr);
	var names = fileNames(files);
	if (!(checkValIn(names, name))) {
		var doc  = DocumentApp.create(name).getId();
		var file = DriveApp.getFileById(doc);
		moveFile(file, fldr);
	}
	return findFileIn(fldr, name);
}

var fldr_cvdi = createVerifyPath("google-apps-script-cheat-sheet");
var ex_cvdi   = createVerifyDocIn(fldr_cvdi, "example_doc");
Logger.log("The Id of '" + ex_cvdi + "' in " + parentFolderOf(ex_cvdi) + " is '" + ex_cvdi.getId());

// --- Create or Verify Document at Root

function createVerifyDocAtRoot(name) {
	var files = rootFiles();
	var names = fileNames(files);
	if (!(checkValIn(names, name))) {
		var ss = DocumentApp.create(name);
	}
	return findFileAtRoot(name);
}

var ex_cvdar = createVerifyDocAtRoot("example_doc");
Logger.log("The Id of '" + ex_cvdar + "' at root is '" + ex_cvdar.getId());

```

### Utility Functions for Docs

#### Access Document Body
```javascript

var fldr_adb = lastFolderIn("google-apps-script-cheat-sheet");
var doc_adb  = findFileIn(fldr_adb, "example_doc").getId();
var body     = DocumentApp.openById(doc_adb).getBody();

body.appendParagraph("Hello, world!");
```

#### Clear Document Body
```javascript
var fldr_cdb = lastFolderIn("google-apps-script-cheat-sheet");
var doc_cdb  = findFileIn(fldr_cdb, "example_doc").getId();
var body     = DocumentApp.openById(doc_cdb).getBody();
body.clear();
```

## Sheets and Docs

### Bulleted Lists

#### Single Division List

```javascript
var ss_ohl     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_ohl = arrObjSheet(ss_ohl, 2);
var fldr_ohl   = createVerifyPath("google-apps-script-cheat-sheet");
var docId_ohl  = createVerifyDocIn(fldr_cvdi, "example_doc").getId();
var body_ohl   = DocumentApp.openById(docId_ohl).getBody();

(function(){
	arrObj_ohl.sort(dynSortM("Last", "First"));
	var sectionHeader = body_ohl.appendParagraph("Students");
	sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
	for (var i in arrObj_ohl) {
		body_ohl.appendListItem(arrObj_ohl[i]["Last"] + ", " + arrObj_ohl[i]["First"]);
	}
})();
```

#### Multi Division List

```javascript
var ss_mhl     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_mhl = arrObjSheet(ss_mhl, 2);
var fldr_mhl   = createVerifyPath("google-apps-script-cheat-sheet");
var docId_mhl  = createVerifyDocIn(fldr_cvdi, "example_doc").getId();
var body_mhl   = DocumentApp.openById(docId_mhl).getBody();

(function(){
	arrObj_mhl.sort(dynSortM("Homeroom", "Last", "First"));
	var sectionHeader = body_mhl.appendParagraph("Homerooms and Students");
	sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
	var homeroom = arrObj_mhl[0]["Homeroom"];
	body_mhl.appendListItem(homeroom);
	for (var i in arrObj_mhl) {
		if (arrObj_mhl[i]["Homeroom"] === homeroom) {
			body_mhl.appendListItem(arrObj_mhl[i]["First"] + " " + arrObj_mhl[i]["Last"])
			.setNestingLevel(1).setIndentStart(10)
			.setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
		} else {
			homeroom = arrObj_mhl[i]["Homeroom"];
			body_mhl.appendListItem(homeroom);
			body_mhl.appendListItem(arrObj_mhl[i]["First"] + " " + arrObj_mhl[i]["Last"])
			.setNestingLevel(1).setIndentStart(10)
			.setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
		}
	}
})();
```

## Gmail

### Send Email 

#### Comma Separated List of Recipients
```javascript
function commaListFrom(arr){
  var _arr = rmDuplicatesFrom(arr).sort();
  var str  = "";
  for (var i = 0; i < _arr.length; i++) {
		str += _arr[i] + ", "
  }
  str = str.slice(0, -2);
  return str;
}

var arr_clf = ["a@gmail.com", "b@gmail.com", "z@gmail.com", "z@gmail.com", "h@gmail.com"]
var ex_clf  = commaListFrom(arr_clf);
Logger.log(ex_clf);
```

#### Mail Merge
```javascript
function mailMerge(arrObj) {
	var subj = "test mail merge";
	var body =
	"<p>this is some text</p>" + "<p>pulling in some data " + 
	arrObj[i]["A"] + " </p>";

  for (var i =0; i < arrObj.length; i++){
    var email = arrObj[i]["Email"];
		if (email) {
			MailApp.sendEmail({
				to: email,
				subject: subj,
				htmlBody: body
			});
		}
  }
}

var ss_mm = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var ex_mm = arrObjSheet(ss_mm, 1);
mailMerge(ex_mm);
```

## Other

### Regex Only Numbers or Letters
```javascript
var re     = "123ABC234XYZ"
var ex_num = re.match(/\d+/g);
var ex_abc = re.replace(/\d/g, "");

Logger.log(ex_num);
Logger.log(ex_abc);
```

