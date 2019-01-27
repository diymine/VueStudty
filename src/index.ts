// src/index.ts
import Vue from "vue";
import HelloComponent from "./components/Hello";
import Hello2Component from "./components/Hello.vue";

let v = new Vue({
    el: "#app",
    data: {
        name: "World"
    }
});

let v1 = new Vue({
    el: "#app1",
    data: { name: "World22" },
    components: {
        HelloComponent
    }
});

let v2 = new Vue({
    el: "#app2",
    data: { name: "World33" },
    components: {
        Hello2Component
    }
});
