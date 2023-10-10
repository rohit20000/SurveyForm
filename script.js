function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate all fields are filled
    if (
        firstName === '' ||
        lastName === '' ||
        dob === '' ||
        country === '' ||
        genderCheckboxes.length === 0 ||
        profession === '' ||
        email === '' ||
        mobile === ''
    ) {
        alert('All fields are required.');
        return;
    }

    const selectedGenders = Array.from(genderCheckboxes).map((checkbox) => checkbox.value);

    // Display the popup with the submitted values
    document.getElementById('popupFirstName').textContent = firstName;
    document.getElementById('popupLastName').textContent = lastName;
    document.getElementById('popupDOB').textContent = dob;
    document.getElementById('popupCountry').textContent = country;
    document.getElementById('popupGender').textContent = selectedGenders.join(', ');
    document.getElementById('popupProfession').textContent = profession;
    document.getElementById('popupEmail').textContent = email;
    document.getElementById('popupMobile').textContent = mobile;

    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    // Reset the form and close the popup
    document.getElementById('surveyForm').reset();
    document.getElementById('popup').style.display = 'none';
}

function resetForm() {
    // Reset the form without displaying the popup
    document.getElementById('surveyForm').reset();
}
