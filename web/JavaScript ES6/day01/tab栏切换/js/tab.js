var that;
class Tab {
    constructor(id) {
        //获取元素
        that = this; // that 指向大盒子
        this.main = document.querySelector(id); //获取大盒子
        this.add = this.main.querySelector('.tabadd');
        // li 的 父元素
        this.ul = this.main.querySelector(".fisrstnav ul:first-child");
        // section 的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init(); //加括号表示页面一加载就直接调用（即页面一加载就绑定点击事件）
    }
    init() {
        this.updateNode();
        // init 初始化操作 让相关元素绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 动态添加元素，需要重新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
    }
    //1. 切换功能
    toggleTab() {
        that.clearClass(); // 类里面方法只能对象自己（大盒子）调用！！！
        this.className = 'liactive';
        //this.section[this.index].className = 'conactive';//this指向点击的li，没有sectoin标签 所以声明一个that变量 
        that.sections[this.index].className = 'conactive';
    }
    //清除所有li和section的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2. 添加功能
    addTab() {
        that.clearClass();
        // (1) 创建li元素和section元素
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive"> 测试' + random + '</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init(); // 创建新的li后也绑定事件
    }
    //3. 删除功能
    removeTab(e) {
        e.stopPropagation(); // 阻止冒泡 x号的父亲li 也有点击事件，点了x号会触发li的事件（即切换tab）
        var index = this.parentNode.index;
        // 根据索引号删除对应的li和section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //当删除不是选定状态li的时候 原来选定状态的li保持不变
        if (document.querySelector('.liactive')) return; // 如果有li处于选定状态就return 下面的代码不再执行 如果删除的是选定状态的li 那么为false 就执行下面的代码
        // 当删除选定状态的li的时候，让前一个li处于选定状态
        index--;
        // 手动调用点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click(); // 解决点第一个li报错（index--后为-1）  前面为真（有这个li） 执行后面 否则不执行
    }
    //4. 修改功能
    editTab() {
        // 获取原来的内容 赋值给文本框
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 让文本框里面的文字处于选定状态
        // 当离开文本框就把文本框里的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以把文本框里的值给审判span
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }

}
new Tab("#tab");
