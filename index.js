import Vue from 'vue'
import test from './test.vue'
new Vue({
  el: '#test',
  render: h => h(test)
});



// import Vue from 'vue'
// import Element from 'element-ui'

// Vue.use(Element)

// // or
// import {
//   Select,
//   Button
//   // ...
// } from 'element-ui'

// Vue.component(Select.name, Select)
// Vue.component(Button.name, Button)