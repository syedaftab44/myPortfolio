function valuesetter(){
    gsap.set(".navbar",{ y:"-100%",opacity:0});
    gsap.set(".text h1",{opacity:0});
    gsap.set("#p1-bottom",{opacity:0, y:"100%",});
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
        abouthome();
        animateAllHeadings();


    }
})
}
function abouthome(){
    var tl = gsap.timeline();
    tl
    .to(".navbar",{
        y:0,
        delay:-1,
        opacity:1,
        ease:Expo.easeInOut
    })
    .to("#p1-top",{
        opacity:1,
        duration:2,
        delay: -.7,
       y:0,
        ease:Expo.easeInOut
    })
    .to(".text h1",{
        opacity:1
      })
    .to("#p1-bottom",{
        opacity:1,
        duration:2,
        delay: -1.3,
       y:0,
        ease:Expo.easeInOut
    })
}
function animateAllHeadings(){
    document.querySelectorAll(".text h1")
    .forEach(function(harh1){
      var clutter = "";
      harh1.textContent.split("").forEach(function(char){
        clutter += `<span> ${char}</span>`;
      })
      harh1.innerHTML=clutter;
    })
    document.querySelectorAll(".text h1")
    .forEach(function(harh1){
      gsap.to(harh1.children, {
        y:0,
        opacity:1,
        ease: Expo.easeInOut,
        duration:1.8,
        stagger:.1,
      })
    })
  }
valuesetter();
loader();

gsap.from("#about-p2-top",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-p2-top",
        start:"top 65%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut
})
gsap.from("#about-p2-bottom h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-p2-bottom h3",
        start:"top 65%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:.1,
    ease:Expo.easeInOut
})
gsap.from("#about-p3-container h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-p3-container h1",
        start:"top 65%",
    },
    opacity:0,
    y:20,
    duration:1,
    // stagger:.1,
    ease:Expo.easeInOut
})
gsap.from("#first h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#first h3",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:.1,
    ease:Expo.easeInOut,
})
gsap.from("#fline",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#fline",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut,
})
gsap.from("#second h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#second h3",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:.1,
    ease:Expo.easeInOut,
})
gsap.from("#sline",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#sline",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut,
})
gsap.from("#third h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#third h3",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:.1,
    ease:Expo.easeInOut,
})
gsap.from("#tline",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#tline",
        start:"top 75%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut,
})