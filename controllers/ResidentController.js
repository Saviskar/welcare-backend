import {
  getAllResidents,
  createResident,
  getAllResidentById,
  deleteResidentById,
  updateResident,
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
    res.json({
      residentId:resident[0].insertId
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateResidentById = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedResident = await updateResident(id, req.body);
    res.json(updatedResident);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteResident = async (req, res) => {
  const id = req.params.id;

  try {
    const resident = await deleteResidentById(id);
    res.json(resident);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
