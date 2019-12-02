<template>
  <div class="components-container">
    <aside>
      富文本是管理
    </aside>
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data () {
    return {
      content:
      `<h1 style="text-align: center;">欢迎查看 TinyMCE 示例!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>使用<a href="//www.tinymce.com/docs/">文档</a>更好的熟悉如何去配置 TinyMCE.</li><li>如果有具体的疑问? 请拜访<a href="https://community.tinymce.com/forum/">社区</a>.</li>
      </ul>`
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>
