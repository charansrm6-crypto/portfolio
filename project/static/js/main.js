// ============================
// NAVIGATION & SECTION DISPLAY
// ============================

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons and sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    // Add click event listeners to all nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Smooth scroll to top of section
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set home section as active by default
    const homeButton = document.querySelector('[data-section="home"]');
    if (homeButton) {
        homeButton.click();
    }
});

// ============================
// SMOOTH SCROLLING
// ============================

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================
// FORM HANDLING
// ============================

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return false;
        }

        // If validation passes, form will submit normally
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// ============================
// DYNAMIC EFFECTS
// ============================

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items for scroll animation
document.querySelectorAll('.project-card, .education-card, .achievement-item, .cert-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================
// BUTTON INTERACTIONS
// ============================

// Project button click handler
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Project details coming soon!');
    });
});

// ============================
// RESPONSIVE MENU
// ============================

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // Find current active section
    let currentIndex = -1;
    navButtons.forEach((btn, index) => {
        if (btn.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Arrow key navigation
    if (e.key === 'ArrowRight' && currentIndex < navButtons.length - 1) {
        navButtons[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navButtons[currentIndex - 1].click();
    }
});

// ============================
// UTILITY FUNCTIONS
// ============================

// Function to highlight active nav button on scroll
window.addEventListener('scroll', function() {
    const pageTop = window.scrollY;
    const pageBottom = pageTop + window.innerHeight;

    // Optional: Add scroll effect to header
    const header = document.querySelector('.header');
    if (pageTop > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Function to print/export portfolio
function exportPortfolio() {
    window.print();
}

// Function to copy email to clipboard
function copyEmail() {
    const email = 'srinusrm6@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy email');
    });
}

// ============================
// INITIALIZE
// ============================

console.log('Portfolio website loaded successfully!');
