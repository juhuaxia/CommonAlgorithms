var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
var obj = {};
var new_arr = [];
for(var i =0,l=arr.length;i<l;i++){
    var item = arr[i];
    /**
     * {
     *  '3':['string','number']
     * }
     */
    if(!obj[item]){
        obj[item] = [];
        obj[item].push(typeof item);//将类型作为数据放入到数组内，并且给到对应key的值。
        new_arr.push(item);
    }else if(obj[item].indexOf(typeof item) == -1){ //判断该值里是否已有对应类型？没有才加，有就不加，因为Object的key只能是string，所以3和'3'在Object里面作为key是完全一样的
        obj[item].push(typeof item);
        new_arr.push(item);
    }
}
console.log(new_arr);