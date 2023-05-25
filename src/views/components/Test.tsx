

const DesignNumber = designComponent({
  props: {
    modelValue: { type: Number }
  },
  emits: {
    onUpdateModelValue: (val?: number) => true,
    onAddNum: (val: number) => true,
    onSubNum: (val: number) => true
  },
  setup({ props, event }) {
    const { emit } = event

    const handler = {
      onClickAdd: () => {
        const val = props.modelValue == null ? 1 : props.modelValue + 1
        emit.onAddNum(val)
        emit.onUpdateModelValue(val)
      },
      onClickSub: () => {
        const val = props.modelValue == null ? 1 : props.modelValue - 1
        emit.onSubNum(val)
        emit.onUpdateModelValue(val)
      }
    }

    return () => (
      <div>
        <button onClick={handler.onClickSub}>-</button>
        <button>{props.modelValue == null ? 'N' : props.modelValue}</button>
        <button onClick={handler.onClickAdd}>+</button>
      </div>
    )
  }
})

export default DesignNumber

function designComponent(arg0: { props: { modelValue: { type: NumberConstructor } }; emits: { onUpdateModelValue: (val?: number) => boolean; onAddNum: (val: number) => boolean; onSubNum: (val: number) => boolean }; setup({ props, event }: { ... }): () => import("vue/jsx-runtime").JSX.Element }) {
    throw new Error("Function not implemented.")
}
