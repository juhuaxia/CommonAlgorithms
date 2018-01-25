function getElementsByClass(dom,className){
    var children = Array.prototype.slice.call(dom.children,0),nextRes = [];
    var res = children.reduce(function(preItem,currentItem){
        nextRes = nextRes.concat(getElementsByClass(currentItem,className));
        if(currentItem.className.indexOf(' '+className)>=0){
            preItem.push(currentItem);
        }
        return preItem;
        
    },[])
    
    return res.concat(nextRes);
}