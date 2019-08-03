
Vue.component('click-counter', {
    template:'<button @click="count++">{{count}}</button>',
    data() {
        return {
            count: 0
        }
    }
})

Vue.component('date-picker', {
    template: '<span>{{pickme}}</span>',
    data(){
        return{
            pickme: "Pick Me, Baby!"
        }
    }
})

Vue.component('d3-chart', {
    template: '<span>{{pickme}}</span>',
    data(){
        return{
            pickme: "Chart Me, Baby!"
        }
    }
})


//general Vue App

new Vue({
    el: '#app'
})
