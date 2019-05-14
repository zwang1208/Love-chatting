const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res){
    //User.remove({},function(e,d){}) //remove all items
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})
Router.get('/info', function(req, res){
    return res.json({code: 1})
})

Router.post('/login', function(req, res){
    const {userName, pwd} = req.body;
    User.findOne({userName, pwd: md5Pwd(pwd)}, {pwd: 0}, function(err, doc){    //not return password
        if(!doc) {
            return res.json({code: 1, msg: 'Username or Password is incorrect.'})
        }
        return res.json({code:0, data: doc})
    })
})

Router.post('/register', function(req, res){
    console.log(req.body)
    const {userName, pwd, type} = req.body;
    User.findOne({userName}, function(err, doc){
        if(doc) {
            return res.json({code: 1, msg: 'Duplicate username'})
        }
        User.create({userName,type, pwd: md5Pwd(pwd)}, function(err, doc){
            if(err) {
                return res.json({code: 1, msg:'server error'})
            }
            return res.json({code: 0})
        })
    })
})

function md5Pwd(pwd) {
    const salt = 'i_love_chattingx85275!*&%$#9348sklmf~~/\=+-';
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router;