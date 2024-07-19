import User from "../models/user.js";

//Create User
export const create = async (req, res )=>{
    try{
        const userData =  new User(req.body);
        if(!userData) return res.status(404).json({msg: "User data not found"});
        const saveData = await userData.save();
        res.status(201).json(saveData);
    } catch (error) {
        res.status(500).json({error :error});
    }
};

// Get User
export const getAll = async(req, res) => {
    try{
        const userData = await User.find();
        if(!userData) return res.status(404).json({msg: "User Not Exist"});
        res.status(200).json(userData);
        
    } catch (error){
        res.status(500).json({error :error});
    }
}

// Get User by ID
export const getOne = async(req, res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) return res.status(401).json({msg:"User Not Exist"});
        res.status(200).json(userExist)
    } catch (error){
        res.status(500).json({error :error});
    }
}

// Update User
export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) return res.status(401).json({msg:"User Not Exist"});
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({error :error});
    }
}


// Delete User
export const deleteUser = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist) return res.status(401).json({msg:"User Not Exist!"});
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({error :error});
    }
}

