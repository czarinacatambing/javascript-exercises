const reverseString = function(str) {
    word = str.split('');
    fullWord = ''
    for(let i=word.length-1; i>=0; i--){
        fullWord = fullWord.concat(word[i])
    }
    return fullWord.toString()

};

// Do not edit below this line
module.exports = reverseString;
