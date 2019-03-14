<template>
  <div class="site-navigation" id="site-navigation" aria-hidden="true" :class="{ 'isOpen': toggleNav}">  
    <nav class="site-navigation--nav" role="navigation">
      <ul class="site-navigation--primary-links">
        <li class="site-navigation--link-container" @click="$store.dispatch('nav/toggleNav')">
          <nuxt-link to="/" class="link--underline">
            home
          </nuxt-link>
        </li>
        <li class="site-navigation--link-container" @click="$store.dispatch('nav/toggleNav')">
          <nuxt-link to="/our-services" class="link--underline">
            our services
          </nuxt-link>
        </li>
        <li class="site-navigation--link-container" @click="$store.dispatch('nav/toggleNav')">
          <nuxt-link to="/naomi-calla" class="link--underline">
            naomi calla
          </nuxt-link>
        </li>

      </ul>
      <ul class="site-navigation--secondary-links">
        <li class="site-navigation--link-container email">
          <i class="material-icons">email</i>
          <a class="link--underline" href="mailto:naomi@callalegal.ca">naomi@callalegal.ca</a>
        </li>  
        <li class="site-navigation--link-container phone">
          <i class="material-icons">phone</i>
          <a class="link--underline" href="tel:416-804-6303">416-804-6303</a>
        </li>
        <li class="site-navigation--link-container map">
          <i class="material-icons">place</i>
          <a class="link--underline" target="_blank" href="https://www.google.com/maps/place/140+Yonge+St+%23200,+Toronto,+ON+M2R+3V1/@43.6510756,-79.3814433,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb32e09c6e47:0x585e13ed519b167e!8m2!3d43.6510756!4d-79.3792546">
            140 Yonge Street, Suite 200</a>
        </li>			
			</ul>
    </nav>
  </div>
</template>

<script>
    export default {
        computed: {
            toggleNav() {
                return this.$store.getters['nav/toggleNav']
            }
        }
    }
</script>