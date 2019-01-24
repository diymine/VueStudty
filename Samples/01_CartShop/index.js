var items = [{
    id: 1,
    name: 'iPhone 7',
    price: 6188,
    count: 1
}, {
    id: 2,
    name: 'iPhone 8',
    price: 618,
    count: 1
}, {
    id: 3,
    name: 'iPhone 9',
    price: 69888,
    count: 1
}];

var app = new Vue({
    el: "#app",
    data: { list: items },
    computed: {
        totalPrice: function() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total;
        },
    },
    methods: {
        handleReduce: function(index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index, 1);
        }
    },
    filters: {
        formatToThousand: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    }
});