function splitStr(str, separators) {
    if(Array.isArray(separators)) {
        let splitArr = []; 
        let lastSplitIndex = -1;
        for(let i = 0; i < str.length; i++){
            let found = false;
            for(let j = 0; j < separators.length; j++){
                if(str[i] === separators[j]) {
                    found = true;
                    break;
                }
            }

            if(found) {
                splitArr.push(str.substring(lastSplitIndex + 1, i));
                lastSplitIndex = i;
            }
        }
        if(lastSplitIndex !== str.length - 1) { // lastSPlit index isn't  the last character of the string, then there is a string after the last split separator
            splitArr.push(str.substring(lastSplitIndex + 1, str.length));
        } else { // if the last element is a separator then we will add an empty string to the array (last separation a string against void)
            splitArr.push('');
        }

        return splitArr;
    } else {
        return str.split(separators);
    }
}


module.exports = splitStr;