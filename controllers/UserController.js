import { setMaxParserCache } from "mysql2";
import { getUsers, logInUser } from "../services/UserService.js";
import { createToken,verifyToken } from "../utils/authUtil.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await logInUser(req.body.username, req.body.password);
    const token = createToken(user.id)

    res.cookie('authToken',token,{
     httponly:true,
     secure:true,
     maxAge:3600000,
     signed: true,
     sameSite: 'None'
    })

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const authenticate = async (req,res) => {

  const token = req.signedCookies.authToken;

   if(token){
      try{
        const user = verifyToken(token);
        console.log(user)
        res.json(user);
      }catch(e){
           console.log(e)
           res.status(403).json({error:"Token is invalid or expired"})
      }
    }else{
      res.status(403).json({error:'Session expired or user not logged in'})
    }

}