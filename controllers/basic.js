const manager  = require("../schema")

const getreq=async(req,res)=>{
    const {task} = req.body
    const getnew = await manager.find({})
    console.log(getnew)
    res.send(getnew)
}

const postreq = async(req,res)=>{
    const {task , date_com } = req.body
    try {
        const data = await manager.create({task , date_com})
        console.log("created a new task")  
        res.send(data)      
    }
    catch(error){
        console.log("error in creating ")
        res.send(error)     

    }
}

const update = async(req,res)=>{
    const {task , newtask , status} = req.body 
    try{
        const filter = task
        const updatet = newtask
        const updates = status 
        const data = await manager.findOneAndUpdate({task : filter}, {task : updatet  , status : updates} ,{ new : true})
        console.log(filter)
        console.log(update)
        res.send(data)
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
}

const delreq = async(req,res)=>{
    const {_id} = req.body
    try{ 
        const data1 = await manager.findById({_id})
        const status1 = data1.status
        if(status1==true)
        {
            const data = await manager.findByIdAndDelete({_id})
            console.log(data)
            res.send(data)
        }
        else{
            res.send("Not possible")
        }
    }
    catch(error){
        res.send(error)
    }
}

module.exports = {getreq,postreq,update,delreq}