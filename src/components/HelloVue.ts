import Vue from "vue";

export default Vue.extend({
    props: {
        //这里的value 是为了可以使用v - model
        name: {
            type: [String]
        },
        initialenthusiasm: {
            type: [Number]
        }
    },
    //props: ["name", "initialenthusiasm"],
    data() {
        return {
            enthusiasm: this.initialenthusiasm
        };
    },
    methods: {
        increment() {
            this.enthusiasm++;
        },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        }
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join("!");
        }
    }
});