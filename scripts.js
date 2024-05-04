// Aguarda o carregamento completo do DOM antes de executar o código JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de scroll suave
    const scrollButton = document.getElementById('scroll-button');
  
    // Adiciona um evento de clique ao botão
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Seleciona o link para o Instagram
    const instagramLink = document.getElementById('instagram-link');
  
    // Adiciona um evento de clique ao link do Instagram
    instagramLink.addEventListener('click', () => {
      // Aqui você pode definir o link do seu perfil do Instagram
      window.location.href = 'https://www.instagram.com/ambae_acps';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Botão de scroll suave
    var scrollButton = document.getElementById('scroll-button');
  
    // Adiciona o evento de clique ao botão
    scrollButton.addEventListener('click', function() {
      // Faz o scroll suave até o topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  
  