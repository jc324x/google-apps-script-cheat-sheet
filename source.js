// *   = done
// ?   = maybe add in?
// &   = in progress
// ➡ ⬇ = return

// fn conventions
// _arr, fldr, fi, fldr

// * | General 
// * | - Array
// * | -- Check for a Value
// * | -- Remove Duplicates
// * | -- Remove Empty Values
// * | -- Get Count of Values in Array
// * | - Array of Objects
// * | -- Sort by Property or Properties
// * | -- Find Object With Unique Property Value - Return Object
// * | -- Find Object With Unique Property Value - Return Value 
// * | -- Filter by Property Value
// * | - Dates and Times
// * | -- Formatted Timestamps
// * | -- Match a Date to a Range of Dates
//   |  Drive 
//   | - Folders
//   | -- Create or Verify Folder Path
//   | -- Last Folder in a Folder Path
//   | -- Array of All Folders in a Folder, at Root or in Drive
//   | -- Array of All Folder Names
//   | -- Find a Folder in a Folder, at Root or in Drive
//   | -- Create or Verify Folders in a Folder or at Root
//   | - Files
//   | -- Array of All Files in a Folder, at Root or in Drive
//   | -- Array of All File Names
//   | -- Find a File in a Folder, at Root or in Drive 
//   | -- Parent Folder for a File
//   | -- Copy a File to a Folder 
//   | -- Move a File to a Folder
//   | Sheets
//   | - Utility Functions for Sheets
//   | -- Convert Column Number to a Letter
//   | -- Timestamp on Cell Change
//   | -- Replicating Import Range
//   | -- Evaluating True and False
//   | - Range as Array of Objects
//   | -- Grid Object
//   | - Range as Array of Arrays
//   | -- Generate Array of Arrays
//   | -- Flatten A Multidimensional Array
//   | Forms
//   | - Form Management
//   | -- Build Array of Items
//   | -- Set Item Dropdown Choices
//   | -- Clear All Form Options
//   | -- Get Destination Sheet
//   | - Form Responses
//   | -- Get Last Form Response
//   | -- Dates in Form Responses
//   | Docs
//   | - Utility Functions for Docs
//   | -- Clear All Content From a Doc
//   | Gmail
//   | - Send Email
//   | -- Comma Separated List of Recipients
//   | -- HTML in Email Body

function testEverything() {}

// General

// - Array 

// -- Check for a Value
// ➡  boolean

function checkValIn(arr, val) { 
  return arr.indexOf(val) > -1; 
}

// var arr_cvi = [1,2,3,4];

// if (checkValIn(arr_cvi, 99)) {
//     Logger.log("check value in ➡ 99 is in the array"); 
//   } else {
//     Logger.log("check value in ➡ 99 is not in the array");
// }

// -- Remove Duplicates 
// ➡  array

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

// var arr_rdf  = [1,2,3,1,2,3,4,];
// var ex_rdf = rmDuplicatesFrom(arr_rdf);
// Logger.log("rmDup input ➡ " + arr_rdf);
// Logger.log("rmDup output ➡ " + ex_rdf);

// -- Remove Empty Values
// ➡  array

function rmEmptyVal(x){
  return (x !== (undefined || ''));
}

// var arr_rev  = ["a",,"b",,,"c"];
// var ex_rev = arr_rev.filter(rmEmptyVal);
// Logger.log("rmEmpty input ➡ " + arr_rev);
// Logger.log("rmEmpty output ➡ " + ex_rev);

// -- Get Count of Values in Array
// ➡  array of objects

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
			var a = new Object();
			a.value = arr[i];
			a.count = myCount;
			_arr.push(a);
		}
	}
  return _arr;
}

// var arr_covi  = ["A", "B", "C", "A", "B", "C", "D", "A"];
// var ex_covi = countOfValIn(arr_covi);
// Logger.log("countVal input ➡ " + arr_covi);
// Logger.log("countVal out ⬇ ");
// Logger.log(ex_covi);

// - Array of Objects

// example array of objects

var ex_arrObj = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
]

// -- Sort by Property or Properties
// ➡  array of objects

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

// ex_arrObj.sort(dynSort("a"));
// Logger.log("arrObj sorted by 'a' value ⬇ ");
// Logger.log(ex_arrObj);

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

