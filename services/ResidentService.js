import resident from '../models/Resident'


export const getResidents = async() =>{
    const residents = await resident.getResidents();
    return residents;
}

//getResidentById

//createResident

//deleteResident