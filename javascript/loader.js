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
    ease: Circ.easeInOut
})


