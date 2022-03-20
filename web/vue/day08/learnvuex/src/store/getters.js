export default {
    powerCounter(state) {
        return state.counter * state.counter
    },
    more20stu(state) {
        return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
        // return state.students.filter(s => s.age > 20).length
        return getters.more20stu.length
    },
    moreAgeStu(state) {
        // 返回一个函数
        // return function (age) {
        //     return state.students.filter(s => s.age > age)
        // }
        // 简写
        return age => state.students.filter(s => s.age > age)
    }
}