function initHeader() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    if (!menuToggle || !mainNav || !overlay) {
        console.error('No se encontraron todos los elementos del header');
        return;
    }
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
        const spans = menuToggle.querySelectorAll('span');
        if (mainNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    overlay.addEventListener('click', function() {
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
    
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Inicializar el header cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initHeader);

// También inicializar si el header se carga dinámicamente después
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initHeader, 100);
}