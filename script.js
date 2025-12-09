function toggleMobileMenu() {
    document.getElementById('mainNav').classList.toggle('active');
    const rightNav = document.querySelector('.right-nav');
    if (rightNav) {
        rightNav.classList.toggle('active');
    }
}
        
        function toggleDropdown(event) {
            event.preventDefault();
            event.stopPropagation();
            const dropdown = event.target.parentElement;
            const isActive = dropdown.classList.contains('active');
            
            document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
            
            if (!isActive) {
                dropdown.classList.add('active');
            }
        }
        
        document.addEventListener('click', function() {
            document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
        });


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => moveSlide(1), 5000);
