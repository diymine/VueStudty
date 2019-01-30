Vue.component("component-a", {
    data: function() {
        return {
            message: '了组件内容'
        }
    },
    template: '<div>子组件</div>',
});

var app = new Vue({
    el: "#app",
    data: {
        message: ''
    },
    methods: {
        handleRef: function() {
            // 通过$refs 来访问指定的实例
            var msg = this.$refs.comA.message;
            this.message = msg;
        }
    }
});