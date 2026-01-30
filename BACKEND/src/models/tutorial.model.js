import db from "../config/db.js";

export const createTutorial = async ({
  title,
  description,
  price,
  duration,
  level,
}) => {
  const query = `
    INSERT INTO tutorials (
      title,
      description,
      price,
      duration,
      level
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;

  const { rows } = await db.query(query, [
    title,
    description,
    price,
    duration,
    level,
  ]);

  return rows[0];
};

export const getAllTutorials = async () => {
  const { rows } = await db.query(
    "SELECT * FROM tutorials ORDER BY created_at DESC"
  );
  return rows;
};

export const getTutorialById = async (id) => {
  const { rows } = await db.query(
    "SELECT * FROM tutorials WHERE id = $1",
    [id]
  );
  return rows[0];
};

export const deleteTutorial = async (id) => {
  const { rowCount } = await db.query(
    "DELETE FROM tutorials WHERE id = $1",
    [id]
  );
  return rowCount > 0;
};
