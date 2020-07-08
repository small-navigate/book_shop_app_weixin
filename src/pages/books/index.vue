<template>
  <view>
    <view class="book_item">
      <image :src="book.bookimg" mode="widthFix"></image>
    </view>
    <view class="book_info">
      <view class="info_bookname">{{book.bookname}}</view>
      <view class="info_info">
        <view class="info_author">
          作者：<text>{{book.author}}</text>
        </view>
        <view class="info_pubcompany">
          出版社：<text>{{book.pubcompany}}</text>
        </view>
      </view>
      <view class="info_score">
        <view class="score_viewcount">
          月销：<text>{{book.viewcount}}</text>
        </view>
        <view class="score_score">
          评分：<text>{{book.score}}</text>
        </view>
      </view>
      <view class="info_price">
        <view class="new_price">现价 {{book.newPrice}}</view>
        <view class="old_price">原价 {{book.oldPrice}}</view>
      </view>
      <view class="info_btn">
        <view class="new_price"><view>购物车</view></view>
        <view class="old_price"><view>立即购买</view></view>
      </view>
    </view>
    <view class="book_recommend">
      <view class="text">同类推荐</view>
      <booksImg :imgList="bookList" :styles="styles"></booksImg>
    </view>
    
  </view>
</template>
<script>
import booksImg from '@/components/booksImg'
export default {
  components: { booksImg },
  data() {
    return {
      bookId: 0,
      book: [],
      bookList: [],
      styles: {
        width: '33.3%'
      }
    }
  },
  onLoad(options) {
    this.bookId = options.id
    console.log(options)
    this.getItem()
  },
  methods: {
    async getItem() {
      const { data: res } = await this.$http({
        url: `/bookItem/${this.bookId}`
      })
      this.book = res.message.data[0]
      this.bookList = res.message.bookList
      this.bookList.pop()
    }
  }
}
</script>
<style lang="scss" scoped>
.book_item{
  width: 60%;
  margin: 0 auto;
}
.book_info{
  margin-top: 30rpx;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 40rpx;
  .info_bookname{
    font-weight: 600;
    font-size: 44rpx;
    color: rgb(0, 0, 0);
  }
  .info_info{
    display: flex;
    font-size: 32rpx;
    text{
      color: #ff7979;
    }
    .info_author{
      flex: 1;
    }
    .info_pubcompany{
      flex: 1;
    }
  }
  .info_score{
    display: flex;
    font-size: 32rpx;
    text{
      color: #ff7979;
    }
    .score_viewcount{
      flex: 1;
    }
    .score_score{
      flex: 1;
    }
  }
  .info_price{
    display: flex;
    height: 36rpx;
    margin: 10rpx 0;
    .new_price{
      flex: 1;
      color: #ff7979;
      font-size: 36rpx;
      font-weight: 600;
      line-height: 36rpx;
    }
    .old_price{
      flex: 1;
      text-decoration: none;
      line-height: 36rpx;
      text-decoration: line-through;
    }
  }
  .info_btn{
    display: flex;
    height: 60rpx;
    .new_price{
      flex: 1;  
      view{
        width: 200rpx;
        height: 60rpx;
        background-color: #d4237a;
        border: 1px solid #d4237a;
        border-radius: 20rpx;
        box-shadow: 5rpx -5rpx 5rpx rgba(212, 35, 122, .6);
        text-align: center;
        line-height: 60rpx;
        color: #fff;
      }
    }
    .old_price{
      flex: 1;
       view{
        width: 200rpx;
        height: 60rpx;
        background-color: #d4237a;
        border: 1px solid #d4237a;
        border-radius: 20rpx;
        box-shadow: 5rpx -5rpx 5rpx rgba(212, 35, 122, .6);
        text-align: center;
        line-height: 60rpx;
        color: #fff;
      }
    }
  }
}

.book_recommend{
  .text{
    padding: 20rpx;
    font-size: 36rpx;
    font-weight: 600;
  }
}
</style>