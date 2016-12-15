Logger.log("Start");

//       | General
//       | - Array
//       | -- Check for a Value In Array
//       | -- Remove Duplicates
//       | -- Remove Empty Values
//       | -- Get Count of Values in Array
//       | -- Intersect of Two Arrays
//       | - Array of Objects
//       | -- Sort by Property or Properties
//       | -- Find Object With Unique Property Value
//       | -- Filter by Property Value
// 0.9.0 | -- Unify Property for Array of Objects
// 0.9.0 | - Multidimensional Array
// 0.9.0 | -- Flatten Multidimensional Array
//       | - Object
//       | -- Array of Matching Property Values
// 0.9.0 | -- Unify Object Properties
// 0.9.0 | -- Merge Two Objects
//       | - Dates and Times
//       | -- Formatted Timestamps
// 0.9.0 | -- New Date Object from String
//       | -- Match a Date to a Range
//       | Drive
//       | - Folders
// 0.9.0 | -- Create or Verify Folder Path
// 0.9.0 | -- Last Folder in Folder Path
//       | -- Array of All Folders
//       | -- Array of All Folder Names
//       | -- Find a Folder
//       | -- Create or Verify Folders
// 0.9.0 | -- Rename a Folder
//       | - Files
//       | -- Array of All Files
//       | -- Array of All File Names
//       | -- Find a File
//       | -- Parent Folder of a File
//       | -- Copy a File to a Folder
//       | -- Move a File to a Folder
// 0.9.0 | -- Rename a File
//       | Sheets
//       | - Managing Spreadsheet Files
//       | -- Create or Verify Spreadsheet
// 0.9.0 | -- Get Spreadsheet Id
//       | - Utility Functions for Sheets
//       | -- Convert Column Number to a Letter
//       | -- Convert Column Letter to a Number
// 0.9.0 | -- Replicating Import Range
//       | -- Evaluating True and False
//       | -  Array of Objects
//       | -- Utility Functions for Array of Objects
//       | --- Header Range
//       | --- Value Range
//       | --- Header Values
//       | --- Values by Row
// 0.9.0 | -- Array of Objects from Sheet
// 0.9.0 | -- Array of Objects from Range
// 0.9.0 | -- Array of Objects from Two Columns
//       | Docs
//       | - Managing Document Files
//       | -- Create or Verify Document
// 0.9.0 | -- Get Document Id
//       | - Utility Functions for Docs
//       | -- Access Document Body
//       | -- Clear Document Body
// 0.9.0 | Sheets and Docs
// 0.9.0 | - Bulleted Lists
// 0.9.0 | -- Single Division List
// 0.9.0 | -- Multi Division List
// 0.9.0 | - Merge
//       | -- Utility Functions for Merging
// 0.9.0 | --- Dynamically Create File Name
// 0.9.0 | -- Merge Document
// 0.9.0 | -- Cell Shading
//       | Gmail
//       | - Send Email
//       | -- Comma Separated List of Recipients
//       | -- Mail Merge
//       | Other
//       | -- Regex Only Numbers or Letters

// Roadmap: 
// 0.9.0 - Additions and cleanup
// 0.9.1 - Count of Value in Array of Objects
// 0.9.1 - Timestamp on Cell Change
// 0.9.1 - Moving / Copying Folders
// 0.9.2 - Grid Objects (Modifying Sheet)
// 0.9.3 - Copy Down Formulas on Form Submit
// 0.9.9 - Write in return types, verify README, dependencies
// 1.0.0 - Link to templates on jcodesmn blog

function testEverything() {}

// General

// - Array 

// -- Check for a Value in Array
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

var arr_rev  = ["a",,"b",,,"c"];
var ex_rev = arr_rev.filter(rmEmptyVal);
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

// -- Intersect of Two Arrays
// ➡  array 

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

// var arr1_io = [1, 2, 3];
// var arr2_io = [3, 4, 5];
// Logger.log(intersectOf(arr1_io, arr2_io));

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

// -- Find Object With Unique Property Value
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

// -- Return Single Value
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

// -- Unify Property for Array of Objects

// -- FLAG --
// merge = combine

function mergeObjProp_Arr(arrObj, arrProp, newProp){
  for (var h = 0; h < arrObj.length; h++){
    var item = arrObj[h];
    for (var i = 0; i < arrProp.length; i++) {
      for (var prop in item) {
				// FLAG - item.hasOwnProperty required?
        if (item.hasOwnProperty(prop)){
          if (prop == arrProp[i]){
            if (item[prop] != "") {
              item[newProp] = item[prop];
            }
          }
        }
      }
    }
  }
  return arrObj;
}

