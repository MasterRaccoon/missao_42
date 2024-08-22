document.addEventListener("DOMContentLoaded", function() {
    // Selecione todos os links de navegação no navbar
    const links = document.querySelectorAll('.navbar a');

    // Adicione um ouvinte de evento de clique a cada link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Impedir o comportamento padrão de seguir o link imediatamente
            event.preventDefault();

            // Obtenha o ID da seção alvo a partir do atributo href do link
            const targetId = this.getAttribute('href').substring(1);

            // Selecione a seção de destino usando o ID
            const targetSection = document.getElementById(targetId);

            // Role suavemente até a seção de destino
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});