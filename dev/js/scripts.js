import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function transformationANIME(){
    var tl = gsap.timeline()
    tl.to("#Vector_9",{duration:.2, x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{duration:.2,x:0,scaleX:1,transformOrigin:"center center"})
    tl.to("#Vector_9",{x:-255,scaleX:.8,transformOrigin:"center center"})
    tl.to("#Vector_9",{x:0,scaleX:1,transformOrigin:"center center"})
    tl.set("#Group_2",{alpha:0},"same")
    tl.set("#Vector_6",{alpha:0, delay:.1},"same")
    tl.to("#Vector_9",{duration:.5,x:-487,scale:.75},"same")
    tl.to("#Vector24", {drawSVG:"10",duration:.3},"same")
    tl.to("#Vector_14",{x:-590,scale:1.3,fillOpacity:100, transformOrigin:"center center",duration:.5},"same")
    return tl;
}

function titleANIME(){
    var tl = gsap.timeline()
    tl.set("#Vector_10",{alpha:0})
    tl.set("#Vector_11",{alpha:0})
    tl.set("#Vector_12",{alpha:0})
    tl.from("#Vector_13",{duration:.5,x:-590,scale:1.3,y:-10,drawSVG:"0%",rotate:1440, transformOrigin:"center center",delay:.5},"music")
    tl.to("#Vector_14",{duration:.5,x:0,scale:1,rotate:1440, transformOrigin:"center center", delay:.5},"music")
    tl.to("#Vector_9",{morphSVG:"#Vector_21",x:0,scale:1,transformOrigin:"center center",delay:.5,duration:.5},"music")
    tl.to("#Vector24", {duration:.5,drawSVG:"100%", delay:.5},"music")
    
    return tl;
}

function revealANIME(){
    var tl = gsap.timeline()
    tl.set("#youtube-paths",{fillOpacity:0})
    tl.set("#Group_4",{fillOpacity:100})
    tl.to("#Vector24",{drawSVG:0, duration:1.25, delay:.5},"final")
    tl.to("#Vector_9",{x:-440, duration:1,delay:.5},"final")
    tl.to("#Vector_13",{x:-440, duration:1,delay:.5},"final")
    tl.to("#Vector_14",{x:-440, duration:1,delay:.5},"final")
    return tl;
}

var maintl = gsap.timeline();
maintl.add(transformationANIME())
.add(titleANIME())
.add(revealANIME());













GSDevTools.create();