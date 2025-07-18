document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const files = document.getElementById('documents').files;

    // Check no. of files
    if (files.length > 2) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.classList.remove('success');
        modal.classList.add('error');
        modalMessage.textContent = "You can upload a maximum of 2 files.";
        modal.style.display = 'flex';
        return;
    }

    // Define allowed file types
    const allowedFileTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'image/jpeg',
        'image/png',
        'image/gif',
    ];

    // Validate file types
    for (let i = 0; i < files.length; i++) {
        if (!allowedFileTypes.includes(files[i].type)) {
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modal-message');
            modal.classList.remove('success');
            modal.classList.add('error');
            modalMessage.textContent = "Invalid file type. Only PDF, Word, Excel, and image files are allowed.";
            modal.style.display = 'flex';
            return;
        }
    }

    const formData = new FormData();
    formData.append('firstname', document.getElementById('firstname').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('inquiry', document.getElementById('inquiry').value);
    formData.append('message', document.getElementById('message').value);

    for (let i = 0; i < files.length; i++) {
        formData.append('documents[]', files[i]);
    }

    try {
        const response = await fetch('/mailHandler/quote_mail.php', {
            method: 'POST',
            body: formData
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
    document.getElementById('documents').value = '';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});