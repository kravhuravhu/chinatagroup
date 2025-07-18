document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        firstname: document.getElementById('firstname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        inquiry: document.getElementById('inquiry').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/mailHandler/send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log("Response from server:", result);

        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');

        if (response.ok && result.success === true) {
            modal.classList.remove('error');
            modal.classList.add('success');
            console.log("response: " + result.message);
            modalMessage.textContent = result.message;
        } else {
            modal.classList.remove('success');
            modal.classList.add('error');
            console.log("response: " + result.error);
            modalMessage.textContent = result.error;
        }

        modal.style.display = 'flex';

    } catch (error) {
        console.error("Error during fetch:", error);
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.classList.remove('success');
        modal.classList.add('error');
        modalMessage.textContent = "An error occurred: " + error.message;
        modal.style.display = 'flex';
    }
});

document.querySelector('.close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    // Clear the form fields
    document.getElementById('firstname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('inquiry').value = '';
    document.getElementById('message').value = '';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
