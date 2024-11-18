import express from 'express';
import cors from 'cors';
import {
    getAllUsers, insertUser, updateUser, deleteUser,
    getAllPersonnel, insertPersonnel, updatePersonnel, deletePersonnel,
    getAllRawMaterials, insertRawMaterial, updateRawMaterial, deleteRawMaterial,
    getAllChambers, insertChamber, updateChamber, deleteChamber,
    getAllCommodities, insertCommodity, updateCommodity, deleteCommodity
} from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes for Users
app.get('/users', async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
});

app.post('/users', async (req, res) => {
    const { user_pass, user_name, bill_amt } = req.body;
    const result = await insertUser(user_pass, user_name, bill_amt);
    res.status(201).json(result);
});

app.put('/users/:id', async (req, res) => {
    const user_id = req.params.id;
    const { user_pass, user_name, bill_amt } = req.body;
    const result = await updateUser(user_id, user_pass, user_name, bill_amt);
    res.status(200).json(result);
});

app.delete('/users/:id', async (req, res) => {
    const user_id = req.params.id;
    const result = await deleteUser(user_id);
    res.status(200).json(result);
});

// Similar routes for Personnel
app.get('/personnel', async (req, res) => res.json(await getAllPersonnel()));
app.post('/personnel', async (req, res) => res.json(await insertPersonnel(req.body.designation, req.body.quantity, req.body.salary)));
app.put('/personnel/:id', async (req, res) => res.json(await updatePersonnel(req.params.id, req.body.designation, req.body.quantity, req.body.salary)));
app.delete('/personnel/:id', async (req, res) => res.json(await deletePersonnel(req.params.id)));

// Routes for RawMaterials
app.get('/rawmaterials', async (req, res) => res.json(await getAllRawMaterials()));
app.post('/rawmaterials', async (req, res) => res.json(await insertRawMaterial(req.body.user_id)));
app.put('/rawmaterials/:id', async (req, res) => res.json(await updateRawMaterial(req.params.id, req.body.user_id)));
app.delete('/rawmaterials/:id', async (req, res) => res.json(await deleteRawMaterial(req.params.id)));

// Routes for Chamber
app.get('/chambers', async (req, res) => res.json(await getAllChambers()));
app.post('/chambers', async (req, res) => res.json(await insertChamber(req.body.cham_temp, req.body.cham_rent, req.body.user_id)));
app.put('/chambers/:id', async (req, res) => res.json(await updateChamber(req.params.id, req.body.cham_temp, req.body.cham_rent, req.body.user_id)));
app.delete('/chambers/:id', async (req, res) => res.json(await deleteChamber(req.params.id)));

// Routes for Commodities
app.get('/commodities', async (req, res) => res.json(await getAllCommodities()));
app.post('/commodities', async (req, res) => res.json(await insertCommodity(req.body.comm_name, req.body.comm_temp, req.body.comm_hum)));
app.put('/commodities/:id', async (req, res) => res.json(await updateCommodity(req.params.id, req.body.comm_name, req.body.comm_temp, req.body.comm_hum)));
app.delete('/commodities/:id', async (req, res) => res.json(await deleteCommodity(req.params.id)));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
