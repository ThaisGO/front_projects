// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.form')
//     const email = document.querySelector('#email')
//     const password = document.querySelector('#password')
//     const btn = document.querySelector('#login')

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();

//         if(checkFields()) {
//             login()
//         } 
//     });

//     email.addEventListener('input', () => {
//         validateField(email, isEmail(email.value.trim()), 'Not valid email');
//     });

//     password.addEventListener('input', () => {
//         validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters')
//     });

//     function checkFields() {
//         let isValid = true;

//         validateField(email, isEmail(email.value.trim()), 'Not valid email');
//         validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');

//         document.querySelectorAll('.form-control').forEach((item) => {
//             console.log('item: ', item)
//             if(item.classList.contains('error')) {
//                 isValid = false
//             }
//         })

//         console.log('valido?: ', isValid)
//         return isValid;
//     }

//     function validateField(input, rule, errorMessage) {
//         if (rule) {
//             setSuccess(input);
//         } else {
//             setError(input, errorMessage);
//         }
//     }

//     function isEmail(email) {
//         return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
//     }

//     function setError(input, message) {
//         const formControl = input.parentElement;
//         const text = document.querySelector('#error');

//         formControl.className = 'form-control error';
//         text.innerHTML = `${message}`
//         text.className = 'msgError';
//     }

//     function setSuccess(input) {
//         const formControl = input.parentElement;
//         const text = document.querySelector('#error')

//         formControl.className = 'form-control success'
//         text.classList.remove('msgError')
//         text.innerHTML = ''
//     }

//     function login() {
//         console.log('logged')
//     }
// })

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const btn = document.querySelector('#login');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (checkFields()) {
            login();
        } 
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
    });

    function checkFields() {
        console.log('checkFields')
        let isValid = true;

        // Validate fields
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');

        // Check if any form-control element has error class
        document.querySelectorAll('.form-control').forEach((item) => {
            if (item.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(input, rule, errorMessage) {
        if (rule) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const text = document.querySelector('.error-text');

        formControl.classList.remove('success');
        formControl.classList.add('error');
        text.innerHTML = message;
        text.classList.add('msgError');
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const text = document.querySelector('.error-text');

        formControl.classList.remove('error');
        formControl.classList.add('success');
        text.classList.remove('msgError');
        text.innerHTML = '';
    }

    function login() {
        console.log('logged');
    }
});
