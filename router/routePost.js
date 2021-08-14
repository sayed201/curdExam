const express = require('express')
const postModel= require('../model/modelPost')
const router = express.Router()

router.post('/post/create', (req, res) =>{
    const {title, description, author}= req.body
    new postModel({
        title:title ,
        description:description,
        author:author
    }).save()
    .then(post=>{
        console.log(post)
        res.json({message:'Post created', post})
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
}),


router.get('/post/get-all', (req, res) =>{
    postModel.find()
    .then(doc=>{
        res.json(doc)
    }) .catch(err=>{
        res.json(err)
    })
}),


router.get('/post/get-single/:postid', (req, res) =>{
    const postID= req.params.postid

    postModel.findOne({_id:postID})
    .then(doc=>{
        
        res.json(doc)
    })
    .catch(err=>{
        res.json(err)
    })
}),

router.delete('/post/delete/:postid', (req, res) =>{
    const postID= req.params.postid

    postModel.findOneAndDelete({_id:postID})
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.json(err)
    })
}), 

router.put('/post/update/:postid', (req, res) =>{
    const postID= req.params.postid

    postModel.findOneAndUpdate({_id:postID},{
        title:req.body.title,
        description:req.body.description,
        author:req.body.author
    }, {new:true})
    // new true  to get  update  instanly 
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.json(err)
    })
}), 
module.exports = router;