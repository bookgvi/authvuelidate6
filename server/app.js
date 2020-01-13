const http = require('http')

const host = 'localhost'
const port = 7000
const statusNotFound = 404
const statusOK = 200

const notFound = res => {
  const response = `{
    data: {
      errors: [
        { title: 'Ресурс не найден.' }
      ]
    }
  }`
  res.statusCode = statusNotFound
  res.setHeader('Content-Type', 'text/html; charset=utf-8;')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.write(response)
  res.end()
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      switch (req.url) {
        case '/': {
          res.statusCode = statusOK
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.write(JSON.stringify('<div style="text-align: center;"><h3>This is ROOT</h3></div>'))
          res.end()
          break
        }
        case '/home': {
          res.statusCode = statusOK
          res.setHeader('Content-Type', 'text/html; charset=utf-8;')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.write('<div style="text-align: center;"><h3>This is HOME</h3></div>')
          res.end()
          break
        }
        default: {
          notFound(res)
          break
        }
      }
      break
    }
    case 'POST': {
      switch (req.url) {
        case '/api/admin': {
          res.statusCode = statusOK
          res.setHeader('Content-Type', 'text/html; charset=utf-8;')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.write('<div style="text-align: center;"><h3>This is admin resource!!!</h3></div>')
          res.end()
          break
        }
        case '/api/user': {
          res.statusCode = statusOK
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.write('{ "a": "a" }')
          res.end()
          break
        }
        default: {
          notFound(res)
          break
        }
      }
      break
    }
    case 'OPTIONS': {
      res.statusCode = statusOK
      res.setHeader('Content-Type', 'text/html; charset=utf-8;')
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', '*')
      res.setHeader('Access-Control-Allow-Headers', '*')
      res.end()
      break
    }
    default: {
      notFound(res)
      break
    }
  }
})

server.listen(port, host, () => {
  console.log(`Listen on http://${host}:${port}`)
})
