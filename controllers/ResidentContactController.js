import {
  getAllResidentContacts,
  createResidentContact,
  deleteResidentContactById,
  getResidentContactById,
} from "../services/ResidentContactService.js";

export const getResidentContacts = async (req, res) => {
  try {
    const residentContacts = await getAllResidentContacts();
    console.log(residentContacts);
    res.json(residentContacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getResidentContact = async (req, res) => {
  const id = req.params.id;

  try {
    const residentContact = await getResidentContactById(id);
    res.json(residentContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewResidentContact = async (req, res) => {
  try {
    const residentContact = await createResidentContact(req.body);
    res.json(residentContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteResidentContact = async (req, res) => {
  const id = req.params.id;

  try {
    const residentContact = await deleteResidentContactById(id);
    res.json(residentContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
