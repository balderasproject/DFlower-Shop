document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the menu container
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    // Add click listener to toggle the 'hidden' Tailwind class
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});