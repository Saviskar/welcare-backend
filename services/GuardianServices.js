import * as GuardianRepository from "../repositories/GuardianRepository.js";

export const getAllGuardians = async () => {
  const residentContacts = await GuardianRepository.findAll();
  return residentContacts;
};

export const getGuardianById = async (id) => {
  const residentContact = await GuardianRepository.findById(id);
  return residentContact;
};

export const createGuardian = async (data) => {
  const residentContact = await GuardianRepository.save(data);
  return residentContact;
};

export const deleteGuardianById = async (id) => {
  const residentContact = await GuardianRepository.remove(id);
  return residentContact;
};
