<script lang="tsx">
import { defineComponent, ref } from 'vue'
import Child from './Child.vue';
import { Fragment } from 'vue/jsx-runtime';

export default defineComponent({

    setup() {
        const countRef = ref(0)
        function add() {
            countRef.value++
        }
        function childAdd(n: string) {
            countRef.value += +n
        }
        return () => {
            return (
                <Fragment>
                    <div>parent-{countRef.value}</div>
                    <div onClick={add}>parent-add</div>
                    <Child count={countRef.value} onAdd={childAdd}
                        v-slots={{
                            add: (data) => (<div>add-slot-{data.name + data.age}</div>)
                        }}
                    ></Child>
                </Fragment>
            )
        }
    }
})
</script>

<style scoped></style>