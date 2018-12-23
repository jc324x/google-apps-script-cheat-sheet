function verifyCloneAtPath(path, url) {
    var folderPath = getInverseBasename(path);
    var fldr = verifyFolderPath(folderPath);
    var name = getBasename(folderPath);
    var mime = mimeFromUrl(url);

    if (checkForFileAtPath(path, mime)) {
        return findFileAtPath(path, mime);
    }

    var id;

    switch (mime) {
        case "spreadsheet":
            id = SpreadsheetApp.openByUrl(url).getId();
            break;
        case "document":
            id = DocumentApp.openByUrl(url).getId();
            break;
        case "spreadsheet":
            id = SlidesApp.openByUrl(url).getId();
            break;
        case "form":
            id = FormApp.openByUrl(url).getId();
            break;
    }

    var file = DriveApp.getFileById(id);

    if (file.getId() != "") {
        file.makeCopy(name, fldr);
    }
}

function mimeFromUrl(url) {
    if (checkStringForSubstring("spreadsheets", url)) {
        return "spreadsheet";
    }

    if (checkStringForSubstring("document", url)) {
        return "document";
    }

    if (checkStringForSubstring("presentation", url)) {
        return "presentation";
    }

    if (checkStringForSubstring("forms", url)) {
        return "form";
    }

}

function verifyFolderPath(path) {
    path = validatePathString(path);
    var split = path.split("/");
    var fldr;
    for (i = 0; i < split.length; i++) {
        var fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
        if (i === 0) {
            if (!(fi.hasNext())) {
                DriveApp.createFolder(split[i]);
                fi = DriveApp.getFoldersByName(split[i]);
            }
            fldr = fi.next();
        } else if (i >= 1) {
            fi = fldr.getFoldersByName(split[i]);
            if (!(fi.hasNext())) {
                fldr.createFolder(split[i]);
                fi = DriveApp.getFoldersByName(split[i]);
            }
            fldr = fi.next();
        }
    }
    return fldr;
}

function checkArrayForValue(arr, val) {
    return arr.indexOf(val) > -1;
}

function findFolderInFolder(name, fldr) {
    var fldrs = arrayOfFoldersInFolder(fldr);
    var names = arrayOfFolderNames(fldrs);
    if (checkArrayForValue(names, name)) {
        return fldr.getFoldersByName(name).next();
    } else {
        return false;
    }
}

function findFolderAtPath(path) {
    path = validatePathString(path);
    var fi, fldr;
    var split = path.split("/");

    for (i = 0; i < split.length; i++) {
        if (i === 0) {
            fi = DriveApp.getRootFolder().getFoldersByName(split[i]);
            if (fi.hasNext()) {
                fldr = fi.next();
            } else {
                return false;
            }
        } else if (i >= 1) {
            fi = fldr.getFoldersByName(split[i]);
            if (fi.hasNext()) {
                fldr = fi.next();
            } else {
                return false;
            }
        }
    }

    var target = getBasename(path);
    if (fldr.getName() === target) {
        return fldr;
    } else {
        return false;
    }
}

function getBasename(path) {
    path = validatePathString(path);
    var split = path.split("/");
    return split.pop();
}


function validateMIME(val) {
    val = val.toLowerCase();
    var prefix = "application/vnd.google-apps.";
    var mimes = [
        "audio", "document", "drawing",
        "drive-sdk", "file", "folder",
        "form", "fusiontable", "map",
        "photo", "presentation", "script",
        "site", "spreadsheet", "unknown", "video"
    ];
    for (var i = 0; i < mimes.length; i++) {
        var mime = mimes[i];
        if (val === prefix.concat(mime)) {
            return val;
        }
    }
    if (checkArrayForValue(mimes, val)) {
        return prefix.concat(val);
    } else {
        return false;
    }
}

