# Google Apps Script Cheat Sheet

## Index 

##[General](#general)
* [Array](#array)
  * [Check for a Value](#check-for-a-value)
  * [Remove Duplicates](#remove-duplicates)
  * [Remove Empty](#remove-empty)

### General

#### Check for a Value
  ➡  boolean

```javascript
function checkValIn(arr, val) { 
	return arr.indexOf(val) > -1; 
}

var arr_cvi = [1,2,3,4];

if (checkValIn(arr_cvi, 99)) {
    Logger.log("check value in ➡ 99 is in the array"); 
  } else {
    Logger.log("check value in ➡ 99 is not in the array");
}

```

#### Remove Duplicates

```javascript
function findValueInArray(array, value) { 
  return array.indexOf(value) > -1; 
}
```
