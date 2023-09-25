// Get references to modal elements
let modal = document.getElementById('modal');
let closeModalBtn = document.getElementById('closeModalBtn');

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener to close the modal when the "×" button is clicked
closeModalBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Automatically open the modal when the page loads
window.addEventListener('load', () => {
    modal.style.display = 'block';
});