import { gsap } from "gsap";
gsap.set("#trails-btn i",{transformOrigin:"center bottom"});

// function heroANIME(){
//     var TL = gsap.timeline();
//     TL.from("#first-line",{duration: 1, alpha:0, y:-100})
//       .from("#second-line",{duration: 1, alpha:0, y:-70})
//       .from("#trails-btn",{duration: 1, alpha:0, y:50})
//       .from("#trails-btn i",{duration: 1, alpha:0, rotation:180});
//     return TL;
// }

// var mainTL = gsap.timeline();
// mainTL.add(heroANIME());
var herosizenumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  herosizenumber = 2
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  herosizenumber = 1.25
});

let trailBtn = document.querySelector("#trails-btn");


var buttonANIME = gsap.timeline({paused:true});
buttonANIME.to("#trails-btn",{duration:.5, scale:herosizenumber})
    .to("#trails-btn i",{duration: .5, rotateY:180})
    .to("#first-line",{duration: .5, alpha:0, y:50},"goaway")
    .to("#second-line",{duration: .5, alpha:0, y:20},"goaway")

    trailBtn.addEventListener("mouseover",function(){
        buttonANIME.play();
})

trailBtn.addEventListener("mouseout",function(){
    buttonANIME.reverse();
})