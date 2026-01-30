import * as Tutorial from "../models/tutorial.model.js";

export const create = async (req, res) => {
  try {
    const tutorial = await Tutorial.createTutorial(req.body);
    res.status(201).json(tutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const findAll = async (req, res) => {
  const tutorials = await Tutorial.getAllTutorials();
  res.json(tutorials);
};

export const findOne = async (req, res) => {
  const tutorial = await Tutorial.getTutorialById(req.params.id);
  if (!tutorial) {
    return res.status(404).json({ message: "Tutorial not found" });
  }
  res.json(tutorial);
};

export const remove = async (req, res) => {
  const deleted = await Tutorial.deleteTutorial(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Tutorial not found" });
  }
  res.json({ message: "Tutorial deleted" });
};
