;
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Спасибо за ваше сообщение.');
            this.reset();
        });
    }

    loadCountriesData();
    
    initGalleryFilter();
});

const countriesData = [
    { name: 'Франция', flag: '🇫🇷', region: 'europe', image: "Париж.webr"},
    { name: 'Италия', flag: '🇮🇹', region: 'europe', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'Испания', flag: '🇪🇸', region: 'europe', image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'Япония', flag: '🇯🇵', region: 'asia', image: 'https://images.unsplash.com/photo-1540959733332-4abcbef5d3a6?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'Таиланд', flag: '🇹🇭', region: 'asia', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'США', flag: '🇺🇸', region: 'america', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'Германия', flag: '🇩🇪', region: 'europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&w=500&q=80' },
    { name: 'Греция', flag: '🇬🇷', region: 'europe', image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&w=500&q=80' }
];

function loadCountriesData() {
    const countriesGrid = document.getElementById('countries-grid');
    const countryGallery = document.getElementById('country-gallery');
    
    if (countriesGrid) {
        countriesData.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.className = 'country-card';
            countryCard.innerHTML = `
                <div class="country-flag">${country.flag}</div>
                <h4>${country.name}</h4>
            `;
            countriesGrid.appendChild(countryCard);
        });
    }
    
    if (countryGallery) {
        countriesData.forEach(country => {
            const photoItem = document.createElement('div');
            photoItem.className = `photo-item ${country.region}`;
            photoItem.innerHTML = `
                <img src="${country.image}" alt="${country.name}">
                <div class="photo-caption">${country.flag} ${country.name}</div>
            `;
            countryGallery.appendChild(photoItem);
        });
    }
}

function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
        
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            photoItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}