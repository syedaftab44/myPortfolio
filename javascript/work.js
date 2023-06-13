function valuesetter(){
    gsap.set(".navbar",{ y:"-100%",opacity:0});
    gsap.set("#work-upper",{opacity:0, y:"100%",});
    gsap.set("#work-lower",{opacity:0, y:"100%",});
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
        workhome();

    }
})
}
function workhome(){
    var tl = gsap.timeline();
    tl
    .to(".navbar",{
        y:0,
        delay:-1,
        opacity:1,
        ease:Expo.easeInOut
    })
    .to("#work-upper",{
        opacity:1,
        duration:2,
        delay: -.7,
       y:0,
        ease:Expo.easeInOut
    })
    .to("#work-lower",{
        opacity:1,
        duration:2,
        delay: -1.7,
       y:0,
        ease:Expo.easeInOut
    })
}



valuesetter();
loader();

gsap.from("#artworks a",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#artworks a",
        start:"top 60%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:0.3,
    ease:Expo.easeInOut
})
gsap.from("#p6section1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#p6section1",
        start:"top 80%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut
})
gsap.from("#gmailsection a",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#gmailsection a",
        start:"top 60%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:0.3,
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





// window.addEventListener("load", function () {
//     if (!sessionStorage.viewed){
//         const loader = document.querySelector("#loader");
//         loader.className += " hidden";
//         sessionStorage.viewed = 1;
//     }else{
//       const loader = document.querySelector("#loader");
//       loader.style.display = "none";
//     }
// });
