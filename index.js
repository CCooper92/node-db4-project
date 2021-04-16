require('dotenv').config()
const server = require("./api/server.js")
const PORT = process.env.PORT || 2000

server.listen(PORT, () => console.log(`API running on port ${PORT}`))