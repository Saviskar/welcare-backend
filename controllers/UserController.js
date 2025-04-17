import {getUsers} from '../services/UserService'

export const getUsers = async (req, res) => {
    try{
      const users = await getUsers(); 
      res.json(users); 
    }catch(err){
       res.status(500).json({message:err.message})
    }
};
