const express=require('express');
const router=express.Router();
const Task=require('../models/task.js');
const {validateTask,isLoggedin}=require('../middlewrae.js');
const wrapAsync=require('../utils/wrapAsync.js')

router.get('/', isLoggedin,wrapAsync(async (req, res) => {
  const tasks = await Task.find({
    status: 'pending',
    user: req.user._id
  });

  const completed = await Task.find({
    status: 'completed',
    user: req.user._id
  });

  res.render('tasks/index.ejs',{tasks,completed});
}));

//new route
router.get('/new',isLoggedin,wrapAsync(async(req,res)=>{
    return res.render('tasks/new.ejs');
}));

router.post('/',isLoggedin,validateTask,wrapAsync(async (req,res)=>{
    let currentUser=res.locals.currentUser._id;
    let task=new Task({...req.body.task,user:currentUser});
    task=await task.save();
    console.log(task);
    if(task){
        req.flash('success','Task Added Succesfully✅');
    }
    res.redirect('/tasks');
}));

//Update task

router.get('/:id/edit',isLoggedin,wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const task=await Task.findById(id);
    res.render('tasks/edit.ejs',{task:task});
}));

//Update
router.put('/:id',isLoggedin,validateTask,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let {task}=req.body;
    let updatedTask = await Task.findOneAndUpdate(
        {_id:id},{...task}
    );

    if(!updatedTask){req.flash('error','Task you are trying to edit does not exist!');}
    else{req.flash('success','Task Updated Successfully🎯');}
    res.redirect('/tasks');
}));

router.put('/:id/complete',isLoggedin,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let task = await Task.findOneAndUpdate(
    { _id: id, user: req.user._id },
    { status: 'completed' },
    { new: true }
    );

    if(!task){req.flash('error','Task you requested does not exist!');}
    else{req.flash('success','Task Completed🎯');}
    res.redirect('/tasks');
}));

//delete route
router.delete('/:id',isLoggedin,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let task = await Task.findOneAndDelete({
    _id: id,
    user: req.user._id
    });
    if(task){
        req.flash('success','Task Deleted Successfully');
    }
    else{
        req.flash('error','Task you requested does not exist!');
    }  
    res.redirect('/tasks');  
}));

module.exports=router;