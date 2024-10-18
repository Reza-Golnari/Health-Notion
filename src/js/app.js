import { gsap } from "gsap";

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