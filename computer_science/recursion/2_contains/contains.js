const contains = function (object, value) { 
    
    if (Object.keys(object).length > 0) {
        for (const key in object) {
            if (typeof object[key] != 'object' || object[key] === null || Array.isArray(object[key])) {
            /* 2 edge cases:
                js treats null as object
                js treats array as object
                in this condition they're treated as normal values
            */
                if (Object.is(object[key], value)) {
                    return true;
                }
            } else {
                let status = contains(object[key], value);
                if (status == true) { // if the returned value from the recursive function is true, return it again in the outer function
                    // this is to avoid returning false in outer function after finding the value in an inner function
                    return status;
                }
            }
        }
    }

    return false;
    
};
  
// Do not edit below this line
module.exports = contains;