// ex_arrObj.sort(dynSortM("b", "c"));
// Logger.log("arrObj sorted by 'b' and 'c' values ⬇ ");
// Logger.log(ex_arrObj);

// -- Find Object With Unique Property Value - Return Object
// ➡  object 

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


// Logger.log("find obj with 'a' value of 1000 ⬇ ");
// var ex_foi = findObjIn(ex_arrObj, "a", 1000);
// Logger.log(ex_foi);

// -- Find Object With Unique Property Value - Return Value 
// ➡  value  

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

// Logger.log("find obj with 'c' value of 500 and return its 'a' value ⬇ ");
// var ex_fovi = findObjValIn(ex_arrObj, "c", 500, "a");
// Logger.log(ex_fovi);

// -- Filter by Property Value
// ➡  array of objects

function filterObjIn(arrObj, pQuery, val) {
  var _arr = [];
  for (var i=0; i < arrObj.length; i++) {
    if (arrObj[i][pQuery] == val) _arr.push(arrObj[i]);
  }
  return _arr;
}

// var ex_foi = filterObjIn(ex_arrObj, "b", 2);
// Logger.log("filter arrObjs with 'b' value of 2 ⬇ ");
// Logger.log(ex_foi);

// - Dates and Times

// -- Formatted Timestamps 
// ➡  string

function fmatD() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
  return d.join("/");
}

// var ex_fd = fmatD();
// Logger.log("current date ➡ " + ex_fd);

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

// var ex_24T = fmat24T();
// Logger.log("current time (24 hour) ➡ " + ex_24T);

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

// var ex_dt12 = fmat12DT();
// Logger.log("current date + time (12 hour) ➡ " + ex_dt12);

// -- Match a Date to a Range of Dates

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

// var acdQ = academicQuarter();
// Logger.log("current quarter ➡ " + acdQ);

// Drive

// - Folders

// -- Create or Verify Folder Path and Get Last Folder in Path
// ➡  folder

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

// var ex_cov = createVerifyPath("google-apps-script-cheat-sheet/A/B/C");
// Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_cov.getId());

// -- Get the Last Folder in a Folder Path
// ➡  folder

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

// var ex_lfi = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_lfi.getId());

// -- Array of All Folders in a Folder, at Root or All of Drive
// ➡  array of folders

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

// var fldr_fi = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_fi   = foldersIn(fldr_fi);
// Logger.log("'google-apps-script-cheat-sheet' has top level folders ➡ " + ex_fi);

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

// var ex_rf  = rootFolders();
// Logger.log("all root folders ⬇ ");
// Logger.log(ex_rf);

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

// var ex_af = allFolders();
// Logger.log("all folders in Drive ⬇ ");
// Logger.log(ex_af);

// -- Array of Folder Names
// ➡  array of folder names

function folderNames(fldrs) {
	var arr = [];
	for (var i = 0; i < fldrs.length; i++) {
		var name = fldrs[i].getName();
		arr.push(name);
	}
	return arr;
}

// var fldr_fn = lastFolderIn("google-apps-script-cheat-sheet");
// var arr_fn  = foldersIn(fldr_fn);
// var ex_fn   = folderNames(arr_fn)
// Logger.log("'google-apps-script-cheat-sheet' has top level folders " + ex_fn);

// -- Find a Folder in a Folder, at Root or All of Drive
// ➡  folder 

// --- Find a Folder in a Folder

function findFolderIn(fldr, name) {
    var fldrs = foldersIn(fldr);
    var names = folderNames(fldrs);
    if (checkValIn(names, name)) {
      var _fldr = fldr.getFoldersByName(name).next();
      return _fldr;
    }
}

// var fldr_ffi = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_ffi = findFolderIn(fldr_ffi, "A");
// Logger.log(" Id of 'A' in 'google-apps-script-cheat-sheet' is ➡ " + ex_ffi.getId());

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

// var ex_ffar = findFolderAtRoot("google-apps-script-cheat-sheet");
// Logger.log(" Id of 'google-apps-script-cheat-sheet' at root ➡ " + ex_ffar.getId());

// --- Find a Folder in Drive

function findFolderInDrive(name) {
	var fi = DriveApp.getFoldersByName(name);
	while (fi.hasNext()){
		var fldr = fi.next();
		return fldr;
	}
}

