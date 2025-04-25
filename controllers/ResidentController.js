import {
  getAllResidents,
  createResident,
} from "../services/ResidentService.js";

export const getResidents = async (req, res) => {
  try {
    const residents = await getAllResidents();
    res.json(residents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getResidentById = (req, res) => {
  const id = req.params.id;
};

export const createNewResident = async (req, res) => {
  try {
    const resident = await createResident(req.body);
    res.json(resident);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteResident = (req, res) => {};
