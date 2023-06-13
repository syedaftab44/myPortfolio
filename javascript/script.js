
function valuesetter(){
    gsap.set(".navbar",{ y:"-100%",opacity:0});
    gsap.set(".text h1",{opacity:0});
    gsap.set("#myphoto img",{opacity:0, y:"100%",});
}

function topscreen(){
    var tl = gsap.timeline();
tl
    .from("#lowest", {
        onStart: function () {
            $('#lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#lowest').textillate("out")
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#second-lowest", {
        opacity: 0,
        delay: 1,
        onStart: function () {
            $('#second-lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#second-lowest').textillate("out")
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#second-top", {
        opacity: 0,
        delay: 0.9,
        onStart: function () {
            $('#second-top').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#second-top').textillate("out")
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#top", {
        opacity: 0,
        delay: 0.9,
        onStart: function () {
            $('#top').textillate({
                in: {
                    effect: 'fadeInUp',
                   
                },
            });
        }
    })

    .to("#top-screen",{
        top:"-100%",
        delay:1,
        duration:1.2,
        ease:"Power4.easeOut",
        onComplete:function(){
            animateHomePage();
            animateAllHeadings();

        }
    })
}

function animateHomePage(){
    var tl = gsap.timeline();
    tl
    .to(".navbar",{
        y:0,
        delay:-1,
        opacity:1,
        ease:Expo.easeInOut
    })
    .to(".text h1",{
      opacity:1
    })
   
       .to("#myphoto img",{
        opacity:1,
        duration:2,
        delay: -.7,
       y:0,
        ease:Expo.easeInOut
    })
}
// function textHoverLineAnimation(){
//     document.querySelectorAll(".textline")
//     .forEach(function(text){
//       text.addEventListener("mouseenter",function(dets){
//         gsap.to(dets.target.children[1],{
//           width:"100%",
//           ease: Expo.easeInOut,
//           duration:.8
//         })
  
//       })
  
//       text.addEventListener("mouseleave",function(dets){
//         gsap.to(dets.target.children[1],{
//           width:"0%",
//           left:"100%", 
//           ease: Expo.easeInOut,
//           duration:.8,
//           onComplete: function(){
//             dets.target.children[1].style.left ="0"
//           }
//         })
//       })
//     });
//   }


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
        duration:1,
        stagger:.1
      })
    })
  }

    // gsap.from(".p2box h3",{
    //     scrollTrigger:{
    //         scroller:"body",
    //         trigger:".p2box h3",
    //         start:"top 90%",
    //         markers:true,
    //     },
    //     opacity:0,
    //     y:50,
    //     duration:2,
    //     ease:Expo.easeInOut
    // });


    


valuesetter();

topscreen();
// var tl = gsap.timeline();
// tl
gsap.from(".p2box",{
    scrollTrigger:{
        scroller:"body",
        trigger:".p2box",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1.2,
    stagger:0.1,
    ease:Expo.easeInOut
})
gsap.from("#page3 h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 h2",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1.2,
    ease:Expo.easeInOut
})
gsap.from(".h1-container h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:".h1-container h1",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1.2,
    stagger:0.1,
    ease:Expo.easeInOut
})
gsap.from("#p4left",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#p4left",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1,
    // stagger:0.1,
    ease:Expo.easeInOut
})
gsap.from("#p4right h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#p4right h3",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:0.1,
    ease:Expo.easeInOut
})
gsap.from("#p4right a",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#p4right a",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1,
   
    ease:Expo.easeInOut
})
        markers:true
gsap.from("#p5section1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#p5section1",
        start:"top 70%",
    },
    opacity:0,
    y:20,
    duration:1,
    ease:Expo.easeInOut
})
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
gsap.from("#achievment",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#achievment",
        start:"top 60%",
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





  









