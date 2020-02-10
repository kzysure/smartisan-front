<template>
  <div id="header">
    <swiper style="width:1220px;margin: 0 auto;border-radius=5px;margin-bottom:0px;margin-top:25px;" :options="swiperOption">
            <swiper-slide style="width:100%;height:500px;" class="swiper-slide">
                <img style="border-radius:5px;width:100%;height:100%;" src="https://resource.smartisan.com/resource/f975876866ad188bdafbbaab6f7bb07c.jpeg?x-oss-process=image/resize,w_2440/quality,Q_100"/>
            </swiper-slide>
            <swiper-slide style="width:100%;height:500px;" class="swiper-slide">
                <img style="border-radius:5px;width:100%;height:100%;" src="https://resource.smartisan.com/resource/f1cc61461e08141debf520be50ab362f.png?x-oss-process=image/resize,w_2440/quality,Q_100"/>
            </swiper-slide>
                        <swiper-slide style="width:100%;height:500px;" class="swiper-slide">
                <img style="border-radius:5px;width:100%;height:100%;" src="https://resource.smartisan.com/resource/41a256069dc8efa13184e58d0e5eb157.png?x-oss-process=image/resize,w_2440/quality,Q_100
"/>
            </swiper-slide>

        </swiper>
  </div>

</template>

<script>

export default {
  name: 'indexSlider',
  data () {
    return {
      swiperOption: {
        //  显示分页
        pagination: {
          el: '.swiper-pagination'
        },
        //  设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //  自动轮播
        autoplay: {
          delay: 2000,
          //  当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //  开启循环模式
        loop: true
      }

    }
  }

}
</script>

<style>
</style>
