const sumAll = function() {
    let args = Array.from(arguments);
    start = args[0]
    end = args[1]

    total = 0
    if (typeof start === 'string' || typeof end ==='string' || typeof start == 'object' | typeof end == 'object') return 'ERROR'
    if (start < 0 || end < 0 ) return 'ERROR'
    if (start > end ) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i=start; i<=end; i++){
        
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
