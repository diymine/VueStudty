import Vue from "vue";

export default Vue.extend({
    props: ["name", "initialenthusiasm"],
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