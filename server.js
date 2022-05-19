const dotenv = require('dotenv').config()
const app = require('./index')
const { dbConn } = require('./database/config')

//Configuration port
app.set('port', process.env.PORT || 3000)

const Conn = dbConn()

// Port listening
app.listen(app.get('port'), () => {
    console.log(`Listening in the port: ${app.get('port')}`)
})