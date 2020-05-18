class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence){
    let sentenceArray = sentence.split(" ")
    let sentenceCap = []
    for( let index in sentenceArray){
      // how to make this more dry? iterate over an array checking for true/false (iteration inside iteration?)
      if (sentenceArray[index] === "the" || sentenceArray[index] === "a" ||sentenceArray[index] === "an" ||sentenceArray[index] === "but" ||sentenceArray[index] === "of" ||sentenceArray[index] === "and" ||sentenceArray[index] === "for" ||sentenceArray[index] === "at" ||sentenceArray[index] === "by" ||sentenceArray[index] === "from"){
        // will not add a duplicate of first word because when the loop is in that word it only has two choices capitalize and move on or not and move on
        if (sentenceArray[0] === sentenceArray[index]){
          sentenceCap[0] = this.capitalize(sentenceArray[index])
        } else{// if the word is the first one in the array capitalize it
        sentenceCap.push(sentenceArray[index])
        }
      } else{
        sentenceCap.push(this.capitalize(sentenceArray[index]))
      }
      // word[0].toUpperCase() + word.slice(1) // we can use this to use static method already defined
    }
    return sentenceCap.join(" ")

  }
}