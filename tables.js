function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('Form Management')
    .addItem('Update Values in Form', 'updateValuesInForm')
    .addToUi();
}

var doc  = DocumentApp.getActiveDocument();
var body = doc.getBody();

var instruction = [
  "Social and Emotional and Approaches to Learning", "Mathematics",

]

// gaskit 

function checkValIn(arr, val) { 
	return arr.indexOf(val) > -1; 
}

// action

function updateValuesInForm() {
  var tables = body.getTables();
  Logger.log(tables.length);

  for (var i = 0; i < tables.length; i++) {
    var table = tables[i].asTable();
    Logger.log(i);
    var rows   = table.getNumRows();
    var header = table.getRow(0).getCell(0).getChild(0).asParagraph().getText();
    Logger.log(header);

    if (checkValIn(instruction, header) && (rows >= 2)){
        var _arr = [];
        for (var i = 2; i < rows; i++) {
          var cell    = table.getRow(i).getCell(0);
          var content = cell.getChild(0).asParagraph().getText().trim();
          cell.setText(content);
           _arr.push(content);
        } 
      // set values in form
      // index over _arr and set values in the form
      // Logger.log(header);
      // Logger.log(_arr);
    } 
  }
}

function loop() {
  var tables = body.getTables(); 
  Logger.log(tables.length);
  for (var i = 0; i < tables.length; i++) {
    var table  = tables[i].asTable();
    var header = table.getRow(0).getCell(0).getChild(0).asParagraph().getText();
    var rows   = table.getNumRows();
    // var header = tables[i].getRow(0).getCell(0).getChild(0).asParagraph().getText();
    // var rows   = tables[i].getNumRows();
    Logger.log(i);
    Logger.log(header);
    Logger.log(rows);
  } 
} 


function getParagraphs() {
  var paragraphs = body.getParagraphs();
  for (var i = 0; i < paragraphs.length; i++) {
    var p = paragraphs[i].asParagraph().getText();
    if (p.length !== 0) {
      Logger.log(p);
    }
  } 
}

