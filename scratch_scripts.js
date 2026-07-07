/*=============== HEADER ===============*/
const body = document.querySelector('body');
const topBar = document.querySelector('.top-bar');
const headerMain = document.querySelector('.header-main');
const logo = document.querySelector('.logo');
const nav = document.querySelector('header nav')
const navUl = document.querySelector('header nav ul');
const navItems = document.querySelectorAll('header nav a');
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');
const dropdownTriggers = document.querySelectorAll('li:has(ul)');
const dropdownMenus = document.querySelectorAll('header nav ul ul');
const headerContactIcons = document.querySelectorAll('.header-contact-icons a ');

// Change header color on scroll
window.addEventListener('scroll', function headerScrollEffects() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        topBar.classList.add('colored-bg');
        headerMain.classList.add('white-bg', 'header-shadow');
        logo.classList.remove('white-logo');
        hamburger.classList.add('hamburger-dark');

        navItems.forEach (item => {
            item.classList.add('dark-nav-text');
        })

        headerContactIcons.forEach (item => {
            item.classList.add('dark-nav-text');
        })

    } else {
        topBar.classList.remove('colored-bg');
        headerMain.classList.remove('white-bg', 'header-shadow');
        logo.classList.add('white-logo');
        hamburger.classList.remove('hamburger-dark');

        navItems.forEach (item => {
            item.classList.remove('dark-nav-text');
        })

        headerContactIcons.forEach (item => {
            item.classList.remove('dark-nav-text');
        })
    }
})

// Show/hide mobile nav
hamburger.addEventListener('click', () => {
    body.classList.toggle('disable-scroll');
    nav.classList.toggle('slide-nav');
    navUl.classList.toggle('slide-nav');
    hamburger.classList.toggle('hamburger-cross')
});

// Close mobile nav when a nav link is tapped
navItems.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.remove('disable-scroll');
        nav.classList.remove('slide-nav');
        navUl.classList.remove('slide-nav');
        hamburger.classList.remove('hamburger-cross');
        });
    });

// Expand/collapse mobile nav accordions
    // This doesn't work if you use a forEach loop and use an eventListener, God knows why. Oldskool approach:
    for (let i=0; i < dropdownTriggers.length; i++) {
        dropdownTriggers[i].onclick = function() {
            dropdownMenus[i].classList.toggle('dropdown-accordion');
        }
    };



/*=============== FOOTER ===============*/
document.getElementById('year').innerHTML = new Date().getFullYear();

function generateFilterForColor(targetColor) {
    // Calculate the filter to convert black to the targetColor
    const hueRotation = getHueRotation(targetColor);
    const filter = `invert(1) sepia(1) saturate(10000%) hue-rotate(${hueRotation}deg)`;

    return filter;
}



/*=============== HERO SLIDESHOW ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const heroImageContainer = document.querySelector('.hero-image-container');
    const images = heroImageContainer ? heroImageContainer.querySelectorAll('img') : [];
    let currentIndex = 0;

    const showSlide = (index) => {
        // Reset all elements
        images.forEach(img => img.classList.remove('active'));

        // Set the current elements
        if (images.length > 0) {
            images[index].classList.add('active');
        }
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % Math.max(images.length);
        showSlide(currentIndex);
    };

    if (images.length > 0) { // Without this it doesn't display if there's only image/text
        showSlide(currentIndex); // Initialize first slide
        setInterval(nextSlide, 5000);
    }
});



/*=============== PARALLAX ===============*/
const parallaxElements = document.querySelectorAll('.parallax');
const parallaxImgs = document.querySelectorAll('.parallax-img, .hero-image-container img, .section-bg-img-container img');

const observerOptions = {
    root: null, // Use viewport as the root
    rootMargin: '0px',
    threshold: 0
}



// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a scroll event listener only when the element is in view
                window.addEventListener('scroll', () => applyParallax(entry.target));
            } else {
                // Remove the scroll event listener when the element is out of view
                window.removeEventListener('scroll', () => applyParallax(entry.target));
            }
        });
    }, observerOptions);

    parallaxElements.forEach(element => {
        observer.observe(element);
    });

    parallaxImgs.forEach(img => {
        observer.observe(img);
    });
}

