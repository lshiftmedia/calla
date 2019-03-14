<template>
  <div>
    <TheHeader />
    <TheNav />
      <div class="wrapper open opened">
        <main id="main-content" class="main-content" tabindex="-1">
        <nuxt/>
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheNav from '@/components/TheNav/TheNav'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheNav,
    TheFooter
  }  
}
</script>

<style lang="scss">
  // @import '@/styles/style.scss';
  @import '@/assets/styles/style.scss';
</style>