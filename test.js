var test = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


var clozecard =  new ClozeCard("Microsoft sucks dude!","Microsoft");
console.log("Full text",clozecard.fullText);
console.log("Partial text", clozecard.partialText);
console.log("Cloze");

