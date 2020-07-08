<template>
  <view id="details">
    <scroll-view scroll-x enable-flex class="scroll_nav">
      <view class="scorll_content">
        <view
          v-for="item in cataoryList"
          :key="item.id"
          class="scroll_item"
          :class="[(item.id == query)?'acitve':'']"
          @click="toClassDetails(item.id)"
        >{{item.cataory}}</view>
      </view>
    </scroll-view>
    <booksImg :imgList="booksList" :styles="styles"></booksImg>
  </view>
</template>
<script>
import booksImg from '@/components/booksImg'
export default {
  components: { booksImg },
  data() {
    return {
      query: '',
      count: 0,
      cataoryList: [],
      booksList: [],
      styles: {
        width: '33.3%'
      }
    }
  },
  onLoad(options) {
    this.query = options.id
    console.log(options)
    this.getCataoryList()
    this.getList()
  },
  onReachBottom() {
    this.getList()
  },
  methods: {
    // 获取导航栏数据
    async getCataoryList() {
      const { data: res } = await this.$http({
        url: '/classification/cataory'
      })
      this.cataoryList = res.message.data
      console.log(this.cataoryList)
    },
    //获取分类导航数据
    async getList() {
      this.count++
      const { data: res } = await this.$http({
        url: `/classification/${this.query}/${this.count}`
      })
      this.booksList = [...this.booksList, ...res.message.data]
      console.log(this.booksList)
    },
    toClassDetails(id) {
      this.query = id
      this.count = 0
      this.booksList = []
      this.getList()
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll_nav {
  box-sizing: content-box;
  height: 60rpx;
  display: flex;
  .scorll_content {
    display: flex;
    width: 1600rpx;
    .scroll_item {
      height: 60rpx;
      width: 200rpx;
      line-height: 60rpx;
      text-align: center;
      font-weight: 600;
    }
    .acitve {
      color: #d4237a;
    }
  }
}
</style>