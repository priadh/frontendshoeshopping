document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart-icon svg');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (this.style.color === 'red') {
                this.style.color = ''; // Reset to original color
            } else {
                this.style.color = 'red'; // Change to red
            }
        });
    });
});


