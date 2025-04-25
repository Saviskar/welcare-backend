import * as residentRepository from "../repositories/ResidentRepository.js";

export const getAllResidents = async () => {
  const residents = await residentRepository.findAll();
  return residents;
};

//getResidentById
export const getAllResidentById = async () => {
  const resident = await residentRepository.findById();
  return resident;
};

//createResident
export const createResident = async (data) => {
  const resident = await residentRepository.save(data);
  return resident;
};

//deleteResident
export const deleteResident = async () => {
  const resident = await residentRepository.remove();
  return resident;
};
