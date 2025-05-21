import { verifyToken } from "../utils/authUtil.js"

export const authenticate = (req,res,next) => {

  const token = req.signedCookies.authToken;

  if(token){
    try{
      const user = verifyToken(token);
      req.user = user
      next()
    }catch(e){
         res.status(403).json({error:"Token is invalid or expired"})
    }
  }else{
    res.status(403).json({error:'Session expired or user not logged in'})
  }

}