//autre piste https://stackoverflow.com/questions/14142677/how-to-use-getelementsbyclassname-in-javascript-function
function dragDiv() {
var dragged = document.getElementsByClassName('draggable'),
i = dragged.lenght;
while(i--) {
  dragged[i].onmousedown = function(e1);
  dragged[i].onmousemove = function(e2);
  dragged[i].onmouseup = function(e3);
}
function(e1) {
this.prevX = e.clientX;
this.prevY = e.clientY;
this.mouseDown = true;
}
function(e2) {
if(this.mouseDown) {
this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
}
this.prevX = e.clientX;
this.prevY = e.clientY;
}
function(e3) {
this.mouseDown = false;
}
)}
}

//https://jsfiddle.net/6gq7u8Lc/
/*
    document.getElementById("dragOeuil").onmousedown = function(e) {
      this.prevX = e.clientX;
      this.prevY = e.clientY;
      this.mouseDown = true;
    }
    document.getElementById("dragOeuil").onmousemove = function(e) {
      if(this.mouseDown) {
        this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
        this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
      }
      this.prevX = e.clientX;
      this.prevY = e.clientY;
    }
    document.getElementById("dragOeuil").onmouseup = function(e) {
      this.mouseDown = false;
    }
    document.getElementById("dragOeuil").onmousedown = function(e) {
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  		this.mouseDown = true;
  	}
  	document.getElementById("dragOeuil").onmousemove = function(e) {
  		if(this.mouseDown) {
  			this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
  			this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
  		}
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  	}
  	document.getElementById("dragOeuil").onmouseup = function(e) {
  		this.mouseDown = false;
  	}

    document.getElementById("dragNez").onmousedown = function(e) {
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  		this.mouseDown = true;
  	}
  	document.getElementById("dragNez").onmousemove = function(e) {
  		if(this.mouseDown) {
  			this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
  			this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
  		}
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  	}
  	document.getElementById("dragNez").onmouseup = function() {
  		this.mouseDown = false;
  	}

    document.getElementById("dragBou").onmousedown = function(e) {
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  		this.mouseDown = true;
  	}
  	document.getElementById("dragBou").onmousemove = function(e) {
  		if(this.mouseDown) {
  			this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
  			this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
  		}
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  	}
  	document.getElementById("dragBou").onmouseup = function() {
  		this.mouseDown = false;
  	}

    document.getElementById("dragProt").onmousedown = function(e) {
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  		this.mouseDown = true;
  	}
  	document.getElementById("dragProt").onmousemove = function(e) {
  		if(this.mouseDown) {
  			this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
  			this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
  		}
  		this.prevX = e.clientX;
  		this.prevY = e.clientY;
  	}
  	document.getElementById("dragProt").onmouseup = function() {
  		this.mouseDown = false;
  	}
*/
