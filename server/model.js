const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/onlinechat'

mongoose.connect(DB_URL,{ useNewUrlParser: true })
mongoose.connection.on('connected', function(){
    console.log('mongodb connect successful')
})

const models = {
    user: {
        'userName': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type' : {type: String, require: true},
        'avatar' : {type: String},
        'desc' : {type: String},
        'title' : {type: String}
    },
    chat: {

    }
}

for(let i in models) {
    mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}