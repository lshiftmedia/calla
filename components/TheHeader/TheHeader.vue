<template>
   <header class="masthead mini white" role="banner" :class="{'isOpen' : toggleNav}">
    <div class="masthead-left">
      <nuxt-link to="/"  @click="$store.dispatch('nav/toggleNav')">
        <h1 class="logo">
          <span class="logo-text">Calla Legal</span>
          <img src="../../assets/calla_logo.png" alt="Calla Logo" title="Calla Logo">
        </h1>
      </nuxt-link>
    </div>
    <div class="masthead-right">
      <button @click="$store.dispatch('nav/toggleNav')" id="menu__icon" class="menu__mobile navTrigger" :class="{'isOpen' : toggleNav}">
        <span class="navTrigger-outer">
          <span class="navTrigger-inner"></span>
        </span>
      </button>
    </div>
  </header>
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