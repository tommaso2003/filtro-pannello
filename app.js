const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Dimensioni del canvas
canvas.width = 500;
canvas.height = 500;

// Carica immagine preimpostata
const img = new Image();
img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = 'foto/pannello.jpg'; // Cambia il percorso con il nome del tuo file immagine

// Applica filtro con opacità 30%
function applyFilter(color) {
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.4; // Imposta opacità al 40%
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0; // Ripristina opacità
}
