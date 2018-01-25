var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
var obj = {};
var new_arr = [];
for(var i =0,l=arr.length;i<l;i++){
    var item = arr[i];
    if(!obj[item]){
        if(obj[item] != typeof item){ //因为Object的key只能是string，所以3和'3'在Object里面作为key是完全一样的
            obj[item] = typeof item;
            new_arr.push(item);
        }
    }
}
console.log(new_arr);