const express=require ('express')
const app=express ()


//condition 
app.use(Time=(req,res,next)=>{
    var now = new Date()
    let heure = now.getHours()
    

if(heure>=8 && heure<=17){
    next()
    }
    
else 
res.send("<h1>Sorry Our web site is not open now</h1>");
})

app.use(express.static(__dirname + '/public'))
//ouvrir un port
const port=process.env.PORT||4000
app.listen(port,(e)=>{
    if (e) 
    console.log(`server can't connected on port ${port}`);
    else   console.log(`server connected on port ${port}...`);
    
})