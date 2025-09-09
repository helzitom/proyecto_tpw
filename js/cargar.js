function loadComponent(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el componente: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            if (elementId === 'footer') {
                loadFooterCSS();
            }
            
            if (callback) callback();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById(elementId).innerHTML = '<p>Error al cargar el componente.</p>';
        });
}

function loadFooterCSS() {
    if (!document.querySelector('link[href="css/footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/footer.css';
        document.head.appendChild(link);
    }
}

function loadHeaderCSS() {
    if (!document.querySelector('link[href="css/header.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/header.css';
        document.head.appendChild(link);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderCSS();
    loadComponent("header", "header.html", function() {
        // Recargar el script del header después de cargar el HTML
        if (typeof initHeader === 'function') {
            initHeader();
        }
    });
    loadComponent("footer", "footer.html");  
});