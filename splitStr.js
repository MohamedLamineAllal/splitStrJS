function splitStr(str, separators) {
    if (Array.isArray(separators)) {
        let splitArr = [];
        let lastSplitIndex = -1;
        for (let i = 0; i < str.length; i++) {
            let found = false;
            for (let j = 0; j < separators.length; j++) {
                if (str[i] === separators[j]) {
                    found = true;
                    break;
                }
            }

            if (found) {
                splitArr.push(str.substring(lastSplitIndex + 1, i));
                lastSplitIndex = i;
            }
        }
        if (lastSplitIndex !== str.length - 1) { // lastSPlit index isn't  the last character of the string, then there is a string after the last split separator
            splitArr.push(str.substring(lastSplitIndex + 1, str.length));
        } else { // if the last element is a separator then we will add an empty string to the array (last separation a string against void)
            splitArr.push('');
        }

        return splitArr;
    } else {
        return str.split(separators);
    }
}

/**
 * this function that add filtering possibility (you can presise a list of the string that you don't to have them in the split array (so they don't get pushed at all))
 * @param {*} str 
 * @param {*} separators 
 * @param {*} filters 
 */
function splitStr_filter(str, separators, filters) {
    if(typeof filters === "undefined" || filters === null) {
        return splitStr(str, separators);
    }
    
    // making sure they are arrays
    if (!Array.isArray(separators)) separators = [separators];
    if(!Array.isArray(filters)) filters = [filters];

    let splitArr = [];
    let lastSplitIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (isInArray(str[i], separators)) {
            let substr = str.substring(lastSplitIndex + 1, i);
            if (filters && !isInArray(substr, filters)) { // filter we add only if it is not one of the filters els
                splitArr.push(substr);
            }
            lastSplitIndex = i;
        }
    }
    if (lastSplitIndex !== str.length - 1) { // lastSPlit index isn't  the last character of the string, then there is a string after the last split separator
        let substr = str.substring(lastSplitIndex + 1, str.length);
        if (!isInArray(substr, filters)) { // filter we add only if it is not one of the filters els
            splitArr.push(substr);
        }
    } else { // if the last element is a separator then we will add an empty string to the array (last separation a string against void)
        if (!isInArray('', filters)) {
            splitArr.push('');
        }
    }

    return splitArr;
}


/**
 * same thing as splitStr_filter but here the filtering is done using a function, if it return true then the element will not be added
 * @param {*} str 
 * @param {*} separators 
 * @param {*} filterFunc 
 */
function splitStr_filterFunc(str, separators, filterFunc) {
    if(typeof filters === "undefined" || filters === null) {
        return splitStr(str, separators);
    }
    
    // making sure it's an array
    if (!Array.isArray(separators)) separators = [separators];

    

    let splitArr = [];
    let lastSplitIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (isInArray(str[i], separators)) {
            let substr = str.substring(lastSplitIndex + 1, i);
            if (!filterFunc(substr)) { // filter we add only if it return false (otherwise it's filtred and not added)
                splitArr.push(substr);
            }
            lastSplitIndex = i;
        }
    }
    if (lastSplitIndex !== str.length - 1) { // lastSPlit index isn't  the last character of the string, then there is a string after the last split separator
        let substr = str.substring(lastSplitIndex + 1, str.length);
        if (!filterFunc(substr)) { // filter we add only if it is not one of the filters els
            splitArr.push(substr);
        }
    } else { // if the last element is a separator then we will add an empty string to the array (last separation a string against void)
        if (!filterFunc('')) {
            splitArr.push('');
        }
    }

    return splitArr;
}

function isInArray(el, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === el) {
            return true;
        }
    }
    return false;
}

module.exports = {
    splitStr,
    splitStr_filter,
    splitStr_filterFunc
};