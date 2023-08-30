var tl = gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4,#nav button,#para h1",{
    y :-100,
    duration : 1,
    delay : 1,
    opacity :0,
    stagger:0.2
})
tl.from("#img2,#img3",{
    scale :0,
    opacity:1
})

tl.from("h5",{
    scale:0,
    opacity:1
})
tl.to("h5",{
    y:40,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
