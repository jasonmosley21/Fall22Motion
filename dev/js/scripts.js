import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleANIME(){
    var tl = gsap.timeline()
    tl.to("center",{y:-25})
    return tl;
}

function patternANIME(){
    var tl = gsap.timeline()
    tl.from(".odd",{rotation:180, stagger:.25, drawSVG:0, transformOrigin: "center"},"playpattern")
    tl.fromTo(".even",{drawSVG:"0% 0%"},{rotation:180, stagger:.25, drawSVG:"0% -100%", transformOrigin: "center"},"playpattern")
    return tl;
}

function UiANIME(){
    var bottomLine = document.querySelector("#bottom-line");
    bottomLine = bottomLine.getBBox();

    var tl = gsap.timeline()
    tl.to("#pencil",{x:bottomLine.width},"drawin")
    tl.from("#bottom-line",{drawSVG:0},"drawin")
    tl.fromTo("#outline",{drawSVG:"100% 100%"},{drawSVG:"100% 0%"})

    return tl;
}

var mainTL = gsap.timeline();
 mainTL.add(simpleANIME())
 .add(patternANIME())
 .add(UiANIME());

























GSDevTools.create();