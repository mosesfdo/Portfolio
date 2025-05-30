// Popup logic for navigation
function openPopup(section) {
    const overlay = document.getElementById(`popup-${section}`);
    overlay.style.display = 'flex';
    // Force reflow to enable transition
    void overlay.offsetWidth;
    overlay.classList.add('active');
}

function closePopup(section) {
    const overlay = document.getElementById(`popup-${section}`);
    overlay.classList.remove('active');
    // Wait for transition to finish before hiding
    setTimeout(() => {
        if (!overlay.classList.contains('active')) {
            overlay.style.display = 'none';
        }
    }, 400);
}

// Attach event listeners to nav links
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu logic
    const hamburger = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    hamburger.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            navUl.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    });
    // Close menu when a link is clicked (mobile UX)
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const section = href.replace('#', '').toLowerCase();
                if (["home","about","projects","contact"].includes(section)) {
                    e.preventDefault();
                    openPopup(section);
                }
            }
        });
    });
});