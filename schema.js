const mongoose = require("mongoose")

const manager = new mongoose.Schema({
    task : {
        type : String ,
        required : true
    } ,
    date_cre : {
        type : Date ,
        default : Date.now()
    } ,
    date_com :{
        type : Date

    }  ,

    status : {
        type : Boolean ,
        default : false
    }

})


module.exports = mongoose.model("manager" , manager)