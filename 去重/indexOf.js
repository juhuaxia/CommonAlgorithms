var arr = [1,13,24,11,11,14,1,2,'3','13',3,'13','3'];
var new_arr = [];
for(var i =0,l=arr.length;i<l;i++){
    var item = arr[i];
    if(new_arr.indexOf(item) ==-1){
        new_arr.push(item);
    }
}
console.log(new_arr);