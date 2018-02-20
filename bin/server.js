// const http = require('http')
const app = require('../index')

const PORT = parseInt(process.env.PORT, 10) || 8000
app.set('port', PORT)

// const server = http.createServer(app)
// server.listen(PORT)

app.listen(PORT)

console.log(`-------------------------------------  Server up on port ${PORT} -------------------------------------`)