// - Multidimensional Array

// -- Flatten Multidimensional Array

function flattenMultiArr(multiArr){
  var arr = multiArr.reduce(function(a, b) {
    return a.concat(b);
  });
  return arr;
}

var ss_fma  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var val_fma = ss_fma.getRange("G2:H5").getValues();
var ex_fma  = flattenMultiArr(val_fma).sort();
// Logger.log(ex_fma);

// -- Filter by Property Value
// ➡  array of objects

function filterObjIn(arrObj, pQuery, val) {
	var _arr = [];
	for (var i=0; i < arrObj.length; i++) {
		if (arrObj[i][pQuery] == val) _arr.push(arrObj[i]);
	}
	return _arr;
}

var ex_foi = filterObjIn(ex_arrObj, "b", 2);
// Logger.log("filter arrObjs with 'b' value of 2 ⬇ ");
// Logger.log(ex_foi);

// - Object
// -- Array of Matching Property Values

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

// var arr_fvi = ["a", "b", "d"];
// var ex_fvi  = filterValIn(obj_fvi, arr_fvi);
// Logger.log(ex_fvi);

// -- Unify Object Properties

// -- FLAG --
// if (obj.hasOwnProperty(pQuery) && prop == pQuery && obj[prop] == val) {

function mergeObjProp(obj, arrProp, newProp){
  for (var i = 0; i < arrProp.length; i++) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)){
        if (prop == arrProp[i]){
          if (obj[prop] != "") {
            obj[newProp] = obj[prop];
            return obj[prop];
          }
        }
      }
    }
  }
}

// -- Merge Two Objects 

function mergeTwoObjs_Selective(full, partial, arrProp) {
    var newObj = {};
    for (var prop in full) { 
      newObj[prop] = full[prop]; 
    }
    for (var prop in partial) { 
      for (var i = 0; i < arrProp.length; i++){
        if (prop == arrProp[i]) {
          newObj[prop] = partial[prop];
        }
      }
    }
  return newObj;
}

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

// -- New Date Object from String
// format -> 'February 17, 2016 13:00:00 -0500';
// given 2016-02-17

function dateObjectFromString(str) {
	var arr    = str.split("-");
	var months = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
		];
	// Logger.log(months[(arr[1] - 1)] + " " + arr[2] + ", " + arr[0]);
	return new Date (months[(arr[1] - 1)] + " " + arr[2] + ", " + arr[0]);
}

var ex_ds   = "2016-02-17";
var ex_dofs = dateObjectFromString(ex_ds);
// Logger.log(ex_dofs);

// -- Match a Date to a Range

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

// -- Create or Verify Folder Path 
// ➡  folder

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

// var ex_cov = createVerifyPath("google-apps-script-cheat-sheet/A/B/C");
// Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_cov.getId());

// -- Get the Last Folder in Folder Path
// ➡  folder

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

// var ex_lfi = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// Logger.log("Id of 'C' in 'google-apps-script-cheat-sheet/A/B/C' is ➡ " + ex_lfi.getId());

// -- Array of All Folders
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

// -- Find a Folder
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

// -- Create or Verify Folders
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

var chkFile = checkForExFile();
// Logger.log(chkFile);

// -- Array of All Files
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

// -- Find a File
// ➡  file

// --- Find a File in a Folder

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

// -- Parent Folder of a File

function parentFolderOf(file) {
	var fi = file.getParents();
	return fi.next();
}

// var file_pfo = findFileInDrive("example_file");
// var ex_pfo   = parentFolderOf(file_pfo);
// Logger.log("The parent folder of '" + file_pfo + "' is '" + ex_pfo + "'");

// -- Copy a File to a Folder
// ➡  file

function copyFile(file, fldr) {
	var name = file.getName();
	var dest = findFileIn(fldr, name);
	if (dest === undefined) { file.makeCopy(name, fldr) }
	return findFileIn(fldr, name);
}

// var fldr_cf1 = lastFolderIn("google-apps-script-cheat-sheet");
// var file_cf  = findFileIn(fldr_cf1, "example_file");
// var fldr_cf2 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// var ex_cf    = copyFile(file_cf, fldr_cf2);
// Logger.log("'" + ex_cf + "' " + "has been copied to " + parentFolderOf(ex_cf));

// -- Move a File to a Folder
// ➡  file

function moveFile(file, fldr) {
	var name = file.getName();
	var dest = findFileIn(fldr, name);
	if (dest === undefined) { file.makeCopy(name, fldr) }
	var _file = findFileIn(fldr, name);
	if (_file !== undefined) { file.setTrashed(true) }
	return _file;
}

