import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '64#WqN7xtl',
    database: 'cold_storage'
}).promise();

// Get all users
export async function getAllUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

// Insert a new user
export async function insertUser(user_pass, user_name, bill_amt) {
    const [result] = await pool.query("INSERT INTO users (user_pass, user_name, bill_amt) VALUES (?, ?, ?)", [user_pass, user_name, bill_amt]);
    return result;
}

// Update a user
export async function updateUser(user_id, user_pass, user_name, bill_amt) {
    const [result] = await pool.query("UPDATE users SET user_pass = ?, user_name = ?, bill_amt = ? WHERE user_id = ?", [user_pass, user_name, bill_amt, user_id]);
    return result;
}

// Delete a user
export async function deleteUser(user_id) {
    const [result] = await pool.query("DELETE FROM users WHERE user_id = ?", [user_id]);
    return result;
}
// Get all personnel
export async function getAllPersonnel() {
    const [rows] = await pool.query("SELECT * FROM personnel");
    return rows;
}

// Insert a new personnel
export async function insertPersonnel(designation, quantity, salary) {
    const [result] = await pool.query("INSERT INTO personnel (designation, quantity, salary) VALUES (?, ?, ?)", [designation, quantity, salary]);
    return result;
}

// Update a personnel
export async function updatePersonnel(personnel_id, designation, quantity, salary) {
    const [result] = await pool.query("UPDATE personnel SET designation = ?, quantity = ?, salary = ? WHERE personnel_id = ?", [designation, quantity, salary, personnel_id]);
    return result;
}

// Delete a personnel
export async function deletePersonnel(personnel_id) {
    const [result] = await pool.query("DELETE FROM personnel WHERE personnel_id = ?", [personnel_id]);
    return result;
}

// Get all raw materials
export async function getAllRawMaterials() {
    const [rows] = await pool.query("SELECT * FROM rawmaterials");
    return rows;
}

// Insert a new raw material
export async function insertRawMaterial(user_id) {
    const [result] = await pool.query("INSERT INTO rawmaterials (user_id) VALUES (?)", [user_id]);
    return result;
}

// Update a raw material
export async function updateRawMaterial(bill_id, user_id) {
    const [result] = await pool.query("UPDATE rawmaterials SET user_id = ? WHERE bill_id = ?", [user_id, bill_id]);
    return result;
}

// Delete a raw material
export async function deleteRawMaterial(bill_id) {
    const [result] = await pool.query("DELETE FROM rawmaterials WHERE bill_id = ?", [bill_id]);
    return result;
}

// Get all chambers
export async function getAllChambers() {
    const [rows] = await pool.query("SELECT * FROM chamber");
    return rows;
}

// Insert a new chamber
export async function insertChamber(cham_temp, cham_rent, user_id) {
    const [result] = await pool.query("INSERT INTO chamber (cham_temp, cham_rent, user_id) VALUES (?, ?, ?)", [cham_temp, cham_rent, user_id]);
    return result;
}

// Update a chamber
export async function updateChamber(cham_id, cham_temp, cham_rent, user_id) {
    const [result] = await pool.query("UPDATE chamber SET cham_temp = ?, cham_rent = ?, user_id = ? WHERE cham_id = ?", [cham_temp, cham_rent, user_id, cham_id]);
    return result;
}

// Delete a chamber
export async function deleteChamber(cham_id) {
    const [result] = await pool.query("DELETE FROM chamber WHERE cham_id = ?", [cham_id]);
    return result;
}

// Get all commodities
export async function getAllCommodities() {
    const [rows] = await pool.query("SELECT * FROM commodities");
    return rows;
}

// Insert a new commodity
export async function insertCommodity(comm_name, comm_temp, comm_hum) {
    const [result] = await pool.query("INSERT INTO commodities (comm_name, comm_temp, comm_hum) VALUES (?, ?, ?)", [comm_name, comm_temp, comm_hum]);
    return result;
}

// Update a commodity
export async function updateCommodity(comm_id, comm_name, comm_temp, comm_hum) {
    const [result] = await pool.query("UPDATE commodities SET comm_name = ?, comm_temp = ?, comm_hum = ? WHERE comm_id = ?", [comm_name, comm_temp, comm_hum, comm_id]);
    return result;
}

// Delete a commodity
export async function deleteCommodity(comm_id) {
    const [result] = await pool.query("DELETE FROM commodities WHERE comm_id = ?", [comm_id]);
    return result;
}
