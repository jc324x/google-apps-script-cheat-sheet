// *   = done
// ?   = maybe add in?
// &   = in progress
// ➡ ⬇ = return

//   | General 
//   | - Standard Array
//   | -- Check an Array for a Value
//   | -- Remove Duplicates from an Array
//   | -- Remove Empty Values from an Array
//   | -- Get Count of Value in Array
//   | - Arrays of Objects
//   | -- Sort by Property or Properties
//   | -- Find Object or Objects by Property Value
//   | - Dates and Times
//   | -- Formatted Timestamps
//   | -- Match a Date to a Range of Dates
//   |  Drive 
//   | - Folders
//   | -- Create a Folder Path and/or Get the Id Of the Last Folder
//   | -- Get Id of Last Folder in a Folder Path
//   | -- Search a Folder Path for a Folder
//   | -- Array of All Folders in a Folder
//   | -- Array of All Folders in Drive
//   | -- Array of All Folders at Root
//   | -- Create Several Folders in a Folder or at Root
//   | -- Search Entire Drive for a Folder
//   | -- Move a Folder
//   | - Files
//   | -- Create a Blank Doc or Sheet in a Folder
//   | -- Get the Id of a File in a Folder Path
//   | -- Search Entire Drive for a File
//   | -- Move a File to a Folder
//   | Sheets
//   | - Utility Functions for Sheets
//   | -- Convert Column Number to a Letter
//   | -- Timestamp on Cell Change
//   | -- Replicating Import Range
//   | -- Evaluating True and False
//   | - Range as Array of Objects - Grid
//   | -- New Grid from Sheet
//   | -- New Grid from Range
//   | -- Set Values in Grid
//   | - Range as Array of Objects - Generic
//   | -- Set Values from an Array of Objects to Range
//   | -- Generate Array of Objects
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
// ? | -- HTML in Email Body

function testEverything() {}

/////////////
// General //
/////////////

// - Utility 

// -- Check an Array for a Value 
// ➡  true / false 

function valChk(arr, val) { 
  return arr.indexOf(val) > -1; 
}

// var valChk_arr = [1,2,3,4];

// if (valChk(valChk_arr, 99)) {
//     Logger.log("valChk ➡ 99 is in the array"); 
//   } else {
//     Logger.log("valChk ➡ 99 is not in the array");
// }

// -- Remove Duplicates from an Array 
// ➡  arr

function rmDup(arr) {
  var check  = {};
  var output = [];
  var length = arr.length;
  var j = 0;
  for(var i = 0; i < length; i++) {
       var item = arr[i];
       if(check[item] !== 1) {
             check[item] = 1;
             output[j++] = item;
       }
  }
  return output;
}

// var rmDup_inp = [1,2,3,1,2,3,4,];
// var rmDup_out = rmDup(rmDup_inp);
// Logger.log("rmDup_inp ➡ " + rmDup_inp);
// Logger.log("rmDup_output ➡ " + rmDup_out);

// -- Remove Empty Values from an Array
// ➡  arr

function rmEmpty(x){
  return (x !== (undefined || ''));
}

// var rmEmpty_inp = ["a",,"b",,,"c"];
// var rmEmpty_out = rmEmpty_inp.filter(rmEmpty);
// Logger.log("rmEmpty_inp ➡ " + rmEmpty_inp);
// Logger.log("rmEmpty_output ➡ " + rmEmpty_out);

// -- Get Count of Value in Array
// ➡  arrObj

function countVal(arr){
  var comp = [];
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
			comp.push(a);
		}
	}
  return comp;
}

// var countVal_inp = ["A", "B", "C", "A", "B", "C", "D", "A"];
// var countVal_out = countVal(countVal_inp);
// Logger.log("countVal_input ➡ " + countVal_inp);
// Logger.log("countVal_out ⬇ ");
// Logger.log(countVal_out);

// - Array of Objects

// example arrObj

var arrObj = [
  {a: 1000, b: 1, c: 5}, 
  {a: 10000, b: 2, c: 5000}, 
  {a: 10, b: 2, c: 500},
  {a: 1, b: 1, c: 50}
]

// -- Sort Array of Objects by Property / Properties

