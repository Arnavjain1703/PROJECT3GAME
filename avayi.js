
var car = document.getElementById("player");

var e = document.querySelectorAll(".up");
var f = document.querySelectorAll(".down");



// code for upper movement of blocks


	window.addEventListener("keydown",checkKeyPress);
		function checkKeyPress(key)
		{

			if(key.keyCode=="39")
				{
					car.style.left = (car.offsetLeft += 5) + 'px';
				}
				if(key.keyCode=="37")

				{
					car.style.left = (car.offsetLeft -= 5) + 'px';
				}	
			if(key.keyCode=="40")
				{
					 car.style.top = (car.offsetTop += 5) + 'px';
				}
			if(key.keyCode=="38")
				{
					car.style.top = (car.offsetTop -= 5) + 'px';
				}		
         
                 
    
		}
            
var s = 1;            
setInterval(function(){
	for(var i=0;i<e.length;i++){
    var eLeftPos = e[i].offsetTop;
    var d=(eLeftPos + s)
    e[i].style.top =  d  + 'px';
    if(d>600)
    {
    	e[i].style.top= "0px";
    }
     // if(e.[i].offsetTop==car.offsetTop)
     //             {
     //             	alert("bhai tuch ho gaya");
     //             }
                    
}
}, 10);

//code foe lower movement of blocks

setInterval(function(){
	for(var i=0;i<f.length;i++){
    var posi = f[i].offsetTop;
    var d=(posi - s)
    f[i].style.top =  d  + 'px';
    if(d<0)
    {
    	f[i].style.top= "600px";
    }
}
}, 10);

