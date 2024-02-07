const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//scroll through section things on homepage
  function scrollToAbout() {
        document.location.href = "/home.html#things"
    }

    const form = document.querySelector('.form');
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const successMessage = document.querySelector('.success-message');

    
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
    
    const setError = (element, message) => {
        const inputBox = element.parentElement;
        const errorDisplay = inputBox.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputBox.classList.add('error');
        inputBox.classList.remove('success');
    };
    
    const setSuccess = (element) => {
        const inputBox = element.parentElement;
        inputBox.classList.add('success');
        inputBox.classList.remove('error');
        showSuccessMessage();
    };
    
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email).toLowerCase();
    };
    const showSuccessMessage = () => {

        successMessage.style.display = 'block';
    };
    
    const validateInputs = () => {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();

        const nameNotValid = /^[a-zA-Z]+$/;
    
        if (firstNameValue === "") {
            setError(firstName, 'Name is required');
        } else if (!nameNotValid.test(firstNameValue)) {
            setError(firstName, 'Name should not contain digits');
        }
        else {
            setSuccess(firstName);
        }
    
        if (lastNameValue === "") {
            setError(lastName, 'Name is required');
        } else if (!nameNotValid.test(lastNameValue)) {
            setError(lastName, 'Name should not contain digits');
        }
        else {
            setSuccess(lasttName);
        }


        if (emailValue === "") {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email');
        } else {
            setSuccess(email);
        }

        showSuccessMessage();

    };
    