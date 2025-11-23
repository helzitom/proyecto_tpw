function initHeader() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    if (!menuToggle || !mainNav || !overlay) {
        console.error('No se encontraron todos los elementos del header');
        return;
    }
    
    // Función para cerrar el menú
    function closeMenu() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    }
    
    // Función para abrir/cerrar el menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
    
    // Toggle del menú con el botón hamburguesa
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener('click', closeMenu);
    
    // Cerrar menú al hacer clic en un enlace (solo en móvil)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
    
    // Cerrar menú al cambiar tamaño de ventana a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    console.log('Header inicializado correctamente');
}

// Inicializar el header cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initHeader);

// También inicializar si el header se carga dinámicamente después
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initHeader, 100);
}