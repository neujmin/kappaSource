/* Codrops full width transitions */
!function(){function e(){d.addEventListener("click",function(e){e.preventDefault(),n("next")}),l.addEventListener("click",function(e){e.preventDefault(),n("prev")})}function n(e){if(m)return!1;m=!0;var n=0,i=s[o];"next"===e?o=v-1>o?o+1:0:"prev"===e&&(o=o>0?o-1:v-1);var r=s[o],c=function(){this.removeEventListener(a,c),classie.removeClass(this,"current"),classie.removeClass(this,"next"===e?"navOutNext":"navOutPrev"),++n,2===n&&(m=!1)},d=function(){this.removeEventListener(a,d),classie.addClass(this,"current"),classie.removeClass(this,"next"===e?"navInNext":"navInPrev"),++n,2===n&&(m=!1)};t.animations?(i.addEventListener(a,c),r.addEventListener(a,d)):(c(),d()),classie.addClass(i,"next"===e?"navOutNext":"navOutPrev"),classie.addClass(r,"next"===e?"navInNext":"navInPrev")}var t={animations:Modernizr.cssanimations},i={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},a=i[Modernizr.prefixed("animation")],r=(document.getElementById("fxselect"),document.getElementById("component")),s=r.querySelector("ul.itemwrap").children,o=0,v=s.length,c=r.querySelector("nav"),d=c.querySelector(".next"),l=c.querySelector(".prev"),m=!1;e()}();	