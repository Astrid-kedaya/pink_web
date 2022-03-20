import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT } from './mutation-types';

// 安装插件
Vue.use(Vuex)

const moduleA = {
    state: {
        name: 'ddd'
    },
    mutations: {
        updataName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdataName(context) {
            // 这个commit只能调当前mutation
            setTimeout(() => {
                context.commit('updataName', 'wangwu')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    },
}

// 创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 1, name: '皮卡丘', age: 6 },
            { id: 2, name: '可达鸭', age: 18 },
            { id: 3, name: '卡比兽', age: 30 },
        ],
        info: { name: 'zzz', age: 18 }
    },
    mutations: {
        // 方法 
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, payload) {
            state.counter += payload.count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updataInfo(state) {
            state.info.name = 'aaa'
        }
    },
    actions: {
        // 这个context是store对象
        aUpdataInfo(context, payload) {
            // 通知已经修改成功了
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updataInfo')
                    console.log(payload);
                    resolve('1111')
                    // then写在APP.vue
                }, 1000)
            })
        }
    },
    getters: {
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
    },
    modules: {
        a: moduleA,
    }
})

// 导出
export default store