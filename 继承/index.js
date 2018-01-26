function _extend(parent,child){

    var EmptyFn = function(){};

    EmptyFn.prototype = parent.prototype;

    child.prototype = new EmptyFn();

    child.prototype.constructor = child;
}