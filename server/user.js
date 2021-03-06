const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')

const _filter = {pwd: 0, __v: 0}

Router.get('/list', function(req, res){
    //User.remove({},function(e,d){}) //remove all items
    const {type} = req.query
    User.find({type}, function(err, doc){
        return res.json({code:0, data:doc})
    })
})
Router.get('/info', function(req, res){
    console.log(req.cookies)
    const { userid } = req.cookies;
    if(!userid) {
        return res.json({code: 1})
    }
    User.findOne({_id: userid}, _filter, function(err, doc){
        if(err) {
            return res.json({code: 1, msg: 'server error'})
        }
        if(doc) {
            return res.json({code: 0, data: doc})
        }
    })
})

Router.post('/update', function(req, res){
    const {userid} = req.cookies;
    if(!userid) {
        return json.dumps({code:1})
    }
    User.findByIdAndUpdate(userid, req.body, function(err, doc){
        const data = Object.assign({}, {
            userName: doc.userName,
            type: doc.type
        }, req.body)
        return res.json({code:0, data})
    })
})

Router.post('/login', function(req, res){
    const {userName, pwd} = req.body;
    User.findOne({userName, pwd: md5Pwd(pwd)}, _filter, function(err, doc){    //not return password
        if(!doc) {
            return res.json({code: 1, msg: 'Username or Password is incorrect.'})
        }
        res.cookie('userid', doc._id)
        return res.json({code:0, data: doc})
    })
})

Router.post('/register', function(req, res){
    const {userName, pwd, type} = req.body;
    User.findOne({userName}, function(err, doc){            //look for username
        if(doc) {                                               
            return res.json({code: 1, msg: 'Duplicate username'})
        }
        const userModel = new User({userName,type, pwd: md5Pwd(pwd)}); // use save() can get id
        userModel.save(function(err, doc){
            if(err) {
                return res.json({code: 1, msg:'server error'})
            }
            const {userName, type, _id} = doc;
            res.cookie('userid', _id);
            return res.json({code: 0, data: {userName, type, _id}})
        })
        // User.create({userName,type, pwd: md5Pwd(pwd)}, function(err, doc){  
        //     if(err) {
        //         return res.json({code: 1, msg:'server error'})
        //     }
        //     return res.json({code: 0})
        // })
    })
})

Router.get('/msglist', function(req,res){
    console.log(req.cookies.userid)
    Chat.find({}, function(err,doc){
        if(!err){
            return res.json({code:0, msgs: doc})
        }
    })
})

function md5Pwd(pwd) {
    const salt = 'i_love_chattingx85275!*&%$#9348sklmf~~/\=+-';
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router;