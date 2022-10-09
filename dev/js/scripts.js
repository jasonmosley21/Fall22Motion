import { gsap } from "gsap";

gsap.set("#btn i",{transformOrigin:"center bottom"});

function heroANIME(){
  var TL = gsap.timeline();
  TL.from("#firstline",{duration: 2, alpha:0, x:-100})
    .from("#secondline",{duration: 1, alpha:0, x:100});
  return TL;
}

var mainTL = gsap.timeline();
mainTL.add(heroANIME());

var herobtnsize = 1

let mm = gsap.matchMedia();

mm.add("(min-width: 845px)", () => {
  // desktop setup code here...
  herobtnsize = 1.5;
});

mm.add("(max-width: 844px)", () => {
  // mobile setup code here...
  herobtnsize = 1.75;
});

let btn = document.querySelector("#btn");

var btnANIME = gsap.timeline({paused:true});
btnANIME.to("#btn",{duration:1, scale: herobtnsize})
        .to("#btn i",{duration: .25, rotateY: 360})
        .to("#firstline",{duration: 1, scale: .75})
        .to("#secondline",{duration: 1, scale: .75});

btn.addEventListener("mouseover",function(){
  btnANIME.play();
})

btn.addEventListener("mouseout",function(){
  btnANIME.reverse();
})