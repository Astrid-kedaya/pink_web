function animate(obj, target, callback) {
    // console.log(callback);//callback = function(){} 调用
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器里 因为每次步长值都会随着定时器变
        // 把步长改为整数 不要出现小数问题
        // var step = Math.ceil((target - obj.offsetLeft)/10
        // 前进（正值）用`Math.ceil` 后退（负值）用`Math.flo
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            //结束定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {//有回调函数就调用
                callback();
            }
        }
        // 把1换成这个步长换成一个慢慢变小的值
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30)
}