document.addEventListener('DOMContentLoaded', () => {
    const heroSlide = document.querySelector('.hero-slide');
    const caption = document.querySelector('.hero-slide-caption');
    const servicesItem = document.querySelector('.services-item');
    const servicesToggle = document.querySelector('.services-toggle');
    const searchForm = document.getElementById('homeSearchForm');
    const searchInput = document.getElementById('homeSearchInput');
    const suggestionBox = document.getElementById('homeSearchSuggestions');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (servicesItem && servicesToggle) {
        servicesToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = servicesItem.classList.toggle('is-open');
            servicesToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (event) => {
            if (!servicesItem.contains(event.target)) {
                servicesItem.classList.remove('is-open');
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (event) => {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mainNav.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const productSuggestions = window.products || [];

    const getSuggestions = (value) => {
        const keyword = value.toLowerCase().trim();

        if (!keyword) {
            return [];
        }

        return productSuggestions
            .filter(product => {
                const searchText = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
                return searchText.includes(keyword);
            })
            .slice(0, 6);
    };

    const renderSuggestions = (value) => {
        if (!suggestionBox || !searchInput) {
            return;
        }

        const suggestions = getSuggestions(value);

        if (!suggestions.length) {
            suggestionBox.innerHTML = '';
            suggestionBox.classList.remove('show');
            return;
        }

        suggestionBox.innerHTML = suggestions.map(product => `
            <button type="button" class="search-suggestion" data-value="${product.name}">
                <strong>${product.name}</strong><br>
                <small>${product.brand} • ${product.category}</small>
            </button>
        `).join('');

        suggestionBox.classList.add('show');
    };

    if (searchInput && suggestionBox) {
        searchInput.addEventListener('input', (event) => {
            renderSuggestions(event.target.value);
        });

        searchInput.addEventListener('focus', () => {
            renderSuggestions(searchInput.value);
        });

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                suggestionBox.classList.remove('show');
            }
        });

        suggestionBox.addEventListener('click', (event) => {
            const button = event.target.closest('.search-suggestion');
            if (!button) {
                return;
            }

            const selectedValue = button.getAttribute('data-value');
            if (selectedValue) {
                searchInput.value = selectedValue;
                suggestionBox.classList.remove('show');
                if (searchForm) {
                    searchForm.submit();
                }
            }
        });

        document.addEventListener('click', (event) => {
            if (!searchForm?.contains(event.target)) {
                suggestionBox.classList.remove('show');
            }
        });
    }

    if (!heroSlide || !caption) return;

    const slides = [
        { src: 'img/services/dc.png', name: 'Data Center Design and Installation.' },
        { src: 'img/services/serAndStorage.png', name: 'Server & Storage Management' },
        { src: 'img/services/net.png', name: 'Network Management' },
        { src: 'img/services/consult.png', name: 'IT Infra Consultancy' },
        { src: 'img/services/wms.png', name: 'Warehouse Mangement Systems' },
        { src: 'img/services/cable.png', name: 'Structured Cabling' },
        { src: 'img/services/cctv.png', name: 'CCTV Serveillance (Factories/Warehouses/Offices)' },
        { src: 'img/services/ftth.png', name: 'Other IT Services' }
    ];

    let currentIndex = 0;

    const updateSlide = () => {
        heroSlide.classList.add('is-sliding');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            heroSlide.src = slides[currentIndex].src;
            heroSlide.alt = slides[currentIndex].name;
            caption.textContent = slides[currentIndex].name;
            heroSlide.classList.remove('is-sliding');
        }, 650);
    };

    setInterval(updateSlide, 3000);
});

// // Load Header
// fetch("components/header.html")
// .then(response => response.text())
// .then(data => {

//     document.getElementById("header").innerHTML = data;

// });

// // Load Footer
// fetch("components/footer.html")
// .then(response => response.text())
// .then(data => {

//     document.getElementById("footer").innerHTML = data;

// });
