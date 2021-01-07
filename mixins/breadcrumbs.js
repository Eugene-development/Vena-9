import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({
      'getBread': 'navbar/breadcrumbs/getBread',
    })
  },

}
