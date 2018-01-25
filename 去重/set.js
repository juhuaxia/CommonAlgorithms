var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
var new_arr = [...new Set(arr)];
// var new_arr = Array.from(new Set(arr));
console.log(new_arr);