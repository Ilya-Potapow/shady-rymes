/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Slider
$('.header__slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 900,

});

// Accordion
$('.accordion__item').click(function(){
  $(this).addClass('accordion__item--active')
  .siblings()
  .removeClass('accordion__item--active');

  $('.accordion__image')
  .eq($(this).index())
  .addClass('accordion__image--active')
  .siblings()
  .removeClass('accordion__image--active');

});


const showHiddenBtn = document.querySelector('.accordion__btn');
const hiddenItems = document.querySelectorAll('.accordion__item--hidden');

showHiddenBtn.onclick = function (){

    if (showHiddenBtn.dataset.options == 'hidden') {
      hiddenItems.forEach(function (item){
            item.style.display = 'inline-block';
        })
        showHiddenBtn.innerText = "Hide";
        showHiddenBtn.dataset.options = 'visible';

    } else if (showHiddenBtn.dataset.options == 'visible') {
      hiddenItems.forEach(function (item){
            item.style.display = 'none';
        })
        showHiddenBtn.innerText = 'See more catagory';
        showHiddenBtn.dataset.options = 'hidden';
    }
}

// User reviews
$('.reviews__holder').slick({
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:1000,
      settings: "unslick"
      
    },
  ]
});
  


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.header__menu-list')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)