// var fldr_mf1 = lastFolderIn("google-apps-script-cheat-sheet");
// var file_mf  = findFileIn(fldr_mf1, "example_file");
// var fldr_mf2 = lastFolderIn("google-apps-script-cheat-sheet/A/B/C");
// var ex_mf    = moveFile(file_mf, fldr_mf2);
// Logger.log("'" + ex_mf + "' " + "has been moved to " + parentFolderOf(ex_mf));

// -- Rename a File
// ➡  file

function renameFile(file, name) {
  file.setName(name)
  return file;
} 

// Sheets

// - Managing Spreadsheet Files

// -- Create or Verify Spreadsheet in a Folder or at Root
// ➡  spreadsheet

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

// var fldr_cvssi = createVerifyPath("google-apps-script-cheat-sheet");
// var ex_cvssi   = createVerifySSIn(fldr_cvssi, "example_sheet");
// Logger.log("The Id of '" + ex_cvssi + "' in " + parentFolderOf(ex_cvssi) + " is '" + ex_cvssi.getId());

// --- Create or Verify Spreadsheet at Root

function createVerifySSAtRoot(name) {
	var files = rootFiles();
	var names = fileNames(files);
	if (!(checkValIn(names, name))) {
		var ss = SpreadsheetApp.create(name);
	}
	return findFileAtRoot(name);
}

// var ex_cvssar = createVerifySSAtRoot("example_sheet");
// Logger.log("The Id of '" + ex_cvssar + "' at root is '" + ex_cvssar.getId());

// -- Get Spreadsheet Id

// - Utility Functions for Sheets

// -- Convert Column Number to a Letter
// ➡  string

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
		// Logger.log(i + " - " + j);
	}
}

// ex_nc();

// -- Convert Column Letter to a Number
// ➡  integer

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
		// Logger.log(abc + " - " + colNum(abc));
	}
	for (var i = 26; i <= 51; i++) {
		var abc = "A" + String.fromCharCode(97 - 26 + i).toUpperCase();
		// Logger.log(abc + " - " + colNum(abc));
	}
}

// ex_cn();

// -- Replicating Import Range
// trigger -> getSet : From spreadsheet : On edit

var sheet_gs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

function getSet(){
	var get = sheet_gs.getRange("A2:A5").getValues();
	var set = sheet_gs.getRange("B2:B5").setValues(get);
}

// -- Evaluating True and False
// true:  1, t*, T*, y*, Y*
// false: 0, !t || !y
// ➡  boolean

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

// var ex_ctf1 = "Yes";
// var ex_ctf2 = "No";
// Logger.log(checkTF(ex_ctf1));
// Logger.log(checkTF(ex_ctf2));

// - Array of Objects

// -- Utility Functions for Array of Objects

// --- Header Range
// ➡  range object

function headerRange(sheetObj, a1Notation) {
	var arr  = a1Notation.split(":");
	var col0 = arr[0].match(/\D/g,'');
	var col1 = arr[1].match(/\D/g,'');
	var row  = arr[0].match(/\d+/g);
	var a1   = col0 + row + ":" + col1 + row;
	return sheetObj.getRange(a1);
}

// --- Value Range
// ➡  range object

function valueRange(sheetObj, a1Notation) {
	var arr  = a1Notation.split(":");
	var col0 = arr[0].match(/\D/g,'');
	var row0 = arr[0].match(/\d+/g);
	var col1 = arr[1].match(/\D/g,'');
	var row1 = arr[1].match(/\d+/g);
	var a1   = col0 + (Number(row0) + 1) + ":" + col1 + row1;
	return sheetObj.getRange(a1);
}

// --- Header Values
// ➡  array

function headerVal(rangeObj){
	var vals = rangeObj.getValues();
	var arr  = [];
	for (var i = 0; i < vals[0].length; i++) {
		var val = vals[0][i];
		arr.push(val);
	} 
	return arr;
}

// --- Values by Row
// ➡  array of objects

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

// -- Array of Objects from Sheet

function arrObjSheet(sheetObj, hRow){
	var lColNum = sheetObj.getLastColumn();
	var lColABC = numCol(lColNum);
	var lRow    = sheetObj.getLastRow();
	var hRange  = sheetObj.getRange("A" + hRow + ":" + lColABC + hRow);
	var vRange  = sheetObj.getRange("A" + (hRow +1 ) + ":" + lColABC + lRow);
	var headers = headerVal(hRange);
	return valByRow(vRange, headers)
}

