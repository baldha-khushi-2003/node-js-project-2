const express = require('express');
const port = 5000;
const app = express();
app.set('view engine','ejs');

let record=[
    {
        hashtag:24,
        taskname:'Buy Grocery',
        status:'ToDo',
        edit:"",
        remove:'',
    },
   
    {
        hashtag:25,
        taskname:'Send Email',
        status:'In Progress',
        edit:"",
        remove:'',
    },
    {
        hashtag:28,
        taskname:'Finish Assignment',
        status:'Complete',
        edit:"",
        remove:'',
    },
    {
        hashtag:30,
        taskname:'Bake Cake',
        status:'ToDo',
        edit:"",
        remove:'',
    },
    {
        hashtag:31,
        taskname:'In Progress',
        status:'ToDo',
        edit:"",
        remove:'',
    },
]
app.use(express.urlencoded());
app.get('/',(req,res)=>{
    return res.render('form',{
        record
    });
});
app.get('/addtask',(req,res)=>{
    return res.render('addtask',{
        record
    });
});
app.post('/data',(req,res)=>{
  let obj={
    hashtag:req.body.hashtag,
    taskname:req.body.taskname,
    status:req.body.status,
    edit:req.body.edit,
    remove:req.body.remove,
  }
  record.push(obj);
  return res.redirect('back');
});
app.get('/editdata',(req,res)=>{
    id=req.query.hashtag;
    let singlerecord=record.filter((val)=>{
        if(val.id==id){
            return val;
        }
    })
    return res.render('edit',{
       single:singlerecord[0]
    });

});

app.get('/deletedata',(req,res)=>{
    id=req.query.hashtag;
    let ans=record.filter((val)=>{
        if(val.hashtag==id){
            return val;
        }
    })
   record=ans;
   return res.redirect('back')
    });

app.listen(port,(err)=>{
if (err) {
    console.log("server not start");
    return false;
}
console.log("server is start on port" +port);
})