function dynamicSort(prop) {
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

// arrObj.sort(dynamicSort("a"));
// Logger.log("arrObj sorted by 'a' value ⬇ ");
// Logger.log(arrObj);

function dynamicSortMulti() {
  var props = arguments;
  return function (obj1, obj2) {
    var i = 0, result = 0, numberOfProperties = props.length;
    while(result === 0 && i < numberOfProperties) {
      result = dynamicSort(props[i])(obj1, obj2);
      i++;
    }
      return result;
  }
}

// arrObj.sort(dynamicSortMulti("b", "c"));
// Logger.log("arrObj sorted by 'b' and 'c' values ⬇ ");
// Logger.log(arrObj);

// -- Find Object With Unique Value - Return Obj / Value

// findObjIn
function findObj_Obj(arrObj, propQuery, value) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(propQuery)) {
        if (prop == propQuery) {
          if (obj[prop] == value) {
          return obj;
          }
        }
      }
    }
  }
}

// Logger.log("find obj with 'a' value of 1000 ⬇ ");
// var found_returnObj = findObj_Obj(arrObj, "a", 1000);
// Logger.log(found_returnObj);

function findObj_Val(arrObj, propQuery, value, propReturn) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(propQuery)) {
        if (prop == propQuery) {
          if (obj[prop] == value) {
          return obj[propReturn];
          }
        }
      }
    }
  }
}

// Logger.log("find obj with 'c' value of 500 and return its 'a' value ⬇ ");
// var found_returnVal = findObj_Val(arrObj, "c", 500, "a");
// Logger.log(found_returnVal);

// -- Create Array of Objects With Matching Value

// filterObjIn(arrObj, propQuery, value)
function filterArrObj_ArrObj(arrObj, propQuery, value) {
  var array = [];
  for (var i=0; i < arrObj.length; i++) {
    if (arrObj[i][propQuery] == value) array.push(arrObj[i]);
  }
  return array;
}

// var filterArrObj = filterArrObj_ArrObj(arrObj, "b", 2);
// Logger.log("filter objs with 'b' value of 2 ⬇ ");
// Logger.log(filterArrObj);

// - Dates and Times

// -- Formatted Timestamps 

function getCurrentDate() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
  return d.join("/");
}

// var gcd = getCurrentDate();
// Logger.log("current date ➡ " + gcd);

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

// var gct = getCurrentTime();
// Logger.log("current time (24 hour) ➡ " + gct);

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

// var gcdt12h = getCurrentDateTime12Hour();
// Logger.log("current date + time (12 hour) ➡ " + gcdt12h);

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

///////////
// Drive //
///////////

// - Folders

// -- Create a Folder Path and/or Get the Id Of the Last Folder

