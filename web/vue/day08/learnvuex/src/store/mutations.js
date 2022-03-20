import { INCREMENT } from './mutation-types';

export default {
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
}