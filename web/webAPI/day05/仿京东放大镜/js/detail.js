window.addEventListener('load', function () {//先有html和css才js 所以先加载
    var preview_img = this.document.querySelector('.preview_img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    // 鼠标经过 离开 preview_img 就显示和隐藏 mask 和big
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        // 1.计算鼠标在盒子内的坐标
        //preview_img的父级都没有定位所以可以拿到它与页面的距离
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //让鼠标在mask的中间，移动mask高度和宽度的一半即可
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2
        // 如果x小于等于0 就让他停在0 的位置
        // 遮挡层最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskx <= 0) {
            maskx = 0;
        } else if (maskx >= maskMax) {
            maskx = maskMax;
        }
        // 判断y 因为是正反向所以y的最大移动距离也是maskMax
        if (masky <= 0) {
            masky = 0;
        } else if (masky >= maskMax) {
            masky = maskMax;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        //大图片移动距离  遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离 （按照比例）
        var bigImg = document.querySelector('.bigImg');//大图
        // 大图片最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片移动距离 
        var bigx = maskx * bigMax / maskMax;
        var bigy = masky * bigMax / maskMax;
        bigImg.style.left = -bigx + 'px';//方向相反
        bigImg.style.top = -bigy + 'px';
    })
})