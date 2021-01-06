<template>
  <div>
    <Menu />
<!--    <Menu :paginateMenu="paginateMenu"/>-->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import { Menu } from '~/components'

export default {
  // middleware: 'access',
  components: {
    Menu,
  },
  async asyncData({store}) {
    await store.dispatch('content/navigation/menu/fetch')
  },

  computed: {
    ...mapGetters({
      paginateMenu: 'content/navigation/menu/paginateMenu',
    }),
  },

  nuxtI18n: {
    paths: {
      en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/a-propos', // -> accessible at /fr/a-propos
      es: '/sobre'     // -> accessible at /es/sobre
    }
  },


  data() {
    return {
      title: 'blablabla',
      // breadcrumbs: 'test'
    }
  },
  head()
  {
    return {
      title: this.title,
      // breadcrumbs: this.breadcrumbs,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'тест дескриптион'
        }
      ]

    }
  }}
</script>

<style scoped>

</style>
