const middleware=(req,res,next)=>{
let age=req.query.age
if(age==null||age==""||typeof(age)!=Number){
    res.send(`<h1>Please Provide your age using ?age and type your age only in number format for accessing this website</h1>`)
}else if(age<=18){
    res.send("<h1>You must be 18 above for accessing this website</h1>")
}else{
    next()
}
}
module.exports=middleware