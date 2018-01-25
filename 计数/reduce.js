/**
 * 单纯的计算某一个值出现的次数，
 * 如果需要看各个值出现的次数，并且获取最大次数,参考 object.html
 */
var a = 'cabacdfgwuyhggdnsjdjkagfffssa';
var split_arr = a.split('');
var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
var initNum = 0;

function getTotal(arr){
    return function(char,initData){
        return arr.reduce(function(preValue,currentValue){
            if(char === currentValue){ //严格等于 数组内string和number
                return ++preValue;
            }
            return preValue;
        },initData);//initData如果不传，则默认为数组第一项
    }
}

var total = getTotal(arr)('3',initNum);
console.log(total);


