import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function barsANIME(){
    var tl = gsap.timeline()

    tl.fromTo("#bar3",{ transformOrigin:"right",duration:.75,x:-210, drawSVG:"25% 75%"},{drawSVG:"15% 85%",x:0 },"centerbar")
    tl.fromTo("#bar1",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%",y:0},{drawSVG:"10% 90%", delay:-.46, strokeOpacity:0,y:0},"midbar")
    tl.fromTo("#bar2",{ transformOrigin:"center bottom",duration:.25, drawSVG:"50% 50%", delay:-.47, strokeOpacity:.5,y:0},{drawSVG:"0% 100%",delay:-.47,y:0, strokeOpacity:0},"outerbar")
    tl.fromTo("#bar4",{ transformOrigin:"right",duration:.75,x:300, drawSVG:"25% 75%"},{drawSVG:"15% 85%",x:0},"centerbar")
    tl.fromTo("#bar5",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%",y:0},{drawSVG:"10% 90%", delay:-.46, strokeOpacity:0,y:0},"midbar")
    tl.fromTo("#bar6",{ transformOrigin:"center bottom",duration:.25, drawSVG:"50% 50%", strokeOpacity:.5,y:0},{drawSVG:"10% 90%",delay:-.47,y:0, strokeOpacity:0},"outerbar")
    tl.to("#bar3",{y:24, drawSVG:"0% 100%"}, "combine")
    tl.to("#bar4",{y:-23, drawSVG:"0% 100%"}, "combine")
    tl.fromTo("#bar1",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%"},{drawSVG:"10% 90%", delay:-.46, strokeOpacity:100,y:24},"midcombine")
    tl.fromTo("#bar2",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%"},{drawSVG:"20% 80%", delay:-.46,strokeOpacity:.5,y:24},"outercombine")
    tl.fromTo("#bar5",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%"},{drawSVG:"10% 90%", delay:-.46, strokeOpacity:100,y:-24},"midcombine")
    tl.fromTo("#bar6",{ transformOrigin:"center bottom",duration:.5, drawSVG:"50% 50%"},{drawSVG:"20% 80%", delay:-.46,strokeOpacity:.5,y:-24},"outercombine")
    tl.to(".centerbar",{strokeOpacity:0,scale:.75,transformOrigin:"left"})
    tl.set("#bar3",{y:-70,drawSVG:"50% 50%",strokeOpacity:.5,scale:1})
    tl.set("#bar4",{y:70,drawSVG:"50% 50%",strokeOpacity:.5,scale:1})
    tl.to("#bar1",{y:71, drawSVG:"0% 100%"}, "combineagain")
    tl.to("#bar5",{y:-70, drawSVG:"0% 100%"}, "combineagain")
    tl.to("#bar2",{y:70, drawSVG:"10% 90%", strokeOpacity:100, delay:-.46},"midagain")
    tl.to("#bar6",{y:-70, drawSVG:"10% 90%", strokeOpacity:100,delay:-.46},"midagain")
    
    tl.to("#bar3",{drawSVG:"20% 80%", delay:-.47},"outeragain")
    tl.to("#bar4",{drawSVG:"20% 80%", delay:-.47},"outeragain")

    tl.to(".midbar",{strokeOpacity:0,scale:.75,transformOrigin:"right"})
    tl.to("#bar2",{y:118, drawSVG:"0% 100%"}, "combineagainagain")
    tl.to("#bar6",{y:-118, drawSVG:"0% 100%"}, "combineagainagain")
    tl.to("#bar3",{y:-24, drawSVG:"10% 90%", delay:-.46},"midagainagain")
    tl.to("#bar4",{y:23, drawSVG:"10% 90%",delay:-.46},"midagainagain")
    
    
    return tl;
}

function logoANIME(){
    var tl = gsap.timeline()
    
    tl.to(".outerbar",{ duration:.5,scale:0,transformOrigin:"top center"},"morph")
    tl.to("#bar2",{y:89},"morph")
    tl.to("#bar6",{y:-147},"morph")
    tl.to("#bar3",{x:325},"morph")
    tl.to("#bar4",{x:-240},"morph")
    tl.fromTo(".u",{drawSVG:"44% 44%",scale:1.60, x:40, y:8, transformOrigin:"center center"},{drawSVG:"0% 44%",scale:1, x:0, y:0},"morph")
    tl.from(".leftbar",{y:-280,scale:1.60},"morph")
    tl.from(".rightbar",{y:230,scale:1.60},"morph")
    tl.from("#rightclip",{y:-50,scale:1.60, delay:.18},"morph")
    return tl;
}

function titleANIME(){
    var tl = gsap.timeline()
    tl.to("#fulllogo",{x:-80},"title")
    tl.from(".title",{x:80,scale:.2, transformOrigin:"right",alpha:0, stagger:.1 },"title")
    tl.fromTo("#eleg",{drawSVG:"100% 100%"},{drawSVG:"100% 0%"},"title")
    tl.fromTo("#firstibody",{drawSVG:"100% 100%"},{drawSVG:"100% 0%"},"title")
    tl.fromTo("#longb",{drawSVG:"100% 25%"},{drawSVG:"100% 0%"},"title")
    tl.fromTo("#secondibody",{drawSVG:"100% 100%"},{drawSVG:"100% 0%"},"title")
    tl.from("#horizontalt",{drawSVG:0},"title")
    
    
    tl.to(".u",{drawSVG:"56% 100%",y:94},"dance")
    tl.to(".clips",{y:94},"dance")
    tl.to("#u",{x:21},"dance")
    tl.to(".leftbar",{x:32},"switch")
    tl.to(".rightbar",{x:-32},"switch")
    tl.to(".u3",{scaleY:-1,transformOrigin:"center center"})
    return tl;
}

var maintl = gsap.timeline();
maintl.add(barsANIME())
.add(logoANIME())
.add(titleANIME());













GSDevTools.create();