function applyParallax(element) {
    const bounding = element.getBoundingClientRect();
    const offset = window.scrollY;
    let elementTop = bounding.top + offset;

    // Check if the element is a descendant of an element with the class 'hero' or 'home-hero'. Subtracts the top margin of the 'hero' element, otherwise the image jumps and doesn't return to correct position when user scrolls back to top. If margin = 0 then it doesn't matter
    let heroAncestor = element.closest('.hero, .hero-home');
    if (heroAncestor) {
        const computedStyle = window.getComputedStyle(heroAncestor);
        const marginTop = parseFloat(computedStyle.marginTop);
        elementTop -= marginTop
    };
    
    const parallaxOffset = (offset - elementTop) * 0.3; // 0 = scroll, 1 = fixed. Gets glitchy > 0.5

    if (element.classList.contains('parallax')) {
        element.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
    } else if (element.classList.contains('parallax-img') || element.matches('.hero-image-container img') || element.matches('.section-bg-img-container img')) {
        element.style.transform = `translateY(${parallaxOffset}px)`;
    }

    // console.log('Offset', offset );
    // console.log('Bounding top', bounding.top);
    // console.log('Element top', elementTop );
    // console.log('Parallax offset', parallaxOffset );
    // console.log('' );
}



/*=============== SCROLL ANIMATIONS ===============*/
/* Animates in elements when scrolled into viewport */
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains('slide-up')) {
            entry.target.classList.add('slide-up-animation');

            } else if (entry.target.classList.contains('slide-down')) {
                entry.target.classList.add('slide-down-animation');

            } else if (entry.target.classList.contains('slide-right')) {
                entry.target.classList.add('slide-right-animation');

            } else if (entry.target.classList.contains('slide-left')) {
                entry.target.classList.add('slide-left-animation');

            } else if (entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('fade-in-animation');
                
            } else if (entry.target.classList.contains('pulse')) {
                entry.target.classList.add('pulse-animation');
            } 
        }
	});
}, {threshold: 0.2});

const animatedElements = document.querySelectorAll('.slide-up, .slide-down, .slide-right, .slide-left, .fade-in, .pulse');
animatedElements.forEach((el) => observer.observe(el));



/*=============== LATEST WORK CAROUSEL ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const carouselContent = document.querySelector('.carousel-content');

    if (carouselContent) {
        const clonedContent = carouselContent.cloneNode(true);
        carouselContent.parentNode.appendChild(clonedContent);
        
        // Force a reflow to ensure Safari applies styles correctly before animation starts
        void carouselContent.offsetWidth;

        // Start animation after cloning is complete
        carouselContent.classList.add('carousel-content-slide');
        clonedContent.classList.add('carousel-content-slide');
    }
});



/*=============== LEAFLET MAP ===============*/
const mapElement = document.querySelector('#map');

if (mapElement) {
    const root = document.documentElement;
    const accentColor1 = getComputedStyle(root).getPropertyValue('--accent-color-1').trim();
    const coordinates = [52.396379,-1.953273];
    const zoomLevel = 9;

    const map = L.map(mapElement).setView(coordinates, zoomLevel);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // var marker = L.marker(coordinates).addTo(map);

    const circle = L.circle(coordinates, {
        color: accentColor1,
        fillColor: accentColor1,
        fillOpacity: 0.1,
        radius: 35000
    }).addTo(map);
}

// Format phone number in header Whatsapp icon
const whatsappIconLink = document.querySelector('.header-contact-icons [href^="https://wa.me/"]');
if (whatsappIconLink) {
    let phoneNumber = whatsappIconLink.getAttribute('href').replace('https://wa.me/', '');

    // Remove spaces and replace leading 0 with +44
    phoneNumber = phoneNumber.replace(/\s+/g, '').replace(/^0/, '+44');

    // Update href with the correct format
    whatsappIconLink.setAttribute('href', `https://wa.me/${phoneNumber}`);
}

/* =====================================================================
 * Lightbox.js
 * Version: 0.0.6
 * Author: Victor Diego <victordieggo@gmail.com>
 * License: MIT
 * ================================================================== */

