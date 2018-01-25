/**
 * 原理步骤：
 * 1.找个基准值
 * 2.把小于基准值的，放到基准值的左边，大于基准值的，放到基准值的右边
 * 3.对于左右2个集合，分别重复1，2步，直到集合只剩一个元素为止
 */

 /**
  * 获取基准值
  * 数组的/2
  */
function delteDatumFromArr(arr){
        //必须将基准值需要从数组中去除掉，否则会出现item（基准值的item）跟基准值自己本身对比。
        //如 [3,2];基准值为2.判断的时候  2==2,跟3一起放入到rightArr中，导致rightArr又为3和2.无限循环
        var datumIndex = Math.floor(arr.length/2); //取小于等于数组长度/2的整数
        var datum = arr.splice(datumIndex,1)[0];//splice返回被删除的元素，以数组的形式。[valaue];
        return {
            datum:datum,
            arr:arr
        }
}

/**
 * 遍历数组，把小于基准值的数据放到基准值的左边，unshift
 * 大于基准值的放到右边。push
 */
function loopArr(arr){
    //如果传入的数组的长度为1或者0，那么符合 “直到集合只剩一个元素为止”的条件，直接将该数组返回，在上一层的loop中与其他数组合并
    if(arr.length <=1){
        return arr;
    }
    var o = delteDatumFromArr(arr),
        datum = o.datum,
        arr = o.arr;
    if(arr.length ==0 && datum ==undefined){
        return arr;
    }
    var leftArr = [],
        rightArr = [];
    for(var i =0,l=arr.length;i<l;i++){
        var item = arr[i];
        if(item<datum){
            leftArr.push(item);
        }else{
            rightArr.push(item);
        }
    }
    
    var result = loopArr(leftArr).concat([datum],loopArr(rightArr));
    return result;
};


var testArr = [3,1,4,5,9,7,4,2,10,7,2,5,8,1];

var res = loopArr(testArr);

console.log(res);