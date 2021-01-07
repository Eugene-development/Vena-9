<template>
  <div>
    <Menu />
<!--    <Menu :paginateMenu="paginateMenu"/>-->
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

import { Menu } from '~/components';
import breadcrumbs from "@/mixins/breadcrumbs";
import tabs from "@/mixins/tabs";

export default {
  // middleware: 'access',
  components: {
    Menu,
  },
  mixins: [breadcrumbs, tabs],

  async asyncData({store}) {
    await store.dispatch('content/navigation/menu/fetch')
  },

  computed: {
    ...mapGetters({
      paginateMenu: 'content/navigation/menu/paginateMenu',
    }),
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
