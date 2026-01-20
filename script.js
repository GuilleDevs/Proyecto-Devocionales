document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Optional: Toggle icon between hamburger and close (if we used an icon library)
            const icon = mobileBtn.querySelector('span');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.textContent = '✕';
                } else {
                    icon.textContent = '☰';
                }
            }
        });
    }

    // Manejo del dropdown para dispositivos
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                // En desktop, permitir navegar; en móvil, mostrar submenu
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Add a simple greeting based on time of day
    const heroText = document.querySelector('.hero p');
    if (heroText) {
        const hour = new Date().getHours();
        let greeting = 'Bienvenida';
        if (hour < 12) greeting = 'Buenos días, bendiciones';
        else if (hour < 18) greeting = 'Buenas tardes, bendiciones';
        else greeting = 'Buenas noches, bendiciones';

        // Append greeting if not already present or just as a console log to not override static content unexpectedly
        console.log(`${greeting}! Lista para leer un devocional hoy?`);
    }
});
