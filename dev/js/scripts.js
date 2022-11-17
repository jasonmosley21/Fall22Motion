import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

function transformationANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

function titleANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

function revealANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

var maintl = gsap.timeline();
maintl.add(transformationANIME())
.add(titleANIME())
.add(revealANIME());













GSDevTools.create();