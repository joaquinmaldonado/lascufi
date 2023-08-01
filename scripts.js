// Script para animar el desplazamiento suave al hacer clic en los enlaces del menú
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
  
    function handleClick(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
      window.scroll({
        top,
        behavior: 'smooth'
      });
    }
  
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });
  });
  