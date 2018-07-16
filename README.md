# splitStrJS

A multiple separators as array split string function    (it support both an array as separators, or a one separator as a string)

There is no native function or method, that suport providing an array of multiple separators, the only native way is using a regex as a separator. Using split with regex, will use the regex engine, wich take more time. So for speed gain,  here i implemented a direct function by simple looping.

There is also two function with filtering capabelity (filtering here mean allow the add to split array for only the elements that are not added to the filter (exemple we don't want '' to be in the array, so we add it to the filter) [see the test.js file]). 

The functions are in splitStr.js, you can copy past them to use them, or have it as a module, write back your export methode, depending in what context you are, if node it's already done, if es2015 you can use export default and import statements.

The test.js is just for testing it. (use node)

```javascript
node test

```