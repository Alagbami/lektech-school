// CHANGe NAVBAR STYLES ON SCROLL

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
    });

// SHOW/HIDE Frequestly ANSWER/QUESTION

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle("open");
        
        // changING  THE PLUS&MINUS SIGN IN FREQUESTLY ANSWER/QUESTION 
    const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else{
            icon.className = 'uil uil-plus'
        }

    });
});

// show/hide navmenu WHILE THE SCREEN SMALL

const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})
 //close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

/* another style for that 

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

*/









