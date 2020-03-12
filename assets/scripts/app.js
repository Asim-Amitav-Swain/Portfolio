var goUpBtn = document.querySelector('a.anchor-link');
var introHeight = document.querySelector('.intro');

goUpBtn.addEventListener('click',function(e){
    e.preventDefault();
    window.scroll({
        behavior : 'smooth',
        left : 0,
        top : introHeight.offsetTop
    })
})

document.addEventListener('scroll',function(){
    if(window.scrollY > introHeight.offsetHeight){
        goUpBtn.classList.add('show');
    }
    else{
        goUpBtn.classList.remove('show');
    }
})