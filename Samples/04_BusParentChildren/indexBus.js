var bus = new Vue();

Vue.component("component-a", {
    data: function() {
        return {
            message: '自组建内容'
        }
    },
    template: '<button @click="handleEvent">传递事件</button>',
    methods: {
        handleEvent: function() {
            bus.$emit("on-message", "来自组件component-a 的内容");
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        message: ""
    },
    mounted: function() {
        var _this = this;
        bus.$on("on-message", function(msg) {
            _this.message = msg;
        });
    }
});