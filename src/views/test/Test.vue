<template>
  <div class="test-index" style="margin:20px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="树" prop="treeData" style="margin-bottom:240px;">
        <el-cascader
          ref="treeData"
          :options="options"
          :props="props"
          collapse-tags
          v-model="treeData"
          clearable
        >
        </el-cascader>
      </el-form-item>
      <el-form-item>
          {{ count }}
        {{ treeData }}
        <el-button @click="changeData">点击更换数据</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      props: { multiple: true, emitPath: false },
      form: {
        treeData: [8, 9, 10, 11, 12, 13, 14, 15, 16]
      },
      treeData: [8, 9, 10, 11, 12, 13, 14, 15, 16],
      options: [
        {
          value: 1,
          label: '东南',
          children: [
            {
              value: 2,
              label: '上海',
              children: [
                { value: 3, label: '普陀' },
                { value: 4, label: '黄埔' },
                { value: 5, label: '徐汇' }
              ]
            },
            {
              value: 7,
              label: '江苏',
              children: [
                { value: 8, label: '南京' },
                { value: 9, label: '苏州' },
                { value: 10, label: '无锡' }
              ]
            },
            {
              value: 12,
              label: '浙江',
              children: [
                { value: 13, label: '杭州' },
                { value: 14, label: '宁波' },
                { value: 15, label: '嘉兴' }
              ]
            }
          ]
        },
        {
          value: 17,
          label: '西北',
          children: [
            {
              value: 18,
              label: '陕西',
              children: [
                { value: 19, label: '西安' },
                { value: 20, label: '延安' }
              ]
            },
            {
              value: 21,
              label: '新疆维吾尔族自治区',
              children: [
                { value: 22, label: '乌鲁木齐' },
                { value: 23, label: '克拉玛依' }
              ]
            }
          ]
        }
      ],
      count: 16
    }
  },
  watch: {
    treeData: function (val, oldVal) {
      console.log(val)
      console.log(this)
      this.$nextTick((nodeItem) => {
        // this.$forceUpdate()
        console.log(nodeItem)
        this.$refs.treeData.handleExpandChange(val)
      })
    }
    // treeData: {
    //   deep: true,
    //   sync: true,
    //   handler (val, oldVal) {
    //     console.log(val)
    //     console.log(this)
    //     this.$refs.treeData.
    //   }
    // }
  },
  methods: {
    test () {
      console.log(this.treeData)
    },
    changeData () {
      const key = this.count
      if (this.treeData.includes(key)) {
        // this.treeData.push(key)
        // this.treeData = [...this.treeData, key]
        const itemIndex = this.treeData.indexOf(key)
        console.log(itemIndex)
        this.treeData = this.treeData.filter(item => {
          console.log(item !== key)
          return item !== key
        })
        // if (itemIndex !== -1) {
        //   this.treeData.splice(itemIndex, 1)
        // }
        console.log(this.treeData)
        this.count--
      }
    }
  }
}
</script>

<style></style>
