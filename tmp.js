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

// get A1 Notation as numbers?
// target (small) = A:B   = 1,(1),2,(5)
// data range     = A1:C5 = 1,1,3,5
// result         = A1:B5 = 1,1,2,5

// target (big)   = A:J100 = 1,(1),10,100
// data range     = A1:C5  = 1,1,3,5
// result         = A1:C5  = 1,1,3,5

// need to give a number to a column
// then convert into two arrays and do math (?)
// then convert back to A1 notation

function limitDataRange(sheetObj, a1Notation) {

  var dataRange = sheetObj.getDataRange().getA1Notation();

  var limitArr = [];
  var dataArr  = [];

  var limitSplit = a1Notation.split(":");
  var dataSplit  = dataRange.split(":");

  for (var i = 0; i < 2; i++) {
    limitArr.push(colNum(limitSplit[i].match(/\D/g,'').toString()));
    dataArr.push(colNum(dataSplit[i].match(/\D/g,'').toString()));
    limitArr.push(parseInt(limitSplit[i].match(/\d+/g)));
    dataArr.push(parseInt(dataSplit[i].match(/\d+/g)));
  } 
} 


function testLimit() {
  var testSheet = ss.getSheetByName("students");
  limitDataRange(testSheet, "A1:B5");
} 