// var ss_aos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var ex_aos = arrObjSheet(ss_aos, 2);
// Logger.log(ex_aos);

// -- Array of Objects from Range 

function arrObjRange(sheetObj, a1Notation) {
	var hRange  = headerRange(sheetObj, a1Notation);
	var vRange  = valueRange(sheetObj, a1Notation);
	var headers = headerVal(hRange);
	return valByRow(vRange, headers);
}

// var ss_aor = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
// var ex_aor = arrObjRange(ss_aor, "A2:E7");
// Logger.log(ex_aor);

// -- Array of Objects from Two Columns

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

// var sheet_vg = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
// var ex_vg    = arrObjTwoCol(sheet_vg, "D2:E5");
// Logger.log(ex_vg);

// Docs

// - Managing Document Files

// -- Create or Verify Document in a Folder or at Root

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

// var fldr_cvdi = createVerifyPath("google-apps-script-cheat-sheet");
// var ex_cvdi   = createVerifyDocIn(fldr_cvdi, "example_doc");
// Logger.log("The Id of '" + ex_cvdi + "' in " + parentFolderOf(ex_cvdi) + " is '" + ex_cvdi.getId());

// --- Create or Verify Document at Root

function createVerifyDocAtRoot(name) {
	var files = rootFiles();
	var names = fileNames(files);
	if (!(checkValIn(names, name))) {
		var ss = DocumentApp.create(name);
	}
	return findFileAtRoot(name);
}

// var ex_cvdar = createVerifyDocAtRoot("example_doc");
// Logger.log("The Id of '" + ex_cvdar + "' at root is '" + ex_cvdar.getId());

// -- Get Document Id

// - Utility Functions for Docs

// -- Access Document Body

// var fldr_adb = lastFolderIn("google-apps-script-cheat-sheet");
// var doc_adb  = findFileIn(fldr_adb, "example_doc").getId();
// var body     = DocumentApp.openById(doc_adb).getBody();

// body.appendParagraph("Hello, world!");

// -- Clear Document Body

// var fldr_cdb = lastFolderIn("google-apps-script-cheat-sheet");
// var doc_cdb  = findFileIn(fldr_cdb, "example_doc").getId();
// var body     = DocumentApp.openById(doc_cdb).getBody();

// body.clear();

// Sheets and Docs

// - Bulleted Lists

// -- Single Division List

var ss_sdl     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_sdl = arrObjSheet(ss_sdl, 2);
var fldr_sdl   = createVerifyPath("google-apps-script-cheat-sheet");
var docId_sdl  = createVerifyDocIn(fldr_sdl, "example_doc").getId();
var body_sdl   = DocumentApp.openById(docId_sdl).getBody();

(function(){
	arrObj_sdl.sort(dynSortM("Last", "First"));
	var sectionHeader = body_sdl.appendParagraph("Students");
	sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
	for (var i in arrObj_sdl) {
		body_sdl.appendListItem(arrObj_sdl[i]["Last"] + ", " + arrObj_sdl[i]["First"]);
	}
})();

// -- Multi Division List

var ss_mdl     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_mdl = arrObjSheet(ss_mdl, 2);
var fldr_mdl   = createVerifyPath("google-apps-script-cheat-sheet");
var docId_mdl  = createVerifyDocIn(fldr_mdl, "example_doc").getId();
var body_mdl   = DocumentApp.openById(docId_mdl).getBody();

(function(){
	arrObj_mdl.sort(dynSortM("Homeroom", "Last", "First"));
	var sectionHeader = body_mdl.appendParagraph("Homerooms and Students");
	sectionHeader.setHeading(DocumentApp.ParagraphHeading.HEADING1);
	var homeroom = arrObj_mdl[0]["Homeroom"];
	body_mdl.appendListItem(homeroom);
	for (var i in arrObj_mdl) {
		if (arrObj_mdl[i]["Homeroom"] === homeroom) {
			body_mdl.appendListItem(arrObj_mdl[i]["First"] + " " + arrObj_mdl[i]["Last"])
			.setNestingLevel(1).setIndentStart(10)
			.setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
		} else {
			homeroom = arrObj_mdl[i]["Homeroom"];
			body_mdl.appendListItem(homeroom);
			body_mdl.appendListItem(arrObj_mdl[i]["First"] + " " + arrObj_mdl[i]["Last"])
			.setNestingLevel(1).setIndentStart(10)
			.setGlyphType(DocumentApp.GlyphType.HOLLOW_BULLET);
		}
	}
})();

// - Merge

