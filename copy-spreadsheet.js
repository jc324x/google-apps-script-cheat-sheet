function verifyCloneAtPath(path, url) {
    var folderPath = getInverseBasename(path);
    verifyFolderPath(folderPath);
    var mime = mimeFromURL(url);

    if (checkForFileAtPath(path, mime)) {
        return findFileAtPath(path, mime);
    } else {
        // this is where the clone would happen
    }
}

function mimeFromUrl(url) {
    switch (url) {
        case url.includes("spreadsheets"):
            return "spreadsheet";
        case url.includes("document"):
            return "document";
    }
}

function cloneByUrl(url) {
    var pub;
    var name;

    if (checkStringForSubstring("spreadsheets", url)) {
        pub = SpreadsheetApp.openByUrl(url);
        Logger.log(pub.getName());
        Logger.log(pub.getId());
    }


    // switch (url) {
    //     case checkStringForSubstring("google", url) == true:
    //         Logger.log("case started");
    //         var copy = SpreadsheetApp.openByUrl(url).makeCopy();
    //         Logger.log(copy.getName());
    //         // name = pub.getName();
    //         // break;
    //         // case url.includes("document"):
    //         // pub = DocumentApp.openByUrl(url);
    //         // break;
    // }
}

function checkStringForSubstring(val, str) {
    if (str.indexOf(val) > -1) {
        return true;
    } else {
        return false;
    }
}

// here we go

function testing() {
    cloneByUrl("https://docs.google.com/spreadsheets/d/1d0M8CnuRBLvhLU5R8vq_rfc4jLkrxcsgKITfodm4U7s/edit#gid=0");
    // var url = "https://docs.google.com/spreadsheets/d/1d0M8CnuRBLvhLU5R8vq_rfc4jLkrxcsgKITfodm4U7s/edit#gid=0";
    // Logger.log(checkStringForSubstring("google", url));
}
