var a = 'cabacdfgwuyhggdnsjdjkagfffssa';
var split_arr = a.split('');
var initNum = 0;

function getTotal(arr){
    return function(char,initData){
        return arr.reduce(function(preValue,currentValue){
            if(char == currentValue){
                return ++preValue;
            }
            return preValue;
        },initData);//initData如果不传，则默认为数组第一项
    }
}

var total = getTotal(split_arr)('b',initNum);
console.log(total);


