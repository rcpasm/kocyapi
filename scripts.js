// Header kaydırma animasyonu
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Aşağı kaydırılıyor
        header.style.top = '-230px'; // Header yüksekliğinde yukarıya kaydırılır
    } else {
        // Yukarı kaydırılıyor
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Video görünürlüğüne göre oynat/durdur
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
    const observerOptions = {
        root: null, // viewport olarak ayarla
        rootMargin: '0px',
        threshold: 0.5 // Video'nun %50'si görünür olduğunda tetikle
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, observerOptions);

    observer.observe(video);
});

// Hamburger menü kontrolü
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    // Hamburger tıklanınca menüyü aç/kapat
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Overlay tıklanınca menüyü kapat
    overlay.addEventListener('click', function () {
        hamburger.classList.remove('active');
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Video üzerine tıklayınca oynat/durdur
const heroVideo = document.getElementById('hero-video');

heroVideo.addEventListener('click', () => {
    if (heroVideo.paused) {
        heroVideo.play(); // Eğer video durmuşsa başlat
    } else {
        heroVideo.pause(); // Eğer oynuyorsa durdur
    }
});
