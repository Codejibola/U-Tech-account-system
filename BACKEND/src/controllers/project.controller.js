import * as Project from "../models/project.model.js";

export const createProjectRequest = async (req, res) => {
  const { title, description } = req.body;
  const project = await Project.createProject(
    req.user.id,
    title,
    description
  );
  res.status(201).json(project);
};

export const getMyProjects = async (req, res) => {
  const projects = await Project.getUserProjects(req.user.id);
  res.json(projects);
};
