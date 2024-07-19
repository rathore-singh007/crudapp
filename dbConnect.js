const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(() =>{
    console.log("Database is connected")
})
.catch((error)=>{
    console.log(error)
})

// async function getConnect(){
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/crud")
//         console.log("Database is Connected")
//     }catch(error){
//         console.log(error)
//     }
// }
// getConnect()


// (async function getConnect(){
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017")
//         console.log("Database is Connected")
//     }catch(error){
//         console.log(error)
//     }
// })()
