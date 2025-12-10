const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const continueBtn = document.getElementById('continueBtn');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    continueBtn.addEventListener('click', function(event) {
        event.preventDefault(); 

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const swalButtonClass = 'swal2-confirm-custom';

        if(emailValue === '' && passwordValue === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your email and password.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
            return;
        }

        if(emailValue === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter an email address.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
            return;
        } else if(!validateEmail(emailValue)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
            return;
        }

        if(passwordValue === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter a password.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
            return;
        } else if(passwordValue.length < 8 || passwordValue.length > 24) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be between 8 and 24 characters.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
            return;
        }

        if(emailValue === 'test@test.test' && passwordValue === 'testtest') {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'Email and password are correct.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed!',
                text: 'Incorrect email or password.',
                confirmButtonText: 'OK',
                customClass: { confirmButton: swalButtonClass }
            });
        }
    });

    const logo = document.querySelector('.glava .logo');
    logo.addEventListener('click', function() {
        Swal.fire({
            icon: 'info',
            title: 'Info',
            text: 'Avtor Martin Furlan',
            confirmButtonText: 'OK',
            customClass: { confirmButton: 'swal2-confirm-custom' }
        });
    });