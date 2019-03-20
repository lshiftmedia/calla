<template>
  <article class="news-item">
  <div class="module hero-story light-all has-image " data-visible="true" data-has-animated="true" data-position="in-viewport">
    <div v-if="hero.heroImage" class="module-background" 
      :style="{ backgroundImage: 'url(' + hero.heroImage + ')' }">
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
          <div class="article-content" v-editable="blok">
            <template v-for="(bodies, i) in body">
              <h3 v-if="bodies.header" :key="i">{{bodies.header}}</h3>
              <p v-if="bodies.copy" :key="bodies.copy[i]">{{bodies.copy}}</p>
            </template>
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
    // let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi.get('cdn/stories/our-services', {
      // version: version
      version: 'draft'
    }).then(res => {
      return {
        blok: res.data.story.content,
        hero: res.data.story.content.hero[0],
        header: res.data.story.content.header,
        body: res.data.story.content.body,
        title: res.data.story.content.pageTitle,
        description: res.data.story.content.pageDescription
      }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: this.description }
      ]
    }
  },
  // data: {
  //   bodyArr: null
  // },
  // created () {
  //   this.createBody();
  // },
  // methods: {
  //   createBody () {
  //     this.bodyArr = this.body;
  //     console.log(this.bodyArr)
  //   }
  // }
  // mounted () {
  //   this.$storybridge.on(['input', 'published', 'change'], (event) => {
  //     if (event.action == 'input') {
  //       if (event.story.id === this.story.id) {
  //         this.story.content = event.story.content
  //       }
  //     } else {
  //       window.location.reload()
  //     }
  //   })
  // }
}
</script>

<style scoped>
  .container p {
    white-space: pre;
  }
</style>
