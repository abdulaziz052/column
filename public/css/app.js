let btn = document.querySelector('#btn');
let nav = document.querySelector('#nav');
let x = document.querySelector('#x')
let body = document.querySelector('body')


btn.addEventListener('click' , function(){
    nav.classList.remove("left-full")
    nav.classList.add("left-0")
})

x.addEventListener('click' , function(){
    nav.classList.add("left-full")
    nav.classList.remove("left-0")
})