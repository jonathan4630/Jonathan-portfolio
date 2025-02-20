window.addEventListener('scroll',function(){
    this.clearTimeout('scrollTimeout');

    document.body.classList.add('scroll-active');

    scrollTimeout = setTimeout(function(){
        document.body.classList.remove('scroll-active');
    }, 1000);

    if(document.documentElement.scrollTop > 0){
        document.body.classList.add('scroll-top');
    }
    else{
        document.body.classList.remove('scroll-top');
        document.body.classList.remove('scroll-active');
    }
});
