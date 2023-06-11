const express= require("express");
const app= express();
const mongoose=require("mongoose");


const adminRoutes=require('./routes/admin');
const restRoutes=require('./routes/rest');

const url="mongodb+srv://chabikant_org:jBs1RItr23IXGBoe@cluster0.h1kjjk6.mongodb.net/Restaurant"

const ConnectionParams={
    useNewUrlParser:true,
    useUnifiedTopology: true,
}

mongoose.connect(url,ConnectionParams).then(()=>{
    console.log("conntected to DB")
}).catch(()=>{
    console.log("Error!!")
})

app.use(express.urlencoded({extented:true}));

app.use('/restaurant',adminRoutes );
app.use('/restaurant',restRoutes );




app.all('*',(req,res)=>{
    res.send('<h1>404 Not Found!!!</h1>')
})

app.listen(4000,()=>console.log("listen to port 4000"))