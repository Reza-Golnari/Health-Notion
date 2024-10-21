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