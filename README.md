# Google Apps Script Cheat Sheet

## Index 

##[General](#general)
* [Utility](#utility)
  * [Check for a Value in an Array](#check-for-a-value-in-an-array)
* [Dates and Times](#dates-and-times) 
  * [Formatted Timestamps](#formatted-timestamps)
  * [Match Academic Quarter to a Date](#match-academic-quarter-to-a-date)

##[Drive](#drive)
* [Folders](#folders)
  * [Create or Verify Folder Path](#create-or-verify-folder-path)
  * [List of All Folders in a Folder as an Array]()
  * [List of Root Folders as an Array]
  * [List of All Folders in Drive as an Array]
  * [Create Several Folders in a Folder](#create-several-folders-in-a-folder)
  * [Search Drive for a Folder and Return its Id](#search-drive-for-a-folder-and-returns-its-id)
  * [Move a Folder](#move-a-folder)
* [Files](#files)
  * [Create a Blank Doc or Sheet in a Folder](#create-a-blank-doc-or-sheet-in-a-folder)
  * [Search Drive for a File and Return its Id](#search-drive-for-a-file-and-return-its-id)
  * [Find a File in a Folder Path](#find-a-file-in-a-folder-path)
  * [Move a File to a Folder](#move-a-file-to-a-folder)

##[Sheets](#sheets)
* [Utility Functions for Sheets](#utility-functions-for-sheets)
  * [Convert Column Number to a Letter](#convert-column-number-to-a-letter)
  * [Timestamp On Cell Change](#timestamp-on-cell-change)
* [Arrays and Ranges](#arrays)
  * [Evaluating User Input as True or False](#evaluating-user-input-as-true-or-false)
  * [Generate Array of Arrays By Row](#generate-array-of-array-by-row)
  * [Remove Duplicates From an Array](#remove-duplicates-from-an-array)
  * [Remove Empty Values From an Array](#remove-empty-values-from-an-array)
  * [Vlookup in Google Script](#vlookup-in-google-script)
  * [Flatten Multidimensional Array for One Row](#flatten-multidimensional-array-for-one-row)
  * [Flatten Multidimensional Array for One Column](#flatten-multidimensional-array-for-one-column)

##[Docs](#docs)
* [Utility Functions for Docs](#utility-functions-for-docs)
	* [Clear All Content From a Doc](#clear-all-content-from-a-document)

## General

### Utility Functions

#### List of Folder Content as an Array

```javascript
function returnFolderContentsAsArray(folderIterator) {
  var array = [];
  while (folderIterator.hasNext()) {
    var item = folderIterator.next().getName();
   array.push(item);
  } 
  return array;
}
```

#### Check for a Value in an Array 

```javascript
function findValueInArray(array, value) { 
  return array.indexOf(value) > -1; 
}
```

### Dates and Times

#### Formatted Timestamps

```Date.now()``` is **not** supported in Google Apps Script  

date only  :point_right:  ```05/17/2016```

```javascript
function getCurrentDate() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
  return d.join("/");
}
```

time only (24-hour)  :point_right:  ```14:18:25```

```javascript
function getCurrentTime(){
  var n  = new Date();
  var t = [ n.getHours(), n.getMinutes(), n.getSeconds() ]
  for ( var i = 1; i < 3; i++ ) {
    if ( t[i] < 10 ) {
      t[i] = "0" + t[i];
    }
  return t.join(":");
  }
}
```

date + time (12-hour)  :point_right:  ```5/17/2016 2:18:11 PM```

```javascript
function getCurrentDateTime12Hour() {
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
```

#### Find Academic Quarter For a Date

11/03/2015  :point_right:  `2`  

```javascript
var quarterDates = [
  ["08/01/2015", "10/28/2015"],
  ["11/02/2015", "1/9/2016"],
  ["1/15/2016", "3/19/2016"],
  ["3/21/2016", "6/1/2016"],
  ];
```

```javascript
function returnCurrentQuarterAsInteger() {
  var d = new Date();
  for (i = 0; i < 4; i++){
  var s = new Date(quarterDates[i][0]);
  var e = new Date(quarterDates[i][1]);
  if (d >= s && d <= e ) {
    return i + 1;
    } 
  }
}
```

## Drive

### Folders

#### Create or Verify Complete Folder Path

`var abcdefg = "a/b/c/d/e/f/g"`

if folder `a` does not exist, `createOrFindFolderPathReturnId(abcdefg)`, will create the entire folder path and return the Id of `g`, the last folder in the path

if part of the the folder path exists already, `a/b/c` for example, `createOrFindFolderPathReturnId(abcdefg)` will create folders `d` through `g` nested inside and
  return the Id of `g`, the last folder in the path

**don't** put slashes at the beginning or end of the path, ie: ~~"/a/b/c/"~~   
also, **don't** put a backslash `\` between directory names with spaces ~~"fist\ directory/second\ directory/"~~

```javascript
function createOrFindFolderPathReturnId(folderPath) {
  var array = folderPath.split('/');
  var f;
  for (i = 0; i < array.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getFoldersByName(array[i]);
      if(!(fi.hasNext())) {
        DriveApp.createFolder(array[i]);
        fi = DriveApp.getFoldersByName(array[i]);
        } 
      f = fi.next();
      } else if (i >= 1) {
        fi = f.getFoldersByName(array[i]);
        if(!(fi.hasNext())) {
          f.createFolder(array[i]);
          fi = DriveApp.getFoldersByName(array[i]);
        } 
        f = fi.next();
      }
  } 
  var fId = f.getId();
  return fId;
}
```
#### Create Several Folders Inside of a Folder 

:warning: this function references `createOrFindFolderPathReturnId` and `findValueInArray`, be sure to include both in your project

`var destination     = "2016/Q4/Math"`   
`var foldersToCreate = ["tests", "quizzes", "assignments"]`

if folder path `2016/Q4/Math` does not exist aleady, `createSeveralFolders(foldersToCreate, destination)` will create the full path and populate `Math` with three folders: `tests`, `quizzes` and `assignments`    

to create folders at root level, don't specify a destination path - `createSeveralFolders(foldersToCreate)`   

if `tests` already exists at drive root, createSeveralFolders(foldersToCreate), will only create `quizzes` and `assignments`

```javascript
function createSeveralFolders(arrayOfFolders, path) {
  if (typeof path === 'undefined') {
    var rootFolders = returnFolderContentsAsArray(DriveApp.getRootFolder().getFolders());
    for (i=0; i < arrayOfFolders.length; i++) {
      if (!(findValueInArray(rootFolders, arrayOfFolders[i]))) {
        DriveApp.createFolder(arrayOfFolders[i]);
      }
    } 
  } else {
    var destination        = DriveApp.getFolderById(createOrFindFolderPathReturnId(path));
    var destinationFolders = returnFolderContentsAsArray(destination.getFolders());
    for (i=0; i < arrayOfFolders.length; i++) {
      if (!(findValueInArray(destinationFolders, arrayOfFolders[i]))) {
        destination.createFolder(arrayOfFolders[i]);
      }
    }
  }
}
```

#### Search Drive for a Folder and Return the Id

:warning: this will return `false` if multiple folders exist with the same name, or if the folder isn't found. this script can also take a very long time to complete if you have a very full Drive; it might even time out.

```javascript
function searchDriveForFolderReturnId(folderName) {
  var foldersInDrive = DriveApp.getFoldersByName(folderName);
  var i = 0;
  while (foldersInDrive.hasNext()) {
    i += 1;
    var folder = foldersInDrive.next();
    var folderId = folder.getId();
  }
  if (i === 1) {
    return folderId;
  } else {
    return false;
  }
}
```

#### Move a Folder

assume the paths `a/b/c/d/e/f/g` and `x/y/z` exist already 

`this snippet` would  move `y/z` from inside of `x` and place `y/z` in `c`, adjacent to `d`

```javascript
```

### Files

#### Create a Blank Doc or Sheet in a Folder

```javascript

```

#### Find a File in a Folder Path

```javascript

```

#### Moving an Existing File to a Folder

```javascript

```

---
---
---

## Sheets

### Utility Functions for Sheets

#### Convert Column Number to a Letter

:warning: Only supports up to 104 columns

```javascript
function numberToColumn(number) {
  if (number <= 26) {
    var character = String.fromCharCode(97 + number).toUpperCase();
    return character;
  } else if (number >= 27 && number <= 52) {
    var adjNumber = number - 26;
    var character = String.fromCharCode(97 + adjNumber).toUpperCase();
    return "A" + character;
  } else if (number >= 53 && number <= 78) {
    var adjNumber = number - 52;
    var character = String.fromCharCode(97 + adjNumber).toUpperCase();
    return "B" + character;
  } else if (number >= 79 && number <= 104) {
    var adjNumber = number - 78;
    var character = String.fromCharCode(97 + adjNumber).toUpperCase();
    return "C" + character;
  }
}
```

#### Timestamp on Cell Change 

**Watch One Column for Changes**

ColA | ColB
---  | ---
[change] | 05/17/2016 01:33:42

:blue_book: update `watch` and `update` variables to match the headers in your sheet

```javascript
var watch  = "ColA";
var update = "ColB";
```

```javascript
function onEdit(event) { 
  var timezone     = "GMT-5";
  var format       = "MM/dd/YYYY HH:mm:ss";
  var sheet        = event.source.getActiveSheet();
  var actRng       = event.source.getActiveRange();
  var editColumn   = actRng.getColumn();
  var index        = actRng.getRowIndex();
  var headers      = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  var watchCol     = headers[0].indexOf(watch) + 1;
  var updateCol    = headers[0].indexOf(update);
  if (updateCol > -1 && index > 1 && editColumn == watchCol) {
    var cellToUpdate = sheet.getRange(index, updateCol + 1);
    var datestamp    = Utilities.formatDate(new Date(), timezone, format);
    cellToUpdate.setValue(datestamp);
  }
} 
```
---

**Watch Multiple Columns for Changes**

:blue_book: update `watch` and `update` values in the array to match the headers in your sheet

ColA | ColB | ColC | ColD | ColE | ColF
--- | --- | --- | --- | --- | ---
[change] | 05/17/2016 01:33:42 | | | | | |
| | | | | [change] | 05/17/2016 01:39:49
| | | [change] | 05/17/2016 01:39:20 | | |

```javascript
var watch_update   = [
  {watch: 'ColA', update: 'ColB'},
  {watch: 'ColC', update: 'ColD'},
  {watch: 'ColE', update: 'ColF'},
];
```

```javascript
function onEdit(event) { 
  var timezone       = "GMT-5";
  var format         = "MM/dd/YYYY HH:mm:ss";
  var sheet          = event.source.getActiveSheet();
  var actRng         = event.source.getActiveRange();
  var editColumn     = actRng.getColumn();
  var index          = actRng.getRowIndex();
  var headers        = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  for (i = 0; i < watch_update.length; i++) {
    var watch        = watch_update[i].watch;
    var update       = watch_update[i].update;
    var sheet        = event.source.getActiveSheet();
    var actRng       = event.source.getActiveRange();
    var editColumn   = actRng.getColumn();
    var index        = actRng.getRowIndex();
    var headers      = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    var watchCol     = headers[0].indexOf(watch) + 1;
    var updateCol    = headers[0].indexOf(update);
    if (updateCol > -1 && index > 1 && editColumn == watchCol) {
      var updateCell = sheet.getRange(index, updateCol + 1);
      var datestamp  = Utilities.formatDate(new Date(), timezone, format);
      updateCell.setValue(datestamp);
    }
  } 
}
```

### Arrays

#### Evaluating User Input as True or False

:blue_book:     
True, true, Yes, yes, 1  :point_right:  ```true```   
False, false, No, no, 0  :point_right:  ```false```

```javascript 
function checkTF(input) {
  if (isNaN(input)) {
    var first_letter = user_input.charAt(0).toLowerCase();
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
```

#### Generate Array of Arrays By Row

:construction:

```javascript
```

#### Flatten Multidimensional Array for One Row

:construction:

```javascript
```

#### Flatten Multidimensional Array for One Column

:construction:

```javascript
```

#### Remove Duplicates From an Array 

:construction:

```javascript
```

#### Remove Empty Values From an Array

:construction:

```javascript
```

#### Vlookup in Google Script

:construction:

```javascript
```

## Docs

### Utility Functions

#### Clear All Content From a Document

:construction:

```javascript
```

## Sheets + Docs

### General

#### Linking Two Documents

:construction:

```javascript
```

#### Setting Up a Mail Merge

:construction:

```javascript
```
