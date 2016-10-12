//   | Forms
//   | - Form Management
//   | -- Build Array of Items
//   | -- Set Item Dropdown Choices
//   | -- Get Destination Sheet
//   | - Form Responses
//   | -- Get Last Form Response

// Forms

// fn to create scratch form for examples below

// - Form Management

// -- Build Array of Items

function buildArrOfItemTitleID(formObj) {
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

// -- Set Item Dropdown Choices

// .setChoiceValues();

// -- Get Destination Sheet

var formRSheetId = form.getDestinationId();

// - Form Responses

// -- Get Last Form Response

function getLastResponse(formObj) {
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
