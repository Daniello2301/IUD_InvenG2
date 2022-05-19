const mogose = require('mongoose')

const dbConn = async() => {

    try 
    {
        await mogose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Connection OK')
    } catch (error) {
        console.log("Connection data base error: ", error)
        throw new Error("Connection data base error")
    }
}
module.exports = { dbConn }     