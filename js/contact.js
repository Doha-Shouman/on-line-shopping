var userName    = document.getElementById('name');
var senEmail   = document.getElementById('email');
var message = document.getElementById('message');
var submit  = document.getElementsByClassName('form_contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    Email.send({
        SecureToken: "b5f19527-6f92-4dd1-9b5d-411d0124bb79",
        To: 'dohashouman12345@gmail.com',
        From: senEmail.value,
        Subject: userName.value,
        Body: message.value
    }).then(
        message => alert(message)
    );
});

