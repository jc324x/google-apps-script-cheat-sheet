# Google Apps Script Library

// | General
// | - Array
// | -- Check for a Value
// | -- Remove Duplicates
// | -- Remove Empty Values
// | -- Get Count of Values
// | -- Intersect of Two Arrays
// | -- Compare Two Arrays
// | -- Array as Delimited String
// | -- Array as Modified Delimited String

##[General](#general)
* [Array](#array)
  * [Check for a Value](#check-for-a-value)
  * [Remove Duplicates](#remove-duplicates)
  * [Remove Empty Values](#remove-empty)
  * [Get Count of Values](#get-count-of-values)
  * [Intersect of Two Arrays](#intersect-of-two-arrays)
  * [Compare Two Arrays](#compare-two-arrays)
  * [Array as Delimited String](#array-as-delimited-string)
  * [Array as Modified Delimited String](#array-as-modified-delimited-string)


## General

### Array

#### Check for a Value | return: `boolean`

```javascript
function checkValIn(arr, val) { 
	return arr.indexOf(val) > -1; 
}

var arr_cvi = [1,2,3,4];
var ex_cvi  = checkValIn(arr_cvi);
Logger.log(ex_cvi); // false
```
