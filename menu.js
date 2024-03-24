window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 560)
})

$(document).singlePageNav({filter: ':not(.external)'});