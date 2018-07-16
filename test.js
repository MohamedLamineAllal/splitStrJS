const splitStr = require('./splitStr');

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

console.log("using splitStr");
console.log("=====================");
console.log("splitStr1");
console.dir(splitStr1);
console.log('splt1');
console.dir(splt1);
console.log("splitStr2");
console.dir(splitStr2);
console.log("splt2");
console.dir(splt2);
console.log("splitStr3");
console.dir(splitStr3);
console.log("splt3");
console.dir(splt3);

console.log("splitStr4");
console.dir(splitStr4);
console.log("splt4");
console.dir(splt4);