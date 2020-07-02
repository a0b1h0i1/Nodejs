const express = require('express')
const router = express.Router()
const users = require('../module/list')


router.get('/', async(req,res) => {
    try{
           const a = await users.find()
           res.json(a)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const a = await users.findById(req.params.id)
           res.json(a)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const a = new users({
        name: req.body.name,
        age: req.body.age,
        gen: req.body.gen,
        mobile: req.body.mobile
    })

    try{
        const a1 =  await a.save() 
        res.json('This Record is Inserted successfully')
    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const a = await users.findById(req.params.id) 
        a.gen = req.body.gen
        a.name = req.body.name
        a.mobile = req.body.mobile
        a.age = req.body.age
        const a1 = await a.save()
        res.json('This Record is Updated successfully')   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id', async(req,res)=>{
    try{
        const a = await users.findById(req.params.id) 
        const a1 = await a.delete()
        res.json('This Record Successfully Deleted')
        
    }catch(err){
        res.send('Error')
    }
})

module.exports = router
