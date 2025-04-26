import {
  getAllResidents,
  createResident,
  getAllResidentById,
} from "../services/ResidentService.js";

export const getResidents = async (req, res) => {
  try {
    const residents = await getAllResidents();
    res.json(residents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getResidentById = async (req, res) => {
  const id = req.params.id;

  try {
    const resident = await getAllResidentById(id);
    if (resident.length === 0) {
      return res.status(404).json({ message: "Resident not found" });
    }
    res.json(resident[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
