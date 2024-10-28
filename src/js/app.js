import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#navbar' , {
    opacity: 0,
    yPercent: -100,
} , {
    opacity: 1,
    yPercent: 0,
    duration: 1,
})

gsap.fromTo('#headerContent *' , {
    opacity: 0,
    xPercent: -200,
} , {
    opacity: 1,
    xPercent: 0,
    duration: 1,
    stagger: .2,
})

gsap.to('#headerImage' , {
    scrollTrigger:{
        trigger: "header",
        pin: true,
        scrub: true,
        duration: 200,
    },
    borderRadius: '20px',
    boxShadow: "0px 5px 15px rgba(0,0,0,.2)",
    width: "95%",
    height: "84%",
})

gsap.fromTo('.text-content *' , {
    opacity: 0,
    xPercent: -100,
} , {
    scrollTrigger: {
        trigger: '.text-content',
        toggleActions: 'play reverse play reverse',
    },
    opacity: 1,
    stagger: .2,
    xPercent: 0,
})

gsap.fromTo('#aboutLeftCard', {
    opacity: 0,
    xPercent: -100,
    y: 100,
} , {
    scrollTrigger: {
        trigger: '#aboutLeftCard',
        toggleActions: 'play reverse play reverse',
    },
    opacity: 1,
    xPercent: 0,
    y: 0,
})

gsap.fromTo('#aboutRightCard', {
    opacity: 0,
    xPercent: 100,
    y: 100,
} , {
    scrollTrigger: {
        trigger: '#aboutRightCard',
        toggleActions: 'play reverse play reverse',
    },
    opacity: 1,
    xPercent: 0,
    y: 0,
})

gsap.fromTo('#scrollBrands', {
    opacity: 0,
    yPercent: 100,
} , {
    scrollTrigger: {
        trigger: '#scrollBrands',
        toggleActions: 'play reverse play reverse',
    },
    opacity: 1,
    yPercent: 0,
})

gsap.to('#business' , {
    scrollTrigger: {
        trigger: '#business',
        pin: true,
        start: '-=20',
        end: '+=1500'
    },
})

gsap.to('#b1' , {
    scrollTrigger: {
        trigger: '#b1',
        start: 'top top',
        end: '+=1455',
        toggleActions: 'play none play reverse',
        onEnter: ()=> {
            gsap.to('#bi1' , {
                filter: 'blur(0px)',
                zIndex: 10,
            })
        },
        onLeaveBack: ()=> {
            gsap.to('#bi1' , {
                filter: 'blur(8px)',
            })
        }
    },
    bottom: 'unset',
    top: 0,
    height: '100%',
})

gsap.to('#b2' , {
    scrollTrigger: {
        trigger: '#b2',
        start: '+=300',
        end: '+=1200',
        toggleActions: 'play none play reverse',
        onEnter: ()=> {
            gsap.fromTo('#bi2' , {opacity: 0} , {
                zIndex: 20,
                opacity: 1,
            })
        },
        onLeaveBack: ()=> {
            gsap.to('#bi2' , {
                zIndex: 0,
                opacity: 0,
            })
        }
    },
    bottom: 'unset',
    top: 60,
    height: '100%',
})

gsap.to('#b3' , {
    scrollTrigger: {
        trigger: '#b3',
        start: '+=600',
        end: '+=1110',
        toggleActions: 'play none play reverse',
        onEnter: ()=> {
            gsap.fromTo('#bi3' , {opacity: 0} , {
                zIndex: 30,
                opacity: 1,
            })
        },
        onLeaveBack: ()=> {
            gsap.to('#bi3' , {
                zIndex: 0,
                opacity: 0,
            })
        }
    },
    bottom: 'unset',
    start: '+=5000',
    top: 120,
    height: '100%',
})

const categoriesTextItemsArr = gsap.utils.toArray(document.querySelectorAll('#categoriesHeader *'))

categoriesTextItemsArr.forEach(item => {
    gsap.fromTo(item , {
        yPercent: 100,
        opacity: 0,
    } , {
        scrollTrigger: {
            trigger: item,
            toggleActions: 'play none play reverse',
        },
        yPercent: 0,
        opacity: 1,
    })
})

const cardsOdd = document.querySelectorAll('#productContainer > .product-odd');

cardsOdd.forEach((card) => {
    gsap.fromTo(card,{
        opacity: 0,
        yPercent: 120
    }, {
        scrollTrigger: {
            trigger: card,
            start: "top 120%",
            toggleActions: "play none play reverse",
        },
        opacity: 1,
        yPercent: 0,
        duration: 1,
    });
});

const cardsEven = document.querySelectorAll('#productContainer > .product-even');

cardsEven.forEach((card) => {
    gsap.fromTo(card,{
        opacity: 0,
        yPercent: 50
    }, {
        scrollTrigger: {
            trigger: card,
            start: "top 100%",
            toggleActions: "play none play reverse",
        },
        opacity: 1,
        yPercent: 0,
        duration: 1,
    });
});

const mostHaveProductsItems = document.querySelectorAll('#mostHaveProductsScroll > *')

mostHaveProductsItems.forEach((item) => {
    gsap.fromTo(item, {
        opacity: 0,
        yPercent: 100,
    } , {
        scrollTrigger: {
            trigger: item,
            toggleActions: 'play none play reverse',
        },
        yPercent: 0,
        opacity: 1,
        duration: 1,
    })
})

const toTopItems = document.querySelectorAll('.to-top > *');

toTopItems.forEach((item) => {
    gsap.fromTo(item, {
        opacity: 0,
        yPercent: 100,
    } ,  {
        scrollTrigger: {
            trigger: item,
            toggleActions: 'play none play reverse',
        },
        yPercent: 0,
        opacity: 1,
        duration: 1,
    })
})

gsap.fromTo('#cardContainer' , {
    opacity: 0,
    yPercent: 50,
} , {
    scrollTrigger: {
        trigger: '#cardContainer',
        toggleActions: 'play none play reverse',
    },
    yPercent: 0,
    opacity: 1,
    duration: 1,
})

gsap.fromTo('#cardScanner' , {
    rotation: 0,
    xPercent: 0,
} , {
    scrollTrigger: {
        trigger: '#cardContainer',
        toggleActions: 'play none play reverse',
    },
    delay: .8,
    duration: 1,
    rotation: 7,
    xPercent: 93,
})

gsap.fromTo('#cardPanel' , {
    rotation: 0,
    xPercent: 0,
} , {
    scrollTrigger: {
        trigger: '#cardContainer',
        toggleActions: 'play none play reverse',
    },
    delay: .8,
    duration: 1,
    rotation: -7,
    xPercent: -93,
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 72,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
});