// -- Utility Functions

// --- String From Object Properties

var obj_nfp = { 
	name:  "Jon",
	state: "MN",
  job:   "IT"
};

function strFromProp(obj, str){
  var arr  = str.split(" ");
  var _arr = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i]; 
    for (var prop in obj){
      var mod = str.substr(0, str.length-2).substr(2);
      if (obj.hasOwnProperty(mod)){
        _arr.push(obj[mod]);
      } else {
        _arr.push(str);
      }
      break;
    }
  } 
  return _arr.join(" ");
}

var ex_nfp = strFromProp(obj_nfp, "name: <<name>> - state: <<state>> - job: <<job>>");
// Logger.log(ex_nfp);

// --- Find and Replace Text in Document from Object Properties

function mergeDocByObj(docObj, obj) {
  var body = docObj.getBody(); 
  for (var prop in obj) {
    var query = "<<" + prop + ">>"
    var val   = obj[prop];
    body.replaceText(query, val);
  } 
} 

// -- FLAG --
// add in ex

// --- Find and Replace Text in Google Sheet from Object Properties

// -- Merge Data in Array of Objects

function mergeDataArrObjDoc(arrObj, template, naming, fldr, ts) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj  = arrObj[i];
    var name = strFromProp(obj, naming);
    if (ts == true) name += " - " + fmat12DT();
    var docId = copyFile(template, fldr).setName(name).getId()
    var doc   = DocumentApp.openById(docId);
    mergeDocByObj(doc, obj);
    }
} 

// --------------------------------------------------------------

var ss_mdaod      = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_mdaod  = arrObjSheet(ss_mdaod, 2);
var main_mdaod    = lastFolderIn("google-apps-script-cheat-sheet");
var exports_mdaod = createVerifyPath("google-apps-script-cheat-sheet/Merge Exports");
var doc_mdaod     = findFileIn(main_mdaod, "merge_template_doc");
var name_mdaod    = "Name: <<First>> <<Last>> Grade: <<Grade>>";

// mergeDataArrObjDoc(arrObj_mdaod, doc_mdaod, name_mdaod, exports_mdaod, true)

// --------------------------------------------------------------

// --- Spreadsheet

function mergeSheetByObj(sheetObj, obj) {
  var values = sheetObj.getDataRange().getValues();
  for(var row in values){
    var update = values[row].map(function(original){
      var text = original.toString();
      for (var prop in obj) {
        var query = "<<"+prop+">>"
          if (text.indexOf(query) !== -1) {
            text = text.replace(query, obj[prop]);
            break;
          }
      } 
      return text;
    });
    values[row] = update;
  }
  sheetObj.getDataRange().setValues(values);
}

// -- FLAG --
// create ex

function mergeDataArrObjSheet(arrObj, template, naming, fldr, ts) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj  = arrObj[i];
    var name = strFromProp(obj, naming);
    if (ts == true) name += " - " + fmat12DT();
    var sheetId = copyFile(template, fldr).setName(name).getId()
    var sheet   = SpreadsheetApp.openById(sheetId);
    var search  = "<<First>>";
    var replace = obj["First"];
    mergeSheetByObj(sheet, obj);
    }
} 

var ss_mdaos      = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
var arrObj_mdaos  = arrObjSheet(ss_mdaod, 2);
var main_mdaos    = lastFolderIn("google-apps-script-cheat-sheet");
var exports_mdaos = createVerifyPath("google-apps-script-cheat-sheet/Merge Exports");
var sheet_mdaos   = findFileIn(main_mdaod, "merge_template_sheet");
var name_mdaos    = "Name: <<First>> <<Last>> Grade: <<Grade>>";

mergeDataArrObjSheet(arrObj_mdaos, sheet_mdaos, name_mdaos, exports_mdaod, true)

// -- Cell Shading

function shadeCells(sheetObj, colLetter, obj, hexStr) {
  // array of all values in col = ex. 1
  // index in array = relative position in sheet
  // find match in array -> matching value in obj -> A1...B1 (grey)
  
 var ss    = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange("B2:D5");
 range.setBackground("red");

}

// Gmail

// - Send Email

// -- Comma Separated List of Recipients

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
// Logger.log(ex_clf);

// -- Mail Merge

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
// mailMerge(ex_mm);

// Other

// -- Regex Only Numbers or Letters

var re     = "123ABC234XYZ"
var ex_num = re.match(/\d+/g);
var ex_abc = re.replace(/\d/g, "");

// Logger.log(ex_num);
// Logger.log(ex_abc);

Logger.log("End");
