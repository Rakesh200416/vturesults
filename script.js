document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usn = document.getElementById('usn').value;
    const captcha = document.getElementById('captcha').value;

    if (usn && captcha) {
        alert('Form submitted!');
        // Perform form submission actions here
    } else {
        alert('Please fill in all fields.');
    }
});

function cancelForm() {
    document.getElementById('resultForm').reset();
}