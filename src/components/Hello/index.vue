<template>
  <b-container>
    <b-row>
      <b-col>
        <span v-html="pageSSR"></span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Hello',
  data: () => ({}),
  computed: {
    pageSSR: {
      get () {
        console.log(this.getResponse())
        return this.getResponse()
      }
    }
  },
  methods: {
    async getResponse () {
      const url = `http://127.0.0.1:7000/api/user`
      const res = this.$http('POST', url, '')
      return res
    }
  }
}
</script>

<style scoped>

</style>
