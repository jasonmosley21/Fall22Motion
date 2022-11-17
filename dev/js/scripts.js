import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

function barsANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

function logoANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

function titleANIME(){
    var tl = gsap.timeline()
    
    return tl;
}

var maintl = gsap.timeline();
maintl.add(barsANIME())
.add(logoANIME())
.add(titleANIME());













GSDevTools.create();