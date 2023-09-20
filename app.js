const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

let activeSection = 'home';

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    sections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - section.clientHeight / 1.7)){
            activeSection = section.id;
        }
    });

    navLinks.forEach(navLink => {
        if (navLink.href.includes(activeSection)){
            document.querySelector('.active')?.classList.remove('active');
            navLink.classList.add('active');
        }
    })
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', ()=> {
        document.querySelector('.active')?.classList.remove('active');
        navLink.classList.add('active');
    })
})
