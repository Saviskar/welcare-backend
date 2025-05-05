import * as residentContactRepository from "../repositories/ResidentContactRepository.js";

export const getAllResidentContacts = async () => {
  const residentContacts = await residentContactRepository.findAll();
  return residentContacts;
};

export const getResidentContactById = async (id) => {
  const residentContact = await residentContactRepository.findById(id);
  return residentContact;
};

export const createResidentContact = async (data) => {
  const residentContact = await residentContactRepository.save(data);
  return residentContact;
};

export const updateResidentContactById = async (id, data) => {
  const residentContact = await residentContactRepository.update(id, data);
  return residentContact;
};

export const deleteResidentContactById = async (id) => {
  const residentContact = await residentContactRepository.remove(id);
  return residentContact;
};
