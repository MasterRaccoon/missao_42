// Seleciona o botão
const button = document.getElementById('btn');
// Seleciona o body
const body = document.body;

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener('click', function() {
    // Gera uma cor aleatória
    const randomColor = getRandomColor();
    // Define a cor de fundo do body como a cor aleatória
    body.style.backgroundColor = randomColor;
});

// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}