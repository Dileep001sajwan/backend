const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dileepsajwan:WofZEJdfsrlUOqu0@cluster0.eavea5s.mongodb.net/iNoeBook',{useNewUrlParser: true}
).then(()=>{
    console.log("Connected Sucessfully");
}).catch(()=>{
    console.log("No connection");
})