function validatePathString(path) {
    if ((path.charAt(0)) === "/") {
        path = path.substr(1);
    }
    if ((path.charAt(path.length - 1) === "/")) {
        path = path.slice(0, -1);
    }
    return path;
}



function getInverseBasename(path) {
    path = validatePathString(path);
    var split = path.split("/");
    split.pop();
    return split.join("/");
}


function checkStringForSubstring(val, str) {
    if (str.indexOf(val) > -1) {
        return true;
    } else {
        return false;
    }
}


function arrayOfFolderNames(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].getName();
        result.push(name);
    }
    return result;
}


function arrayOfFoldersInFolder(fldr) {
    var result = [];
    var fi = fldr.getFolders();
    while (fi.hasNext()) {
        var _fldr = fi.next();
        result.push(_fldr);
    }
    return result;
}



function findFolderInFolder(name, fldr) {
    var fldrs = arrayOfFoldersInFolder(fldr);
    var names = arrayOfFolderNames(fldrs);
    if (checkArrayForValue(names, name)) {
        return fldr.getFoldersByName(name).next();
    } else {
        return false;
    }
}


function arrayOfFileNames(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].getName();
        result.push(name);
    }
    return result;
}

function arrayOfFilesInFolder(fldr) {
    var result = [];
    var fi = fldr.getFiles();
    while (fi.hasNext()) {
        var file = fi.next();
        result.push(file);
    }
    return result;
}


function findFileInFolder(name, fldr, mime) {

    function findFileInFolderAny(name, fldr) {
        var files = arrayOfFilesInFolder(fldr);
        var names = arrayOfFileNames(files);
        if (checkArrayForValue(names, name)) {
            return fldr.getFilesByName(name).next();
        } else {
            return false;
        }
    }

    function findFileInFolderType(name, fldr, mime) {
        mime = validateMIME(mime);
        if (mime) {
            var files = arrayOfFilesInFolder(fldr);
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if ((file.getName() === name) && file.getMimeType() === mime) {
                    return file;
                }
            }
        } else {
            return false;
        }
        return false;
    }

    if (mime !== undefined) {
        return findFileInFolderType(name, fldr, mime);
    } else {
        return findFileInFolderAny(name, fldr);
    }
}


function findFileAtPath(path, mime) {

    function findFileAtPathAny(path) {
        path = validatePathString(path);
        var file = getBasename(path);
        path = getInverseBasename(path);
        var fldr = findFolderAtPath(path);
        if (fldr) {
            return findFileInFolder(file, fldr);
        } else {
            return false;
        }
    }

    function findFileAtPathType(path, mime) {
        path = validatePathString(path);
        mime = validateMIME(mime);
        var file = getBasename(path);
        path = getInverseBasename(path);
        var fldr = findFolderAtPath(path);

        if (fldr) {
            file = findFileInFolder(file, fldr);
        } else {
            return false;
        }

        if (file && matchMIMEType(file, mime)) {
            return file;
        } else {
            return false;
        }
    }

    if (mime !== undefined) {
        return findFileAtPathType(path, mime);
    } else {
        return findFileAtPathAny(path);
    }
}



function checkForFileAtPath(path, mime) {
    var check = findFileAtPath(path, mime);
    if (check) {
        return true;
    } else {
        return false;
    }
}


// here we go

function testing() {
    verifyCloneAtPath("qs/sheets/data-sheet", "https://docs.google.com/spreadsheets/d/1d0M8CnuRBLvhLU5R8vq_rfc4jLkrxcsgKITfodm4U7s/edit#gid=0");
  // FLAG: write a way to validate Files before working with them. Verify that the have Ids and valid URLs. test ownership too? idk
  //
  //
    // var url = "https://docs.google.com/spreadsheets/d/1d0M8CnuRBLvhLU5R8vq_rfc4jLkrxcsgKITfodm4U7s/edit#gid=0";
    // Logger.log(checkStringForSubstring("google", url));
}

/////////////
