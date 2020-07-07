<template>
  <view>123</view>
</template>
<script>
export default {
  data() {
    return {
      query: '',
      count: 0
    }
  },
  onLoad(options) {
    this.query = options.id
    console.log(options)
    this.getCataoryList()
    this.getList()
  },
  methods: {
    // 获取导航栏数据
    async getCataoryList() {
      const { data: res } = await this.$http({
        url: '/classification/cataory'
      })
      console.log(res)
    },
    //获取分类导航数据
    async getList() {
      this.count++
      const { data: res } = await this.$http({
        url: `/classification/${this.query}/${this.count}`
      })
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>