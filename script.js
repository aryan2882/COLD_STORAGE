const apiUrl = 'http://localhost:3000'; // Assuming your server is running locally

document.addEventListener("DOMContentLoaded", () => {
    loadTables();
});

async function loadTables() {
    await loadUsers();
    await loadPersonnel();
    await loadRawMaterials();
    await loadChambers();
    await loadCommodities();
}

async function loadUsers() {
    const response = await fetch(`${apiUrl}/users`);
    const users = await response.json();
    const tbody = document.querySelector('#users-table tbody');
    tbody.innerHTML = '';
    users.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.user_id}</td>
                <td>${user.user_name}</td>
                <td>${user.user_pass}</td>
                <td>${user.bill_amt}</td>
                <td>
                    <button class="update" onclick="showUserForm(${user.user_id})">Update</button>
                    <button class="delete" onclick="deleteUser(${user.user_id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function loadPersonnel() {
    const response = await fetch(`${apiUrl}/personnel`);
    const personnel = await response.json();
    const tbody = document.querySelector('#personnel-table tbody');
    tbody.innerHTML = '';
    personnel.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.personnel_id}</td>
                <td>${p.designation}</td>
                <td>${p.quantity}</td>
                <td>${p.salary}</td>
                <td>
                    <button class="update" onclick="showPersonnelForm(${p.personnel_id})">Update</button>
                    <button class="delete" onclick="deletePersonnel(${p.personnel_id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function loadRawMaterials() {
    const response = await fetch(`${apiUrl}/rawmaterials`);
    const rawMaterials = await response.json();
    const tbody = document.querySelector('#rawmaterials-table tbody');
    tbody.innerHTML = '';
    rawMaterials.forEach(rm => {
        tbody.innerHTML += `
            <tr>
                <td>${rm.bill_id}</td>
                <td>${rm.user_id}</td>
                <td>
                    <button class="update" onclick="showRawMaterialForm(${rm.bill_id})">Update</button>
                    <button class="delete" onclick="deleteRawMaterial(${rm.bill_id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function loadChambers() {
    const response = await fetch(`${apiUrl}/chambers`);
    const chambers = await response.json();
    const tbody = document.querySelector('#chambers-table tbody');
    tbody.innerHTML = '';
    chambers.forEach(chamber => {
        tbody.innerHTML += `
            <tr>
                <td>${chamber.chamber_id}</td>
                <td>${chamber.temp}</td>
                <td>${chamber.rent}</td>
                <td>${chamber.user_id}</td>
                <td>
                    <button class="update" onclick="showChamberForm(${chamber.chamber_id})">Update</button>
                    <button class="delete" onclick="deleteChamber(${chamber.chamber_id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function loadCommodities() {
    const response = await fetch(`${apiUrl}/commodities`);
    const commodities = await response.json();
    const tbody = document.querySelector('#commodities-table tbody');
    tbody.innerHTML = '';
    commodities.forEach(c => {
        tbody.innerHTML += `
            <tr>
                <td>${c.commodity_id}</td>
                <td>${c.name}</td>
                <td>${c.temperature}</td>
                <td>${c.humidity}</td>
                <td>
                    <button class="update" onclick="showCommodityForm(${c.commodity_id})">Update</button>
                    <button class="delete" onclick="deleteCommodity(${c.commodity_id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function showUserForm(userId = null) {
    // Populate form if userId is provided for editing
    document.getElementById('form-title').innerText = userId ? 'Update User' : 'Add User';
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
    document.getElementById('bill').value = '';
    // Handle form submission for adding or updating
    document.getElementById('data-form').onsubmit = (e) => {
        e.preventDefault();
        if (userId) {
            updateUser(userId);
        } else {
            addUser();
        }
    };
    document.getElementById('form-popup').style.display = 'block';
}

function closeForm() {
    document.getElementById('form-popup').style.display = 'none';
}

async function addUser() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const bill = document.getElementById('bill').value;

    const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password, bill_amt: bill })
    });

    if (response.ok) {
        loadUsers();
        closeForm();
    } else {
        alert('Failed to add user');
    }
}

// Add similar add/update/delete functions for personnel, raw materials, chambers, and commodities...
