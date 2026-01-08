document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            if(navList.style.display === 'flex') {
                navList.style.position = 'absolute';
                navList.style.top = '80px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = '#0d0d0d';
                navList.style.flexDirection = 'column';
                navList.style.padding = '2rem';
                navList.style.textAlign = 'center';
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu on mobile click
                if (window.innerWidth <= 768) {
                    navList.style.display = 'none';
                }
            }
        });
    });

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.getElementById('hero-img');
        if (heroImg) {
             heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});
