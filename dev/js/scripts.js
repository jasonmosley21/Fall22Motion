import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroANIME(){
    var tl = gsap.timeline();
    tl.from("#latewinter",{alpha:0,duration:2},"size")
    .from("#latewinter h2", {scale:.5, duration:2, transformOrigin: "center bottom"},"size")
    .from("#latewinter p", {scale:.5, duration:2,transformOrigin: "center top"},"size")
    .from("#latewinter button", {scale:.5, duration:2,transformOrigin: "center top"},"size");
    return tl;
}

function shopANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#shopping", scrub:true, markers: false, end:"80% 0%", start:"top 50%"}});
    tl.from("#item1",{x:-400},"firstrow")
    .from("#item2",{x:400},"firstrow")
    .from("#item3",{x:-400},"secondrow")
    .from("#item4",{x:-400},"secondrow")
    .from("#item5",{x:400},"secondrow")
    .from("#item6",{x:400},"secondrow")
    .from("#item7",{x:-400},"thirdrow")
    .from("#item8",{y:400},"thirdrow")
    .from("#item9",{x:400},"thirdrow")
    .from("#item10",{x:-400},"fourthrow")
    .from("#item11",{x:-400},"fourthrow")
    .from("#item12",{x:400},"fourthrow")
    .from("#item13",{x:400},"fourthrow")
    .from("#item14",{y:400},"fifthrow")
    .from("#item15",{y:400},"fifthrow")
    .from("#item16",{y:400},"fifthrow")
    .to("#viewall",{scale:2})
    .to("#viewall",{scale:1});
    return tl;
}

function wonderANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#wonder", scrub:true, markers: false, end:"10% 50%", start:"top 75%"}});
    tl.to("#wonder", {rotateY:360});
    return tl;
}   

function sectionsANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#sections", scrub:true, markers: false, end:"bottom 50%", start:"top 75%"}});
    tl.from("#section1", {scale:.5, duration:1.05},"row1")
    tl.to("#section1", {scale:.5},"row2")
    tl.from("#section2", {scale:.5, duration:1.05},"row2")
    tl.from("#section3", {scale:.5, duration:1.05},"row2")
    tl.to("#section2", {scale:.5},"row3")
    tl.to("#section3", {scale:.5},"row3")
    tl.from("#section4", {scale:.5, duration:1.05},"row3")
    tl.from("#section5", {scale:.5, duration:1.05},"row3")
    tl.to("#section4", {scale:.5},"row4")
    tl.to("#section5", {scale:.5},"row4")
    tl.from("#section6", {scale:.5, duration:1.05},"row4")
    tl.from("#section7", {scale:.5, duration:1.05},"row4")
    tl.to("#section6", {scale:.5},"rerow4")
    tl.to("#section7", {scale:.5},"rerow4");
    return tl;
}

function dontseeANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#dontsee", scrub:true, markers: false, end:"bottom 75%", start:"top 80%"}});
    tl.from("#dontsee article", {y:-400})
    return tl;
}

var maintimeline = gsap.timeline();
maintimeline.add(heroANIME())
.add(shopANIME())
.add(wonderANIME())
.add(sectionsANIME())
.add(dontseeANIME());

