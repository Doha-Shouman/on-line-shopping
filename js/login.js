let auth = localStorage.getItem('auth');
if (auth != null) {
    window.location.href = 'home.html'
}

var form = document.getElementById('login');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    let email, password, emailErrors, passwordErrors;

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    emailErrors = isValidEmail(email);
    passwordErrors = isValidPassword(password)

    if (emailErrors && passwordErrors) {
        var users = localStorage.getItem('users');

        if (users == null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }
    
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == email && users[i].password == password) {
                localStorage.setItem('auth', JSON.stringify(users[i]));
                window.location.href = 'home.html'
                return;
            }
        }
    
        let error = document.getElementById('error');
        while (error.firstChild)
            error.removeChild(error.firstChild);
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `Email and password do not match`;
        newParagraph.classList = 'error';
        error.appendChild(newParagraph);
        return;
    }
});

function isValidEmail(email) {
    let errors = [];
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == '') {
        errors.push('The email field cannot actually be left out');
    } else if (!emailRegex.test(email)) {
        errors.push('The email should be like this "example@email.com"');
    }

    if (errors.length > 0) {
        let errorEmail = document.getElementById('errorEmail');

        while (errorEmail.firstChild)
            errorEmail.removeChild(errorEmail.firstChild);

        errors.forEach((error) => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = error;
            newParagraph.classList = 'error';
            errorEmail.appendChild(newParagraph);
        });

        return false;
    } else {
        while (errorEmail.firstChild)
            errorEmail.removeChild(errorEmail.firstChild);

        return true;
    }
}

function isValidPassword(password) {
    let errors = [];

    if (password == '') {
        errors.push('The password field cannot actually be left out');
    } else if (password.length < 6) {
        errors.push('The password must be more than six characters');
    }

    if (errors.length > 0) {
        let errorPassword = document.getElementById('errorPassword');

        while (errorPassword.firstChild)
            errorPassword.removeChild(errorPassword.firstChild);

        errors.forEach((error) => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = error;
            newParagraph.classList = 'error';
            errorPassword.appendChild(newParagraph);
        });

        return false;
    } else {
        while (errorPassword.firstChild)
            errorPassword.removeChild(errorPassword.firstChild);
        return true;
    }
}