Vue.component("child-component", {
    template: '\
    <div class="container">\
        <div class="header">\
            <slot name="header"> </slot > \
        <div> \
        <div class = "main" > \
            <slot> </slot> \
        <div> \
        <div class = "footer" > \
            <slot name="footer" > </slot>\
        </div>\
    </div>'
});

var app = new Vue({
    el: "#app"
});

Vue.component("child2-component", {
    template: '\
    <div class="container ">\
        <slot msg="来自子组件的内容"></slot>\
    <div>'
});

var app = new Vue({
    el: "#app2"
});


Vue.component('my-list', {
    props: {
        books: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    template: '\
        <ul>\
            <slot name="book" v-for="book in books" :book-name="book.name"> \
            </slot>\
        </ul>'
});

var app = new Vue({
    el: "#appbooks",
    data: {
        books: [
            { name: "《Vue.js 实战》" },
            { name: "《JavaScript 语言精粹》" },
            { name: "《JavaScript 岛级程序设汁》" }
        ]
    },
});