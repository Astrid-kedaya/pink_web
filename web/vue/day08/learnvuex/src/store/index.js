import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


// 安装插件
Vue.use(Vuex)


const state = {
    counter: 1000,
    students: [
        { id: 1, name: '皮卡丘', age: 6 },
        { id: 2, name: '可达鸭', age: 18 },
        { id: 3, name: '卡比兽', age: 30 },
    ],
    info: { name: 'zzz', age: 18 }
}

// 创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA,
    }
})

// 导出
export default store