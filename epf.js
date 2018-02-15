// Creates an event for the moon landing and logs the ID.

function lastFormResponseAsObject(form) {
  var result        = [];
  var template      = {};
  var formResponses = form.getResponses();
  var lastResponse  = formResponses[formResponses.length - 1];
  var itemResponses = lastResponse.getItemResponses();
  for (var i = 0; i < itemResponses.length; i++) {
    var itemTitle    = itemResponses[i].getItem().getTitle();
    var itemResponse = itemResponses[i].getResponse();
    if (itemTitle !== prop) {
      template[itemTitle] = itemResponse;
    }
    template["Email Address"] = lastResponse.getRespondentEmail();
    template.Timestamp        = lastResponse.getTimestamp();
  } 
  var expand = itemResponses[x].getResponse();
  for (var j = 0; j < expand.length; j++) {
    var expanded = JSON.parse(JSON.stringify(template));
    expanded[prop] = expand[j];
    result.push(expanded);
  } 
  return result;
} 

function lastFormResponseAsObject(form) {
  var result    = {};
  var responses = form.getResponses();
  var response  = responses[responses.length - 1];
  var items     = response.getItemResponses();
  for (var i = 0; i < items.length; i++) {
    var title     = items[i].getItem().getTitle();
    var rsp       = items[i].getResponse();
    result[title] = rsp;
  } 
  result["email address"] = response.getRespondentEmail();
  result.timestamp        = response.getTimestamp();
  return result;
} 

// Staging

function getCalendarByName(name) {
  return CalendarApp.getCalendarsByName(name)[0];
} 

// pull from other project(s)

// var eventObj = {
//   summary: 'Apollo 11 Landing',
//   location: 'The Moon',
//   description: 'Sample description',
//   start: {dateTime: start.toISOString()},
//   end: {dateTime: end.toISOString()},
//   attachments: [{
//       'fileUrl': "https://docs.google.com/spreadsheets/d/1028f3pT2n5gufDY8WuIY7pGzKk5jjMfMtOsK-UjBGpo/edit#gid=497468184",
//       'title': 'Attached Document'
//   }]
// };

function singleDayCalendarEventWithAttachment(rsp, cal, file) {
  var id     = cal.getId();
  var create = Calendar.Events.insert(eventObj, id, {"supportsAttachments" : true});
}

// var start = new Date('January 20, 2016 20:00:00 UTC');
// var end = new Date('January 20, 2016 21:00:00 UTC');

var eventObj = {
  summary: 'Tesla Launch',
  location: 'SPACE',
  description: 'Dude they put a car in space!',
  start: "2018-02-06T14:48:00.000Z",
  // start: "February 06, 2016 20:00:00 UTC",
  end: "2018-02-06T17:48:00.000Z ",
  // end: "February 06, 2016 21:00:00 UTC",
  attachments: [{
      'fileUrl': "https://docs.google.com/spreadsheets/d/1028f3pT2n5gufDY8WuIY7pGzKk5jjMfMtOsK-UjBGpo/edit#gid=497468184",
      'title': 'Event Planning Form (Responses)'
  }]
};

function onResponseCreateEventWithAttachment() {
  var form = FormApp.getActiveForm();
  Logger.log(lastFormResponseAsObject(form));
  var cal  = getCalendarByName("Development");
  singleDayCalendarEventWithAttachment(eventObj, cal);
}
