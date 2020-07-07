<template>
  <view>
    <swiperItem :swiperList="swiperList"></swiperItem>
    <booksItem :imgList="imgList"></booksItem>
  </view>
</template>

<script>
import swiperItem from '@/components/swiperItem'
import booksItem from '@/components/booksItem'
export default {
  data() {
    return {
      swiperList: [],
      imgList: []
    }
  },
  components: { swiperItem, booksItem },
  onLoad() {
    this.getSwiper()
    this.getContent()
  },
  methods: {
    async getSwiper() {
      const { data: res } = await this.$http({
        url: '/home/swiper'
      })
      this.swiperList = res.message.swiperURL
    },
    async getContent() {
      const { data: res } = await this.$http({
        url: '/home/content'
      })

      res.message.homeCataoryList.forEach(v => {
        v.list.pop()
      })
      this.imgList = res.message.homeCataoryList
      console.log(this.imgList)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
