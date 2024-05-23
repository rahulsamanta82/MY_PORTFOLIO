let certificate1 = document.getElementById('certificate1');
let certificate2 = document.getElementById('certificate2');
let certificate3 = document.getElementById('certificate3');
let certificate4 = document.getElementById('certificate4');
let certificate5 = document.getElementById('certificate5');
let certificate6 = document.getElementById('certificate6');

let cargarImagen = (entradas, observador)=>{
    entradas.forEach((entrada)=> {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
};

let observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.6
});


observador.observe(certificate1);
observador.observe(certificate2);
observador.observe(certificate3);
observador.observe(certificate4);
observador.observe(certificate5);
observador.observe(certificate6);