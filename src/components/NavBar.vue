
<template>
  <div class="nav-bar sticky top-0 text-black w-100">
    <div @click="show" class="container text-bold font-open-sans text-white nav-bar-content h-100 mx-auto flex justify-between items-center"> 
      <img @click.prevent="scrollToSection('home')" src="@/assets/images/Logo.png" class="w-3/4 cursor-pointer sm:w-fit"/> 
      <div class="hidden lg:block menu text-sm xxl:text-lg font-bold">
        <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-10 font-bold">
          Cách thức thi đấu
        </a>
        <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-10 font-bold">
          Thể lệ
        </a>
        <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-10 font-bold">
          Cách thức tham gia
        </a>
        <span class="font-bold text-primary cursor-pointer" 
          @click.prevent="scrollToSection('ranking-tables')"
        >
          Bảng xếp hạng
        </span >
      </div>
      <div class="block lg:hidden text-sm xxl:text-lg font-bold">
        <img @click="show" v-if="!showMenu" width="30" src="@/assets/images/icons/bars-solid.svg" class="cursor-pointer"/>
        <img @click="show" v-if="showMenu" width="30" src="@/assets/images/icons/xmark-solid.svg" class="cursor-pointer"/>
      </div>
    </div>
    <div v-if="showMenu" class="block lg:hidden w-full flex flex-col item-center text-center bg-linear">
      <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-5 py-5 text-white font-bold">
        Cách thức thi đấu
      </a>
      <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-5 py-5  text-white font-bold">
        Thể lệ
      </a>
      <a href="https://s2k.cmcglobal.com.vn/ctf" target="_blank" class="mr-5 py-5  text-white font-bold">
        Cách thức tham gia
      </a>
      <span class="font-bold text-primary py-5 cursor-pointer" 
        @click.prevent="scrollToSection('ranking-tables')"
      >
        Bảng xếp hạng
      </span >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
      }
    },
    methods: {
      scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
      },

      show() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>
<style scoped>
.nav-bar {
  height: 100px;
  z-index: 10;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15) !important;
  background: linear-gradient(273.21deg, #DC2670 -39.87%, #C9227B -33.97%, #971898 -16.58%, #6D0FB0 0.6%, #4C09C3 17.22%, #3504D0 33.12%, #2701D8 47.99%, #2200DB 60.83%, #2D0088 108.05%);
}

.bg-linear {
  background: linear-gradient(273.21deg, #DC2670 -39.87%, #C9227B -33.97%, #971898 -16.58%, #6D0FB0 0.6%, #4C09C3 17.22%, #3504D0 33.12%, #2701D8 47.99%, #2200DB 60.83%, #2D0088 108.05%);
}

.nav-bar-content {
  height: inherit;
  font-size: 1em;
}
</style>
