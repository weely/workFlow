<template>
  <div class="app-container">
    <aside>
      引导页对于那些首次进入项目的人很有用，可以简单介绍下项目的功能。本 Demo 是基于
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      打开引导页
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data () {
    return {
      driver: null
    }
  },
  mounted () {
    this.driver = new Driver({
      doneBtnText: '完成', // 结束按钮的文字
      stageBackground: '#ffffff', // 突出显示元素的背景颜色
      nextBtnText: '下一步', // 下一步按钮的文字
      prevBtnText: '上一步', // 上一步按钮的文字
      closeBtnText: '关闭' // 关闭按钮的文字
    })
  },
  methods: {
    guide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
