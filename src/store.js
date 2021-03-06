import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
//方法封装
function fetch(api, callback) {
    axios({
        methed: "GET",
        url: 'http://localhost:8080' + api
    }).then(res => {
        let data = null
        if (res.data.err === 0) {
            data = res.data.data
        }
        callback && callback(data)
    }).catch(err => {
        console.log("接口请求异常，", err)
    }).then(() => {
        //都会执行
    })
}
const store = new Vuex.Store({
    state: {
        //创建 store。用于储存数据对象
        topArr: [],
        topArr1: [],
        glArr: [],
        adArr: [],
        clientArr: [],
        clientArr2: [],
        msg: 'hello',
        orderArr: [],
        orderArr2: [],
        qykArr:[]
    },
    // 同步数据更新
    mutations: {
        //权益卡数据更新
        upqykArr(state,payload){
            state.qykArr = payload
            console.log(state.topArr);
        },



        uptopArr(state, payload) {
            state.topArr = payload
            console.log(state.topArr);
        },
        uptopArr1(state, payload) {
            state.topArr1 = payload
            console.log(state.topArr);
        },
        upglArr(state, payload) {
            state.glArr = payload
            console.log(state.glArr);

        },
        upadArr(state, payload) {
            state.adArr = payload
            console.log(state.adArr);

        },
        updateClientArr(state, payload) {
            if (payload.list) {
                state.clientArr = payload.list
            }
            let page = payload.page || 1
            let list = state.clientArr
            state.clientArr2 = list.slice((page - 1) * 5, page * 5)
        },
        updateAdd(state, payload) {
            state.clientArr2.push(payload)
        },
        updateOrderArr(state, payload) {
            if (payload.list) {
                state.orderArr = payload.list
            }
            let page = payload.page || 1
            let list = state.orderArr
            state.orderArr2 = list.slice((page - 1) * 5, page * 5)
        }
    },

    // 异步数据请求，与后端API进行交互
    actions: {
        getqykArr(){
            fetch('/db/qyk.json',function(data){
                console.log(data);
                store.commit('upqykArr',data)
                
            })
        },


        gettopArr() {
            fetch('/db/top.json', function (data) {
                console.log(data);
                store.commit('uptopArr', data[0])
            })
        },
        gettopArr1() {
            fetch('/db/top.json', function (data) {
                console.log(data);
                store.commit('uptopArr1', data[1])
            })
        },
        getglArr() {
            fetch('/db/gl.json', function (data) {
                store.commit('upglArr', data)
            })
        },
        getadArr() {
            fetch('/db/ad.json', function (data) {
                store.commit('upadArr', data)
            })
        },
        getClient(store) {
            fetch('/db/client.json', function (data) {
                let payload = {
                    page: 1,
                    list: data,
                    statusNum: ''
                }
                store.commit('updateClientArr', payload)
            })
        },
        getOrder(store) {
            fetch('/db/order.json', data => {
                // console.log(data)
                let payload = {
                    page: 1,
                    list: data,
                    statusNum: ''
                }
                store.commit('updateOrderArr', payload)
            })
        }
    }
})
export default store