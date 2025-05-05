import {
  getAllGuardians,
  getGuardianById,
  createGuardian,
  updateGuardianById,
  deleteGuardianById,
} from "../services/GuardianServices.js";

export const getGuardians = async (req, res) => {
  try {
    const guardians = await getAllGuardians();
    console.log(guardians);
    res.json(guardians);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getGuardian = async (req, res) => {
  const id = req.params.id;

  try {
    const getGuardian = await getGuardianById(id);
    res.json(getGuardian);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateGuardian = async (req, res) => {
  const id = req.params.id;

  try {
    const updateGuardian = await updateGuardianById(id, req.body);
    res.json(updateGuardian);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewGuardian = async (req, res) => {
  try {
    const guardian = await createGuardian(req.body);
    res.json(guardian);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteGuardian = async (req, res) => {
  const id = req.params.id;

  try {
    const guardian = await deleteGuardianById(id);
    res.json(guardian);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
