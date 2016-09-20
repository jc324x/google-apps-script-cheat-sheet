//   | General 
// * | - Standard Array
// * | -- Check an Array for a Value
// * | -- Remove Duplicates from an Array
// * | -- Remove Empty Values from an Array
//   | -- Count of Value in Array
//   | - Arrays of Objects
// ? | -- Count of Value in Array
//   | -- Sort Array of Objects by Property or Properties
//   | -- Find Object With Unique Value
//   | -- Create Array of Objects With Matching Value
//   | -- Create Array of All Unique Values for a Property
// * | - Dates and Times
// * | -- Formatted Timestamps
// * | -- Match a Date to a Range of Dates
//   | -- Date Objects 
//   |  Drive 
//   | - Folders
// * | -- Create a Folder Path and/or Get the Id Of the Last Folder
// * | -- Get Id of Last Folder in a Folder Path
// * | -- Search a Folder Path for a Folder
//   | -- List Folders in a Folder as an Array
//   | -- List All Folders in Drive as an Array 
//   | -- List All Folders at Root as an Array
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

// General

// - Utility 

// -- Check an Array for a Value 

function checkArrayForValue(array, value) { 
  return array.indexOf(value) > -1; 
}

var cafv_array = [1,2,3,4];

if (checkArrayForValue(cafv_array, 99)) {
    // Logger.log(" checkArrayForValue || 99 is in the array"); 
  } else {
    // Logger.log(" checkArrayForValue || 99 is not in the array");
}

// -- Remove Duplicates from an Array 

function removeDuplicates(array) {
  var check  = {};
  var output = [];
  var length = array.length;
  var j = 0;
  for(var i = 0; i < length; i++) {
       var item = array[i];
       if(check[item] !== 1) {
             check[item] = 1;
             output[j++] = item;
       }
  }
  return output;
}

var rd_array_input  = [1,2,3,1,2,3,4,];

var rd_array_output = removeDuplicates(rd_array_input);

// Logger.log(rd_array_output);

// -- Remove Empty Values from an Array

var ev_array_input  = ["a",,"b",,,"c"];

var ev_array_output = ev_array_input.filter(function(x){
  return (x !== (undefined || ''));
});

// Logger.log(ev_array_output);

// - Dates and Times

// -- Formatted Timestamps 

function getCurrentDate() {
  var n = new Date();
  var d = [ n.getMonth() + 1, n.getDate(), n.getYear() ]
  return d.join("/");
}

var gcd = getCurrentDate();

// Logger.log(" getCurrentDate || date: " + gcd);

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

var gct = getCurrentTime();

// Logger.log(" getCurrentTime || 24 hour time: " + gct );

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

var gcdt12h = getCurrentDateTime12Hour();

// Logger.log(" getCurrentDateTime12Hour || date + 12 hour time: " + gcdt12h);

// -- Match a Date to a Range of Dates

var quarterDates = [
  ["08/01/2015", "10/28/2015"],
  ["11/02/2015", "1/9/2016"],
  ["1/15/2016", "3/19/2016"],
  ["3/21/2016", "6/15/2016"],
  ];

function returnCurrentQuarterAsInteger() {
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

var rcqas = returnCurrentQuarterAsInteger();

// Logger.log(" returnCurrentQuarterAsInteger || quarter: " + rcqas);

// Drive 

// - Folders

// -- Create a Folder Path and/or Get the Id Of the Last Folder

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

var fp1     = "Testing/A/B/C";

var coffpri = createFolderPathAndOrGetIdOfLastFolder(fp1);

// Logger.log(" createFolderPathAndOrGetIdOfLastFolder || C's Id in Testing/A/B/C is " + coffpri);

// -- Get Id of the Last Folder in a Folder Path

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

var giolfiafp1 = getIdOfLastFolderInAFolderPath("Testing/A/B/C");

// Logger.log(" getIdOfLastFolderInAFolderPath || C's Id in Testing/A/B/C is " + giolfiafp1);

// -- Search a Folder Path for a Folder

function searchAFolderPathForAFolderReturnId(folderPath, folderName) {
  var idOfLastFolder  = getIdOfLastFolderInAFolderPath(folderPath);
  if (idOfLastFolder) {
    var lastFolder    = DriveApp.getFolderById(idOfLastFolder);
    var folderContent = listAllFoldersInAFolder(folderPath);
    if (checkArrayForValue(folderContent, folderName)) {
      var folderId = lastFolder.getFoldersByName(folderName).next().getId();
      return folderId;
    }
  } else {
    return null;
  }
}

var idOfC = searchAFolderPathForAFolderReturnId("Testing/A/B", "C");

// Logger.log( "searchAFolderPathForAFolderReturnId || the Id of C is " + idOfC);

// -- List All Folders In A Folder

function listAllFoldersInAFolder(folderPath) {
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

// -- List All Folders in Drive

function returnAllFoldersInAnArray() {
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

// -- List All Folders at Root in an Array

function returnAllFoldersAtRootInAnArray() {
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

// -- Create Several Folders in a Folder

function createSeveralFolders(arrayOfFolders, folderPath) {
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

// var aof = ["apples", "bananas", "coffee"]

// var fp2 = "Testing/X/Y/Z";

// var containingFolderId = createSeveralFolders(aof, fp2);

// Logger.log("Z's Id in Testing/X/Y/Z is " + containingFolderId);

// *** uncommenting the line below will modify your Google Drive *** 
// var rootId = createSeveralFolders(aof);
// Logger.log("Root Folder Id: " + rootId);

// -- Move a Folder - [ ] 

function moveAFolder(originFilePath, destinationFilePath){

}


// - Files - [ ] 

// -- Create a Blank Doc or Sheet in a Folder - [ ] 

// create folder path first -> returns folderId to drop into this or others...

function createABlankDocInAFolder(folderId, docName) {
  var folder    = DriveApp.getFolderById(folderId);
  var inputDoc  = DocumentApp.create(docName);
  var outputDoc = inputDoc.makeCopy(docName, folder);
  var docCheck = folder.getFilesByName(docName);
  if (docCheck.hasNext()) {
    var outputDocId = docCheck.next().getId();
    DriveApp.inputDoc.setTrashed(true);
    }
}
//
// from comment wizard...
function copyFileDeleteSourceReturnNewId(sourceFileId, folderId) {
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
//
// from comment wizard...
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

// Sheets - [ ] 

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

// Docs - [ ] 

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
