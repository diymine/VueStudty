Vue.component("pane", {
    data: function() {
        return {
            show: true
        }
    },
    template: '\
    <div class="pane" v-show="show">\
        <slot> </slot> \
    </div>',
    props: {
        name: { type: String },
        label: {
            type: String,
            default: ''
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    mounted() {
        this.updateNav();
    }
});