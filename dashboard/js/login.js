if (localStorage.getItem('authAdmin')) {
    location.href = 'index.html';
}

var admin = {
    email: "admin@admin.com",
    password: "123456789",
}

localStorage.setItem('admin', JSON.stringify(admin));

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let admin = JSON.parse(localStorage.getItem('admin'))

    if (email == admin.email && password == admin.password) {
        localStorage.setItem('authAdmin', JSON.stringify(admin));
        location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}