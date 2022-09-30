
<template>
  <NavBar />
  <Banner />
  <BodyRanking />
  <Footer />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Banner from './components/Banner.vue'
  import BodyRanking from './components/BodyRanking.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      NavBar,
      Banner,
      BodyRanking,
      Footer
    },
  }
</script>
<style scoped>
</style>