// var ex_ffid = findFolderInDrive("google-apps-script-cheat-sheet");
// Logger.log(" Id of 'google-apps-script-cheat-sheet' at root ➡ " + ex_ffid.getId());

// -- Create or Verify Folders in a Folder or at Root
// ➡  folder

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

// var fldr_cvfi = lastFolderIn("google-apps-script-cheat-sheet");
// var arr_cvfi  = ["X", "Y", "Z"];
// var ex_cfi = createVerifyFoldersIn(fldr_cvfi, arr_cvfi);
// Logger.log("all folders in 'google-apps-script-cheat-sheet' = AXYZ+ ⬇ ");
// Logger.log(foldersIn(ex_cfi));

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

// var arr_cvfar = ["1", "2", "3"];
// var ex_cvfar  = createVerifyFoldersAtRoot(arr_cvfar);
// Logger.log("all folders at Root ⬇ ");
// Logger.log(rootFolders());

// - Files

// fn to create scratch file for examples below

function checkForExFile() {
	var fldr = createVerifyPath("google-apps-script-cheat-sheet");
	var file = findFileIn(fldr, "example_file");
  if (!(file)){fldr.createFile("example_file", "stuff!");}
  return findFileIn(fldr, "example_file");
}

var ex_chk = checkForExFile();
// Logger.log(ex_chk);

// -- Array of All Files in a Folder / Drive / Root
// ➡  array of files

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

// var fldr_fin = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_afi   = filesIn(fldr_fin);
// Logger.log(ex_afi);

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

// var ex_arf = rootFiles();
// Logger.log(ex_arf);

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

// var ex_afid = allFiles();
// Logger.log(ex_afid);

// -- Array of File Names 
// ➡  array of file names

function fileNames(files) {
  var arr = [];
  for (var i = 0; i < files.length; i++) {
    var name = files[i].getName();
    arr.push(name);
  }
  return arr;
}

// var fldr_fnam = lastFolderIn("google-apps-script-cheat-sheet");
// var arr_fnam  = filesIn(fldr_fnam);
// var ex_fnam   = fileNames(arr_fnam);
// Logger.log(ex_fnam);

// -- Find a File in a Folder, at Root or in Drive 
// ➡  file

// --- Find a File in a Folder, at Root or Search All of Drive 

function findFileIn(fldr, name) {
    var files = filesIn(fldr);
    var names = fileNames(files);
    if (checkValIn(names, name)) {
      var file = fldr.getFilesByName(name).next();
      return file;
    }
}

// var fldr_ffli = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_ffli   = findFileIn(fldr_ffli, "example_file");
// Logger.log(" Id of 'example_file' in 'google-apps-script-cheat-sheet' is ➡ " + ex_ffi.getId());

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

// var file_ffar = findFileAtRoot("NAME-OF-YOUR-FILE-GOES-HERE");
// Logger.log(" Id of '" + file_ffar + "' at root ➡ " + file_ffar.getId());

// --- Find a File in Drive

function findFileInDrive(name) {
	var fi = DriveApp.getFilesByName(name);
	while (fi.hasNext()){
		var file = fi.next();
		return file;
	}
}

// var file_ffid = findFileInDrive("example_file");
// Logger.log(" Id of '" + file_ffid + "' in " + parentFolderOf(file_ffid) + " ➡ " + file_ffid.getId());

// -- Parent Folder for a File

function parentFolderOf(file) {
	var fi = file.getParents();
	return fi.next();
}

// var file_pfo  = findFileInDrive("example_file");
// var ex_pfo = parentFolderOf(file_pfo);
// Logger.log("The parent folder of '" + file_pfo + "' is '" + ex_pfo + "'");

// -- Copy a File to a Folder
// ➡  file

function copyFile(file, fldr) {
	var name = file.getName();
	var dest = findFileIn(fldr, name);
	if (dest === undefined) { file.makeCopy(name, fldr) }
	return findFileIn(fldr, name);
}

// var ex_fldr1 = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_file1 = findFileIn(ex_fldr1, "example_file");
// var ex_fldr2 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// var copy     = copyFile(ex_file1, ex_fldr2);
// Logger.log(copy);

