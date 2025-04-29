// Smooth Scroll untuk navigasi
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Jarak offset untuk header
            behavior: 'smooth'
        });
    });
});

// Efek Hover pada gambar
const profileImage = document.querySelector('aside img');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});
