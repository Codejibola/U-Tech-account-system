import db from "../config/db.js";

export const sendMessage = async (senderId, receiverId, content) => {
  const { rows } = await db.query(
    `
    INSERT INTO messages (sender_id, receiver_id, content)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [senderId, receiverId, content]
  );
  return rows[0];
};

export const getUserMessages = async (userId) => {
  const { rows } = await db.query(
    `
    SELECT *
    FROM messages
    WHERE sender_id = $1 OR receiver_id = $1
    ORDER BY created_at DESC
    `,
    [userId]
  );
  return rows;
};
