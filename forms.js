// form obj 

var form = FormApp.getActiveForm();

//   | Forms
//   | - Form Management
// - | -- Array of Form Items
// - | -- Get Form Item by Name
//   | -- Set Choices from Array
// - | -- Get Destination Sheet
//   | - Form Responses
//   | -- Get Last Form Response
//   | -- Timestamps in Forms

function testEverything() {}

// Forms

// - Form Management

// -- Array of Form Items

function arrItemsIn(formObj) {
  var _arr  = [];
  var items = formObj.getItems()
  for (var i = 0; i < items.length; i++) {
    var j = {}; 
    j.index = i;
    j.title = items[i].getTitle();
    j.id    = items[i].getId();
    j.item  = items[i];
    _arr.push(j);
  }
  return _arr;
}

var items = arrItemsIn(form);
// Logger.log(items);

// -- Get Form Item by Name
// from source.js

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

// var ex_fovi = findObjValIn(items, "title", "Multiple Choice Example", "item");
// Logger.log(form.getItemById(ex_fovi).getTitle());

// -- Set Item Dropdown Choices
var choices   = ["1", "2", "3", "4", "5"];

// --- Multiple Choice

var multi = findObjValIn(items, "title", "Multiple Choice Example", "item").asMultipleChoiceItem();
multi.setChoiceValues(choices);

// --- Dropdown Choices

var drop = findObjValIn(items, "title", "Dropdown Example", "item").asListItem();
drop.setChoiceValues(choices);

// --- Checkbox Choices

var chkbox = findObjValIn(items, "title", "Checkbox Example", "item").asCheckboxItem();
chkbox.setChoiceValues(choices);

// -- Get Destination Sheet

// var destSheet = SpreadsheetApp.openById(form.getDestinationId());
// Logger.log(destSheet.getName());

// - Form Responses

// -- Get Last Form Response

function lastResponse(formObj) {
  var allRsp  = form.getResponses();
  var lastRsp = allRsp[allRsp.length - 1];
  var itemRsp = lastRsp.getItemResponses();
  var lastObj = {};
  for (var i = 0; i < itemRsp.length; i++) {
    var item = itemRsp[i];
    var prop = item.getItem().getTitle();
    var val  = item.getResponse();
    if (val !== "") {
      lastObj[prop] = val;
    } else {
      lastObj[prop] = undefined;
    }
  }
  lastObj["Email"]     = lastRsp.getRespondentEmail();
  lastObj["Timestamp"] = lastRsp.getTimestamp();
  return lastObj;
}
