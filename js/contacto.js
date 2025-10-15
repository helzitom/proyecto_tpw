document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.contact-form form');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email || !asunto || !mensaje) {
            mostrarAlerta('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarAlerta('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }
        
        mostrarAlerta('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        
        formulario.reset();
    });
    
    function mostrarAlerta(mensaje, tipo) {
        const alerta = document.createElement('div');
        alerta.className = `alerta ${tipo}`;
        alerta.textContent = mensaje;
        alerta.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            max-width: 300px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: fadeIn 0.3s ease-in;
        `;
        
        if (tipo === 'success') {
            alerta.style.backgroundColor = '#4CAF50'; 
        } else {
            alerta.style.backgroundColor = '#f44336'; 
        }
        
        document.body.appendChild(alerta);
        setTimeout(() => {
            alerta.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (alerta.parentNode) {
                    alerta.parentNode.removeChild(alerta);
                }
            }, 300);
        }, 5000);
    }
});