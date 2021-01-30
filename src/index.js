let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheetByName("main");
let range = sheet.getRange(1, 1);

function myFunction() {
  Logger.log("testing works perfectly or not of course");
}

function doGet(e) {
  let currDate = Date.now();
  range.setValue(currDate);
  const html = HtmlService.createHtmlOutputFromFile("main.html");
  html.append(`<p>${currDate}</p>`)
  return html;
}

function doPost(e) {
  return ContentService.createTextOutput("doPost 111world!");
}
