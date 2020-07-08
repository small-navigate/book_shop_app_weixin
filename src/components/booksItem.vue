<template>
  <view>
    <view class="item" v-for="item in imgList" :key="item.id">
      <view class="item_text">
        <view @click="toDetails(item.id)" class="album_item">
          <view class="text">{{item.cataory}}</view>
        </view>
      </view>
      <view class="item_img">
        <view class="item_conter" v-for="item2 in item.list" :key="item2.id"  @click="changeClick(item2.id)">
          <view class="conter_img">
            <image :src="item2.bookimg"></image>
          </view>
          <view class="conter_text">{{item2.bookname}}</view>
          <view class="conter_price">
            <view class="price_new">￥{{item2.newPrice}}</view>
            <view class="price_old">￥{{item2.oldPrice}}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    imgList: Array
  },
  methods: {
    toDetails(id) {
      uni.navigateTo({
        url: `/pages/classDetails/index?id=${id}`
      })
    },
    changeClick(id) {
      uni.navigateTo({
        url: `/pages/books/index?id=${id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  padding-bottom: 20rpx;
  .item_text {
    padding-bottom: 20rpx;
    .text {
      padding: 10rpx 0;
      padding-left: 30rpx;
      width: 100vw;
      height: 70rpx;
      line-height: 50rpx;
      font-weight: 600;
      font-size: 40rpx;
      background-image: linear-gradient(
        to top right,
        rgba(236, 240, 241, 0.4),
        rgba(52, 152, 219, 0.4)
      );
    }
  }
}
.item_img {
  display: flex;
  flex-wrap: wrap;
  .item_conter {
    padding: 5rpx;
    width: 33.3%;
  }
  .conter_text {
    text-align: center;
    font-weight: 600;
    padding: 10rpx 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .conter_price {
    display: flex;
    height: 40rpx;
    .price_new {
      flex: 1;
      color: #cf3502;
      font-weight: 600;
      font-size: 32rpx;
      line-height: 40rpx;
    }
    .price_old {
      flex: 1;
      font-size: 24rpx;
      line-height: 40rpx;
      text-decoration: line-through;
    }
  }
}
</style>