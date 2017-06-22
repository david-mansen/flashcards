// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

// The constructor should accept two arguments: text and cloze.

// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.

module.exports = ClozeCard;

function ClozeCard(fullText, cloze){
    this.fullText = fullText;
    this.cloze = cloze;

    this.init = function(){
        this.partialText = this.fullText.replace(cloze, "...");
    }

    this.print = function(){
        console.log("FullText: ",this.fullText);
        console.log("Cloze: ", this.cloze);
        console.log("PartialText", this.partialText);
    }

    this.init();
    return this;
}