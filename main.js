document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const body = document.body;
    
    // إخفاء Preloader بعد تحميل الصفحة
    window.addEventListener('load', function() {
        setTimeout(function() {
            loaderWrapper.classList.add('fade-out');
            body.classList.remove('is-preload');
        }, 1000);
    });
    
    // تهيئة جزيئات الخلفية
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Header Scroll Effect
    const header = document.querySelector('.main-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });
    
    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Typing Animation
    if (document.getElementById('typed-name') && document.getElementById('typed-subtext')) {
        const typedName = new Typed('#typed-name', {
            strings: ['abdelbassat'],
            typeSpeed: 100,
            showCursor: false
        });
        
        setTimeout(() => {
            const typedSubtext = new Typed('#typed-subtext', {
                strings: ['Web Designer', 'Front-end Developer', 'UI/UX Enthusiast'],
                typeSpeed: 60,
                backSpeed: 30,
                backDelay: 1500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }, 1000);
    }
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeToggle.classList.add('active');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'light';
            
            if (currentTheme === 'light') {
                newTheme = 'dark';
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // Animate Skills on Scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Intersection Observer for Skills Animation
    const aboutSection = document.querySelector('.about-section');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(aboutSection);
    }
    
    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة النشط من جميع الأزرار
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة النشط للزر المحدد
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // تصفية العناصر
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Portfolio Lightbox
    const portfolioLightboxes = document.querySelectorAll('.portfolio-lightbox');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img class="lightbox-img" src="" alt="">
            <span class="lightbox-close">&times;</span>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    if (portfolioLightboxes.length) {
        portfolioLightboxes.forEach(lightboxBtn => {
            lightboxBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const imgSrc = this.getAttribute('href');
                const imgAlt = this.getAttribute('title');
                
                lightbox.querySelector('.lightbox-img').setAttribute('src', imgSrc);
                lightbox.querySelector('.lightbox-img').setAttribute('alt', imgAlt);
                lightbox.classList.add('active');
                body.classList.add('no-scroll');
            });
        });
        
        lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
            lightbox.classList.remove('active');
            body.classList.remove('no-scroll');
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                lightbox.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formMessage = this.querySelector('.form-message');
            
            // Show loading state
            btnText.style.transform = 'translateY(-100%)';
            btnLoading.style.opacity = '1';
            btnLoading.style.transform = 'translateY(0)';
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                // Show success message
                formMessage.textContent = 'Message sent successfully!';
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                
                // Reset form
                this.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Show error message
                formMessage.textContent = 'Error sending message. Please try again.';
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
                
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button
                btnText.style.transform = 'translateY(0)';
                btnLoading.style.opacity = '0';
                btnLoading.style.transform = 'translateY(100%)';
            });
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Simulate form submission
            submitBtn.innerHTML = '<i class="fas fa-check"></i>';
            
            // Reset after 2 seconds
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
                emailInput.value = '';
            }, 2000);
        });
    }
    
    // Set Current Year in Footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Hero Section Animation
        gsap.from('.typing-text', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5
        });
        
        gsap.from('.typing-subtext', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1
        });
        
        gsap.from('.hero-btns', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1.5,
            stagger: 0.2
        });
        
        gsap.from('.scroll-down-arrow', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 2
        });
    }
});