import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleANIME(){
    var tl = gsap.timeline()
    tl.from("#leftside",{drawSVG:0, strokeWidth:5, stroke:"#000000",  fill:"#FFF", duration: 3},"circle")
    .fromTo("#rightside",{drawSVG:"57% 57%", strokeWidth:2.25, stroke:"#000000", fill:"#FFF"},{drawSVG:"57% 157%", strokeOpacity:0, fill:"#CCC", duration: 3},"circle")
    .from(".eyes", {alpha:0}, "circle")
    .from(".innereyes",{drawSVG:0,alpha:0})
    .from("#leftear",{drawSVG:0, strokeWidth:5, stroke:"#000000",  fill:"#FFF", duration: 3, delay:-2},"outerears")
    .fromTo("#rightear",{drawSVG:"10% 10%", strokeWidth:5, stroke:"#000000",  fill:"#FFF"},{drawSVG:"110% 10%", strokeOpacity:0, fill:"#333", duration: 3, delay:-2},"outerears")
    .from("#leftinnerear",{drawSVG:0, strokeWidth:5, stroke:"#000000", duration:3, fill:"#FFF", delay:-2},"inny")
    .from("#rightinnerear",{drawSVG:0, strokeWidth:5, stroke:"#000000", duration:3, fill:"#FFF", delay:-2},"inny")
    .from(".leftmouth",{drawSVG:0, delay:-1},"mouth")
    .fromTo(".rightmouth",{drawSVG:"100% 100%"},{drawSVG:"100% 0", delay:-1},"mouth")
    return tl;
}

function patternANIME(){
    var tl = gsap.timeline()
    tl.from(".topleft",{ x:-50,y:-50, drawSVG:0,stagger:.5},"move")
    tl.from(".bottomleft",{ x:-50,y:50, drawSVG:0,stagger:.5},"move")
    return tl;
}

function UiANIME(){
    var tl = gsap.timeline()
    tl.to("#mainline",{rotate:360, transformOrigin: "bottom", duration: 2, drawSVG:"0%" },"same")
    tl.fromTo(".ticks",{drawSVG:"0% 5%"},{drawSVG:"95% 100%", duration:1, stagger:1},"same")
    return tl;
}

var mainTL = gsap.timeline();
 mainTL.add(simpleANIME())
 .add(patternANIME())
 .add(UiANIME());

























GSDevTools.create();