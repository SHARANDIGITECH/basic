document.addEventListener('DOMContentLoaded', function() { 
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn'); 
    const navLinks = document.querySelector('.nav-links'); 
    
    if (mobileMenuBtn) { 
        mobileMenuBtn.addEventListener('click', function() { 
            navLinks.classList.toggle('active'); 
            const spans = mobileMenuBtn.querySelectorAll('span'); 
            if (navLinks.classList.contains('active')) { 
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)'; 
                spans[1].style.opacity = '0'; 
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)'; 
            } else { 
                spans[0].style.transform = 'none'; 
                spans[1].style.opacity = '1'; 
                spans[2].style.transform = 'none'; 
            } 
        }); 
    }
    
    // Add parallax effect to orbital system on mouse move
    const orbitalSystem = document.querySelector('.orbital-system');
    if (orbitalSystem) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX) / 50;
            const y = (window.innerHeight - e.pageY) / 50;
            orbitalSystem.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});