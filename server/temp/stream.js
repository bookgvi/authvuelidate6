const fs = require('fs')

const wrStream = fs.createWriteStream('file.stream')
wrStream.write('WTF\n')
wrStream.write('This is th next line')
wrStream.end()

const readStream = fs.createReadStream('file.stream', 'utf-8')

readStream.on('data', (chunk) => {
  console.log(chunk)
})
