import {getUsers,logInUser} from '../services/UserService.js'

export const getAllUsers = async (req, res) => {
    try{
      const users = await getUsers(); 
      res.json(users); 
    }catch(err){
       res.status(500).json({message:err.message})
    }
};

export const login = async (req,res) =>{
  try{
    const user = await logInUser(req.body.username,req.body.password); 
    res.json(user); 
  }catch(err){
     res.status(500).json({message:err.message})
  }
}
