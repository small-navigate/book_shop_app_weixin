<template>
  <view class="content">
    <scroll-view scroll-y class="scroll_nav">
      <view
        v-for="item in tagList"
        :key="item.id"
        class="scroll_item"
        :class="[(params.tagId == item.id)?'acitve':'']"
        @click="changeTag(item.id)"
      >{{item.tag}}</view>
    </scroll-view>
    <scroll-view scroll-y class="scroll_book" @scrolltolower="scrolltolower">
      <booksImg :imgList="bookList" :styles="styles"></booksImg>
    </scroll-view>
  </view>
</template>

<script>
import booksImg from '../../components/booksImg'
export default {
  components: {
    booksImg
  },
  data() {
    return {
      tagList: [],
      params: {
        tagId: 0,
        currentPage: 1,
        pageSize: 10
      },
      total: 300,
      bookList: [],
      styles: {
        width: '50%'
      }
    }
  },
  onLoad() {
    this.params.tagId = 1
    this.getList()
    this.getBookList()
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http({ url: '/details' })
      this.tagList = res.message.data
      console.log(this.tagList)
    },
    async getBookList() {
      const { data: res } = await this.$http({
        url: `/detailsTag`,
        data: this.params
      })
      this.total = res.message.total
      this.bookList = [...this.bookList, ...res.message.data]
    },
    changeTag(id) {
      this.params.tagId = id
      this.params.currentPage = 1
      this.bookList = []
      this.getBookList()
    },
    scrolltolower() {
      if (this.bookList.length !== this.total) {
        this.params.currentPage++
        this.getBookList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  .scroll_nav {
    height: 100vh;
    flex: 1;
    border-right: 1px solid red;
    .scroll_item:last-child {
      border-bottom: none;
    }
    .scroll_item {
      height: 60rpx;
      line-height: 60rpx;
      font-weight: 600;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
    .acitve {
      color: #d4237a;
    }
  }
  .scroll_book {
    flex: 3;
    height: 100vh;
  }
}
</style>
