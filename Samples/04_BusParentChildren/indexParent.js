Vue.component("component-a", {
    data: function() {
        return {
            message: '自组建内容'
        }
    },
    template: '<button @click="handleEvent"> 通过父链直接修改数据</button>',
    methods: {
        handleEvent: function() {
            this.$parent.message = "来自组件component - a 的内容";
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        message: ""
    }
});