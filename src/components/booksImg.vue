<template>
  <view>
      <view class="item_img">
        <view class="item_conter" v-for="item in imgList" :key="item.id">
          <view class="conter_img">
            <image :src="item.bookimg"></image>
          </view>
          <view class="conter_text">{{item.bookname}}</view>
          <view class="conter_price">
            <view class="price_new">￥{{item.newPrice}}</view>
            <view class="price_old">￥{{item.oldPrice}}</view>
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
    changeClick(id) {
      uni.navigateTo({
        url: `/pages/classDetails/index?id=${id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
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