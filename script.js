document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle icon between hamburger and close
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
                // En móvil, mostrar/ocultar submenu
                if (window.innerWidth <= 768) {
                    const submenu = dropdown.querySelector('.submenu');
                    if (submenu) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                }
            });
        }

        // Cerrar dropdown al hacer clic en un enlace del submenu
        const submenuLinks = dropdown.querySelectorAll('.submenu a');
        submenuLinks.forEach(submenuLink => {
            submenuLink.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    dropdown.classList.remove('active');
                    navMenu.classList.remove('active');
                    const icon = mobileBtn.querySelector('span');
                    if (icon) {
                        icon.textContent = '☰';
                    }
                }
            });
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('header')) {
                navMenu.classList.remove('active');
                const icon = mobileBtn.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
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

        console.log(`${greeting}! Lista para leer un devocional hoy?`);
    }
});
