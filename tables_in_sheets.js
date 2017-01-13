// onOpen

function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('Tables')
    .addItem('Clear Body', 'clearBody')
    .addItem('Build Tables', 'buildTable')
    .addToUi();
 }

// global

var doc  = DocumentApp.getActiveDocument();
var body = doc.getBody();

var headers = [
  ["Social/ Emotional and Approaches to Learning",  "Rarely or not yet", "Occasionally or with much help", "Often or with some help", "Almost always or with minimal help"]
];

var cells = [
 ["Social/ Emotional and Approaches to Learning",  "Rarely or not yet", "Occasionally or with much help", "Often or with some help", "Almost always or with minimal help"],
 ["Treats peers and adults with respect.","","","",""],
];

// action

function clearBody() {
  Logger.log("clear it out");
  body.clear();
}

function buildTable() {
  clearBody()

  var h_style = {};
    h_style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;
    h_style[DocumentApp.Attribute.FONT_FAMILY]          = 'Arial';
    h_style[DocumentApp.Attribute.FONT_SIZE]            = 14;
    h_style[DocumentApp.Attribute.BOLD]                 = true;

  var t = body.appendTable(headers);

  var a = t.getRow(0).getCell(0).getChild(0).asParagraph().setAttributes(h_style)
  var b = t.getRow(0).getCell(1).getChild(0).asParagraph().setAttributes(h_style)
  var c = t.getRow(0).getCell(2).getChild(0).asParagraph().setAttributes(h_style)
  var d = t.getRow(0).getCell(3).getChild(0).asParagraph().setAttributes(h_style)
  var e = t.getRow(0).getCell(4).getChild(0).asParagraph().setAttributes(h_style)

  // t.appendTableRow(cells)

}
