// CARRUSEL MARCAS

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.slide-track');
    if (!track) return;

    let isHovered = false;
    let isVisible = true;

    function updateAnimationState() {
        if (!isVisible || isHovered) {
            track.style.animationPlayState = 'paused';
        } else {
            track.style.animationPlayState = 'running';
        }
    }

    track.addEventListener('mouseenter', () => {
        isHovered = true;
        updateAnimationState();
    });
    track.addEventListener('mouseleave', () => {
        isHovered = false;
        updateAnimationState();
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                updateAnimationState();
            });
        },
        { threshold: 0.1 }
    );
    observer.observe(track);

    updateAnimationState();
});

// SCROLL LOGO

const headerLogo = document.querySelector('.header-logo');
const logoPrincipal = document.querySelector('.logo-title');

window.addEventListener('scroll', () => {
    const logoBottom = logoPrincipal.getBoundingClientRect().bottom;

    if (logoBottom < 60) {
    headerLogo.classList.add('show');
    } else {
    headerLogo.classList.remove('show');
    }
});

// CARRUSEL BANNER

const banner = document.getElementById("banner");
    const totalSlides = document.querySelectorAll(".banner-slide").length;
    let index = 0;

    function updateSlidePosition() {
        banner.style.transform = `translateX(-${index * 100}vw)`;
    }

    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    });

    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    }, 7000);
