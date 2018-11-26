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

function test() {}

// Forms

// -- Array of Objects For Form Items

/**
 * arrayOfObjetsForFormItems
 *
 * @param form
 * @returns {undefined}
 */

function arrayOfObjectsForFormItems(form) {
  var result = [];
  var items  = form.getItems();
  for (var i = 0; i < items.length; i++) {
    var obj   = {};
    obj.index = i;
    obj.title = items[i].getTitle();
    obj.id    = items[i].getId();
    obj.type  = items[i].getType();
    obj.item  = items[i];
    result.push(obj);
  }
  return result;
}

// Logger.log("arrayOfObjectsForFormItems");
// var form_aooffi   = FormApp.getActiveForm();
// var arrObj_aooffi = arrayOfObjectsForFormItems(form);
// Logger.log(arrObj_aooffi);

// Get Form Item by Name

// -- Find Object in Array of Objects
 
/**
 * Returns the first object in an array of objects with the key value pair.
 * This can return an object or a value from an object if `ret` is set.
 *
 * @param {Object[]} arrObj
 * @param {string} prop
 * @param {string} val
 * @returns {Object}
 */

function findObjectInArrayOfObjects(arrObj, prop, val) {
  for (var i = 0; i < arrObj.length; i++) {
    var obj = arrObj[i];
    for (var p in obj) {
      if (obj.hasOwnProperty(prop) && p == prop && obj[p] == val) {
          return obj;
      }
    }
  }
}

Logger.log("Find Object in Array of Objects");
var form_gfibn   = FormApp.getActiveForm();
var arrObj_gfibn = arrayOfObjectsForFormItems(form_gfibn);
var item_gfibn   = findObjectInArrayOfObjects(arrObj_gfibn, "title", "Event Title", "item");
Logger.log(item_gfibn);
Logger.log(item_gfibn.asTextItem());

// -- Set Item Choices
// var choices   = ["1", "2", "3", "4", "5"];

// https://developers.google.com/apps-script/reference/forms/item

// --- Multiple Choice

// var multi = findObjValIn(items, "title", "Multiple Choice Example", "item").asMultipleChoiceItem();
// multi.setChoiceValues(choices);

// --- Dropdown

// var drop = findObjValIn(items, "title", "Dropdown Example", "item").asListItem();
// drop.setChoiceValues(choices);

// --- Checkbox

// var chkbox = findObjValIn(items, "title", "Checkbox Example", "item").asCheckboxItem();
// chkbox.setChoiceValues(choices);

// -- Get Destination Sheet

// var destSheet = SpreadsheetApp.openById(form.getDestinationId());
// Logger.log(destSheet.getName());

// - Form Responses

// -- Get Last Form Response

/**
 * Returns an object with the values of the last form response.
 *
 * @param {Form} form
 * @returns {Object}
 */

function lastFormResponse(form) {
  var allResponses  = form.getResponses();
  var lastResponse  = allResponses[allResponses.length - 1];
  var itemResponses = lastResponse.getItemResponses();
  var result        = {};
  for (var i = 0; i < itemResponses.length; i++) {
    var item         = itemResponses[i];
    var property     = item.getItem().getTitle();
    var value        = item.getResponse();
    result[property] = value;
  } 
  result.respondent_email = lastResponse.getRespondentEmail();
  result.timestamp        = lastResponse.getTimestamp();
  return result;
}

// update in cheat-sheet?

// function lastFormResponse(form) {
//   var allResponses  = form.getResponses();
//   var lastResponse  = allResponses[allResponses.length - 1];
//   var itemResponses = lastResponse.getItemResponses();
//   var result        = {};
//   for (var i = 0; i < itemResponses.length; i++) {
//     var item         = itemResponses[i];
//     var property     = item.getItem().getTitle();
//     var value        = item.getResponse();
//     result[property] = value;
//   } 
//   result["Email Address"] = lastResponse.getRespondentEmail();
//   result.Timestamp        = lastResponse.getTimestamp();
//   return result;
// }

// var last = lastResponse(form);
// Logger.log(last);
