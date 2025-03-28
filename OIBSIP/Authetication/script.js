document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('dashboard.html')) {
        checkLogin();
    }
});

const users = JSON.parse(localStorage.getItem('users')) || {};

function register() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    if (!username || !password) {
        alert('Please enter a valid username and password.');
        return;
    }

    if (users[username]) {
        alert('User already exists! Try logging in.');
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!username || !password) {
        alert('Please enter a valid username and password.');
        return;
    }

    if (users[username] && users[username] === password) {
        localStorage.setItem('loggedInUser', username);
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function checkLogin() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You must be logged in to access the dashboard.');
        window.location.href = 'login.html';
    } else {
        document.getElementById('user').innerText = loggedInUser;
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}
