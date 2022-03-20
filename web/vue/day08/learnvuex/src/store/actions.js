export default  {
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
}