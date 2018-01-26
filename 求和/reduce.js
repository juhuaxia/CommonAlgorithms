/**
 * 
 * 
 */
var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
function getTotalVal(arr){
    return arr.reduce(function(preVal,currentVal){
        return parseInt(preVal)+parseInt(currentVal);
    },0)
}

console.log(getTotalVal(arr));