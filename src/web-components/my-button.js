import { defineCustomElement } from 'vue'

const MyButton = defineCustomElement({
  props: ['size', 'myMessage'],
  template: `
    <div @click="click">自定义按钮 {{size}}</div>
  `,
  methods: {
    click() {
      alert('点击事件')
    }
  },
})

customElements.define('my-button' , MyButton)