// -- Move a File to a Folder
// ➡  file

function moveFile(file, fldr) {
	var name = file.getName();
	var dest = findFileIn(fldr, name);
	if (dest === undefined) { file.makeCopy(fldr) }
	var done = findFileIn(fldr, name);
	if (done !== undefined) { file.setTrashed(true) }
	return done;
}

// var ex_fldr2 = lastFolderIn("google-apps-script-cheat-sheet");
// var ex_file2 = findFileIn(ex_fldr2, "example_file");
// var ex_fldr3 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// var move     = moveFile(ex_file2, ex_fldr3);
// Logger.log(move);

// Sheets

// - Managing Spreadsheet Files

// -- Create or Verify Spreadsheet in a Folder or at Root

function createVerifySSIn(fldr, name) {
	var files = filesIn(fldr);
	var names = fileNames(files);
	if (!(checkValIn(names, name))) {
		var ss   = SpreadsheetApp.create(name).getId();
		var file = DriveApp.getFileById(ss);
		moveFile(file, fldr);
	}
	return fldr.getFilesByName(name).next();
}

var fldr_cvssi = createVerifyPath("google-apps-script-cheat-sheet");
var ex_cvssi = createVerifySSIn(fldr_cvssi, "example_sheet");
Logger.log("The Id of '" + ex_cvssi + "' ");

function createVerifySSAtRoot(name) {

}

// -- Search Drive for a Spreadsheet
// - Utility Functions for Sheets
// -- Convert Column Number to a Letter
// -- Timestamp on Cell Change
// -- Replicating Import Range
// -- Evaluating True and False
// - Range as Array of Objects
// -- Grid Object
// - Range as Array of Arrays
// -- Generate Array of Arrays
// -- Flatten A Multidimensional Array

// Forms

// - Form Management
// -- Build Array of Items
// -- Set Item Dropdown Choices
// -- Clear All Form Options
// -- Get Destination Sheet
// - Form Responses
// -- Get Last Form Response
// -- Dates in Form Responses

// Docs

// - Managing Document Files
// -- Create or Verify Document in a Folder or at Root

// have to go through DriveApp to copy files / folders ->
// -- LEGACY --
// function createABlankDocInAFolder(folderId, docName) {
//   var folder       = DriveApp.getFolderById(folderId);
//   var inputDocId   = DocumentApp.create(docName).getId();
//   var inputDocFile = DriveApp.getFileById(inputDocId);
//   var outputDoc    = inputDocFile.makeCopy(docName, folder);
//   var docCheck     = folder.getFilesByName(docName);
//   if (docCheck.hasNext()) {
//     var outputDocId = docCheck.next().getId();
//     inputDocFile.setTrashed(true);
//     return outputDocId;
//     }
// }

// -- Search Drive for a Document
// - Utility Functions for Docs
// -- Clear All Content From a Doc

// Gmail

// - Send Email
// -- Comma Separated List of Recipients
// -- HTML in Email Body

// - Utility Functions for Docs 


// -- LEGACY --
// -- Create a Blank Doc in a Folder
function createDocIn(folderId, docName) {
  var folder    = DriveApp.getFolderById(folderId);
  var inputDoc  = DocumentApp.create(docName);
  var outputDoc = inputDoc.makeCopy(docName, folder);
  var docCheck = folder.getFilesByName(docName);
  if (docCheck.hasNext()) {
    var outputDocId = docCheck.next().getId();
    DriveApp.inputDoc.setTrashed(true);
    }
}

// -- LEGACY --
function createArrayOfObjectsFromRange_Vertical(sheetName, a1Notation) {
  var range      = ss.getSheetByName(sheetName).getRange(a1Notation);
  var height     = range.getHeight();
  var width      = range.getWidth();
  var values     = range.getValues();
  var properties = [];
  for (var i = 0; i < values.length; i++) {
    properties.push(values[i][0]);
  } 
  var arrayOfObjects = [];

  for (var i = 0; i < height; i++) {
    var obj = new Object();
    for (var j = 1; j < width; j++) {
      var property  = properties[i];
      var value     = values[i][j];
      // skip empty values 
      if (value !== "") {
        obj[property] = value;
      }
    }
    // don't add empty objects to the array
    var count = 0;
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            count++;
        }
      }
    if (count >= 1) {
      arrayOfObjects.push(obj);
    } 
  }  
  return arrayOfObjects;
}


