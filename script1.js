// typing animation for title
const title = document.querySelector('h2');
const text = "Web Developer and Designer";
let index = 0;
const typeEffect = () => {
    if(index < text.length){
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
};
title.innerHTML = "";
typeEffect();



const toggle = document.getElementById('mytoggle');

toggle.addEventListener('change', function() {



    //     dark modeclasses
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('table').forEach(t => t.classList.toggle('dark-mode'));
    document.querySelectorAll('a').forEach(a => a.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');
});
