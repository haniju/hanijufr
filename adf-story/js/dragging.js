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
  	document.getElementById("dragOeuil").onmouseup = function() {
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
