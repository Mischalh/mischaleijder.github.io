const contactButtons = document.querySelectorAll('.contactBtn');

contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});

