const repeatString = function(word, count) {
    let fullWord = '';
    if(count>=0){
        for(let i=0;i<count;i++){
            fullWord = fullWord.concat(word);
        }
        
    } else {
        fullWord='ERROR'
    }
    return fullWord
};

// Do not edit below this line
module.exports = repeatString;
