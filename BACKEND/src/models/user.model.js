import db from "../config/db.js";

export const createUser = async (fullName, email, passwordHash) => {
  const query = `
    INSERT INTO users (full_name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, email, role, created_at
  `;
  const { rows } = await db.query(query, [fullName, email, passwordHash]);
  return rows[0];
};

export const findUserByEmail = async (email) => {
  const { rows } = await db.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return rows[0];
};
