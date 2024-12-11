let score = 0;

function setup() {
    const canvas = createCanvas(400, 100);
    canvas.parent('p5-container');
    noStroke();
}

function draw() {
    background(240);

    // Draw the score bar background
    fill(200);
    rect(10, 40, 380, 20);

    // Draw the score bar
    fill(50, 150, 250);
    rect(10, 40, map(score, 0, 100, 0, 380), 20);

    // Display score text
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(`Puntuación: ${score}`, width / 2, 70);
}

function mousePressed() {
    if (score < 100) {
        score += 10;
    } else {
        score = 0;
    }
}

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('#togglePassword i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// Dynamic product cards
// Datos de los productos
const products = [
    { title: 'mansion preciosa', description: '', image: 'images/New-Final-Final-10.jpeg' },
    { title: 'casa con vistas al mar', description: '', image: 'images/images.jpg' },
    { title: 'casa en la orilla de la playa', description: '', image: 'images/imge.jpg' },
    { title: 'espectacular casa nueva sin uso a buen precio', description: '', image: 'images/pepe.jpg' },
    
];

// Renderizar productos dinámicamente
const productContainer = document.querySelector('.product-container');
const productTemplate = document.querySelector('#product-template');

products.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);
    clone.querySelector('img').src = product.image;
    clone.querySelector('.product-title').textContent = product.title;
    clone.querySelector('.product-description').textContent = product.description;
    clone.querySelector('.product-button').addEventListener('click', () => {
        alert(`Añadiste "${product.title}" al carrito.`);
    });
    productContainer.appendChild(clone);
});

// Dialogo de cookies
const cookieDialog = document.getElementById('cookieDialog');
const acceptCookies = document.getElementById('acceptCookies');
const declineCookies = document.getElementById('declineCookies');

// Mostrar el diálogo al cargar la página
window.onload = () => {
    cookieDialog.showModal();
};

// Aceptar o rechazar cookies
acceptCookies.addEventListener('click', () => {
    alert('¡Gracias por aceptar las cookies!');
    cookieDialog.close();
});

declineCookies.addEventListener('click', () => {
    alert('Rechazaste las cookies. Algunas funciones podrían no estar disponibles.');
    cookieDialog.close();
});
