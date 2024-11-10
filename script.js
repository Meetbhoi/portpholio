
function toggleModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

