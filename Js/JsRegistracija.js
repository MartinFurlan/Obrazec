
        const continueBtn = document.getElementById('continueBtn');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const phoneInput = document.getElementById('phoneNumber');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const zipCode = document.getElementById('zipCode');

        const requiredFields = [
            emailInput,
            passwordInput,
            firstName,
            lastName,
            document.querySelector('.date-field input'),
            zipCode,
            document.querySelector('.country-field select'),
            document.querySelector('.phone-field select'),
            phoneInput
        ];

        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 9) this.value = this.value.slice(0, 9);
        });

        [firstName, lastName].forEach(input => {
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^A-Za-zČčŠšŽžÁÉÍÓÚáéíóúÄäÖöÜü ]/g, '');
            });
        });

        zipCode.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 4) this.value = this.value.slice(0, 4);
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function validatePassword(password) {
            const re = /^(?=.*[A-Za-z])[A-Za-z0-9]{8,24}$/;
            return re.test(password);
        }

        function validatePhone(phone) {
            return /^[0-9]{9}$/.test(phone);
        }

        function validateZip(zip) {
            return /^[0-9]{4}$/.test(zip);
        }

        continueBtn.addEventListener('click', function(event) {
            event.preventDefault();
            let allFilled = true;
            requiredFields.forEach(field => {
                if (!field.value.trim()) allFilled = false;
            });

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const phone = phoneInput.value.trim();
            const zip = zipCode.value.trim();

            if (!allFilled) {
                Swal.fire('Error', 'Please fill in all required fields.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                Swal.fire('Error', 'Please enter a valid email address.', 'error');
                return;
            }

            if (!validatePassword(password)) {
                Swal.fire('Error', 'Password is not valid. Enter 8–24 alphanumeric characters.', 'error');
                return;
            }

            if (!validatePhone(phone)) {
                Swal.fire('Error', 'Phone number must contain exactly 9 digits.', 'error');
                return;
            }

            if (!validateZip(zip)) {
                Swal.fire('Error', 'ZIP code must contain exactly 4 digits.', 'error');
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'All good!',
                text: 'All data is entered correctly. Continuing...',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "index.html";
            });
        });

        const logo = document.querySelector('.glava .logo');
        logo.addEventListener('click', function() {
            Swal.fire({
                icon: 'info',
                title: 'Info',
                text: 'Avtor Martin Furlan',
                confirmButtonText: 'OK'
            });
        });