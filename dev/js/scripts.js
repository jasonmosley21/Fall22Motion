import { gsap } from "gsap";

gsap.from("#firstline",{duration: 2, alpha:0, x:-100});
gsap.from("#secondline",{duration: 1, alpha:0, x:100});
gsap.set("#btn i",{transformOrigin:"center bottom"});
let btn = document.querySelector("#btn");

btn.addEventListener("mouseover",function(){
    gsap.to("#btn",{duration:1, scale:1.5});

    gsap.to("#btn i",{duration: .25, rotateY: 360});

    gsap.to("#firstline",{duration: 1, scale: .75});
    gsap.to("#secondline",{duration: 1, scale: .75});
})

btn.addEventListener("mouseout",function(){
    gsap.to("#btn",{duration:1, scale:1});

    gsap.to("#btn i",{duration: 1, rotateY:0});

    gsap.to("#firstline",{duration: 1, scale: 1});
    gsap.to("#secondline",{duration: 1, scale: 1});
})