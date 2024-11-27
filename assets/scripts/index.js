const dataInicial = new Date("2022-03-23T15:00:00");

function atualizarContador() {
    const agora = new Date(); // Data atual
    const diferencaMs = agora - dataInicial; // Diferença em milissegundos

    // Conversões
    const anos = Math.floor(diferencaMs / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((diferencaMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

    // Atualizando o elemento HTML
    document.getElementById("data").textContent =
        `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

const carouselImages = document.getElementById('carouselImages');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

let currentIndex = 0; // Índice da imagem atual
let interval;

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -currentIndex * 200; // 600px é a largura de cada imagem
    carouselImages.style.transform = `translateX(${offset}px)`;
}

// Função para avançar
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Função para voltar
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Eventos dos botões
nextButton.addEventListener('click', () => {
    nextImage();
    resetAutoPlay();
});

prevButton.addEventListener('click', () => {
    prevImage();
    resetAutoPlay();
});

// Troca automática de imagens
function startAutoPlay() {
    interval = setInterval(nextImage, 900); // Troca a cada 3 segundos
}

// Reiniciar o autoplay ao interagir com os botões
function resetAutoPlay() {
    clearInterval(interval);
    startAutoPlay();
}

// Iniciar o autoplay ao carregar a página
startAutoPlay();


