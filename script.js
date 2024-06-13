const visualMode = document.getElementById('visualMode');
const body = document.body;
const nav = document.querySelector('.navbar');
const intro = document.querySelector('.intro');
const about = document.querySelector('.about');
const history = document.querySelector('.history');  // Added history section
const navLinks = document.querySelectorAll('.nav-left ul li a');
const navItems = document.querySelectorAll('.nav-left ul li');
let modeClicked = 0;

// Initialize "Work" as the active section
navItems[0].classList.add('active');

// Function to update nav item colors
const updateNavColors = (color) => {
    navLinks.forEach(link => {
        link.style.color = color;
        link.addEventListener('mouseenter', () => link.style.color = 'green');
        link.addEventListener('mouseleave', () => link.style.color = color);
    });
};

// Set initial nav colors
updateNavColors('#0F4C75');

navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default anchor click behavior
        navItems.forEach(item => item.classList.remove('active'));
        navItems[index].classList.add('active');

        // Scroll to specific positions based on the clicked link
        let scrollPosition = 0;
        switch (index) {
            case 0: // Work section
                scrollPosition = document.documentElement.scrollHeight * 0.12;
                break;
            case 1: // About section
                scrollPosition = document.documentElement.scrollHeight * 0.43;
                break;
            case 2: // Contact section
                scrollPosition = document.documentElement.scrollHeight * 1;
                break;
        }
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});

visualMode.addEventListener('click', function() {
    visualMode.classList.add('fade-out');
    setTimeout(() => {
        if (modeClicked === 0) {
            visualMode.src = 'media/moon.png';
            visualMode.alt = 'Light Mode';
            body.style.background = 'linear-gradient(-45deg, #1B262C, #0F4C75)';
            body.style.color = '#ffffff';
            nav.style.background = 'rgba(0, 0, 0, 0.3)';
            nav.style.color = '#F6F7C4';
            intro.style.color = '#F6F7C4';
            about.style.color = '#F6F7C4';
            history.style.backgroundColor = '#3B4D61'; // Update history section color
            history.style.color = '#F6F7C4';
            updateNavColors('#F6F7C4');
            modeClicked = 1;
        } else {
            visualMode.src = 'media/sun.png';
            visualMode.alt = 'Dark Mode';
            body.style.background = 'linear-gradient(-45deg, #7BD3EA, #F6F7C4)';
            body.style.color = '#333333';
            nav.style.background = 'rgba(255, 255, 255, 0.3)';
            nav.style.color = '#0F4C75';
            intro.style.color = '#0F4C75';
            about.style.color = '#0F4C75';
            history.style.backgroundColor = '#A1E0F0'; // Update history section color
            history.style.color = '#0F4C75';
            updateNavColors('#0F4C75');
            modeClicked = 0;
        }
        body.style.backgroundSize = '400% 400%';
        body.style.animation = 'gradient 15s ease infinite';
        visualMode.classList.remove('fade-out');
    }, 250);
});
