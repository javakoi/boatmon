// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default if it's an actual anchor (not just #)
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Submission Handlers
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message about "${subject}" has been received. We'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll Animation (adds fade-in effect on scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content cards and service cards
document.querySelectorAll('.content-card, .service-card, .product-card, .media-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active navigation link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.style.color = 'var(--olive-accent)';
        link.style.fontWeight = '600';
    }
});

// Scroll to top functionality (optional - can be added if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener to show/hide scroll to top button (if implemented)
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    lastScrollTop = scrollTop;
}, false);

// Initialize PayPal buttons on store page (if PayPal SDK is loaded)
if (typeof paypal !== 'undefined') {
    // PayPal buttons are initialized in store.html inline script
    // This is just a placeholder for any additional PayPal functionality
}

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        const bars = hamburger?.querySelectorAll('.bar');
        if (bars) {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }
});

// Add loading state to buttons on form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"], .submit-btn');
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Re-enable after a delay (in real app, this would be after server response)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    });
});

// Lazy loading for images (if images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('BOATMON enterprises website loaded successfully!');
