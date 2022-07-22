let scroll_top_btn = document.querySelector('.scroll-top')
let scroll_down_btn = document.querySelector('.scroll-sown')

scroll_top_btn.addEventListener('click', () => {
    console.log('a');
    document.body.scrollTop = 0;
});