// horizontal
function range_ArrayOfObjects(sheetName, a1Notation){

  var range  = SpreadsheetApp.getActive().getSheetByName(sheetName).getRange(a1Notation);
  var height = range.getHeight();
  var width  = range.getWidth();
  var values = range.getValues();

  var headers = [];
  for (var i = 0; i < values[0].length; i++) {
    headers.push(values[0][i])
  } 

  var arrayOfObjects = [];

  for (var i = 1; i < height; i++) {
    var obj = new Object();

    for (var j = 0; j < width; j++) {
      var property  = headers[j];
      var value     = values[i][j];
      // pass over empty values 
      if (value !== "") {
        obj[property] = value;
      }

    }
      var count = 0;
      for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
              count++;
          }
        }

      if (count >= 1) {
        arrayOfObjects.push(obj);
      } 
  }  
  return arrayOfObjects;
}


// -- LEGACY --
// doesn't work in onEdit(e)
function getSetValues(sheet1, a1Notation1, sheet2, a1Notation2) {
  var get = ss.getSheetByName(sheet1).getRange(a1Notation1).getValues();
  var set = ss.getSheetByName(sheet2).getRange(a1Notation2).setValues();
} 

// number of unique values for a property in array of objects

function countValuesForProperty(arrayOfObjects, property) {
  for (var i = 0; i < arrayOfObjects.length; i++) {
      
  } 
}


// gets all values for array of objects

// var result = objArray.map(function(a) {return a.foo;});

// function onlyUnique(value, index, self) { 
//       return self.indexOf(value) === index;
// }

// Logger.log(val.indexOf("Last"));

// var index = val.map(function(e) { return e.Last; }).indexOf('ZZZ');

function uniqueValuesForProperty(arrayOfObjects, property) {
  var allValues    = arrayOfObjects.map(function(a) {return a.property;});
  var uniqueValues = removeDuplicates(allValues);
  return uniqueValues;
}


// ---

function newArrayByObjProp(arrayOfObj, propToFind) {
  var array = [];
  for (var i = 0; i < arrayOfObj.length; i++) { 
  var obj = arrayOfObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (prop == propToFind) {
          array.push(obj[prop]);
        }
      }
    }
  }
  return array;
}


function compressArray(original) {
 
	var compressed = [];
	var copy       = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};

// -- LEGACY -- ?
// function buildArrayOfItemsByTitle(formObj) {
//   var output_array = [];
//   var arrayOfItemObjects = formObj.getItems()
//   for (var i = 0; i < arrayOfItemObjects.length; i++) {
//     output_array.push(arrayOfItemObjects[i].getTitle());
//   }
//   return output_array;
// }

// RegEx -> non-digits
// myString = myString.replace(/\D/g,'');

// RegEx -> digits only
// myString = myString.replace(/\d+/g)


// function setUnifiedDate(arrObj){
//   for (var h = 0; h < arrObj.length; h++){
//     var item = arrObj[h];
//       for (var prop in item) {
//         if (item.hasOwnProperty(prop)){
//           if (prop == "Due Date"){
//             item["Unified Date"] = item[prop];
//             continue;
//           } else {
//             item["Unified Date"] = item["Timestamp"];
//           }
//         }
//     }
//   }
//   return arrObj;
// }

// FORM OPTIONS

function buildArrayOfItemTitleID(formObj) {
  var output_array = [];
  var arrayOfItemObjects = formObj.getItems()
  for (var i = 0; i < arrayOfItemObjects.length; i++) {
    var item = {}; 
    item.index = i;
    item.title = arrayOfItemObjects[i].getTitle();
    item.id    = arrayOfItemObjects[i].getId();
    item.item  = arrayOfItemObjects[i];
    output_array.push(item);
  }
  return output_array;
}

function buildArrayOfChoices(itemObject, inputArray) {
  var arrayOfChoices = [];
  for (var i = 0; i < inputArray.length; i++){
    var response = itemObject.createChoice(inputArray[i]);
    Logger.log(response);
    // arrayOfChoices.push(response);
  }
  // return arrayOfChoices ;
}
