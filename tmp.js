function checkValIn(arr, val) { 
  return arr.indexOf(val) > -1; 
}

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

function filesIn(fldr) {
  var fi  = fldr.getFiles();
  var arr = [];
  while (fi.hasNext()) {
    var file = fi.next();
    arr.push(file);
  } 
  return arr;
}

function findFileIn(fldr, name) {
  var files = filesIn(fldr);
  var names = fileNames(files);
  if (checkValIn(names, name)) {
    var file = fldr.getFilesByName(name).next();
    return file;
  }
}

function fileNames(files) {
  var arr = [];
  for (var i = 0; i < files.length; i++) {
    var name = files[i].getName();
    arr.push(name);
  }
  return arr;
}

// +++ 

function jsonFromFile() {
  var fldr     = createVerifyPath("google-apps-script-cheat-sheet-demo");
  var file     = findFileIn(fldr, "test.json");
  var content = file.getBlob().getDataAsString();
  Logger.log(content);
  var json    = JSON.parse(content)
  Logger.log(json);
  Logger.log(json.glossary.title);  
  
  // var url      = file.getUrl();
  // Logger.log(url);
  // var response = UrlFetchApp.fetch(url);
  // Logger.log(response);
  // var json     = response.getContentText();
  // var data     = JSON.parse(json);
  // Logger.log(data.title); 
  //
  //
  // var blob = respon
  // Logger.log(response.getContentText());
} 

 
 

