document.addEventListener('DOMContentLoaded', () => {
    const heroSlide = document.querySelector('.hero-slide');
    const caption = document.querySelector('.hero-slide-caption');

    if (!heroSlide || !caption) return;

    const slides = [
        { src: 'img/products/servers.png', name: 'Computer Servers' },
        { src: 'img/products/dellServer.png', name: 'Dell Servers' },
        { src: 'img/products/fiberOpt.png', name: 'Fiber Optics Cable' },
        { src: 'img/products/firewall.png', name: 'Computer Security Device' },
        { src: 'img/products/lanCable.png', name: 'LAN Cables' },
        { src: 'img/products/netDevice.png', name: 'Networking Devices' },
        { src: 'img/products/networkSwitch.png', name: 'Network Switches' },
        { src: 'img/products/router.png', name: 'Wireless Routers' }
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
        }, 350);
    };

    setInterval(updateSlide, 2500);
});

// Load Header
fetch("components/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

});

// Load Footer
fetch("components/footer.html")
.then(response => response.text())
.then(data => {

    document.getElementById("footer").innerHTML = data;

});
