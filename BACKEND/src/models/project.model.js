import db from "../config/db.js";

export const createProject = async (userId, title, description) => {
  const query = `
    INSERT INTO projects (user_id, title, description)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const { rows } = await db.query(query, [userId, title, description]);
  return rows[0];
};

export const getUserProjects = async (userId) => {
  const { rows } = await db.query(
    "SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return rows;
};
