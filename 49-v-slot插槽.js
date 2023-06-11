// 插槽

// 1.什么是插槽？
// 插槽（Slot）是vue为组件的封装着提供的能力，允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽

// 2.后备内容
// 封装组件时，可以为预留的<slot>插槽提供后备内容（默认内容）。如果组件的使用者没有为插槽提供任何内容
// ，则后备内容会生效，示例代码为：
{/* <template>
    <p>这是MyCom1组件的第一个p标签</p>
    <slot>这是后备内容</slot>
    <p>这是 MyCom1组件的最后一个标签</p>
</template> */}

// 3.具名插槽
