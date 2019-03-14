<template>
  <article class="news-item">
    <div class="module hero-story light-all has-image " data-visible="true" data-has-animated="true" data-position="in-viewport">
      <div v-if="hero.image" class="module-background" 
        :style="{ backgroundImage: 'url(' + hero.image + ')' }">
      </div>
      <div v-else class="module-background" 
        :style="{ backgroundColor: '#' + hero.heroBgColor }">
      </div>

      <div class="module-content">
        <div class="hero-content">
          <h1 class="headline isFirst">{{hero.headline}}</h1>
          <div class="subhead isThird">{{hero.subhead}}</div>
        </div>
      </div>
    </div>
    <section class="article-wrapper white-bg">
      <div class="module body-copy-flexible white-bg">
        <div class="module-content">
          <div class="article-content">
            <p v-for="(contents, i) in content" :key="i">{{contents}}</p>
            <p>To learn more about our services, 
              <nuxt-link to="/our-services" class="copyLink link--underline">
              click here.
            </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>

export default {
  components: {
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then(res => {
      // console.log(res.data)
      return {
        title: res.data.story.content.title,
        hero: res.data.story.content.hero[0],
        content: res.data.story.content.content.split('\n')
      }
    })
  }
}
</script>

<style scoped>
  .container p {
    white-space: pre;
  }
</style>
