const splitStr = require('./splitStr').splitStr;
const splitStr_filter = require('./splitStr').splitStr_filter;

let str1 = "i'm/a/special\\path/get/it/";
let str2 = "/ok/what/about/this//case////";
let str3 = "\\ok\\simple\\hinh";
let str4 = "";

let splitStr1 = splitStr(str1, ['/','\\']);
let splitStr2 = splitStr(str2, ['/','\\']);
let splitStr3 = splitStr(str3, ['/','\\']);
let splitStr4 = splitStr(str4, ['/','\\']);

let splt1 = str1.split(/\\|\//);
let splt2 = str2.split(/\\|\//);
let splt3 = str3.split(/\\|\//);
let splt4 = str4.split(/\\|\//);

let splitStr_filter1 = splitStr_filter(str1, ['/','\\'],['']);
let splitStr_filter2 = splitStr_filter(str2, ['/','\\'],['']);
let splitStr_filter3 = splitStr_filter(str3, ['/','\\'],['']);
let splitStr_filter4 = splitStr_filter(str4, ['/','\\'],['']);


console.log("using splitStr");
console.log("=====================");
console.log("splitStr1");
console.dir(splitStr1);
console.log('splt1');
console.dir(splt1);
console.log("splitStr_filter1");
console.dir(splitStr_filter1);
console.log("-----------");
console.log("splitStr2");
console.dir(splitStr2);
console.log("splt2");
console.dir(splt2);
console.log("splitStr_filter2");
console.dir(splitStr_filter2);
console.log("-----------");
console.log("splitStr3");
console.dir(splitStr3);
console.log("splt3");
console.dir(splt3);
console.log("splitStr_filter3");
console.dir(splitStr_filter3);
console.log("-----------");

console.log("splitStr4");
console.dir(splitStr4);
console.log("splt4");
console.dir(splt4);
console.log("splitStr_filter4");
console.dir(splitStr_filter4);



//test for filtering function to be done!