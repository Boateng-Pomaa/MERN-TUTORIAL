const Goal = require('../model/goals')


exports.getGoal = async( req, res) =>{

    try{
    let goal = await Goal.find()
    if (goal.length == 0){
        res.status(400).json({
            message:"Goals not found"
        })
    }
    else{
    res.status(200).json({
        message: "All Goals FOUND",
        goal
    })}

    }
    catch (err){
        res.status(500).json({message: err});

    }
}



exports.createGoal = async(req, res) =>{
    try{
        const {title, description} = req.body;

       const saveData = new Goal ({
     title,
     description
       }) 

      await saveData.save()

      if(!saveData){
       return res.status(401).json({message: "could not create a goal"})
}

res.status(200).json({message: "goal created ", saveData})
        /*let goal = await req.body
        let goalCreated = await Goal.create({goal})
        if(goalCreated){
            res.status(200).json({message:"Goal Sucessfully created",
             goal: goalCreated
        })
            
        }else{
            res.status(400).json({
                message: "Goal Creation Failed"
            })
        }
        */
}
catch(err){
    res.status(500).json({message: err.message});
}
}

exports.getAGoal = async(req,res) =>{
    try{
        let id = {_id: req.params.id}
        let goal = await Goal.findOne(id)
        if (!goal){
            res.status(202).json({
                message:"Goal not found"
            })
        }
        else{
        res.status(200).json({
            message: "Goal FOUND",
            goal
        })}
    }
    catch(err){
        res.status(501).json({message: err.message});
    }
}

exports.updateGoal = async(req,res) =>{
    try{
         const id =  req.params.id
         
       const UPgoal = await Goal.findById(id)

        if (!UPgoal){
            res.status(400).json({
                message:"Goal not found!"
            })
        }

            UPgoal.title = req.body.title,
            UPgoal.description = req.body.description
                
                await UPgoal.save()
              
                res.status(200).json({
            message: "Goal updated",
            UPgoal
                })
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.deleteGoal = async(req,res) =>{
    try {
        let id = {_id: req.params.id}
        let goal = await Goal.findOneAndDelete(id)
        if (!goal){
            res.status(202).json({
                message:"Goal not deleted"
            })
        }
        else{
        res.status(200).json({
            message: "Goal successfully deleted",
            goal
        })}
    } catch (error) {
        res.status(501).json({message: err.message});
    }
}