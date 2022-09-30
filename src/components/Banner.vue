
<template>
  <div id="home" class="banner pt-3 bg-cover relative text-black bg-yellow-100 w-100">
    <img class="float-x absolute bottom-0 w-100" src="@/assets/images/header-man.png" />

    <div class="container text-white p-10">
      <div class="w-full text-center items-center lg:w-1/2">
        <div class="xl:w-2/3 mx-auto mt-16">
          <span class="text-2xl font-bold"> 
            Code & CTF Challenge 2022
          </span>
          <img src="@/assets/images/java-stage.png" class="mx-auto mt-5" />
          <img src="@/assets/images/BXH.png" class="w-full mx-auto mt-5" />
        </div>
      </div>
    </div> 

  </div>
</template>

<script>

</script>
<style scoped>
.banner {
  background-image: url('../assets/images/background.png');
  background-repeat: no-repeat;
  /* background-size: 100%; */
  height: calc(100vh);
}


@media  (min-width: 1440px){
.banner {
  background-size: 100%;
  height: calc(100vh);
}
}
.man-float {
  max-width: none;
  left: -50px;
  width: 100%;
}
</style>
