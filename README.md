# Google Apps Script Cheat Sheet

## Index 

##[General](#general)
* [Array](#array)
  * [Check for a Value](#check-for-a-value)
  * [Remove Duplicates](#remove-duplicates)
  * [Remove Empty](#remove-empty)
  * [Get Count of Values in Array](#get-count-of-values-in-array)
  * [Intersect of Two Arrays](#intersect-of-two-arrays)

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
  ➡  array

```javascript
function rmDuplicatesFrom(arr) {
	var check  = {};
	var _arr = [];
	var j = 0;
	for(var i = 0; i < arr.length; i++) {
		var item = arr[i];
		if(check[item] !== 1) {
			check[item] = 1;
			_arr[j++] = item;
		}
	}
	return _arr;
}

var arr_rdf  = [1,2,3,1,2,3,4,];
var ex_rdf = rmDuplicatesFrom(arr_rdf);
Logger.log("rmDup input ➡ " + arr_rdf);
Logger.log("rmDup output ➡ " + ex_rdf);
```

#### Remove Empty Values
  ➡ array

```javascript

function rmEmptyVal(x){
	return (x !== (undefined || ''));
}

var arr_rev  = ["a",,"b",,,"c"];
var ex_rev = arr_rev.filter(rmEmptyVal);
Logger.log("rmEmpty input ➡ " + arr_rev);
Logger.log("rmEmpty output ➡ " + ex_rev);
```

#### Get Count of Values in Array
  ➡ array of objects 

```javascript
function countOfValIn(arr){
	var _arr = [];
	var copy = arr.slice(0);
	for (var i = 0; i < arr.length; i++) {
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (arr[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
		if (myCount > 0) {
			var a = new Object();
			a.value = arr[i];
			a.count = myCount;
			_arr.push(a);
		}
	}
	return _arr;
}

var arr_covi  = ["A", "B", "C", "A", "B", "C", "D", "A"];
var ex_covi = countOfValIn(arr_covi);
Logger.log("countVal input ➡ " + arr_covi);
Logger.log("countVal out ⬇ ");
Logger.log(ex_covi);
```

#### Intersect of Two Arrays
  ➡ array

```javascript
function intersectOf(arrA, arrB) {
	var a = 0;
	var b = 0;
  var _arr = [];
  while( a < arrA.length && b < arrB.length ) {
     if (arrA[a] < arrB[b] ) { a++; }
     else if (arrA[a] > arrB[b] ) { b++; }
     else {
       _arr.push(arrA[a]);
       a++;
       b++;
     }
  }
  return _arr;
}

var arr1_io = [1, 2, 3];
var arr2_io = [3, 4, 5];
Logger.log(intersectOf(arr1_io, arr2_io));
```

#### Template
  ➡  

```javascript

```
