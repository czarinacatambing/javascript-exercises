const removeFromArray = function() {
    let args = Array.from(arguments);
    list = args[0]
    toRemove = args.slice(1,)

    return list.filter(word => !toRemove.includes(word) )



};


// Do not edit below this line
module.exports = removeFromArray;
