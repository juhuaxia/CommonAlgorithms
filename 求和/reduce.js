/**
 * 单纯的计算某一个值出现的次数，
 * 如果需要看各个值出现的次数，并且获取最大次数,参考 object.html
 */
var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
function getTotalVal(arr){
    return arr.reduce(function(preVal,currentVal){
        return parseInt(preVal)+parseInt(currentVal);
    },0)
}

console.log(getTotalVal(arr));