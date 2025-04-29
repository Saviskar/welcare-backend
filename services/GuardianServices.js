import * as GuardianRepository from "../repositories/GuardianRepository.js";

export const getAllGuardians = async () => {
  const guardians = await GuardianRepository.findAll();
  return guardians;
};

export const getGuardianById = async (id) => {
  const guardian = await GuardianRepository.findById(id);
  return guardian;
};

export const createGuardian = async (data) => {
  const guardian = await GuardianRepository.save(data);
  return guardian;
};

export const updateGuardianById = async (id, data) => {
  const guardian = await GuardianRepository.update(id, data);
  return guardian;
};

export const deleteGuardianById = async (id) => {
  const guardian = await GuardianRepository.remove(id);
  return guardian;
};
