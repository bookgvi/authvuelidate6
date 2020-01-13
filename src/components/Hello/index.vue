<template>
  <b-container>
    <b-row>
      <b-col>
        <div id="ssr"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Hello',
  data: () => ({
    res: ''
  }),
  mounted () {
    this.getResponse()
  },
  methods: {
    async getResponse () {
      const method = 'GET'
      const url = `http://127.0.0.1:7000`
      this.res = await this.$http(method, url, '')
      const ssrPoint = document.getElementById('ssr')
      ssrPoint.outerHTML = this.res
    }
  }
}
</script>

<style scoped>

</style>
