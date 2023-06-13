function valuesetter(){
    gsap.set(".navbar",{ y:"-100%",opacity:0});
    gsap.set("#contact-section1",{opacity:0, y:"100%",});
    gsap.set("#gmailsection a",{opacity:0, y:"100%",});
}

function loader(){
    var tl = gsap.timeline();
tl.to("#loader", {
    height: "100%",
    top: 0,
    duration: 1,
    ease: Circ.easeInOut,
})
tl.to("#loader", {
    height: "0%",
    duration: 1,
    delay: -.2,
    ease: Circ.easeInOut,
    onComplete:function(){
        contacthome();


    }
})
}
function contacthome(){
    var tl = gsap.timeline();
    tl
    .to(".navbar",{
        y:0,
        delay:-1,
        opacity:1,
        ease:Expo.easeInOut
    })
    .to("#contact-section1",{
        opacity:1,
        duration:2,
        delay: -.7,
       y:0,
        ease:Expo.easeInOut
    })
    .to("#gmailsection a",{
        opacity:1,
        duration:2,
        delay: -1.3,
        y:0,
        stagger:0.3,

        ease:Expo.easeInOut
    })
}

valuesetter();
loader();


gsap.from("#contact-head",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#contact-head",
        start:"top 85%",
    },
    opacity:0,
    y:20,
    duration:1,
    // stagger:.1,
    ease:Expo.easeInOut
})
gsap.from("#lowersection h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#lowersection h2",
        start:"top 95%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut
})
gsap.from("#link a",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#link a",
        start:"top 95%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:.1,
    ease:Expo.easeInOut
})