document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionBody = header.nextElementSibling;

        if (accordionBody.classList.contains('active')) {
            accordionBody.classList.remove('active');
            accordionBody.style.maxHeight = null;
        } else {
            document.querySelectorAll('.accordion-body').forEach(body => {
                body.classList.remove('active');
                body.style.maxHeight = null;
            });

            accordionBody.classList.add('active');
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }
    });
});
let currentIndex = 0;
let totalWidth = 0;
let imageWidths = [800, 800, 800, 800]; // Largura de cada imagem inicialmente

function calculateTotalWidth() {
    totalWidth = imageWidths.reduce((acc, width) => acc + width, 0);
}

function updateImageWidths() {
    // Verifica o tamanho da tela
    if (window.innerWidth <= 768) { // Se for um dispositivo móvel
        imageWidths = [400, 400, 400, 400]; // Altera a largura das imagens para 400px
    } else {
        imageWidths = [800, 800, 800, 800]; // Mantém a largura original das imagens para dispositivos de PC
    }
}

function getTranslateXValue() {
    let value = 0;
    for (let i = 0; i < currentIndex; i++) {
        value += imageWidths[i];
    }
    return value;
}

function showNextImage() {
    const carousel = document.querySelector('.carousel');

    // Calcular a largura total apenas uma vez
    if (totalWidth === 0) {
        calculateTotalWidth();
    }

    // Atualiza as larguras das imagens
    updateImageWidths();

    // Move para a próxima imagem
    currentIndex++;

    // Move o carrossel para mostrar a imagem atual
    carousel.style.transition = 'transform 0.5s ease'; // Ativar transição
    carousel.style.transform = `translateX(-${getTranslateXValue()}px)`;

    // Deixe sempre dois números abaixo do número total de imagens
    if (currentIndex >= imageWidths.length) {
        setTimeout(() => {
            currentIndex = 0;
            // Mova o carrossel para mostrar a primeira imagem suavemente
            carousel.style.transition = 'transform 0.5s ease'; // Ativar transição novamente
            carousel.style.transform = `translateX(0px)`; // Mover para a posição da primeira imagem
        }, 1500); // Atraso de 500ms antes de reposicionar
    }
}

// Chame a função de atualização das larguras das imagens quando a tela for redimensionada
window.addEventListener('resize', updateImageWidths);


function getTranslateXValue() {
    let translateXValue = 0;
    for (let i = 0; i < currentIndex; i++) {
        translateXValue += imageWidths[i];
    }
    return translateXValue;
}


setInterval(showNextImage, 3000);


// document.addEventListener('DOMContentLoaded', (event) => {
//     const swipedown = document.querySelector('.swipedown');
//     const swipeUp = document.querySelector('.swipeUp');
//     const container7 = document.getElementById('container7');
//     const header = document.getElementById('containerItens');

//     if (swipedown && container7) {
//         swipedown.addEventListener('click', () => {
//             container7.scrollIntoView({ behavior: 'smooth' });
//         });
//     }

//     if (swipeUp && header) {
//         swipeUp.addEventListener('click', () => {
//             header.scrollIntoView({ behavior: 'smooth' });
//         });
//     }
// });


ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 3000,
    delay: 300
});


// Adicione as classes das imagens que deseja animar aqui
ScrollReveal().reveal('.divContainer7 h7,.divContainer7 h4,.textHeader,  .img3,.textContainer2 h2, .fouthContainer p', { origin: 'left' });
ScrollReveal().reveal('.divContainer7 h6, .divContainer7 h5,.textContainer,.conainerParagrafs, .img1,.borderClassButon ', { origin: 'right' });
ScrollReveal().reveal(' .textContainer3 h4,.imageHeader, .titleConainer, .contentContainer1 h2, .textContainer3 h2', { origin: 'top' });
ScrollReveal().reveal('.textContainer3 h3,.line5, .titleCont, .containerTitle, .carousel, .img2, .secondTextContainer h3, .secondTextContainer h4, .secondTextContainer p, .line5', { origin: 'bottom' });




// function initializeScrollReveal() {
//     ScrollReveal({ 
//         reset: true, 
//         distance: '80px',
//         duration: 3000,
//         delay: 300
//     });

//     // Adicione as classes das imagens que deseja animar aqui
//     ScrollReveal().reveal('.divContainer7 h6,.divContainer7 h4,.textHeader,  .img3,.textContainer2 h2, .fouthContainer p', { origin: 'left' });
//     ScrollReveal().reveal('.divContainer7 h5,.textContainer,.conainerParagrafs, .img1,.borderClassButon ', { origin: 'right' });
//     ScrollReveal().reveal('.imageHeader, .titleConainer, .contentContainer1 h2, .textContainer3 h2', { origin: 'top' });
//     ScrollReveal().reveal('.line5, .titleCont, .containerTitle, .carousel, .img2, .secondTextContainer h3, .secondTextContainer h4, .secondTextContainer p ', { origin: 'bottom' });
// }

// // Verifica o tamanho da tela
// function isDesktop() {
//     return window.innerWidth > 768; // Define a largura mínima para ser considerado um dispositivo de PC
// }

// // Chame a função de inicialização do Scroll Reveal apenas se for um dispositivo de PC
// document.addEventListener("DOMContentLoaded", function() {
//     if (isDesktop()) {
//         initializeScrollReveal();
//     }
// });


