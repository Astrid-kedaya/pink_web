var name = '皮卡丘'
var age = 18
function sum(num1, num2) {
    return num1 + num2
}

// 导出方式一
export {
    name,
    sum
}

// 导出方式二
export var num = 1000
export function sub(num1, num2) {
    return num1 - num2;
}
export class Run{
    run() {
        console.log('在奔跑');
    }
}

 
// export default 只能有一个 export default
// const height = 1.88;
// export default height

export default function (num) {
    console.log(num);
}
