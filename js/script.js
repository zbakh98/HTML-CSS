function myFunction(event) {
    var x = event.target;
    var z = x.parentElement.getElementsByTagName("div")[0];
    if (z.className === "desc") {
        show(z);
    } else {
        hide(z);
    }  
}

function show(x){
    var y = document.getElementsByClassName("show");
    var height = getHeight(x);
    if(y.length !== 0){
      hide(y[0]);
    }
    x.style.height=height;
    x.classList.add("show");

}

function hide(x){
    x.style.height = 0;
    x.classList.remove("show");
}

function getHeight (elem){
    elem.style.display = 'block';
		var height = elem.scrollHeight + 'px';
		return height;
}

function showTooltip(event){
       var mousePositionX = event.pageX;
       var mousePositionY = event.pageY;
       var x = event.target;
       
       $('.tooltiptext').css('left', mousePositionX);
       $('.tooltiptext').css('top', mousePositionY);
}

function etoile(a){
  var table = [4,3,5];
  var s = "";
  for( i=0;i<table[a];i++){        
    s+="<i class='fas fa-star'></i>"              
  }
  return s;
}