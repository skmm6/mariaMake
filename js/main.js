const burger = document.querySelector('.icon-right-menu-bars_1')
const menu = document.querySelector('.header-navbar__menu')
const close = document.querySelector('.header-navbar__close')
const toggleMenu = () => {
    menu.classList.toggle('open')
    console.log(this);
}

burger.addEventListener('click', toggleMenu)
close.addEventListener('click', toggleMenu)


// swiper
new Swiper('.services-swiper', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 'auto',
    grabCursor: true,
});

new Swiper('.portfolio-swiper__navbar', {
    slidesPerView: 'auto',
    grabCursor: true,
});
// 
new Swiper('.portfolio-swiper__content', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 100,
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.portfolio-swiper--mobail', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 1.5,
    grabCursor: true,
    spaceBetween: 20,
    autoHeight:false,
});

new Swiper('.reviews-swiper', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 30,
    
});
// 


//select

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

//