<template>
  <view>
    <swiper indicator-dots autoplay circular interval="3000">
      <swiper-item v-for="item in swiperList" :key="item.id">
        <image mode="widthFix" :src="item.swiper" ></image>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
export default {
  props: {
    swiperList: Array
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
