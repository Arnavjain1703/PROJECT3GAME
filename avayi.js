
var car = document.getElementById("player");

var e = document.querySelectorAll(".up");
var f = document.querySelectorAll(".down");



// code for upper movement of blocks

var s = 5;            
setInterval(function(){
	for(var i=0;i<e.length;i++){
    var eLeftPos = e[i].offsetTop;
    var d=(eLeftPos + s)
    e[i].style.top =  d  + 'px';
    if(d>600)
    {
    	e[i].style.top= "0px";
    }
     
                    
}
}, 100);

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
}, 100);

  



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

                
            
			    setInterval(function(){
			    	
				for(i=0;i<e.length;i++)
      			{		var x=car.offsetLeft;     /*cars left position*/                              
	  			        var t=car.offsetTop;     /*cars upper position*/
					    var y=e[i].offsetLeft;      /* obsticals left  position*/
					    var z=e[i].offsetTop;       /* obstical top side*/
				     var r=y+15;         /*right side of obstical*/   
				     var l=y-15;         /*left side of obstical*/
   				     var ot=z-25;         /*top side of obstical*/
				     var b=z+25;         /*bottom side of obstical*/
				     var bl=x-20;        /*balls left part*/
				     var br=x+20;        /*balls right part*/
				     var bt=t-20;        /*balls top part*/
				     var bb=t+20;        /* balls bottom part*/
                     if(((l<=x && x<=r)||(l<=bl && bl<=r)||(l<=br && br<=r))&&((ot<=bb && bb<=b)||(ot<=bt && bt<=b)||(ot<=t && t<=b)))
                     {   
                        car.style.background="blue";
                         
                     } 
                       
             }
         });            
			      setInterval(function(){
			    	
				for(i=0;i<f.length;i++)
      			{		var x=car.offsetLeft;     /*cars left position*/                              
	  			        var t=car.offsetTop;     /*cars upper position*/
					    var y=f[i].offsetLeft;      /* obsticals left  position*/
					    var z=f[i].offsetTop;       /* obstical top side*/
				     var r=y+15;         /*right side of obstical*/   
				     var l=y-15;         /*left side of obstical*/
   				     var ot=z-25;         /*top side of obstical*/
				     var b=z+25;         /*bottom side of obstical*/
				     var bl=x-20;        /*balls left part*/
				     var br=x+20;        /*balls right part*/
				     var bt=t-20;        /*balls top part*/
				     var bb=t+20;        /* balls bottom part*/
                     if(((l<=x && x<=r)||(l<=bl && bl<=r)||(l<=br && br<=r))&&((ot<=bb && bb<=b)||(ot<=bt && bt<=b)||(ot<=t && t<=b)))
                     {   
                        car.style.background="blue";
                         
                     } 
                       
             }
         });
            
// var s = 5;            
// setInterval(function(){
// 	for(var i=0;i<e.length;i++){
//     var eLeftPos = e[i].offsetTop;
//     var d=(eLeftPos + s)
//     e[i].style.top =  d  + 'px';
//     if(d>600)
//     {
//     	e[i].style.top= "0px";
//     }
//      // if(e.[i].offsetTop==car.offsetTop)
//      //             {
//      //             	alert("bhai tuch ho gaya");
//      //             }
                    
// }
// }, 10);

// //code foe lower movement of blocks

// setInterval(function(){
// 	for(var i=0;i<f.length;i++){
//     var posi = f[i].offsetTop;
//     var d=(posi - s)
//     f[i].style.top =  d  + 'px';
//     if(d<0)
//     {
//     	f[i].style.top= "600px";
//     }
// }
// }, 10);

