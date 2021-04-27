<template>
    <draggable
        class="list-group"
        tag="div"
        v-model="list"
        handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
    >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <div class="list-group-item" v-for="(item, index) in list" :key="item.order">
                <i class="fa fa-align-justify handle" style="cursor:move;border:10px solid transparent;"></i>
                {{ item.name }}
                <i class="fa fa-times" style="border:10px solid transparent;" @click="removeAt(index)"></i>
            </div>
        </transition-group>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import 'font-awesome/css/font-awesome.min.css'
const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs']

export default {
    components: {
        draggable,
    },
    data() {
        return {
            list: message.map((name, index) => {
                return { name, order: index + 1 }
            }),
            drag: false,
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 200,
                group: 'test-group',
                disabled: false,
                ghostClass: 'ghost',
            }
        },
    },
    watch: {
        list(val) {
            console.log(val)
        },
    },
    methods: {
        removeAt(index) {
            this.list.splice(index, 1)
        },
    },
}
</script>

<style>
.button {
    margin-top: 35px;
}

.flip-list-move {
    transition: transform 0.5s;
}
.ghost {
    opacity: 0.5;
    background: #c8ebfb !important;
}

.list-group-item {
    height: 50px;
    line-height: 50px;
    border: 1px solid #000;
    margin-bottom: 10px;
}
</style>
