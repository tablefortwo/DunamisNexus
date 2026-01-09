// ================================
// Mobile Menu Toggle
// ================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ================================
// Smooth Scroll Enhancement
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Scroll Animations
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ================================
// Active Nav Link on Scroll
// ================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ================================
// Add Loading State for External Links
// ================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.6';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 1000);
    });
});

// ================================
// Parallax Effect for Hero
// ================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        if (scrolled < heroHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// ================================
// Initialize on Page Load
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
    
    // Log success message
    console.log('Dunamis Nexus website loaded successfully!');
    console.log('Building Community Through Faith and Gaming.');
});

// ================================
// Card Hover Effects Enhancement
// ================================
document.querySelectorAll('.link-card, .mission-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ================================
// Responsive Calendar
// ================================
function adjustCalendar() {
    const calendar = document.querySelector('.calendar-container iframe');
    if (calendar && window.innerWidth < 768) {
        calendar.setAttribute('height', '400');
    } else if (calendar) {
        calendar.setAttribute('height', '600');
    }
}

// Adjust calendar on load and resize
window.addEventListener('load', adjustCalendar);
window.addEventListener('resize', adjustCalendar);
