const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://hhr42004:Harish42@cluster0.y2njl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})
