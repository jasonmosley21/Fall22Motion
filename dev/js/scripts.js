// console.log("hello class");
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sets
gsap.set("#hero h1 span",{alpha:0.25})

var heroButtonTL = gsap.timeline({paused:true});
    heroButtonTL.to("#trails-btn",{duration:0.25,scale:2, backgroundColor:"#881d02"},"trigger")  
    .to("#first-line",{duration:0.25, alpha:0, y:50},"trigger")
    .to("#second-line",{duration:0.25, alpha:0, y:20},"trigger")
    .to("#trails-btn i",{duration:0.25, rotateY:180},"-=0.15");


var trailsBtn = document.querySelector("#trails-btn");

trailsBtn.addEventListener("mouseover",function(){
    heroButtonTL.play();
})

trailsBtn.addEventListener("mouseout",function(){
    heroButtonTL.reverse();
})

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration:1,alpha:0, y:-100})
    .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#trails-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#trails-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}

function boxanime(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#box", markers: true, scrub: true, start:"top 70%", end:"bottom 10%"}});
    tl.from("#box",{duration:1, scale:2, rotation:-180, x:"-=300%"});
    
    return tl;
}

function hikinganime(){
    var tl = gsap.timeline({ScrollTrigger:{trigger:"#hiking", scrub:true, markers: true, end:"top 20%", start:"top 90%"}});
    tl.from("#hiking aside div",{duration:1,scale:3, alpha:0} )
    .from("hiking h1", {alpha:0, y:-100,duration:1},"peakAn1")

}

function hero2anime(){
    var tl = gsap.timeline();

    tl.from("#bg-img",{duration:5, clipPath:"inset(0 50%)"},"same")
    .from("#hero-2 h1",{duration:1, scale:2, alpha:0},"same");
    return tl;
}
var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
.add(boxanime())
.add(hikinganime())
.add(hero2anime())
;

