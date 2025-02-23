const API_URL = 'https://backend-five-flame.vercel.app'; // Replace with your actual backend URL

async function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.text();
    console.log(data);
    alert(data);
}

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('Logged in');
        alert('Logged in successfully');
    } else {
        console.error('Login failed');
        alert('Login failed');
    }
}

async function addPoints() {
    const token = localStorage.getItem('token');
    const points = 10; // Example points
    const response = await fetch(`${API_URL}/points`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, points }),
    });
    const data = await response.text();
    console.log(data);
    alert(data);
}

async function approvePoints() {
    const token = localStorage.getItem('token');
    const pointsId = prompt('Enter Points ID to approve:'); // Prompt for points ID
    const response = await fetch(`${API_URL}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, pointsId }),
    });
    const data = await response.text();
    console.log(data);
    alert(data);
}