(function () {

    'use strict';

    var animation, body, btnClose, btnNav, currentItem, container, content, wrapper, trigger, currentTrigger;

    body = document.body;

    trigger = body.querySelectorAll('[data-lightbox]');

    animation = {
        fadeIn: 'fadeIn .3s',
        fadeOut: 'fadeOut .3s',
        scaleIn: 'createBox .3s',
        scaleOut: 'deleteBox .3s'
    };

    function toggleScroll() {
      body.classList.toggle('remove-scroll');
    }

    function sortContent(content) {
        var image, video, href = content.getAttribute('href');

        if (href.match(/\.(jpeg|jpg|gif|png)/)) {
            image = document.createElement('img');
            image.className = 'lightbox-image';
            image.src = href;
            image.alt = content.getAttribute('data-image-alt');
            return image;
        }

        if (href.match(/(youtube|vimeo)/)) {
            video = [];
            if (href.match('youtube')) {
                video.id = href.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
                video.url = 'www.youtube.com/embed/';
                video.options = '?autoplay=1&rel=0';
            }
            if (href.match('vimeo')) {
                video.id = href.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
                video.url = 'player.vimeo.com/video/';
                video.options = '?autoplay=1title=0&byline=0&portrait=0';
            }
            video.player = document.createElement('iframe');
            video.player.setAttribute('allowfullscreen', '');
            video.player.className = 'lightbox-video-player';
            video.player.src = 'https://' + video.url + video.id + video.options;
            video.wrapper = document.createElement('div');
            video.wrapper.className = 'lightbox-video-wrapper';
            video.wrapper.appendChild(video.player);
            return video.wrapper;
        }

        return body.querySelector(href).children[0].cloneNode(true);
    }

    function galleryItens(element) {
        var itens = {
                next: element.parentElement.nextElementSibling,
                previous: element.parentElement.previousElementSibling
            },
            key;
        for (key in itens) {
            if (itens[key] !== null) {
                itens[key] = itens[key].querySelector('[data-lightbox]');
            }
        }
        return itens;
    }

    function buildLightbox(element) {
        element.blur();
        currentItem = element;
        element.classList.add('current-lightbox-item');

        btnClose = document.createElement('button');
        btnClose.className = 'lightbox-btn lightbox-btn-close';

        content = document.createElement('div');
        content.className = 'lightbox-content';
        content.appendChild(sortContent(element));

        wrapper = content.cloneNode(false);
        wrapper.className = 'lightbox-wrapper';
        wrapper.style.animation = [animation.scaleIn, animation.fadeIn];
        wrapper.appendChild(content);
        wrapper.appendChild(btnClose);

        container = content.cloneNode(false);
        container.className = 'lightbox-container';
        container.style.animation = animation.fadeIn;
        container.onclick = function() {};
        container.appendChild(wrapper);

        if (element.getAttribute('data-lightbox') === 'gallery') {
            container.classList.add('lightbox-gallery');
            var key;
            btnNav = {next: '', previous: ''};
            for (key in btnNav) {
                if (btnNav.hasOwnProperty(key)) {
                    btnNav[key] = btnClose.cloneNode(false);
                    btnNav[key].className = 'lightbox-btn lightbox-btn-' + key;
                    btnNav[key].disabled = galleryItens(element)[key] === null ? true : false;
                    wrapper.appendChild(btnNav[key]);
                }
            }
        }

        body.appendChild(container);
        toggleScroll();
    }

    function galleryNavigation(position) {
        wrapper.removeAttribute('style');
        var item = galleryItens(currentItem)[position],
            key;
        if (item !== null) {
            content.style.animation = animation.fadeOut;
            setTimeout(function () {
                content.replaceChild(sortContent(item), content.children[0]);
                content.style.animation = animation.fadeIn;
            }, 200);
            currentItem.classList.remove('current-lightbox-item');
            item.classList.add('current-lightbox-item');
            currentItem = item;
            for (key in btnNav) {
                if (btnNav.hasOwnProperty(key)) {
                    btnNav[key].disabled = galleryItens(item)[key] === null ? true : false;
                }
            }
        }
    }

    function closeLightbox() {
        container.style.animation = animation.fadeOut;
        wrapper.style.animation = [animation.scaleOut, animation.fadeOut];
        setTimeout(function () {
            if (body.contains(container)) {
                body.removeChild(container);
                currentTrigger.focus();
                currentItem.classList.remove('current-lightbox-item');
                toggleScroll();
            }
        }, 200);
    }

    Array.prototype.forEach.call(trigger, function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            buildLightbox(element);
            currentTrigger = element;
        });
    });

    ['click', 'keyup'].forEach( function (eventType) {
        body.addEventListener(eventType, function (event) {
            if (body.contains(container)) {
                var target = event.target,
                    key = event.keyCode,
                    type = event.type;
                if ([container, btnClose].indexOf(target) !== -1 || key === 27) {
                    closeLightbox();
                }
                if (container.classList.contains('lightbox-gallery')) {
                    if ((target === btnNav.next && type === 'click') || key === 39) {
                        galleryNavigation('next');
                    }
                    if ((target === btnNav.previous && type === 'click') || key === 37) {
                        galleryNavigation('previous');
                    }
                }
            }
        });
    });

}());



