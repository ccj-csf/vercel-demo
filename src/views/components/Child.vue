<script lang="tsx">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  // name: "Child",
  compatConfig: { MODE: 3 },
  inheritAttrs: false,
  props: {
    count: { type: Number, required: true },
  },
  emits: {
    add: (n: string) => true
  },
  scopeSlots: {
    add: (scope: { name: string, age: number }) => { },
  },
  setup(props, { emit, slots }) {
    const state = reactive({ name: 'ccj', age: 18 })
    function contentRender() {
      if (props.count > 5) {
        return (
          <div>大于5</div>
        )
      } else {
        return (
          <div>小于5</div>
        )
      }
    }
    return () => {
      return (
        <div >
          <div onClick={() => emit('add', '5')}>child-add-{props.count}</div>
          <div>{slots?.add?.(state)}</div>
          <div>{slots?.default?.()}</div>
          {contentRender()}
        </div>
      );
    };
  },
});
</script>
<style  scoped>
.bg {
  background-color: blue;
}
</style>
