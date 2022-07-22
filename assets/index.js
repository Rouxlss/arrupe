let scroll_top_btn = document.querySelector('.scroll-top')
let scroll_down_btn = document.querySelector('.scroll-bottom')

let vh = 0;
let isOnTop = true;

scroll_top_btn.addEventListener('click', () => {
    if (isOnTop) {
        window.scrollTo(0, 0);
    } else {
        vh -= 1;
        window.scroll({
            top: window.innerHeight * vh,
            behavior: 'smooth'
        });
    }
});

scroll_down_btn.addEventListener('click', () => {
    isOnTop = false;
    vh += 1;
    window.scroll({
        top: window.innerHeight * vh,
        behavior: 'smooth'
    });
});

document.addEventListener('scroll', () => {

    if (window.scrollY == 0) {
        vh = 0;
        scroll_top_btn.style.transition = 'all 0.5s ease-in-out';
        scroll_top_btn.style.transform = 'translateX(100px)';
    } else {
        scroll_top_btn.style.transition = 'all 0.5s ease-in-out';
        scroll_top_btn.style.transform = 'translateX(0px)';
    }
    
    if (vh == 3) {
        scroll_down_btn.style.transition = 'all 0.5s ease-in-out';
        scroll_down_btn.style.transform = 'translateY(150px)';
        scroll_top_btn.style.transform = 'translateY(100px)';
    } 
    
    if( vh > 0 && vh < 3 ) {
        scroll_down_btn.style.transform = 'translateY(0px)';
        scroll_top_btn.style.transform = 'translateY(0px)';
    }
    
})

const loadBtn = () => {

    if (window.scrollY == 0) {
        vh = 0;
        scroll_top_btn.style.transition = 'all 0.5s ease-in-out';
        scroll_top_btn.style.transform = 'translateX(100px)';
    } else {
        scroll_top_btn.style.transition = 'all 0.5s ease-in-out';
        scroll_top_btn.style.transform = 'translateX(0px)';
    }

}

document.addEventListener('DOMContentLoaded', loadBtn)
document.addEventListener('load', loadBtn)