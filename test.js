var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");



var basic1 = new BasicCard("What is the meaning of life", "42");
var cloze1 =  new ClozeCard("George Washington was the first president.","George Washington");

basic1.print();
cloze1.print();


