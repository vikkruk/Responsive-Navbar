"use strict";

let anchors = document.getElementsByTagName("a");
let burger = document.getElementById("burger");


burger.addEventListener("click", function(){
    for (const x of anchors) {
    x.classList.toggle("block");
}
this.classList.toggle("rotateZ");
});


for(let y of anchors){
    y.addEventListener("click", function(){
        for(var i = 0; i < anchors.length; i++){
            anchors[i].classList.remove("selected");
        }

        this.classList.add("selected");
        if(anchors[4].classList.contains("selected")) {
            anchors[4].classList.remove("selected");
        }
    });
}

