// form obj 

var form = FormApp.getActiveForm();

// [Forms](#)
// * [Managing Form Files](#)
//   * [Get Form Id](#)
// * [Utility Functions for Forms](#)
//   * [Array of Form Items](#)
//   * [Get Form Item by Name](#)
//   * [Set Item Choices](#)
//   * [Get Destination Sheet](#)
//   * [Get Last Form Response](#)

function testEverything() {}

// Forms

// - Form Management

// -- FLAG --
// -- Get Form Id

function formId() {
  var _id = FormApp.getActiveForm().getId();
} 

Logger.log(formId());

// -- Array of Form Items

function arrItemsIn(formObj) {
  var _arr  = [];
  var items = formObj.getItems()
  for (var i = 0; i < items.length; i++) {
    var j = {}; 
    j.index = i;
    j.title = items[i].getTitle();
    j.id    = items[i].getId();
    j.type  = items[i].getType();
    j.item  = items[i];
    _arr.push(j);
  }
  return _arr;
}

var items = arrItemsIn(form);
// Logger.log(items);

// -- Get Form Item by Name
// note: from source.js

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

// -- Set Item Choices
var choices   = ["1", "2", "3", "4", "5"];

// --- Multiple Choice

var multi = findObjValIn(items, "title", "Multiple Choice Example", "item").asMultipleChoiceItem();
multi.setChoiceValues(choices);

// --- Dropdown

var drop = findObjValIn(items, "title", "Dropdown Example", "item").asListItem();
drop.setChoiceValues(choices);

// --- Checkbox

var chkbox = findObjValIn(items, "title", "Checkbox Example", "item").asCheckboxItem();
chkbox.setChoiceValues(choices);

// -- Get Destination Sheet

// var destSheet = SpreadsheetApp.openById(form.getDestinationId());
// Logger.log(destSheet.getName());

// - Form Responses

// -- Get Last Form Response

// BUG FIX: form is a global object in this sheet...not actually using argument...

function lastResponse(formObj) {
  var all  = formObj.getResponses();
  var last = all[all.length - 1];
  var rsps = last.getItemResponses();
  var j = {};
  for (var i = 0; i < rsps.length; i++) {
    var rsp  = rsps[i];
    var prop = rsp.getItem().getTitle();
    var val  = rsp.getResponse();
    if (val !== "") {
      j[prop] = val;
    } else {
      j[prop] = undefined;
    }
  }
  j.email     = last.getRespondentEmail();
  j.timestamp = last.getTimestamp();
  return j;
}

// var last = lastResponse(form);
// Logger.log(last);
