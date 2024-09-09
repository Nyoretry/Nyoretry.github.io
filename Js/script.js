document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save data to Firestore
    db.collection("users").add({
        name: name,
        email: email
    }).then(() => {
        alert('Registration successful!');
        window.location.href = "confirmation.html"; // Redirect to confirmation page
    }).catch(error => {
        console.error("Error adding document: ", error);
    });
});