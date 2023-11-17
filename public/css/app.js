let btn = document.querySelector('#btn');
let nav = document.querySelector('#nav');
let x = document.querySelector('#x')
let body = document.querySelector('body')


btn.addEventListener('click' , function(){
    nav.classList.remove("right-full")
    nav.classList.add("right-0")
})

x.addEventListener('click' , function(){
    nav.classList.add("right-full")
    nav.classList.remove("right-0")
})
