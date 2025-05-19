const connectDB = require("../db");

async function createResume(name, email, phone, skills, experience) {
  const db = await connectDB();
  const sql = "INSERT INTO resumes (name, email, phone, skills, experience) VALUES (?, ?, ?, ?, ?)";
  const [result] = await db.execute(sql, [name, email, phone, skills, experience]);
  return { id: result.insertId, name, email, phone, skills, experience };
}

async function getAllResumes() {
  const db = await connectDB();
  const sql = "SELECT * FROM resumes";
  const [resumes] = await db.execute(sql);
  return resumes;
}

async function updateResume(id, name, email, phone, skills, experience) {
  const db = await connectDB();
  const sql = "UPDATE resumes SET name=?, email=?, phone=?, skills=?, experience=? WHERE id=?";
  await db.execute(sql, [name, email, phone, skills, experience, id]);
  return { id, name, email, phone, skills, experience };
}

async function deleteResume(id) {
  const db = await connectDB();
  const sql = "DELETE FROM resumes WHERE id=?";
  await db.execute(sql, [id]);
  return { message: "Resume deleted successfully" };
}

module.exports = { createResume, getAllResumes, updateResume, deleteResume };
