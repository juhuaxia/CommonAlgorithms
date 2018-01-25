var time = 0;
function popSort(arr){
    for(var i=0,l=arr.length;i<l;i++){
        var change = 0; //立一个flag
        for(var j =0,len=arr.length;j<len-i;j++){ //第一轮最后一个数肯定最大，第二个最后第二个数肯定最大，所以每轮后i位不需要排序。所以 length - i
            ++time;
            if(arr[j]>arr[j+1]){
                var a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
                change =1;
            }
        }
        if(change == 0){ //如果这一轮数据没有做交互处理，说明数据顺序已经排好了，所以直接return
            return arr;
        }
    }
    return arr;
}

var testArr = [3,1,4,5,9,7,4,2,10,7,2,5,8,11,12];

var res = popSort(testArr);

console.log(res,time);