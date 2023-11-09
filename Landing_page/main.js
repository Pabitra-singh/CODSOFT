let search = document.querySelector('.search-box');

document.querySelector('#Search-icon').onclick = () => {
    search.classList.toggle('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});