const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    DOB:{
        type:String,
    },
    sex:{
        type:String,
    },
    designation:{
        type:String,
    },
    salary:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    address:{
        type:String,
    }
    
})
const Employee = new mongoose.model("Employee",EmployeeSchema)
module.exports =Employee