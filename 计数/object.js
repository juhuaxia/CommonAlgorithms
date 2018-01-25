/**
 * 使用key value键值对的方式计算次数，包括:
 * 处理了字符串中计数各个值出现的次数
 * 处理了数组中各个值出现的次数
 * 处理了针对数组中，number和string的处理，如3和'3'
 */
var a = 'cabacdfgwuyhggdnsjdjkagfffssa';
var arr = ['3','13',3,'13','3','3'];
function getValsTime(data){
    if(typeof data === 'string'){
        var countMap = {};
        for(var i=0,l=data.length;i<l;i++){
            var item = data[i];
            if(countMap[item] === undefined){
                countMap[item] =1;
            }else{
                countMap[item]++;
            }  
        }
        return countMap;
    }else if(data instanceof Array){
        var countMap = new Map();//由于object的key只能是string，所以用arr的值作为key，会出现string和number相同的地方，所以改用map处理
        for(var i=0,l=data.length;i<l;i++){
            var item = data[i];
            if(!countMap.has(item)){
                var o = {};
                o.time = 1;
                o.type = typeof item;
                countMap.set(item,o);
            }else{
                var o = countMap.get(item);
                o.time +=1;
            }
        }
        return countMap;
    }
    return null;
}
var res = getValsTime(arr);
console.log(res);

/**
 * 获取出现次数最多的树
 * 利用类似淘汰的方式去获取次数最大的值
 */
function getMaxNum(data){
    var maxValue = '',
        maxTime = 1;//设定默认最大的次数为1；
    if(data.has){
        for(var [k,v] of data){ //map中 fro(var k of data) k是一个数组
            var time = v.time;
            if(time > maxTime){
                maxTime = time;
                maxValue = k;
            }else if(time === maxTime){
                maxTime = time;
                maxValue +=','+k;
            }
        }
    }else{
        for(var k in data){
            var time = data[k];
            if(time > maxTime){
                maxTime = time;
                maxValue = k;
            }else if(time === maxTime){
                maxTime = time;
                maxValue +=','+k;
            }
        }
    }

    return {
        time:maxTime,
        value:maxValue
    }
}

console.log('最大次数及值是： ',getMaxNum(res))
 
