Vue.component("tabs", {
    data: function() {
        return {
            // 因为不能修改value, 所以复制一份自己维护
            currentValue: this.value,
            navList: []
        };
    },
    props: {
        //这里的value 是为了可以使用v - model
        value: {
            type: [String, Number]
        },
        navList: {
            type: [Array]
        }
    },
    template: '\
    <div class="tabs">\
        <div class="tabs-bar">\
            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">\
                {{item.label}}\
            </div>\
        </div> \
        <div class = "tabs-content"> \
            <slot> </slot> \
        </div> \
    </div>',
    methods: {
        getTabs: function() {
            // 通过遍历子组件， 得到所有的pane 组件
            return this.$children.filter(function(item) {
                return item.$options.name === "pane";
            });
        },
        updateNav: function() {
            this.navList = [];
            // 设置对this 的引用，在function 回调里，this 指向的并不是Vue 实例
            var _this = this;
            this.getTabs().forEach(function(pane, index) {

                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });

                if (!pane.name) pane.name = index;
                // 设置当鉗选中的tab 的索引，在后面介绍
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = pane.name || index;
                    }
                }

            });

            this.updateStatus();

        },

        updateStatus: function() {
            var tabs = this.getTabs();
            var _this = this;
            // 显示当前选中的tab 对应的pane 组件，隐藏没有选中的
            tabs.forEach(function(tab) {
                return tab.show = tab.name === _this.currentValue;
            });
        },
        tabCls: function(item) {
            return [
                'tabs-tab',
                {
                    //给当前选中的tab 加一个class
                    'tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
        // 点击tab 标题时触发
        handleChange: function(index) {
            var nav = this.navList[index];
            var name = nav.name;
            // 改变当前选中的tab , 并触发下面的watch
            this.currentValue = name;
            // // 更新value
            // this.$emit('input', name);
            // // 触发-个自定义事件，供父级使用
            // this.$emit('on-click', name);
            this.updateStatus();
        },
        watch: {
            value: function(val) {
                this.currentValue = val;
            },
            currentValue: function(val) {
                //在当前选中的tab发生变化时， 更新pane 的显示状态
                this.updateStatus();
            }
        } //,
        // mounted: function() {
        //     this.updateNav();
        // }

    }
});