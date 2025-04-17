import {getResidents} from '../services/ResidentService.js' 

export const getResidents = async (req, res) => {
 try{
      const residents = await getResidents(); 
      res.json(residents); 
    }catch(err){
       res.status(500).json({message:err.message})
    }
};

export const getResidentById = (req, res) => {

};

export const createResident = (req, res) => {
  
};

export const deleteResident = (req, res) => {

};