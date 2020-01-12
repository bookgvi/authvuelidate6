const http = require('http')

const host = 'localhost'
const port = 7000
const statusNotFound = 404
const statusOK = 200

const notFound = res => {
  res.statusCode = statusNotFound
  res.setHeader('Contetn-Type', 'text/html; charset=utf-8;')
  res.write('<div style="text-align: center;"><h3>Not found</h3></div>')
  res.end()
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      switch (req.url) {
        case '/': {
          res.statusCode = statusNotFound
          res.setHeader('Contetn-Type', 'text/html; charset=utf-8;')
          res.write('<div style="text-align: center;"><h3>This is ROOT</h3></div>')
          res.end()
          break
        }
        case '/home': {
          res.statusCode = statusNotFound
          res.setHeader('Contetn-Type', 'text/html; charset=utf-8;')
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
          res.statusCode = statusNotFound
          res.setHeader('Contetn-Type', 'text/html; charset=utf-8;')
          res.write('<div style="text-align: center;"><h3>This is admin resource!!!</h3></div>')
          res.end()
          break
        }
        case '/api/user': {
          res.statusCode = statusNotFound
          res.setHeader('Contetn-Type', 'text/html; charset=utf-8;')
          res.write('<div style="text-align: center;"><h3>This is user resource!</h3></div>')
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
    default: {
      notFound(res)
      break
    }
  }
})

server.listen(port, host, () => {
  console.log(`Listen on http://${host}:${port}`)
})
