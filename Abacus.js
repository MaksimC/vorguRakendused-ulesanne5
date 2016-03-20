/**
 * Created by emaktse on 20.03.2016.
 */

window.onload = function reverseAll(){
    var beads = document.getElementsByClassName("bead");
    for (var i = 0; i < beads.length; i++) {
        var style = getComputedStyle(beads[i], null);
        if (style.cssFloat=="right"){
            beads[i].style.cssFloat="left";
        }else {
            beads[i].style.cssFloat="right";
        }
    }
}
