const filtros = document.querySelectorAll('.filtro');
const expos = document.querySelectorAll('.expo-grid article');


filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('activo'));
        filtro.classList.add('activo');
        const categoria = filtro.getAttribute('data-cat');
        expos.forEach(expo => {
            if (categoria === 'todos' || expo.getAttribute('data-cat') === categoria) {
                expo.style.display = 'block';
            }
            else {                expo.style.display = 'none';
            }
        });
    }
    );
});



// Animación de scroll
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

revealElements.forEach(el => observer.observe(el));


setTimeout(() => {
    document.querySelector('.hero').classList.add('visible');
}, 100);


menubar = document.querySelector('.menu-btn');

menubar.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('abierto');
});