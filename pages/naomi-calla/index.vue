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

    <!-- <div class="hero-scroll-down-container" data-loadmodule="HeroArrow">
        <div class="icon-arrow"></div>
    </div> -->
    </div>
    <section class="article-wrapper white-bg">
      <div class="module body-copy-flexible white-bg">
        <div class="module-content">
          <div class="article-content" v-editable="blok">
            <h3 v-if="header">
              {{header}}
            </h3>
            <template v-for="(bodies, i) in body">
              <template v-if="bodies.image">
                <div :key="bodies[i]" class="people">
                  <div class="imgWrap">
                    <img class="" :src="bodies.image" :style="{'border-radius': '50%'}">
                  </div>
                  <div class="imgWrapText imgWrapText-quarter">
                    <p v-if="bodies.copy" :key="bodies.copy[i]">{{bodies.copy}}</p>
                  </div>
                </div>
              </template>
              <template v-else>
              <h3 v-if="bodies.header" :key="i">{{bodies.header}}</h3>
              <p v-if="bodies.copy" :key="bodies.copy[i]">{{bodies.copy}}</p>
              </template>
            </template>
            <template v-for="(lists, i) in list_group">
              <h3 v-if="lists.list_header" :key="lists.list_header[i]">{{lists.list_header}}</h3>
              <ul :key="i">
                <li v-for="(list_items, i) in lists.list_item" :key="list_items.name[i]">{{list_items.name}}
                </li>
              </ul>
            </template>
            <template v-for="(plinks, i) in plink">
              <p :key="plinks[i]">{{plinks.p_text}} 
                <nuxt-link :to="{ path: plinks.link_href }" class="copyLink link--underline">
                  {{plinks.link_copy}}
                </nuxt-link>
              </p>
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
    return context.app.$storyapi.get('cdn/stories/naomi-calla', {
      // version: version
      version: 'draft'
    }).then(res => {
      console.log(res.data)
      return {
        blok: res.data.story.content,
        hero: res.data.story.content.hero[0],
        header: res.data.story.content.header,
        body: res.data.story.content.body,
        list_group: res.data.story.content.lists,
        title: res.data.story.content.pageTitle,
        description: res.data.story.content.pageDescription,
        plink: res.data.story.content.paraLink
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
  }
}

</script>

<style>
.post-thumbnail {
    width: 200px;
    height: 200px;
    display: block;
}
</style>
