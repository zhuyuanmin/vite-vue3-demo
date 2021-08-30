import { defineCustomElement } from 'vue'
import Detail from './Detail'


// 经验证，web-components 组件必须以 .vue 文件导入，使用 对象，defineComponent 构造的组件不会生效

const MyDetail = defineCustomElement(Detail)

customElements.define('my-button' , MyDetail)
