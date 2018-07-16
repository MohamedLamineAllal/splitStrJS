# splitStrJS

A multiple separators as array split string function    (it support both an array as separators, or a one separator as a string)

There is no native function or method, that suport providing an array of multiple separators, the only native way is using a regex as a separator. Using split with regex, will use the regex engine, wich take more time. So for speed gain,  here i implemented a direct function by simple looping.


The function is in splitStr.js, you can copy past it to use it.

The test.js is just for testing it. (use node)

```javascript
node test

```