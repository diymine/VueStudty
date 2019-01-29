Vue.component("my-component", {
    data: function() {
        return {
            counter: 0
        }
    },
    template: '<div>\
    <button @click="handleIncrease">+1</button>\
    <button @click="handleReduce">-1</button>\
    <div>',
    methods: {
        handleIncrease: function() {
            this.counter++;
            this.$emit("increase", this.counter);
        },
        handleReduce: function() {
            this.counter--;
            this.$emit("reduce", this.counter);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        total: 0
    },
    methods: {
        handleGetTotal: function(total) {
            this.total = total;
        }
    }
});



Vue.component("my-component2", {
    props: ['value'],
    template: '<input :value = "value" @input="updateValue" />',
    methods: {
        updateValue: function(event) {
            this.$emit("input", event.target.value);
        }
    }
});


var app2 = new Vue({
    el: "#app2",
    data: {
        total: 0
    },
    methods: {
        handleReduce: function(total) {
            this.total--;
        }
    }
});