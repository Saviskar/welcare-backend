import * as residentRepository from "../repositories/ResidentRepository.js";

export const getAllResidents = async () => {
  const residents = await residentRepository.findAll();
  return residents;
};

//getResidentById
export const getAllResidentById = async (id) => {
  const resident = await residentRepository.findById(id);
  return resident;
};

//createResident
export const createResident = async (data) => {
  const resident = await residentRepository.save(data);
  return resident;
};

//deleteResident
export const deleteResidentById = async (id) => {
  const resident = await residentRepository.remove(id);
  return resident;
};
