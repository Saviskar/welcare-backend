import * as residentRepository from '../repositories/ResidentRepository.js'


export const getAllResidents = async() =>{
    const residents = await residentRepository.findAll();
    return residents;
}

//getResidentById

//createResident

//deleteResident