// createOrVerifyFoldersIn(folderPath)(
function createFolderPathAndOrGetIdOfLastFolder(folderPath) {
  var array = folderPath.split('/');
  var f;
  for (i = 0; i < array.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(array[i]);
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

// var coffpri = createFolderPathAndOrGetIdOfLastFolder("JCodesMN/A/B/C");
// Logger.log(" Id of 'C' in 'JCodesMN/A/B/C' is ➡ " + coffpri);

// -- Get Id of the Last Folder in a Folder Path

// idOfLastFolderIn(folderPath)
function getIdOfLastFolderInAFolderPath(folderPath) {
  var array = folderPath.split('/');
  var f;
  for (i = 0; i < array.length; i++) {
    if (i == 0) {
      var fi = DriveApp.getRootFolder().getFoldersByName(array[i]);
      if(fi.hasNext()) {f = fi.next();} else { return null;}
    } else if (i >= 1) {
        fi = f.getFoldersByName(array[i]);
        if(fi.hasNext()) {f = fi.next();} else { return null;}
      }
  } 
  var fId = f.getId();
  return fId;
}

// var giolfiafp = getIdOfLastFolderInAFolderPath("JCodesMN/A/B/C");
// Logger.log(" Id of 'C' in 'JCodesMN/A/B/C' is ➡ " + giolfiafp);

// -- Search a Folder Path for a Folder

// findFolderIn(folderPath, folderName)
function searchAFolderPathForAFolderReturnId(folderPath, folderName) {
  var idOfLastFolder  = getIdOfLastFolderInAFolderPath(folderPath);
  if (idOfLastFolder) {
    var lastFolder    = DriveApp.getFolderById(idOfLastFolder);
    var folderContent = listAllFoldersInAFolder(folderPath);
    if (valChk(folderContent, folderName)) {
      var folderId = lastFolder.getFoldersByName(folderName).next().getId();
      return folderId;
    }
  } else {
    return null;
  }
}

// var idOfC = searchAFolderPathForAFolderReturnId("JCodesMN/A/B", "C");
// Logger.log(" Id of 'C' in 'JCodesMN/A/B/C' is ➡ " + idOfC);

// -- Array of All Folders in a Folder

function allFoldersIn(folderPath) {
  var folder         = DriveApp.getFolderById(createFolderPathAndOrGetIdOfLastFolder(folderPath));
  var folderIterator = folder.getFolders();
  var array  = [];
  while (folderIterator.hasNext()) {
    var item = folderIterator.next().getName();
    // Logger.log("Found folder " + item + " inside of " + folderPath);
   array.push(item);
  } 
  return array;
}

// var rfcaa = listAllFoldersInAFolder("Testing");
// Logger.log(rfcaa);

// -- Array of All Folders in Drive

function allFoldersInDrive() {
  var folderIterator = DriveApp.getFolders();
  var array = [];
  while (folderIterator.hasNext()) {
    var item = folderIterator.next().getName();
    // Logger.log("Found item: " + item);
   array.push(item);
  } 
  return array;
}

// var allFolders = returnAllFoldersInAnArray();
// Logger.log(allFolders);

// -- Array of All Root Folders

function allRootFolders() {
  var rootFolder = DriveApp.getRootFolder();
  var folderIterator = rootFolder.getFolders();
  var array = [];
  while (folderIterator.hasNext()) {
    var item = folderIterator.next().getName();
    // Logger.log("Found item: " + item);
   array.push(item);
  } 
  return array;
}

// var foldersAtRoot = returnAllFoldersAtRootInAnArray();
// Logger.log(foldersAtRoot);

// -- Create Folder or Folders in a Folder

function createFoldersAt(folderPath, arrFolders) {
  if (typeof folderPath === 'undefined') {
    var rootFolders = returnAllFoldersAtRootInAnArray();
    for (i=0; i < arrayOfFolders.length; i++) {
      if (!(findValueInArray(rootFolders, arrayOfFolders[i]))) {
        DriveApp.createFolder(arrayOfFolders[i]);
      }
    } 
    return DriveApp.getRootFolder().getId();
  } else {
    var destination = DriveApp.getFolderById(createOrFindFolderPathReturnId(folderPath));
    var destinationFolders = listAllFoldersInAFolder(folderPath);
    for (i=0; i < arrayOfFolders.length; i++) {
      if (!(findValueInArray(destinationFolders, arrayOfFolders[i]))) {
        destination.createFolder(arrayOfFolders[i]);
      }
    }
    return destination.getId();
  }
}

// function createFoldersAtRoot(arrFolders) {}

// var aof = ["apples", "bananas", "coffee"]
// var fp2 = "Testing/X/Y/Z";
// var containingFolderId = createSeveralFolders(aof, fp2);
// Logger.log("Z's Id in Testing/X/Y/Z is " + containingFolderId);

// *** uncommenting the line below will modify your Google Drive *** 
// var rootId = createSeveralFolders(aof);
// Logger.log("Root Folder Id: " + rootId);

// -- Move a Folder

function moveFolder(originPath, destinationPath){

}


// - Files - [ ] 

// -- Create a Blank Doc or Sheet in a Folder - [ ] 

// create folder path first -> returns folderId to drop into this or others...

// move to docs...duplicate in sheets too

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

// from comment wizard...
// fn copyFile(fileId, folderId) {}

function copyFile(sourceFileId, folderId) {
	var sourceFileFromId = DriveApp.getFileById(sourceFileId);
  var sourceFileName   = sourceFileFromId.getName();
  var folderFromId     = DriveApp.getFolderById(folderId);
  var outputFile       = sourceFileFromId.makeCopy(sourceFileName, folderFromId);
  var outputFileId     = outputFile.getId();
  if (outputFileId !== "") {
    DriveApp.getFileById(sourceFileId).setTrashed(true);
  }
  return outputFileId;
}

// from comment wizard...

// createOrVerifyDocIn(folderPath, docName)
function makeOrFindDocInFolderPathReturnId() {
  var folderId = createOrFindFolderPathReturnId(exportFolder);
  var folder   = DriveApp.getFolderById(folderId);
  var docName  = generateDocName();
  var docCheck = folder.getFilesByName(docName);
  if (docCheck.hasNext()) {
      var file = docCheck.next(); 
      return file.getId();
    } else {
      var docId       = makeDocReturnId(docName);
      var outputDocId = copyFileDeleteSourceReturnNewId(docId, folderId);
      return outputDocId;
   }
}

// getIdOfFileInFolderPath

// -- Search Drive for a File and Return its Id - [ ] 

// -- Find a File in a Folder Path - [ ] 

// Move a File to a Folder - [ ] 

////////////
// Sheets // 
////////////

// - Utility Functions for Sheets - [ ] 

// -- Convert Column Number to a Letter - [ ] 

// -- Timestamp on Cell Change - [ ] 

// - Arrays and Ranges - [ ] 

// -- Evaluating User Input as True or False - [ ] 

// -- Generate Array of Arrays by Row - [ ] 

// -- Remove Duplicates from an Array - [ ] 

// -- Remove Empty Values from an Array - [ ] 

// -- Vlookup in Google Script - [ ] 

// -- Flatten Multidimensional Array for One Row - [ ] 

// -- Flatten Multidimensional Array for One Column - [ ] 

//////////
// Docs //
//////////

// - Utility Functions for Docs - [ ]  

// -- Clear All Content From a Doc - [ ] 

// Logger.log("...done!");

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


// doesn't work in onEdit(e)
function getSetValues(sheet1, a1Notation1, sheet2, a1Notation2) {
  var get = ss.getSheetByName(sheet1).getRange(a1Notation1).getValues();
  var set = ss.getSheetByName(sheet2).getRange(a1Notation2).setValues();
} 


// have to go through DriveApp to copy files / folders ->

function createABlankDocInAFolder(folderId, docName) {
  var folder       = DriveApp.getFolderById(folderId);
  var inputDocId   = DocumentApp.create(docName).getId();
  var inputDocFile = DriveApp.getFileById(inputDocId);
  var outputDoc    = inputDocFile.makeCopy(docName, folder);
  var docCheck     = folder.getFilesByName(docName);
  if (docCheck.hasNext()) {
    var outputDocId = docCheck.next().getId();
    inputDocFile.setTrashed(true);
    return outputDocId;
    }
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


// like a vlookup, but works for any property in the row
// change arrayOfObject build code to include index value and sheet

function buildArrayOfObjectsForSheet(sheetObj, headerRow) {
  // assumed to be one, but it could start lower
  // add properties to each rowObj: rowNumber, sheet, headerRow
}

function buildArrayOfHeaders(sheetObj, headerRow) {

}

function getObjectMatchingUniquePropertyValue(arrayOfObjects, property, value) {

}

function buildArrayOfObjectsForProperty(arrayOfObjects, property, value) {

}

function buildArrayOfHeaders(sheetObj, rowPosition) {
  // won't match property count of object (off by 3?)
}

// new pvPair?

function setCellValueOrValues(rowObj, property, value) {
  // if (opt_headerRowNumber == nil) -> opt_headerRowNumber = 1
  // will be able to get rowObj.sheet + rowObj.row
  // var sheet  = rowObj.sheet
  // var arrayOfHeaders = buildArrayOfHeadrers(
  // var row    = rowObj.row;
  // var cell   = 

  // is there someway to halt execution and batch process changes?

}


// in typical run, only one object would have "" value for 'Complete?' column

// ---

function setCellValue(sheet, queryHeader, queryValue, header, value) {
  // build array of all column headers, find position of columnValue and convert to A1
  // build array of objects for sheet -> build array of from all row values
}

function getColumnIndexForValue(sheet, value) {

}

// PULLED FROM HW FORM SCRIPT.JS


// function returnFirstMatch(obj, arrProp){
//   for (var i = 0; i < arrProp.length; i++) {
//     for (var prop in obj) {
//       if (obj.hasOwnProperty(prop)){
//         if (prop == arrProp[i]){
//           if (obj[prop] != "") {
//             return obj[prop];
//           }
//         }
//       }
//     }
//   }
// }

// JUNK?

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
