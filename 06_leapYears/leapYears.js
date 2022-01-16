const leapYears = function() {
    // divisible by 4
    // NOT divisible by 100, unless divisible by 400
        let arg = arguments[0]
        
        if(arg%4==0) {
            if(arg%100 == 0 && arg%400==0){
                return true
            }
            else if (arg%100==0) {
                return false
            }
            else return true
            
        }
        else return false
    
    };
// Do not edit below this line
module.exports = leapYears;
