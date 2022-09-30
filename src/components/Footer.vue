

<template>
  <div class="footer-rankings pt-3 relative text-black bg-yellow-100 w-100">
    <div class="sm:container text-white p-10">
      <div class="footer mt-3">
          <div class="font-opens xxl:w-3/5 mx-auto md:grid md:grid-cols-2 gap-0">
            <div class="md:border-r-2  border-gray-500 md:pr-16">
              <b  class="text-lg ">
                Đơn vị tổ chức
              </b>
              <a href="https://cmcglobal.com.vn/" target="_blank">
                <img src="@/assets/images/cmc-logo.png" class="my-10"/>
              </a>
              <p class="text-justify text-lg leading-7 text-gray-300">
                MC Global, thành viên của Tập đoàn Công nghệ CMC,tự hào thuộc TOP 2 công ty IT Outsourcing tại Việt Nam,với khát vọng đem những sản phẩm, giải pháp và dịch vụ CNTT Việt Nam ra thị trường quốc tế. Thông tin cuộc thi, vui lòng liên hệ: 
                <span class="text-primary"> dtanh8@cmcglobal.vn </span>
              </p>
              <div class="flex mt-5">
                <a href="https://www.facebook.com/cmcglobal.careers" target="_blank"> <img src="@/assets/images/icons/facebook.png" class="m-2"/> </a>
                <a href="mailto:recruitment@cmcglobal.vn" target="_blank"> <img src="@/assets/images/icons/gmail.png" class="m-2"/> </a>
                <a href="https://www.linkedin.com/company/cmc-global-careers/" target="_blank"> <img src="@/assets/images/icons/linkedin.png" class="m-2"/> </a>
              </div>
            </div>
            <div class="mt-10 md:mt-0 border-t-2 md:border-t-0 border-gray-500 pt-16 md:pt-0 md:pl-16">
              <b class="text-lg ">
                Đơn vị Đồng tổ chức & Bảo trợ truyền thông
              </b>
              <a href="https://viblo.asia/" target="_blank">
                <img src="@/assets/images/viblo-logo.png" class="my-10"/>
              </a>
              <p class="text-justify text-lg leading-7 text-gray-300">
                Viblo Platform là cộng đồng chia sẻ kiến thức và học tập về CNTT với nhiều nội dung đa dạng, hữu ích dành cho Engineers tại Việt Nam.
              </p>
              <div class="flex mt-5">
                <a href="https://viblo.asia" target="_blank"><img src="@/assets/images/icons/web.png" class="m-2"/> </a>
                <a href="https://www.facebook.com/viblo.asia" target="_blank"><img src="@/assets/images/icons/facebook.png" class="m-2"/> </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.footer-rankings {
  background-image: url('../assets/images/background-footer.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.rankings-header {
  text-shadow: 0px 3px 3px #43dcff;
}
.tops-col {
  background: linear-gradient(180deg, #0D2755 3.25%, rgba(15, 45, 100, 0.97) 13.74%, rgba(17, 55, 124, 0.92) 34.71%, rgba(18, 58, 132, 0.9) 50.91%, rgba(16, 53, 122, 0.91) 63.31%, rgba(12, 40, 94, 0.95) 81.42%, #07193F 98.58%);
}
</style>
