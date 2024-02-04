let auth = localStorage.getItem('auth');
if (auth != null) {
    window.location.href = 'home.html'
}

var form = document.getElementById('register');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    let email, password, userName, phone, emailErrors, passwordErrors, phoneErrors, userNameError;

    userName = document.getElementById('username').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    password = document.getElementById('password').value;

    emailErrors    = isValidEmail(email);
    passwordErrors = isValidPassword(password);
    phoneErrors    = isValidPhone(phone);
    userNameError  = isValidUserName(userName);

    if (emailErrors && passwordErrors && phoneErrors && userNameError) {
        var users = localStorage.getItem('users');

        if (users == null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                let errorEmail = document.getElementById('errorEmail');
                const newParagraph = document.createElement('p');
                newParagraph.textContent = `This email already exists ${email}`;
                newParagraph.classList = 'error';
                errorEmail.appendChild(newParagraph);
                return;
            }
        }

        users.push({
            userName: userName,
            email: email,
            phone: phone,
            password: password
        });

        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html'
    }
});

function isValidUserName(userName) {
    let errors = [];

    if (userName == '') {
        errors.push('The User Name field cannot actually be left out');
    } else if (!isNaN(userName)) {
        errors.push('The field must be a number');
    } else if (userName.length < 6) {
        errors.push('The User Name must be more than 6 characters');
    }

    if (errors.length > 0) {
        let errorUserName = document.getElementById('errorUserName');

        while (errorUserName.firstChild)
            errorUserName.removeChild(errorUserName.firstChild);

        errors.forEach((error) => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = error;
            newParagraph.classList = 'error';
            errorUserName.appendChild(newParagraph);
        });

        return false;
    } else {
        while (errorUserName.firstChild)
            errorUserName.removeChild(errorUserName.firstChild);
        return true;
    }
}

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

function isValidPhone(phone) {
    let errors = [];

    if (phone == '') {
        errors.push('The phone field cannot actually be left out');
    } else if (isNaN(phone)) {
        errors.push('The field must be a number');
    } else if (phone.length < 11) {
        errors.push('The phone must be more than 11 Number');
    }

    if (errors.length > 0) {
        let errorPhone = document.getElementById('errorPhone');

        while (errorPhone.firstChild)
            errorPhone.removeChild(errorPhone.firstChild);

        errors.forEach((error) => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = error;
            newParagraph.classList = 'error';
            errorPhone.appendChild(newParagraph);
        });

        return false;
    } else {
        while (errorPhone.firstChild)
            errorPhone.removeChild(errorPhone.firstChild);
        return true;
    }
}