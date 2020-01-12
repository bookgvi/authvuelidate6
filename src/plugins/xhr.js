import Vue from 'vue'

const instance = function (method, url, payload) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const jwt = localStorage.getItem('jwt')
    xhr.open(method, url)
    if (jwt) {
      xhr.setRequestHeader('Authorized', `Bearer ${jwt}`)
    }
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.addEventListener('load', () => {
      if (xhr.state === 200 || xhr.readyState === 4) {
        resolve(JSON.parse(xhr.response))
      } else {
        const err = new Error(xhr.statusText)
        err.code = xhr.status
        reject(err)
      }
    })
    xhr.addEventListener('error', () => {
      resolve(xhr.response)
    })
    xhr.send(JSON.stringify(payload))
  })
}

Plugin.install = (Vue, options) => {
  Vue.$http = instance
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return instance
    }
  })
}

Vue.use(Plugin)

export default Plugin
