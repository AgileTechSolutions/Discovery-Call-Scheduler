document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('discovery-form');
    const scheduledCallsList = document.getElementById('scheduled-calls');

    // Function to add a new call to the list
    function addCallToList(name, email, date) {
        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Email: ${email}, Date and Time: ${date}`;
        scheduledCallsList.appendChild(li);
    }

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;

        addCallToList(name, email, date);

        // Clear the form fields
        form.reset();
    });
});
