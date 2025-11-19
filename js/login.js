function inicializarLogin() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm && !loginForm.dataset.initialized) {
        loginForm.dataset.initialized = 'true';
        console.log('✓ Formulario de login inicializado');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado');

            const usuario = document.getElementById('usuario').value.trim();
            const password = document.getElementById('password').value;
            
            console.log('Usuario ingresado:', usuario);

            // Validar credenciales
            if (usuario === 'admin@mail.com' && password === '123456') {
                console.log('✓ Credenciales correctas - Redirigiendo...');
                window.location.href = 'intranet.html';
            } else {
                console.log('✗ Credenciales no válidas');
                alert('Credenciales incorrectas');
            }
        });
        
        console.log('✓ Event listener agregado correctamente');
    } else if (!loginForm) {
        console.error('✗ Formulario no encontrado');
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarLogin);