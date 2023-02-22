const formField = document.querySelectorAll('.form-field input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    formField.forEach(field => {
        let parentEl = field.parentElement;
        if (field.value == "") {
            e.preventDefault();
            if (field.id == 'first-name') {
                parentEl.querySelector('.error').innerHTML = 'First Name cannot be empty!';
                field.classList.add('err');
            }
            if (field.id == 'last-name') {
                parentEl.querySelector('.error').innerHTML = 'Last Name cannot be empty!';
                field.classList.add('err');
            }
            if (field.id == 'email') {
                parentEl.querySelector('.error').innerHTML = 'Email cannot be empty!';
                field.classList.add('err');
                if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(field.id == 'email')) {
                    parentEl.querySelector('.error').innerHTML = "This doesn't look like an Email!"
                    field.classList.add('err');
                }
            }
            if (field.id == 'password') {
                parentEl.querySelector('.error').innerHTML = 'Password cannot be empty!';
                field.classList.add('err');
            }
        }

    });
});
